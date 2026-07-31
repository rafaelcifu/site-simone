import { Inter } from "next/font/google";

import { site } from "@/content/site";
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

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    title: site.name,
    description: site.description,
    url: site.url,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${body.variable} ${display.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
