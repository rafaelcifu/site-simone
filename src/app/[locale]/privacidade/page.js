import { getPrivacidadeContent } from "@/content/privacidade";
import { getPageSeo } from "@/content/seo";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/atoms/json-ld";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/atoms/section";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return buildMetadata({ ...getPageSeo(locale).privacidade, locale });
}

export default async function PrivacidadePage({ params }) {
  const { locale } = await params;
  const pageData = getPrivacidadeContent(locale);
  const pageSeo = getPageSeo(locale);

  const pageGraph = graph(
    webPageSchema({ ...pageSeo.privacidade, type: "WebPage", locale }),
    breadcrumbSchema(
      [{ name: pageSeo.privacidade.title, path: "/privacidade" }],
      locale
    )
  );

  return (
    <div className="w-full bg-white pt-28 pb-20 md:pt-36 md:pb-28">
      <JsonLd data={pageGraph} />

      <Section padding="none">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header da Página */}
          <Reveal>
            <div className="mb-6 inline-flex items-center rounded-full border border-brand-red bg-white/60 px-4 py-1 backdrop-blur-xs">
              <span className="text-xs font-normal text-[#B22522]">
                {pageData.eyebrow}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
              {pageData.title}
            </h1>

            {pageData.description && (
              <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
                {pageData.description}
              </p>
            )}

            {pageData.lastUpdated && (
              <p className="mt-3 text-xs sm:text-sm text-neutral-400 font-medium">
                {pageData.lastUpdated}
              </p>
            )}
          </Reveal>

          {/* Divisória visual */}
          <div className="my-10 h-px w-full bg-neutral-200" />

          {/* Seções de Texto da Política */}
          <div className="flex flex-col gap-10">
            {pageData.sections?.map((section, index) => (
              <Reveal key={index} delay={0.05 * index}>
                <div className="rounded-2xl border border-neutral-200/70 bg-[#F9F9FB] p-6 sm:p-8 shadow-xs">
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 mb-4">
                    {section.title}
                  </h2>
                  <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
