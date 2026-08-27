import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

export function MethodologyDiagram({ data }) {
  if (!data) return null;

  const { topGraphic, curvesGraphic, pillars } = data;

  return (
    <section className="relative w-full overflow-hidden bg-black py-20 lg:py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          {/* Ilustração Neural 3D do Topo */}
          <Reveal className="mb-0 flex justify-center">
            <div className="relative h-44 w-72 select-none md:h-52 md:w-80">
              <Image
                src={topGraphic || "/images/metodologias/metodologia-top-diagram.svg"}
                alt="Diagrama Neural de Metodologia"
                width={302}
                height={170}
                className="h-full w-full object-contain"
                priority
              />
            </div>
          </Reveal>

          {/* Curvas Conectoras Vermelhas (Visível em Desktop) */}
          <Reveal delay={0.1} className="w-full max-w-5xl hidden lg:block -mt-4 mb-2">
            <div className="relative h-32 w-full select-none">
              <Image
                src={
                  curvesGraphic ||
                  "/images/metodologias/metodologia-curves-diagram.svg"
                }
                alt=""
                width={1097}
                height={156}
                className="h-full w-full object-contain"
                aria-hidden="true"
              />
            </div>
          </Reveal>

          {/* Os 7 Pilares Metodológicos em Cápsulas com Borda Vermelha */}
          <Stagger className="mt-8 lg:mt-0 grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4 items-stretch">
            {pillars?.map((pillar, index) => (
              <StaggerItem key={index} className="flex">
                <div className="group relative flex w-full min-h-[120px] sm:min-h-[140px] lg:min-h-[164px] flex-col items-center justify-center rounded-[32px] sm:rounded-full border border-[#B22522] bg-white/[0.02] p-4 text-center transition-all duration-300 hover:bg-brand-red/10 hover:border-brand-red hover:shadow-[0_0_20px_rgba(227,80,77,0.25)]">
                  <span className="font-display text-xs sm:text-sm md:text-[14px] lg:text-[15px] font-normal leading-relaxed text-white transition-transform duration-300 group-hover:scale-105">
                    {pillar}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
