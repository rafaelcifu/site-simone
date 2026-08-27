import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

export function AboutHero({ data }) {
  if (!data) return null;

  const { tagline, title, paragraphs, image } = data;

  return (
    <section className="relative w-full overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32">
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
        <Reveal>
          {/* Badge Pill "Sobre" */}
          <div className="mb-6 inline-flex items-center rounded-full border border-brand-red bg-white/60 px-4 py-1 backdrop-blur-xs">
            <span className="text-xs font-normal text-[#B22522]">
              {tagline}
            </span>
          </div>

          {/* Título Principal */}
          <h1 className="mb-8 max-w-xl lg:max-w-2xl font-display text-3xl font-normal tracking-tight text-brand-dark sm:text-4xl md:text-5xl lg:text-[48px] lg:leading-[1.15]">
            {title}
          </h1>

          {/* Parágrafos biográficos */}
          <div className="max-w-xl lg:max-w-2xl space-y-6 text-base leading-relaxed text-brand-darker sm:text-lg">
            {paragraphs?.map((p, i) => (
              <p key={i} className="text-pretty">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
