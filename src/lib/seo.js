import { siteByLocale } from "@/content/site";
import {
  DEFAULT_LOCALE,
  LOCALES,
  getLocaleInfo,
  getLocalizedHref,
} from "@/content/locales";
import { person } from "@/content/seo";

/**
 * Dominio raiz do site. Uma unica base para todos os idiomas — o que separa
 * um idioma do outro e o prefixo no caminho (/en, /es), nao a origem.
 */
const BASE_URL = siteByLocale[DEFAULT_LOCALE].url;

/** URL absoluta de um caminho, no idioma pedido. */
export function localeUrl(path = "/", locale = DEFAULT_LOCALE) {
  const href = getLocalizedHref(path, locale);
  return `${BASE_URL}${href === "/" ? "" : href}`;
}

/**
 * Mapa de hreflang da pagina: cada idioma apontando para a propria URL.
 *
 * Por que isso importa: sem hreflang o Google trata /en e /es como
 * concorrentes da versao pt e costuma indexar so uma. `x-default` diz qual
 * servir para quem nao casa com nenhum idioma da lista.
 */
function languageAlternates(path, alternatePaths) {
  const languages = {};
  for (const loc of LOCALES) {
    // `alternatePaths` cobre o caso do caminho mudar de idioma para idioma
    // (slug traduzido). Sem ele, assume o mesmo caminho nos tres.
    const localePath = alternatePaths?.[loc.code] ?? path;
    languages[loc.locale] = localeUrl(localePath, loc.code);
  }
  languages["x-default"] = localeUrl(
    alternatePaths?.[DEFAULT_LOCALE] ?? path,
    DEFAULT_LOCALE
  );
  return languages;
}

/**
 * Monta o objeto `metadata` de uma pagina, com canonical, hreflang, Open Graph
 * e Twitter Card ja preenchidos e consistentes.
 *
 * Sempre use este helper em vez de escrever `export const metadata = {}`
 * na mao. Assim nenhuma pagina sai sem canonical (causa comum de conteudo
 * duplicado) nem sem OG (link feio no WhatsApp e no LinkedIn).
 *
 *   export async function generateMetadata({ params }) {
 *     const { locale } = await params;
 *     return buildMetadata({ ...getPageSeo(locale).sobre, locale });
 *   }
 *
 * SEMPRE passe `locale`. Sem ele a pagina traduzida sai com canonical
 * apontando para a versao em portugues — que e o mesmo que pedir ao Google
 * para nao indexar a traducao.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  /** Codigo do idioma da pagina: "pt", "en", "es". */
  locale = DEFAULT_LOCALE,
  /**
   * So para rota com slug traduzido: { pt: "/servicos/x", en: "/servicos/y" }.
   * Sem isso o hreflang assume o mesmo caminho em todos os idiomas.
   */
  alternatePaths,
  /** true na home: usa o titulo exato, sem aplicar o template "| Simone Moura" */
  absoluteTitle = false,
  /**
   * Imagem de OG. O padrao aponta para a rota gerada por
   * src/app/opengraph-image.js.
   *
   * Por que definir explicitamente em vez de confiar na heranca: quando uma
   * pagina exporta o proprio objeto `openGraph`, o Next nao herda a imagem
   * do segmento pai — as rotas internas saem sem og:image e o link fica
   * feio no WhatsApp. Passar sempre resolve.
   */
  image = "/opengraph-image",
  /** "article" em posts; "profile" na pagina sobre. */
  type = "website",
  /** true em paginas que nao devem ser indexadas (obrigado, rascunhos). */
  noIndex = false,
  keywords,
}) {
  const localeInfo = getLocaleInfo(locale);
  const siteLocale = siteByLocale[localeInfo.code] ?? siteByLocale[DEFAULT_LOCALE];
  const url = localeUrl(path, localeInfo.code);
  const fullTitle = absoluteTitle ? title : `${title} | ${siteLocale.name}`;

  const openGraph = {
    type,
    locale: localeInfo.ogLocale,
    siteName: siteLocale.name,
    title: fullTitle,
    description,
    url,
  };

  if (image) {
    openGraph.images = [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: fullTitle,
      },
    ];
  }

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: languageAlternates(path, alternatePaths),
    },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(image ? { images: [image] } : {}),
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    authors: [{ name: person.name, url: BASE_URL }],
    creator: person.name,
    publisher: person.name,
  };
}

/**
 * URL absoluta a partir de um caminho relativo, sempre no dominio raiz.
 *
 * Usada pelo JSON-LD: os `@id` das entidades (Person, WebSite, o negocio)
 * precisam ser estaveis e unicos no site inteiro, entao NAO levam prefixo
 * de idioma. Para link de pagina traduzida use `localeUrl`.
 */
export function absoluteUrl(path = "/") {
  return `${BASE_URL}${path === "/" ? "" : path}`;
}
