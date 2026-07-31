import { site } from "@/content/site";
import { person } from "@/content/seo";

/**
 * Monta o objeto `metadata` de uma pagina, com canonical, Open Graph e
 * Twitter Card ja preenchidos e consistentes.
 *
 * Sempre use este helper em vez de escrever `export const metadata = {}`
 * na mao. Assim nenhuma pagina sai sem canonical (causa comum de conteudo
 * duplicado) nem sem OG (link feio no WhatsApp e no LinkedIn).
 *
 *   export const metadata = buildMetadata(pageSeo.sobre);
 *
 * Para uma pagina dinamica:
 *   return buildMetadata({ title, description, path: `/servicos/${slug}` });
 */
export function buildMetadata({
  title,
  description,
  path = "/",
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
  const url = `${site.url}${path === "/" ? "" : path}`;

  const openGraph = {
    type,
    locale: site.ogLocale,
    siteName: site.name,
    title: absoluteTitle ? title : `${title} | ${site.name}`,
    description,
    url,
  };

  if (image) {
    openGraph.images = [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: absoluteTitle ? title : `${title} | ${site.name}`,
      },
    ];
  }

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle ? title : `${title} | ${site.name}`,
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
    authors: [{ name: person.name, url: site.url }],
    creator: person.name,
    publisher: person.name,
  };
}

/** URL absoluta a partir de um caminho relativo. */
export function absoluteUrl(path = "/") {
  return `${site.url}${path === "/" ? "" : path}`;
}
