import { getServicosContent } from "@/content/servicos";
import { getPageSeo } from "@/content/seo";
import { buildMetadata, localeUrl } from "@/lib/seo";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/atoms/json-ld";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CtaBand } from "@/components/sections/cta-band";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return buildMetadata({ ...getPageSeo(locale).servicos, locale });
}

export default async function ServicosPage({ params }) {
  const { locale } = await params;
  const { items: servicos } = getServicosContent(locale);
  const pageSeo = getPageSeo(locale);

  const pageGraph = graph(
    webPageSchema({ ...pageSeo.servicos, type: "CollectionPage", locale }),
    breadcrumbSchema([{ name: pageSeo.servicos.title, path: "/servicos" }], locale),
    {
      "@type": "ItemList",
      name: pageSeo.servicos.title,
      itemListElement: servicos.map((servico, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: servico.title,
        url: localeUrl(`/servicos/${servico.slug}`, locale),
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
