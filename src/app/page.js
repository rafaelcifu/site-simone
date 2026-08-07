import { getHomeContent } from "@/content/home";
import { pageSeo } from "@/content/seo";
import { buildMetadata } from "@/lib/seo";
import { graph, webPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/atoms/json-ld";
import { Hero } from "@/components/sections/hero";
import { ManifestoCard } from "@/components/sections/manifesto-card";
import { AboutTwoCards } from "@/components/sections/about-two-cards";
import { StatsSection } from "@/components/sections/stats-section";
import { Cases } from "@/components/sections/cases";
import { Products } from "@/components/sections/products";
import { ClientLogosGrid } from "@/components/sections/client-logos-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata = buildMetadata({ ...pageSeo.home, absoluteTitle: true });

export default function HomePage() {
  const content = getHomeContent("pt");
  const pageGraph = graph(webPageSchema({ ...pageSeo.home, type: "WebPage" }));

  return (
    <>
      <JsonLd data={pageGraph} />
      <Hero data={content.hero} />
      <ManifestoCard data={content.manifesto} />
      <AboutTwoCards data={content.aboutSection} />
      <StatsSection data={content.statsSection} />
      <Cases data={content.cases} />
      <Products data={content.products} />
      <ClientLogosGrid />
      <Testimonials data={content.testimonials} />
      <FinalCta data={content.finalCta} />
    </>
  );
}
