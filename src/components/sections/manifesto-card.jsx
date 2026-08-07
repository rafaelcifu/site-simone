import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";

export function ManifestoCard({ data }) {
  if (!data) return null;
  const { taglinePrefix, taglineSuffix, title, description, image } = data;

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-brand-dark text-white shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* ConteÃºdo Ã  Esquerda */}
            <div className="relative z-10 flex flex-col justify-center p-8 md:p-14 lg:col-span-7 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-transparent">
              <span className="text-xs font-bold tracking-[0.2em] text-brand-red uppercase mb-4">
                {taglinePrefix}
                <span className="text-neutral-500 font-medium">{taglineSuffix}</span>
              </span>

              <h2 className="font-display text-3xl font-medium leading-[1.1] text-white md:text-4xl lg:text-[40px] mb-6 tracking-tight">
                {title.part1}
                <span className="font-bold text-brand-red">{title.highlight1}</span>
                {title.part2}
                <span className="font-bold text-brand-red">{title.highlight2}</span>
                {title.part3}
                <span className="font-bold text-brand-red">{title.highlight3}</span>
                {title.part4}
              </h2>

              <p className="text-sm md:text-base text-neutral-400 leading-relaxed max-w-[480px]">
                {description}
              </p>
            </div>

            {/* Imagem de Fundo Ã  Direita */}
            <div className="relative min-h-[300px] lg:col-span-5 lg:min-h-[460px]">
              {/* DegradÃª para mesclar imagem com o fundo */}
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10 hidden lg:block" />
              
              <Image
                src={image.src || "/office-chair.png"}
                alt={image.alt || "Manifesto"}
                fill
                className="object-cover object-left opacity-90"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />

              {/* Curvas Vermelhas Decorativas sobrepostas no canto inferior direito */}
              <div className="absolute -bottom-6 -right-6 z-20 pointer-events-none">
                <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M240 120C240 186.274 186.274 240 120 240C53.7258 240 0 186.274 0 120" stroke="var(--brand-red)" strokeWidth="8" opacity="0.9" />
                  <path d="M180 120C180 153.137 153.137 180 120 180C86.8629 180 60 153.137 60 120" stroke="var(--brand-red)" strokeWidth="6" opacity="0.6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
