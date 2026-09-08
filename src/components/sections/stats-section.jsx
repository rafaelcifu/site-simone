import { Reveal } from "@/components/motion/reveal";

export function StatsSection({ data }) {
  if (!data) return null;
  const { title, paragraph1, paragraph2, items } = data;

  return (
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20 bg-white">
      <div className="grid grid-cols-1 gap-10 md:gap-12 lg:grid-cols-12 items-center">
        {/* Coluna Esquerda: Textos */}
        <div className="lg:col-span-6 flex flex-col gap-6 md:gap-8">
          <Reveal>
            <h2 className="font-display text-2xl sm:text-3xl font-light leading-tight md:text-[2.25rem] text-neutral-800">
              {title.highlight && (
                <span className="text-[#E5484D] font-medium">{title.highlight}</span>
              )}
              {title.text}
            </h2>
          </Reveal>
          
          <Reveal delay={0.08}>
            <div className="flex flex-col gap-3 sm:gap-4 max-w-xl">
              <p className="text-sm md:text-[13px] text-neutral-700 leading-relaxed font-medium">
                {paragraph1}
              </p>
              <p className="text-xs md:text-[11px] text-neutral-400 leading-normal">
                {paragraph2}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Coluna Direita: Cards no mobile (Figma 299:759) e Círculos no desktop */}
        <div className="lg:col-span-6 flex flex-col md:flex-row md:flex-nowrap justify-center lg:justify-end gap-3 sm:gap-4 lg:gap-6 items-stretch md:items-center">
          {items?.map((item, index) => (
            <Reveal key={index} delay={0.1 * index} className="w-full md:w-auto flex-shrink-0">
              <div className="flex flex-row md:flex-col items-center md:justify-center p-4 sm:p-5 md:p-4 rounded-2xl md:rounded-full border border-[#E5484D] bg-white gap-4 md:gap-0 md:aspect-square md:w-40 md:h-40 xl:w-[12rem] xl:h-[12rem] shadow-xs md:shadow-sm hover:scale-[1.02] md:hover:scale-105 transition-transform duration-300">
                <span className="font-display text-3xl sm:text-4xl xl:text-[2.5rem] font-extrabold md:font-bold text-[#B22522] md:text-neutral-900 leading-none whitespace-nowrap min-w-[70px] md:min-w-0 text-left md:text-center">
                  {item.value}
                </span>
                <span className="text-xs sm:text-sm md:mt-2 md:text-[10px] xl:md:text-[11px] font-medium text-neutral-800 md:text-neutral-700 leading-snug md:leading-tight md:max-w-[120px] text-left md:text-center">
                  {item.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

