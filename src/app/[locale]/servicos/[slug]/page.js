import { notFound } from "next/navigation";
import { Check } from "lucide-react";

import { getServico, servicosByLocale, getServicosContent } from "@/content/servicos";
import { getPageSeo } from "@/content/seo";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbSchema,
  graph,
  serviceSchema,
  webPageSchema,
} from "@/lib/schema";
import { JsonLd } from "@/components/atoms/json-ld";
import { Section } from "@/components/atoms/section";
import { SectionHeading } from "@/components/atoms/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { CtaBand } from "@/components/sections/cta-band";

/** Slug fora de /content nao e gerado em runtime: retorna 404. */
export const dynamicParams = false;

/** Gera as paginas de servico no build (site 100% estatico). */
export function generateStaticParams() {
  const params = [];
  for (const locale of Object.keys(servicosByLocale)) {
    for (const servico of servicosByLocale[locale]) {
      params.push({ locale, slug: servico.slug });
    }
  }
  return params;
}

/** Params e assincrono no App Router — sempre com await. */
export async function generateMetadata({ params }) {
  const { slug, locale } = await params;
  const servico = getServico(slug, locale);

  if (!servico) return {};

  // Mapa de slug por idioma, casado pelo `id` — o slug pode ser traduzido.
  const alternatePaths = {};
  for (const code of Object.keys(servicosByLocale)) {
    const irmao = servicosByLocale[code].find((s) => s.id === servico.id);
    if (irmao) alternatePaths[code] = `/servicos/${irmao.slug}`;
  }

  return buildMetadata({
    title: servico.title,
    description: servico.hero?.description || servico.excerpt,
    path: `/servicos/${servico.slug}`,
    locale,
    alternatePaths,
  });
}

export default async function ServicoPage({ params }) {
  const { slug, locale } = await params;
  const servico = getServico(slug, locale);
  const { ui: servicosUi } = getServicosContent(locale);

  if (!servico) notFound();

  const path = `/servicos/${servico.slug}`;
  const pageGraph = graph(
    webPageSchema({
      path,
      title: servico.title,
      description: servico.hero?.description || servico.excerpt,
      locale,
    }),
    serviceSchema(servico, locale),
    breadcrumbSchema(
      [
        { name: getPageSeo(locale).servicos.title, path: "/servicos" },
        { name: servico.title, path },
      ],
      locale
    )
  );

  return (
    <>
      <JsonLd data={pageGraph} />

      <Section padding="lg">
        <SectionHeading
          as="h1"
          eyebrow={servicosUi.detailEyebrow}
          title={servico.hero.title}
          description={servico.hero.description}
        />
      </Section>

      <Section tone="muted" padding="base">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-10">
            {servico.sections.map((block) => (
              <Reveal key={block.title} className="space-y-3">
                <h2 className="font-display text-xl font-semibold">
                  {block.title}
                </h2>
                <p className="text-pretty text-muted-foreground">{block.body}</p>
              </Reveal>
            ))}
          </div>

          <Stagger as="ul" className="space-y-3">
            {servico.highlights.map((item) => (
              <StaggerItem as="li" key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span className="text-sm">{item}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
