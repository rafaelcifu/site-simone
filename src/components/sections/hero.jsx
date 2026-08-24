import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { HeroVideo } from "@/components/sections/hero-video";

export function Hero({ data }) {
  if (!data) return null;

  const { title, subtitle, primaryCta } = data;

  return (
    <section className="relative flex min-h-[640px] md:min-h-[780px] lg:min-h-[860px] w-full items-center justify-center overflow-hidden bg-black px-4 pb-36 pt-32 text-white sm:px-6 md:pb-48 md:pt-44 lg:px-8">
      {/* Vídeo de fundo com overlays de contraste */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Vídeo client-side com loop à prova de flash preto */}
        <HeroVideo />

        {/* Camada base leve — só o suficiente para não ofuscar o vídeo */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Vinheta radial suave — preserva as bordas sem escurecer o centro */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.45)_100%)]" />

        {/* Gradiente superior mínimo para leitura da nav */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/50 via-black/15 to-transparent" />

        {/* Degradê inferior suave — suficiente para ler o texto, sem cobrir o vídeo */}
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/80 via-black/40 to-transparent sm:h-64" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <Reveal>
            <h1 className="font-display text-5xl font-extralight tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem] md:leading-tight">
              {title}
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="max-w-3xl text-lg font-normal leading-relaxed text-neutral-100 sm:text-xl md:text-2xl">
              {subtitle.part1}
              <span className="text-[#E5484D] font-medium">{subtitle.highlight1}</span>
              {subtitle.part2}
            </p>
          </Reveal>

          <Reveal delay={0.16} className="pt-2 md:pt-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#E5484D] px-8 py-6 text-base font-normal text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#E5484D]/90 focus-visible:ring-2 focus-visible:ring-white md:text-lg"
            >
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

