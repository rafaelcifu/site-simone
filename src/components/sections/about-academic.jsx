import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { AcademicSlider } from "@/components/molecules/academic-slider";

export function AboutAcademic({ data }) {
  if (!data) return null;

  const { title, subtitle, badgeSvg } = data;

  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <Reveal>
        <div className="relative overflow-hidden rounded-[32px] bg-black px-4 py-10 text-white shadow-2xl sm:px-8 sm:py-12 md:px-12 md:py-14">
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
          <div className="relative z-10 mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-start px-2 sm:px-4">
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

          {/* Slider de Formações com Autoplay e Expansão Dinâmica */}
          <div className="relative z-10">
            <AcademicSlider data={data} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
