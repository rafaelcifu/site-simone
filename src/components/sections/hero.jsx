import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export function Hero({ data }) {
  if (!data) return null;
  const { title, subtitle, primaryCta, image } = data;

  return (
    <section className="relative min-h-[580px] w-full overflow-hidden bg-brand-dark text-white pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Imagem de Fundo (Grayscale / Headset) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image.src || "/simone-headset-hero.png"}
          alt={image.alt || "Simone Moura"}
          fill
          priority
          className="object-cover object-top opacity-35 grayscale"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex max-w-3xl flex-col gap-6">
          <Reveal>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
              {title}
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-lg font-normal text-neutral-200 leading-relaxed md:text-2xl">
              {subtitle.part1}
              <span className="font-semibold text-brand-red">
                {subtitle.highlight1}
              </span>
              {subtitle.part2}
            </p>
          </Reveal>

          <Reveal delay={0.16} className="pt-4">
            <Button
              asChild
              size="lg"
              className="w-fit rounded-full bg-brand-red px-8 py-6 text-base font-semibold text-white shadow-xl hover:bg-brand-red/90 hover:scale-105 transition-all duration-300"
            >
              <Link href={primaryCta.href}>
                {primaryCta.label}
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
