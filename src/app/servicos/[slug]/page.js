import { notFound } from "next/navigation";
import { Check } from "lucide-react";

import { getServico, servicos } from "@/content/servicos";
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

/** Gera as paginas de servico no build (site 100% estatico). */
export function generateStaticParams() {
  return servicos.map((servico) => ({ slug: servico.slug }));
}

/** Params e assincrono no App Router — sempre com await. */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const servico = getServico(slug);

  if (!servico) return {};

  return buildMetadata({
    title: servico.title,
    description: servico.hero?.description || servico.excerpt,
    path: `/servicos/${servico.slug}`,
  });
}

export default async function ServicoPage({ params }) {
  const { slug } = await params;
  const servico = getServico(slug);

  if (!servico) notFound();

  const path = `/servicos/${servico.slug}`;
  const pageGraph = graph(
    webPageSchema({
      path,
      title: servico.title,
      description: servico.hero?.description || servico.excerpt,
    }),
    serviceSchema(servico),
    breadcrumbSchema([
      { name: "Servicos", path: "/servicos" },
      { name: servico.title, path },
    ])
  );

  return (
    <>
      <JsonLd data={pageGraph} />

      <Section padding="lg">
        <SectionHeading
          as="h1"
          eyebrow="Servico"
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
