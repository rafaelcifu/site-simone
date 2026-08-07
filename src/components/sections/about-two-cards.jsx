import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function AboutTwoCards({ data }) {
  if (!data) return null;
  const { tagline, name, leftImage, paragraph1, paragraph2, paragraph3, cta } = data;

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
        {/* Card Esquerdo: Foto no palco com cÃ­rculos decorativos em vermelho */}
        <Reveal className="lg:col-span-5 h-full">
          <div className="relative h-full min-h-[500px] w-full overflow-hidden rounded-3xl border border-border shadow-xl">
            <Image
              src={leftImage || "/simone-stage-left.png"}
              alt="Simone Moura no palco"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            {/* Elemento decorativo vermelho na foto */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-start pointer-events-none opacity-80">
              <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
                <circle cx="30" cy="30" r="25" stroke="var(--brand-red)" strokeWidth="4" />
                <circle cx="80" cy="30" r="25" stroke="var(--brand-red)" strokeWidth="4" />
              </svg>
            </div>
          </div>
        </Reveal>

        {/* Card Direito: Texto escuro sobre a Simone Moura */}
        <Reveal delay={0.1} className="lg:col-span-7 h-full">
          <div className="flex h-full flex-col justify-between rounded-3xl bg-brand-dark p-8 md:p-12 text-white shadow-2xl">
            <div className="flex flex-col gap-6">
              <Badge variant="outline" className="w-fit border-none bg-brand-red/20 px-3 py-1 text-xs font-bold text-brand-red uppercase tracking-wider rounded-full">
                {tagline}
              </Badge>

              <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
                {name}
              </h2>

              <p className="text-base text-neutral-300 leading-relaxed">
                {paragraph1}
              </p>

              <p className="text-sm text-neutral-400 leading-relaxed">
                {paragraph2}
              </p>

              <p className="text-sm font-semibold text-neutral-200 leading-relaxed">
                {paragraph3}
              </p>
            </div>

            <div className="pt-8">
              <Button
                asChild
                size="lg"
                className="w-fit rounded-full bg-brand-red px-8 py-6 text-sm font-semibold text-white shadow-lg hover:bg-brand-red/90 transition-all duration-300"
              >
                <Link href={cta.href}>
                  {cta.label}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
