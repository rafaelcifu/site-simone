import { getSobreContent } from "@/content/sobre";
import { getPageSeo } from "@/content/seo";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/atoms/json-ld";
import { AboutHero } from "@/components/sections/about-hero";
import { AboutAcademic } from "@/components/sections/about-academic";
import { AboutTimeline } from "@/components/sections/about-timeline";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return buildMetadata({
    ...getPageSeo(locale).sobre,
    locale,
    type: "profile",
  });
}

export default async function SobrePage({ params }) {
  const { locale } = await params;
  const content = getSobreContent(locale);
  const pageSeo = getPageSeo(locale);

  const pageGraph = graph(
    // AboutPage sinaliza ao Google que esta é a página biográfica da entidade.
    webPageSchema({ ...pageSeo.sobre, type: "AboutPage", locale }),
    breadcrumbSchema([{ name: pageSeo.sobre.title, path: "/sobre" }], locale)
  );

  return (
    <>
      <JsonLd data={pageGraph} />
      <AboutHero data={content.hero} />
      <AboutAcademic data={content.academic} />
      <AboutTimeline data={content.timeline} />
    </>
  );
}
