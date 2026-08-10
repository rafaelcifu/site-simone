import { Reveal } from "@/components/motion/reveal";

export function StatsSection({ data }) {
  if (!data) return null;
  const { title, paragraph1, paragraph2, items } = data;

  return (
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20 bg-white">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
        {/* Coluna Esquerda: Textos */}
        <div className="lg:col-span-6 flex flex-col gap-8">
          <Reveal>
            <h2 className="font-display text-3xl font-light leading-tight md:text-[2.25rem] text-neutral-800">
              {title.highlight && (
                <span className="text-[#E5484D]">{title.highlight}</span>
              )}
              {title.text}
            </h2>
          </Reveal>
          
          <Reveal delay={0.08}>
            <div className="flex flex-col gap-4 max-w-xl">
              <p className="text-sm md:text-[13px] text-neutral-700 leading-relaxed font-medium">
                {paragraph1}
              </p>
              <p className="text-xs md:text-[11px] text-neutral-400 leading-normal">
                {paragraph2}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Coluna Direita: 3 Círculos Contornados em Vermelho */}
        <div className="lg:col-span-6 flex flex-wrap md:flex-nowrap justify-center lg:justify-end gap-4 lg:gap-6 items-center">
          {items?.map((item, index) => (
            <Reveal key={index} delay={0.1 * index} className="flex-shrink-0">
              <div className="flex flex-col items-center justify-center text-center p-4 rounded-full border border-[#E5484D] bg-white aspect-square w-40 h-40 md:w-44 md:h-44 xl:w-[12rem] xl:h-[12rem] shadow-sm hover:scale-105 transition-transform duration-300">
                <span className="font-display text-4xl xl:text-[2.75rem] font-bold text-neutral-900 leading-none">
                  {item.value}
                </span>
                <span className="mt-2 text-[10px] xl:text-[11px] font-medium text-neutral-700 leading-tight max-w-[120px]">
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
