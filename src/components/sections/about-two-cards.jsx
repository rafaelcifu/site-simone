import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function AboutTwoCards({ data }) {
  if (!data) return null;
  // Extraimos tagLine, name, leftImage, paragraphs, e cta de data (conforme home.js)
  const { tagline, name, leftImage, paragraphs, cta } = data;

  return (
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 relative z-10">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 items-stretch min-h-[700px]">
        {/* Card Esquerdo: Imagem + Logo + Textos + Curvas Vermelhas */}
        <Reveal className="h-full">
          <div className="relative h-full min-h-[500px] w-full overflow-hidden rounded-[2rem] shadow-2xl bg-black">
            <Image
              src={leftImage || "/simone-stage-left.png"}
              alt="Simone Moura no palco"
              fill
              className="object-cover object-center opacity-80"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gradientes para melhorar legibilidade */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/30" />
            
            {/* Header do Card Esquerdo */}
            <div className="absolute top-0 left-0 right-0 p-8 md:p-10 flex justify-between items-start z-20">
              <span className="text-sm font-normal text-white">
                <span className="text-brand-red font-medium">Simone Moura</span> • Estratégia de marca
              </span>
              
              <div className="flex flex-col items-center">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
                  <path d="M25 8C20 8 18 11 18 15C18 20 28 19 28 25C28 30 24 32 20 32C15 32 13 29 13 25" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M12 12C9 14 7 18 7 23C7 31 12 34 16 34" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
                </svg>
                <span className="text-[10px] text-white/90 mt-1 uppercase tracking-wider">Simone Moura</span>
                <span className="text-[6px] text-white/60 uppercase tracking-widest">Estratégia de marca</span>
              </div>
            </div>

            {/* Curvas vermelhas decorativas (Bottom) */}
            <div className="absolute bottom-0 left-0 w-full h-48 pointer-events-none z-10 flex justify-between items-end overflow-hidden">
              <svg width="220" height="120" viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -left-10 -bottom-4">
                <path d="M20 120C20 60 70 20 150 20C180 20 200 30 220 40" stroke="#E5484D" strokeWidth="16" strokeLinecap="round" opacity="0.9" />
              </svg>
              <svg width="120" height="180" viewBox="0 0 120 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-4 -bottom-6">
                <ellipse cx="60" cy="90" rx="45" ry="70" stroke="#E5484D" strokeWidth="12" opacity="0.9" transform="rotate(-15 60 90)" />
              </svg>
            </div>
          </div>
        </Reveal>

        {/* Card Direito: Textos sobre Simone */}
        <Reveal delay={0.1} className="h-full">
          <div className="flex h-full flex-col justify-start rounded-[2rem] bg-black p-8 md:p-12 lg:p-14 text-white shadow-2xl">
            <div className="mb-8">
              <Badge variant="secondary" className="w-fit border-none bg-[#FDE8E8] px-3 py-1 text-xs font-semibold text-brand-red rounded-full">
                {tagline}
              </Badge>
            </div>

            <h2 className="font-display text-4xl font-normal tracking-tight text-white md:text-5xl mb-10">
              {name}
            </h2>

            <div className="flex flex-col gap-5 flex-grow">
              {paragraphs?.map((text, idx) => (
                <p key={idx} className="text-sm text-neutral-300 leading-relaxed font-light whitespace-pre-line">
                  {text}
                </p>
              ))}
            </div>

            <div className="pt-10">
              <Button
                asChild
                size="lg"
                className="w-fit rounded-full bg-[#E5484D] px-8 py-6 text-sm font-normal text-white shadow-md hover:bg-[#E5484D]/90 transition-all duration-300 hover:scale-105"
              >
                <Link href={cta.href}>
                  {cta.label}
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
