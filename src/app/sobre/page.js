import { bio, formacoes, sobrePage, valores } from "@/content/sobre";
import { Section } from "@/components/atoms/section";
import { SectionHeading } from "@/components/atoms/section-heading";
import { Icon } from "@/components/atoms/icon";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata = {
  title: "Sobre",
  description: sobrePage.description,
};

export default function SobrePage() {
  return (
    <>
      <Section padding="lg">
        <SectionHeading
          as="h1"
          eyebrow={sobrePage.eyebrow}
          title={sobrePage.title}
          description={sobrePage.description}
        />

        <Reveal className="mt-10 max-w-3xl space-y-5 text-muted-foreground">
          {bio.paragraphs.map((p, i) => (
            <p key={i} className="text-pretty">
              {p}
            </p>
          ))}
        </Reveal>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Valores" title="No que eu acredito" />
        <Stagger className="mt-10 grid gap-8 sm:grid-cols-3">
          {valores.map((item) => (
            <StaggerItem key={item.title} className="flex flex-col gap-3">
              <span className="flex size-11 items-center justify-center rounded-lg bg-background">
                <Icon name={item.icon} />
              </span>
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section>
        <SectionHeading eyebrow="Trajetoria" title="Formacao" />
        <Stagger as="ul" className="mt-10 max-w-2xl divide-y">
          {formacoes.map((item) => (
            <StaggerItem
              as="li"
              key={`${item.year}-${item.title}`}
              className="flex gap-6 py-5"
            >
              <span className="w-16 shrink-0 text-sm text-muted-foreground tabular-nums">
                {item.year}
              </span>
              <span>
                <span className="block font-medium">{item.title}</span>
                <span className="block text-sm text-muted-foreground">
                  {item.institution}
                </span>
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CtaBand />
    </>
  );
}
