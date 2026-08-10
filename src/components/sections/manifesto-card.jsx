import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";

export function ManifestoCard({ data }) {
  if (!data) return null;
  const { taglinePrefix, taglineSuffix, title, description, image } = data;

  return (
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 relative z-20 -mt-20 md:-mt-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-black text-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Conteúdo à Esquerda */}
            <div className="relative z-10 flex flex-col justify-center p-8 md:p-14 lg:p-16 lg:pr-8 bg-gradient-to-r from-black via-black to-transparent">
              <span className="text-xs font-normal text-brand-red mb-6">
                {taglinePrefix}
                <span className="text-neutral-400"> {taglineSuffix}</span>
              </span>

              <h2 className="font-display text-3xl font-normal leading-snug text-white md:text-4xl lg:text-[2.5rem] mb-6 tracking-tight whitespace-pre-line">
                {title.part1}
                <span className="text-brand-red">{title.highlight1}</span>
                {title.part2}
                <span className="text-brand-red">{title.highlight2}</span>
                {title.part3}
              </h2>

              <p className="text-sm md:text-base text-neutral-300 leading-relaxed max-w-[500px]">
                {description}
              </p>
              
              {/* Slider Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 lg:left-auto lg:translate-x-0 lg:right-[-3rem] z-30">
                <div className="h-1.5 w-6 rounded-full bg-brand-red" />
                <div className="h-1.5 w-1.5 rounded-full bg-white/50" />
                <div className="h-1.5 w-1.5 rounded-full bg-white/50" />
              </div>
            </div>

            {/* Imagem de Fundo à Direita */}
            <div className="relative min-h-[350px] lg:min-h-[500px]">
              {/* Degradê para mesclar imagem com o fundo */}
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 hidden lg:block" />
              
              <Image
                src={image.src || "/office-chair.png"}
                alt={image.alt || "Manifesto"}
                fill
                className="object-cover object-center opacity-90"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Curvas Vermelhas Decorativas sobrepostas no canto inferior direito */}
              <div className="absolute -bottom-2 right-4 z-20 pointer-events-none overflow-hidden h-32 w-24">
                <svg width="100%" height="100%" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0">
                  <path d="M100 0C100 55.228 55.228 100 0 100" stroke="#E5484D" strokeWidth="12" opacity="0.9" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
