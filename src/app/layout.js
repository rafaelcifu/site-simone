import { Inter } from "next/font/google";

import { site } from "@/content/site";
import { person } from "@/content/seo";
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
import "./globals.css";

/**
 * Fontes. Trocar pelas do Figma quando o layout for importado.
 * `variable` alimenta --font-body / --font-display em globals.css.
 * Sempre via next/font — nunca <link> para Google Fonts (bloqueia render).
 */
const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const display = Inter({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Metadata raiz. Cada pagina sobrescreve title/description/canonical
 * usando `buildMetadata` (src/lib/seo.js) — nao repita esses campos la.
 */
export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Branding Estrategico e Neurociencia do Consumo`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: person.name, url: site.url }],
  creator: person.name,
  publisher: person.name,
  category: "business",
  formatDetection: { telephone: true, email: true, address: true },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: site.ogLocale,
    siteName: site.name,
    title: `${site.name} | Branding Estrategico e Neurociencia do Consumo`,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
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

export const viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
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
      lang="pt-BR"
      className={`${body.variable} ${display.variable} h-full antialiased`}
    >
      <head>
        <JsonLd data={siteGraph} />
      </head>
      <body className="flex min-h-full flex-col">
        {/* Acessibilidade e SEO: primeiro elemento focavel pula a navegacao. */}
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Pular para o conteudo
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
