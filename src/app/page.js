import { faq } from "@/content/home";
import { pageSeo } from "@/content/seo";
import { buildMetadata } from "@/lib/seo";
import { faqSchema, graph, webPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/atoms/json-ld";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata = buildMetadata({ ...pageSeo.home, absoluteTitle: true });

/**
 * Home. Pagina = montagem de secoes, nada de markup solto aqui.
 * Reordenar/remover secao = mexer so nesta lista.
 *
 * O FAQPage no JSON-LD so e valido porque a secao <Faq /> esta visivel
 * na pagina. Se ela sair, tire o faqSchema junto.
 */
export default function HomePage() {
  const pageGraph = graph(
    webPageSchema({ ...pageSeo.home, type: "WebPage" }),
    faq.length ? faqSchema(faq) : null
  );

  return (
    <>
      <JsonLd data={pageGraph} />
      <Hero />
      <Stats />
      <ServicesGrid limit={3} />
      <Testimonials />
      <Faq />
      <CtaBand />
    </>
  );
}
