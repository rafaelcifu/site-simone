import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

export function AboutTimeline({ data }) {
  if (!data) return null;

  const { items } = data;

  return (
    <section className="relative w-full overflow-hidden bg-background py-16 md:py-24 lg:py-32">
      {/* Curva decorativa superior (Figma #272:1324) */}
      <div className="pointer-events-none absolute left-0 top-12 hidden h-20 w-36 select-none opacity-60 xl:block">
        <Image
          src="/images/sobre/timeline-curve-top.svg"
          alt=""
          width={144}
          height={77}
          className="h-full w-full object-contain"
          aria-hidden="true"
        />
      </div>

      {/* Curva decorativa inferior (Figma #272:1326) */}
      <div className="pointer-events-none absolute bottom-0 left-12 hidden h-80 w-[680px] select-none opacity-40 xl:block">
        <Image
          src="/images/sobre/timeline-curve-bottom.svg"
          alt=""
          width={687}
          height={321}
          className="h-full w-full object-contain"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Stagger className="relative flex flex-col gap-16 md:gap-24">
          {items?.map((item, index) => {
            const isSecond = index === 1;
            const isLast = index === items.length - 1;

            return (
              <StaggerItem
                key={item.id || index}
                className="relative flex flex-col gap-8 md:flex-row md:items-start md:gap-14"
              >
                {/* Coluna da Linha do Tempo e Marcador */}
                <div className="relative flex items-center md:items-start md:pt-1">
                  {/* Marcador Circular (Figma #132:137 / #132:145 / #141:159) */}
                  <div className="relative z-20 flex size-9 shrink-0 items-center justify-center rounded-full border border-[#D9D9D9] bg-white shadow-xs">
                    <div
                      className={`size-3 rounded-full ${
                        isSecond ? "bg-brand-red" : "bg-[#3A3A3A]"
                      }`}
                    />
                  </div>

                  {/* Linha vertical conectora com gradiente */}
                  {!isLast && (
                    <div
                      className={`absolute top-9 left-[17px] -bottom-16 md:-bottom-24 w-[1px] ${
                        index === 0
                          ? "bg-gradient-to-b from-black to-brand-red"
                          : "bg-gradient-to-b from-brand-red to-black"
                      }`}
                    />
                  )}

                  {/* Tag + Ano (Mobile: ao lado do bullet) */}
                  <div className="ml-4 flex flex-col md:hidden">
                    <span className="text-sm font-normal text-brand-dark">
                      {item.tag}
                    </span>
                    <span
                      className={`font-display font-black text-brand-dark ${
                        item.isYear ? "text-3xl" : "text-xl"
                      }`}
                    >
                      {item.highlight}
                    </span>
                  </div>
                </div>

                {/* Coluna do Ano/Tag (Desktop) */}
                <div className="hidden w-40 shrink-0 flex-col md:flex">
                  <span className="font-display text-lg font-normal text-brand-dark lg:text-2xl">
                    {item.tag}
                  </span>
                  <span
                    className={`font-display font-black tracking-tight text-brand-dark whitespace-pre-line ${
                      item.isYear
                        ? "text-3xl lg:text-4xl"
                        : "text-2xl lg:text-[28px] leading-tight"
                    }`}
                  >
                    {item.highlight}
                  </span>
                </div>

                {/* Coluna do Texto Descritivo */}
                <div className="flex-1">
                  <p className="font-display text-base font-normal leading-relaxed text-brand-dark sm:text-lg md:text-xl lg:text-[24px] lg:leading-[1.4]">
                    {item.text}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
