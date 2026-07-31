import Link from "next/link";

import { hero } from "@/content/home";
import { Section } from "@/components/atoms/section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

/**
 * Hero da home. Referencia de como montar uma secao:
 *  - conteudo vem de /content
 *  - espacamento e Container vem do <Section>
 *  - entrada animada vem do <Reveal>, com delay crescente
 */
export function Hero() {
  return (
    <Section padding="lg" className="overflow-hidden">
      <div className="flex max-w-3xl flex-col gap-6">
        {hero.eyebrow ? (
          <Reveal>
            <span className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
              {hero.eyebrow}
            </span>
          </Reveal>
        ) : null}

        <Reveal delay={0.05}>
          <h1 className="font-display text-4xl leading-[1.1] font-semibold text-balance md:text-6xl">
            {hero.title}
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="max-w-xl text-lg text-pretty text-muted-foreground">
            {hero.description}
          </p>
        </Reveal>

        <Reveal delay={0.18} className="flex flex-wrap gap-3 pt-2">
          <Button asChild size="lg">
            <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}
