import { Reveal } from "@/components/motion/reveal";

export function StatsSection({ data }) {
  if (!data) return null;
  const { title, description, items } = data;

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 bg-background">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
        {/* Coluna Esquerda: Texto vermelho em destaque */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-tight text-brand-red md:text-4xl">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-base text-neutral-600 leading-relaxed md:text-lg">
              {description}
            </p>
          </Reveal>
        </div>

        {/* Coluna Direita: 3 CÃ­rculos Contornados em Vermelho */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
          {items.map((item, index) => (
            <Reveal key={index} delay={0.1 * index}>
              <div className="flex flex-col items-center justify-center text-center p-6 rounded-full border-2 border-brand-red aspect-square w-44 h-44 mx-auto shadow-sm hover:scale-105 transition-transform duration-300">
                <span className="font-display text-3xl font-extrabold text-brand-dark md:text-4xl">
                  {item.value}
                </span>
                <span className="mt-1 text-[11px] font-medium text-neutral-600 leading-tight">
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
