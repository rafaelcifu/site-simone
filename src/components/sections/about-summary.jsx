import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";

import { Section } from "@/components/atoms/section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export function AboutSummary({ data }) {
  if (!data) return null;
  const { title, description, highlight, cta, image } = data;

  return (
    <Section padding="lg" className="bg-background">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="relative flex justify-center lg:col-span-5">
          <Reveal className="relative w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border shadow-xl">
              <Image
                src={image.src || "/simone-portrait.png"}
                alt={image.alt || "Simone Moura"}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-7">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-dark md:text-4xl lg:text-5xl leading-tight">
              {title}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-base text-neutral-600 leading-relaxed md:text-lg">
              {description}
            </p>
          </Reveal>

          {highlight && (
            <Reveal delay={0.12}>
              <div className="flex items-center gap-3 rounded-xl border border-border/80 bg-muted/40 p-4 text-sm font-semibold text-brand-dark">
                <GraduationCap className="h-5 w-5 text-brand-red shrink-0" />
                <span>{highlight}</span>
              </div>
            </Reveal>
          )}

          <Reveal delay={0.16} className="pt-2">
            <Button asChild size="lg" className="w-fit rounded-full bg-brand-dark text-white hover:bg-brand-dark/90">
              <Link href={cta.href}>
                {cta.label}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
