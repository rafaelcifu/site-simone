import { getServicosContent } from "@/content/servicos";
import { pageSeo } from "@/content/seo";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/atoms/json-ld";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata = buildMetadata(pageSeo.servicos);

export default async function ServicosPage({ params }) {
  const { locale } = await params;
  const { items: servicos } = getServicosContent(locale);

  const pageGraph = graph(
    webPageSchema({ ...pageSeo.servicos, type: "CollectionPage" }),
    breadcrumbSchema([{ name: "Servicos", path: "/servicos" }]),
    {
      "@type": "ItemList",
      name: pageSeo.servicos.title,
      itemListElement: servicos.map((servico, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: servico.title,
        url: absoluteUrl(`/servicos/${servico.slug}`),
      })),
    }
  );

  return (
    <>
      <JsonLd data={pageGraph} />
      <ServicesGrid tone="default" headingAs="h1" data={{ items: servicos, page: getServicosContent(locale).page }} />
      <CtaBand />
    </>
  );
}
