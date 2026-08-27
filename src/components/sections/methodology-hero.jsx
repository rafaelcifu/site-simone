import { Reveal } from "@/components/motion/reveal";

export function MethodologyHero({ data }) {
  if (!data) return null;

  const { eyebrow, title, subtitle, inspiration } = data;

  return (
    <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-48 lg:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* Badge Pill "Metodologia" */}
          <div className="mb-6 inline-flex items-center rounded-full border border-brand-red bg-white/60 px-4 py-1 backdrop-blur-xs">
            <span className="text-xs font-normal text-[#B22522]">
              {eyebrow || "Metodologia"}
            </span>
          </div>

          {/* Título Principal <h1> */}
          <h1 className="mb-6 max-w-3xl font-display text-3xl font-normal tracking-tight text-brand-dark sm:text-4xl md:text-5xl lg:text-[48px] lg:leading-[1.15]">
            {title}
          </h1>

          {/* Subtítulo com os pilares */}
          {subtitle && (
            <p className="mb-4 max-w-2xl text-base font-normal leading-relaxed text-brand-darker sm:text-lg">
              {subtitle}
            </p>
          )}

          {/* Citação dos autores inspiradores */}
          {inspiration && (
            <p className="max-w-2xl text-xs font-normal leading-relaxed text-brand-text-muted sm:text-sm">
              {inspiration}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
