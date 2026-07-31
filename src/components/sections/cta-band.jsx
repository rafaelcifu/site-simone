import Link from "next/link";

import { primaryCta } from "@/content/site";
import { Section } from "@/components/atoms/section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

/** Faixa de conversao. Repetida no fim das paginas internas. */
export function CtaBand({
  title = "Pronto para comecar?",
  description = "Frase curta reforcando o proximo passo.",
}) {
  return (
    <Section tone="inverted" padding="base">
      <Reveal className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl font-semibold text-balance md:text-3xl">
            {title}
          </h2>
          <p className="mt-2 text-primary-foreground/75">{description}</p>
        </div>

        <Button asChild size="lg" variant="secondary">
          <Link href={primaryCta.href}>{primaryCta.label}</Link>
        </Button>
      </Reveal>
    </Section>
  );
}
