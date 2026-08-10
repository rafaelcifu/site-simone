import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export function Hero({ data }) {
  if (!data) return null;
  const { title, subtitle, primaryCta, image } = data;

  return (
    <section className="relative min-h-[680px] w-full overflow-hidden bg-white text-neutral-900 pt-32 pb-24 md:pt-48 md:pb-32 flex items-center">
      {/* Imagem de Fundo (Grayscale / Headset) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-y-0 right-0 w-full md:w-[80%] lg:w-[65%] h-full">
          <Image
            src={image.src || "/simone-headset-hero.png"}
            alt={image.alt || "Simone Moura"}
            fill
            priority
            className="object-cover object-top opacity-80 grayscale mix-blend-multiply"
            sizes="(max-width: 768px) 100vw, 65vw"
          />
          {/* Gradiente para suavizar a borda esquerda da imagem */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex max-w-2xl flex-col gap-6">
          <Reveal>
            <h1 className="font-display text-5xl font-light tracking-tight text-neutral-900 sm:text-6xl md:text-[5rem] md:leading-none">
              {title}
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-xl font-normal text-neutral-800 leading-relaxed md:text-[1.35rem]">
              {subtitle.part1}
              <span className="text-brand-red">
                {subtitle.highlight1}
              </span>
              {subtitle.part2}
            </p>
          </Reveal>

          <Reveal delay={0.16} className="pt-2">
            <Button
              asChild
              size="lg"
              className="w-fit rounded-full bg-[#E5484D] px-8 py-6 text-base font-normal text-white shadow-md hover:bg-[#E5484D]/90 hover:scale-105 transition-all duration-300"
            >
              <Link href={primaryCta.href}>
                {primaryCta.label}
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
