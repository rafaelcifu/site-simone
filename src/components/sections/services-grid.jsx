import { Section } from "@/components/atoms/section";
import { SectionHeading } from "@/components/atoms/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { ServiceCard } from "@/components/molecules/service-card";

/**
 * Grid de servicos em cascata. Usado na home e em /servicos.
 *
 * `headingAs`: na home o titulo e um <h2> (o <h1> e o do hero);
 * em /servicos ele E o titulo da pagina, entao vira <h1>.
 * Uma pagina sem <h1> — ou com dois — confunde crawler e leitor de tela.
 */
export function ServicesGrid({ tone = "muted", limit, headingAs = "h2", data }) {
  const { items, page } = data;
  const displayItems = limit ? items.slice(0, limit) : items;

  return (
    <Section id="servicos" tone={tone}>
      <SectionHeading
        as={headingAs}
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      />

      <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayItems.map((servico) => (
          <StaggerItem key={servico.slug} className="h-full">
            <ServiceCard {...servico} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
