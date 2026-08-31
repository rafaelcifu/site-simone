import { servicosByLocale } from "@/content/servicos";
import { DEFAULT_LOCALE, LOCALES } from "@/content/locales";
import { localeUrl } from "@/lib/seo";

/**
 * Sitemap gerado no build.
 *
 * ROTA NOVA = ADICIONAR AQUI. Rota fora do sitemap demora muito mais
 * para ser indexada.
 *
 * Cada rota entra uma vez POR IDIOMA, e cada entrada carrega o bloco
 * `alternates.languages` com as irmas traduzidas. E assim que o Google
 * entende que /sobre, /en/sobre e /es/sobre sao a mesma pagina em idiomas
 * diferentes, em vez de tres concorrentes.
 *
 * `priority` e relativo dentro do proprio site (nao e nota de qualidade):
 * home 1.0, paginas principais 0.8, paginas de detalhe 0.7.
 */

/** Rotas fixas, com o caminho em portugues (o prefixo de idioma vem depois). */
const paginas = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/sobre", priority: 0.8, changeFrequency: "yearly" },
  { path: "/servicos", priority: 0.9, changeFrequency: "monthly" },
  { path: "/metodologias", priority: 0.8, changeFrequency: "yearly" },
  { path: "/contato", priority: 0.7, changeFrequency: "yearly" },
  { path: "/privacidade", priority: 0.5, changeFrequency: "yearly" },
];

/** Mapa hreflang de um caminho fixo: cada idioma apontando para a propria URL. */
function alternates(path) {
  const languages = {};
  for (const loc of LOCALES) {
    languages[loc.locale] = localeUrl(path, loc.code);
  }
  languages["x-default"] = localeUrl(path, DEFAULT_LOCALE);
  return { languages };
}

/**
 * Mapa hreflang de um servico. Casa as traducoes pelo `id`, nao pelo slug:
 * hoje os slugs sao iguais nos tres idiomas, mas no dia em que "servico-um"
 * virar "service-one" no ingles, o hreflang continua apontando certo.
 */
function alternatesServico(id) {
  const languages = {};
  for (const loc of LOCALES) {
    const irmao = (servicosByLocale[loc.code] ?? []).find((s) => s.id === id);
    if (!irmao) continue;
    languages[loc.locale] = localeUrl(`/servicos/${irmao.slug}`, loc.code);
  }

  const padrao = (servicosByLocale[DEFAULT_LOCALE] ?? []).find(
    (s) => s.id === id
  );
  if (padrao) {
    languages["x-default"] = localeUrl(
      `/servicos/${padrao.slug}`,
      DEFAULT_LOCALE
    );
  }

  return { languages };
}

export default function sitemap() {
  const now = new Date();
  const entradas = [];

  for (const loc of LOCALES) {
    for (const p of paginas) {
      entradas.push({
        url: localeUrl(p.path, loc.code),
        lastModified: now,
        changeFrequency: p.changeFrequency,
        priority: p.priority,
        alternates: alternates(p.path),
      });
    }

    // Os slugs podem mudar de um idioma para o outro, entao le a lista
    // do proprio idioma em vez de reaproveitar a portuguesa.
    for (const servico of servicosByLocale[loc.code] ?? []) {
      const path = `/servicos/${servico.slug}`;
      entradas.push({
        url: localeUrl(path, loc.code),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: alternatesServico(servico.id),
      });
    }
  }

  return entradas;
}
