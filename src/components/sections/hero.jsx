import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export function Hero({ data }) {
  if (!data) return null;

  const { title, subtitle, primaryCta } = data;

  return (
    <section className="relative flex min-h-[680px] w-full items-center overflow-hidden bg-white px-0 pb-24 pt-32 text-neutral-900 md:pb-32 md:pt-48">
      {/* Vídeo de fundo */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-y-0 right-0 h-full w-full md:w-[80%] lg:w-[65%]">
          <video
            src="/video-simone-header.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover object-top opacity-80 grayscale mix-blend-multiply"
          />

          {/* Gradiente para suavizar a borda esquerda do vídeo */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />

          {/* Gradiente inferior */}
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
            <p className="text-xl font-normal leading-relaxed text-neutral-800 md:text-[1.35rem]">
              {subtitle.part1}
              <span className="text-brand-red">{subtitle.highlight1}</span>
              {subtitle.part2}
            </p>
          </Reveal>

          <Reveal delay={0.16} className="pt-2">
            <Button
              asChild
              size="lg"
              className="w-fit rounded-full bg-[#E5484D] px-8 py-6 text-base font-normal text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#E5484D]/90"
            >
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
