import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

export function AboutHero({ data }) {
  if (!data) return null;

  const { tagline, title, paragraphs, image } = data;

  return (
    <section className="relative w-full overflow-hidden pt-28 pb-12 sm:pt-36 sm:pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32">
      {/* Imagem de fundo com Simone à direita (nó 131:425 do Figma) */}
      <div className="pointer-events-none absolute inset-0 z-0 h-[650px] w-full select-none md:h-[780px] lg:h-[870px]">
        <Image
          src={image?.src || "/images/sobre/simone-hero.png"}
          alt={image?.alt || title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[82%_20%] sm:object-[80%_center] lg:object-right-top"
        />
        {/* Gradiente inferior suave para fusão com a seção seguinte */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent" />
        {/* Gradiente lateral suave no mobile/tablet para legibilidade perfeita do texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent md:from-white/80 md:via-white/30 lg:via-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl lg:max-w-2xl">
          <Reveal>
            {/* Badge Pill "Sobre" */}
            <div className="mb-6 inline-flex items-center rounded-full border border-brand-red bg-white/60 px-4 py-1 backdrop-blur-xs">
              <span className="text-xs font-normal text-[#B22522]">
                {tagline}
              </span>
            </div>

            {/* Título Principal */}
            <h1 className="mb-6 sm:mb-8 font-display text-2xl sm:text-4xl md:text-5xl lg:text-[48px] lg:leading-[1.15]">
              {title}
            </h1>

            {/* Parágrafo de abertura / Lead */}
            {paragraphs?.[0] && (
              <p className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-brand-darker text-pretty">
                {paragraphs[0]}
              </p>
            )}

            {/* Destaque pessoal / Toque humano */}
            {paragraphs?.[1] && (
              <div className="my-6 rounded-2xl border border-brand-red/20 bg-white/80 p-4 sm:p-5 backdrop-blur-xs shadow-2xs border-l-4 border-l-brand-red">
                <p className="text-sm sm:text-base italic text-neutral-700 leading-relaxed text-pretty">
                  {paragraphs[1]}
                </p>
              </div>
            )}

            {/* Trajetória e construção de negócios */}
            {paragraphs?.length > 2 && (
              <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-[17px] leading-relaxed text-brand-darker/90">
                {paragraphs.slice(2).map((p, i) => (
                  <p key={i} className="text-pretty">
                    {p}
                  </p>
                ))}
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
