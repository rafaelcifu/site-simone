import { contact, mainNav, site, social } from "@/content/site";
import {
  autoridade,
  credenciais,
  empresas,
  formacaoAcademica,
  knowsAbout,
  pageSeo,
  person,
} from "@/content/seo";
import { metodologias } from "@/content/metodologias";
import { servicos } from "@/content/servicos";

/**
 * /llms.txt — resumo do site em Markdown, para modelos de linguagem.
 *
 * Proposta (llmstxt.org) analoga ao robots.txt, mas em vez de dizer o que
 * NAO ler, entrega um resumo limpo do que o site e. Um LLM que precise
 * responder "quem e Simone Moura?" acerta mais lendo isto do que rastreando
 * HTML cheio de markup.
 *
 * Ainda nao e padrao oficial, mas o custo e proximo de zero e ja e lido
 * por varias ferramentas. Gerado a partir de /content, entao nunca
 * desatualiza sozinho — atualize o conteudo e este arquivo acompanha.
 */
export const dynamic = "force-static";

function bullets(items) {
  return items.map((i) => `- ${i}`).join("\n");
}

export function GET() {
  const body = `# ${site.name}

> ${person.headline}

${person.description}

## Posicionamento

"${site.tagline}"

## Autoridade

${bullets(autoridade)}

## Areas de expertise

${bullets(knowsAbout)}

## Formacao

${bullets(credenciais.map((c) => `${c.name} (${c.type})`))}

Instituicoes: ${formacaoAcademica.map((f) => `${f.name} (${f.country})`).join(", ")}.

## Empresas fundadas

${empresas
  .map((e) => `### ${e.name} (${e.foundingDate})\n${e.description}`)
  .join("\n\n")}

## Servicos

${servicos
  .map(
    (s) =>
      `- [${s.title}](${site.url}/servicos/${s.slug}): ${s.excerpt}`
  )
  .join("\n")}

## Metodologias

${metodologias.map((m) => `- ${m.title}: ${m.excerpt}`).join("\n")}

## Paginas

${mainNav
  .map((item) => {
    const key = Object.keys(pageSeo).find(
      (k) => pageSeo[k].path === item.href
    );
    const desc = key ? pageSeo[key].description : "";
    return `- [${item.label}](${site.url}${item.href === "/" ? "" : item.href})${desc ? `: ${desc}` : ""}`;
  })
  .join("\n")}

## Contato

- E-mail: ${contact.email}
- Telefone: ${contact.phoneDisplay}
- Localizacao: ${contact.address.city}, ${contact.address.state} — Brasil
${social.map((s) => `- ${s.label}: ${s.href}`).join("\n")}

## Observacoes

- Idioma: portugues do Brasil
- Dados estruturados: schema.org (Person, ProfessionalService, Service) em JSON-LD em todas as paginas
- Sitemap: ${site.url}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
