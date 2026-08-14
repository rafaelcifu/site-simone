import { Inter, DM_Sans } from "next/font/google";

import { getSiteContent, site } from "@/content/site";
import { getLocaleInfo } from "@/content/locales";
import { getPageSeo, person } from "@/content/seo";
import { servicos } from "@/content/servicos";
import {
  businessSchema,
  graph,
  personSchema,
  websiteSchema,
} from "@/lib/schema";
import { JsonLd } from "@/components/atoms/json-ld";
import { Header } from "@/components/organisms/header";
import { Footer } from "@/components/organisms/footer";
import "../globals.css";

/**
 * Fontes globais importadas do Figma (Design System).
 * `variable` alimenta --font-body / --font-display em globals.css.
 */
const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const display = DM_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Metadata raiz, no idioma do segmento. Cada pagina sobrescreve
 * title/description/canonical usando `buildMetadata` (src/lib/seo.js) —
 * nao repita esses campos la.
 *
 * Nao defina `alternates` aqui: canonical e hreflang sao por pagina, e um
 * canonical herdado do layout aponta a pagina errada quando a rota nao
 * sobrescreve.
 */
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { site: siteLocale } = getSiteContent(locale);
  const localeInfo = getLocaleInfo(locale);
  const homeSeo = getPageSeo(locale).home;

  return {
    metadataBase: new URL(site.url),
    title: {
      default: homeSeo.title,
      template: `%s | ${siteLocale.name}`,
    },
    description: siteLocale.description,
    applicationName: siteLocale.name,
    authors: [{ name: person.name, url: site.url }],
    creator: person.name,
    publisher: person.name,
    category: "business",
    formatDetection: { telephone: true, email: true, address: true },
    openGraph: {
      type: "website",
      locale: localeInfo.ogLocale,
      siteName: siteLocale.name,
      title: homeSeo.title,
      description: siteLocale.description,
    },
    twitter: {
      card: "summary_large_image",
      title: siteLocale.name,
      description: siteLocale.description,
    },
    robots: {
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
    // Preencher quando as contas estiverem criadas:
    // verification: { google: "...", other: { "facebook-domain-verification": "..." } },
  };
}

export const viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const { siteUi } = getSiteContent(locale);
  const localeInfo = getLocaleInfo(locale);


  // Grafo global: pessoa + entidade comercial + site.
  // Vai em TODAS as paginas. O schema especifico de cada pagina
  // (WebPage, BreadcrumbList, Service) e adicionado na propria pagina.
  const siteGraph = graph(
    personSchema(),
    businessSchema({ servicos }),
    websiteSchema()
  );

  return (
    <html
      // lang completo (pt-BR, en-US, es-ES): leitor de tela escolhe a voz por ele.
      lang={localeInfo.locale}
      className={`${body.variable} ${display.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <JsonLd data={siteGraph} />
      </head>
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        {/* Acessibilidade e SEO: primeiro elemento focavel pula a navegacao. */}
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          {siteUi.accessibility.skipToContent}
        </a>

        <Header />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
