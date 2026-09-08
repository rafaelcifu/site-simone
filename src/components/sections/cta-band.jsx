import { getSiteContent } from "@/content/site";
import { Section } from "@/components/atoms/section";
import { LeadsterLink } from "@/components/molecules/leadster-link";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

/** Faixa de conversao. Repetida no fim das paginas internas. */
export function CtaBand({
  locale,
  title,
  description,
  cta,
}) {
  const { siteUi, primaryCta } = getSiteContent(locale);
  const resolvedTitle = title ?? siteUi.ctaBand.title;
  const resolvedDescription = description ?? siteUi.ctaBand.description;
  const resolvedCta = cta ?? primaryCta;

  return (
    <Section tone="inverted" padding="base">
      <Reveal className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl font-semibold text-balance md:text-3xl">
            {resolvedTitle}
          </h2>
          <p className="mt-2 text-primary-foreground/75">{resolvedDescription}</p>
        </div>

        <Button asChild size="lg" variant="secondary">
          <LeadsterLink href={resolvedCta.href}>
            {resolvedCta.label}
          </LeadsterLink>
        </Button>
      </Reveal>
    </Section>
  );
}
