import { Reveal } from "@/components/motion/reveal";

export function MethodologyHero({ data }) {
  if (!data) return null;

  const { eyebrow, title, subtitle, inspiration, paragraphs } = data;

  return (
    <section className="relative w-full bg-white pt-28 pb-12 sm:pt-36 sm:pb-16 md:pt-40 md:pb-20 lg:pt-48 lg:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* Badge Pill "Metodologia" */}
          <div className="mb-6 inline-flex items-center rounded-full border border-brand-red bg-white/60 px-4 py-1 backdrop-blur-xs">
            <span className="text-xs font-normal text-[#B22522]">
              {eyebrow || "Metodologia"}
            </span>
          </div>

          {/* Título Principal <h1> */}
          <h1 className="mb-6 sm:mb-8 max-w-3xl font-display text-2xl sm:text-4xl md:text-5xl lg:text-[48px] lg:leading-[1.15] font-normal tracking-tight text-brand-dark">
            {title}
          </h1>

          {/* Parágrafos da Metodologia */}
          {paragraphs && paragraphs.length > 0 ? (
            <div className="max-w-2xl lg:max-w-3xl space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed text-brand-darker">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-pretty">
                  {p}
                </p>
              ))}
            </div>
          ) : (
            subtitle && (
              <p className="mb-4 max-w-2xl text-base font-normal leading-relaxed text-brand-darker sm:text-lg">
                {subtitle}
              </p>
            )
          )}

          {/* Citação dos autores inspiradores */}
          {inspiration && (
            <p className="mt-6 max-w-2xl text-xs font-normal leading-relaxed text-brand-text-muted sm:text-sm">
              {inspiration}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
