#!/usr/bin/env node
/**
 * Auditoria de SEO do build.
 *
 * Por que isso existe: regra escrita em documentacao e conselho — um agente
 * (ou um humano com pressa) pode ignorar e o build passa mesmo assim.
 * Este script transforma as regras de docs/seo.md em erro de terminal.
 *
 * Uso:
 *   npm run build && npm run seo
 *   npm run verify          # lint + build + seo, tudo de uma vez
 *
 * Le o HTML ja renderizado em .next/server/app. Se a Vercel/Next mudarem
 * esse caminho, o script avisa em vez de passar silenciosamente.
 */

import { existsSync, globSync, readFileSync } from "node:fs";
import { join } from "node:path";

const APP_DIR = ".next/server/app";

/** Campos minimos por tipo de schema. Ausencia = rich result perdido. */
const CAMPOS_OBRIGATORIOS = {
  Person: ["name", "url", "description", "knowsAbout", "sameAs", "@id"],
  ProfessionalService: ["name", "url", "address", "areaServed", "@id"],
  WebSite: ["url", "name", "publisher", "@id"],
  WebPage: ["url", "name", "description", "isPartOf", "@id"],
  AboutPage: ["url", "name", "description", "isPartOf", "@id"],
  ContactPage: ["url", "name", "description", "isPartOf", "@id"],
  CollectionPage: ["url", "name", "description", "isPartOf", "@id"],
  BreadcrumbList: ["itemListElement"],
  Service: ["name", "provider", "url"],
  FAQPage: ["mainEntity"],
  ItemList: ["itemListElement"],
};

/** Tags que precisam existir exatamente uma vez em cada pagina. */
const TAGS_UNICAS = [
  ["canonical", /<link rel="canonical"/g],
  ["<h1>", /<h1[ >]/g],
  ["meta description", /<meta name="description"/g],
  ["og:title", /<meta property="og:title"/g],
  ["og:description", /<meta property="og:description"/g],
  ["og:image", /<meta property="og:image"/g],
  ["og:url", /<meta property="og:url"/g],
  ["twitter:card", /<meta name="twitter:card"/g],
];

/** Paginas internas do Next que nao sao rotas do site. */
const IGNORAR = ["_global-error", "_not-found"];

const erros = [];
const avisos = [];

function erro(pagina, msg) {
  erros.push(`${pagina}: ${msg}`);
}
function aviso(pagina, msg) {
  avisos.push(`${pagina}: ${msg}`);
}

// ---------------------------------------------------------------------------

if (!existsSync(APP_DIR)) {
  console.error(
    `\n  Nao achei ${APP_DIR}.\n  Rode "npm run build" antes de "npm run seo".\n`
  );
  process.exit(1);
}

const arquivos = globSync(`${APP_DIR}/**/*.html`).filter(
  (f) => !IGNORAR.some((i) => f.includes(i))
);

if (arquivos.length === 0) {
  console.error(`\n  Nenhum HTML em ${APP_DIR}. O build gerou alguma coisa?\n`);
  process.exit(1);
}

/** Converte caminho de arquivo em rota. */
function rotaDe(arquivo) {
  const r = arquivo
    .replace(`${APP_DIR}/`, "")
    .replace(/\.html$/, "")
    .replace(/^index$/, "");
  return `/${r}`.replace(/\/$/, "") || "/";
}

const idsGlobais = new Map();
const rotasEncontradas = [];

