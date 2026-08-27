import { getMetodologiasContent } from "@/content/metodologias";
import { getPageSeo } from "@/content/seo";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/atoms/json-ld";
import { MethodologyHero } from "@/components/sections/methodology-hero";
import { MethodologyDiagram } from "@/components/sections/methodology-diagram";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return buildMetadata({ ...getPageSeo(locale).metodologias, locale });
}

export default async function MetodologiasPage({ params }) {
  const { locale } = await params;
  const { hero, diagram } = getMetodologiasContent(locale);
  const pageSeo = getPageSeo(locale);

  const pageGraph = graph(
    webPageSchema({ ...pageSeo.metodologias, locale }),
    breadcrumbSchema(
      [{ name: pageSeo.metodologias.title, path: "/metodologias" }],
      locale
    )
  );

  return (
    <>
      <JsonLd data={pageGraph} />
      <MethodologyHero data={hero} />
      <MethodologyDiagram data={diagram} />
    </>
  );
}
