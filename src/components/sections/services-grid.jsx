import { servicos, servicosPage } from "@/content/servicos";
import { Section } from "@/components/atoms/section";
import { SectionHeading } from "@/components/atoms/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { ServiceCard } from "@/components/molecules/service-card";

/** Grid de servicos em cascata. Usado na home e em /servicos. */
export function ServicesGrid({ tone = "muted", limit }) {
  const items = limit ? servicos.slice(0, limit) : servicos;

  return (
    <Section id="servicos" tone={tone}>
      <SectionHeading
        eyebrow={servicosPage.eyebrow}
        title={servicosPage.title}
        description={servicosPage.description}
      />

      <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((servico) => (
          <StaggerItem key={servico.slug} className="h-full">
            <ServiceCard {...servico} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