for (const arquivo of arquivos) {
  const rota = rotaDe(arquivo);
  rotasEncontradas.push(rota);
  const html = readFileSync(arquivo, "utf-8");

  // --- 1. Tags unicas -------------------------------------------------------
  for (const [nome, regex] of TAGS_UNICAS) {
    const qtd = (html.match(regex) || []).length;
    if (qtd === 0) erro(rota, `sem ${nome}`);
    else if (qtd > 1) erro(rota, `${nome} aparece ${qtd}x (deve ser 1)`);
  }

  // --- 2. Hierarquia de heading --------------------------------------------
  // Pular nivel (h1 -> h3) confunde leitor de tela e crawler.
  const niveis = [...html.matchAll(/<h([1-6])[ >]/g)].map((m) => Number(m[1]));
  for (let i = 1; i < niveis.length; i++) {
    if (niveis[i] - niveis[i - 1] > 1) {
      aviso(rota, `heading pula de h${niveis[i - 1]} para h${niveis[i]}`);
      break;
    }
  }

  // --- 3. Imagens sem alt ---------------------------------------------------
  const imgsSemAlt = (html.match(/<img(?![^>]*\salt=)[^>]*>/g) || []).length;
  if (imgsSemAlt > 0) erro(rota, `${imgsSemAlt} <img> sem atributo alt`);

  // --- 4. JSON-LD -----------------------------------------------------------
  const blocos = [
    ...html.matchAll(
      /<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs
    ),
  ];

  if (blocos.length === 0) {
    erro(rota, "sem JSON-LD");
    continue;
  }

  const nos = [];
  for (const [, bruto] of blocos) {
    let dados;
    try {
      dados = JSON.parse(bruto.replace(/\\u003c/g, "<"));
    } catch {
      erro(rota, "JSON-LD invalido (nao faz parse)");
      continue;
    }
    if (dados["@context"] !== "https://schema.org") {
      erro(rota, '@context diferente de "https://schema.org"');
    }
    nos.push(...(dados["@graph"] ?? [dados]));
  }

  const tipos = nos.map((n) => n["@type"]);

  // Toda pagina precisa do grafo global + identidade da propria pagina.
  for (const obrigatorio of ["Person", "ProfessionalService", "WebSite"]) {
    if (!tipos.includes(obrigatorio)) {
      erro(rota, `JSON-LD sem ${obrigatorio} (grafo global do layout sumiu?)`);
    }
  }
  const temWebPage = tipos.some((t) => String(t).endsWith("Page"));
  if (!temWebPage) erro(rota, "JSON-LD sem WebPage/AboutPage/ContactPage");

  // Breadcrumb em toda pagina que nao seja a home.
  if (rota !== "/" && !tipos.includes("BreadcrumbList")) {
    erro(rota, "sem BreadcrumbList (obrigatorio fora da home)");
  }

  // --- 5. Campos obrigatorios de cada schema -------------------------------
  for (const no of nos) {
    const tipo = no["@type"];
    for (const campo of CAMPOS_OBRIGATORIOS[tipo] ?? []) {
      if (!(campo in no)) erro(rota, `${tipo} sem "${campo}"`);
    }
    // String vazia em schema e pior que campo ausente.
    for (const [k, v] of Object.entries(no)) {
      if (v === "" || (Array.isArray(v) && v.length === 0)) {
        aviso(rota, `${tipo}.${k} esta vazio — remova em vez de mandar vazio`);
      }
    }
    if (no["@id"]) {
      const anterior = idsGlobais.get(no["@id"]);
      if (anterior && anterior !== tipo) {
        erro(
          rota,
          `@id ${no["@id"]} usado como ${anterior} e como ${tipo} — @id deve ser estavel`
        );
      }
      idsGlobais.set(no["@id"], tipo);
    }
  }

  // --- 6. FAQPage so com FAQ visivel ---------------------------------------
  // Declarar FAQ sem FAQ na tela viola as diretrizes do Google e derruba
  // os rich results do site inteiro.
  if (tipos.includes("FAQPage")) {
    const faq = nos.find((n) => n["@type"] === "FAQPage");
    for (const q of faq.mainEntity ?? []) {
      const pergunta = q.name?.slice(0, 30);
      if (pergunta && !html.includes(pergunta)) {
        erro(
          rota,
          `FAQPage declara "${pergunta}..." mas o texto nao esta visivel na pagina`
        );
      }
    }
  }

  // --- 7. Canonical coerente com a rota ------------------------------------
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (canonical) {
    const caminho = canonical.replace(/^https?:\/\/[^/]+/, "") || "/";
    if (caminho !== rota) {
      erro(rota, `canonical aponta para ${caminho}`);
    }
  }
}

// --- 8. Cobertura do sitemap ------------------------------------------------
const sitemapPath = join(APP_DIR, "sitemap.xml.body");
if (existsSync(sitemapPath)) {
  const sitemap = readFileSync(sitemapPath, "utf-8");
  for (const rota of rotasEncontradas) {
    const alvo = rota === "/" ? "</loc>" : `${rota}</loc>`;
    if (!sitemap.includes(alvo)) {
      erro(rota, "nao esta no sitemap.xml (adicione em app/sitemap.js)");
    }
  }
} else {
  erro("sitemap", "sitemap.xml nao foi gerado");
}

// --- 9. Arquivos de descoberta ----------------------------------------------
for (const [nome, arquivo] of [
  ["robots.txt", "robots.txt.body"],
  ["llms.txt", "llms.txt.body"],
  ["manifest", "manifest.webmanifest.body"],
  ["opengraph-image", "opengraph-image.body"],
]) {
  if (!existsSync(join(APP_DIR, arquivo))) {
    erro("build", `${nome} nao foi gerado`);
  }
}

// --- Relatorio --------------------------------------------------------------
console.log(`\n  SEO check — ${rotasEncontradas.length} paginas\n`);

if (avisos.length) {
  console.log("  Avisos:");
  for (const a of avisos) console.log(`    · ${a}`);
  console.log("");
}

if (erros.length) {
  console.log("  Erros:");
  for (const e of erros) console.log(`    x ${e}`);
  console.log(
    `\n  ${erros.length} erro(s). Veja docs/seo.md para a regra de cada um.\n`
  );
  process.exit(1);
}

console.log(`  Tudo certo.${avisos.length ? ` (${avisos.length} aviso[s])` : ""}\n`);
