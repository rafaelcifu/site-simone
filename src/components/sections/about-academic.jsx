import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

export function AboutAcademic({ data }) {
  if (!data) return null;

  const { title, subtitle, badgeSvg, items } = data;

  // Duplicamos os itens para o loop contínuo do marquee
  const marqueeItems = [...(items || []), ...(items || []), ...(items || [])];

  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <Reveal>
        <div className="relative overflow-hidden rounded-[32px] bg-black px-6 py-10 text-white shadow-2xl sm:px-10 sm:py-12 md:px-14 md:py-14">
          {/* Elemento gráfico decorativo do canto superior direito */}
          <div className="pointer-events-none absolute -top-4 right-0 h-40 w-64 select-none opacity-80 sm:right-6 md:h-48 md:w-80 lg:right-10">
            <Image
              src={badgeSvg || "/images/sobre/formacao-badge.svg"}
              alt=""
              width={295}
              height={153}
              className="h-full w-full object-contain object-right-top"
              aria-hidden="true"
            />
          </div>

          {/* Cabeçalho do Card: Título + Nota de Experiências */}
          <div className="relative z-10 mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-start">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-[32px] md:leading-tight">
                {title}
              </h2>
            </div>

            {subtitle && (
              <p className="max-w-xs text-xs font-normal leading-relaxed text-[#737380] sm:text-sm whitespace-pre-line">
                {subtitle}
              </p>
            )}
          </div>

          {/* Marquee de Formações */}
          <div className="relative z-10 -mx-6 overflow-hidden sm:-mx-10 md:-mx-14 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee items-center gap-10 sm:gap-14 hover:[animation-play-state:paused]">
              {marqueeItems.map((item, idx) => (
                <div
                  key={`${item.institution}-${idx}`}
                  className="flex shrink-0 flex-col gap-1.5 transition-opacity duration-300 hover:opacity-100 opacity-85"
                >
                  <span className="font-display text-2xl font-light text-[#F98384] sm:text-3xl md:text-[32px]">
                    {item.institution}
                  </span>
                  <span className="text-sm font-light text-white/90 sm:text-base">
                    {item.field}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
