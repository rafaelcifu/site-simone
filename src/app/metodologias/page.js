import { etapas, metodologias, metodologiasPage } from "@/content/metodologias";
import { pageSeo } from "@/content/seo";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/atoms/json-ld";
import { Section } from "@/components/atoms/section";
import { SectionHeading } from "@/components/atoms/section-heading";
import { Icon } from "@/components/atoms/icon";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata = buildMetadata(pageSeo.metodologias);

export default function MetodologiasPage() {
  const pageGraph = graph(
    webPageSchema(pageSeo.metodologias),
    breadcrumbSchema([{ name: "Metodologias", path: "/metodologias" }])
  );

  return (
    <>
      <JsonLd data={pageGraph} />

      <Section padding="lg">
        <SectionHeading
          as="h1"
          eyebrow={metodologiasPage.eyebrow}
          title={metodologiasPage.title}
          description={metodologiasPage.description}
        />

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
          {metodologias.map((item) => (
            <StaggerItem key={item.slug} className="h-full">
              <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <CardHeader className="gap-3">
                  <span className="flex size-11 items-center justify-center rounded-lg bg-secondary">
                    <Icon name={item.icon} />
                  </span>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm font-medium">{item.excerpt}</p>
                  <p className="text-sm text-pretty text-muted-foreground">
                    {item.body}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Processo" title="Passo a passo" />

        <Stagger as="ol" className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {etapas.map((item) => (
            <StaggerItem as="li" key={item.step} className="flex flex-col gap-2">
              <span className="font-display text-3xl font-semibold text-muted-foreground/50 tabular-nums">
                {item.step}
              </span>
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CtaBand />
    </>
  );
}
