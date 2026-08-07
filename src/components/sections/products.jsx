import { Reveal } from "@/components/motion/reveal";

export function Products({ data }) {
  if (!data) return null;
  const { title, items } = data;

  return (
    <section className="bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-5xl font-bold tracking-tight text-white mb-16 md:text-6xl">
            {title}
          </h2>
        </Reveal>

        <div className="flex flex-col divide-y divide-neutral-800">
          {items.map((item, index) => (
            <Reveal key={item.id} delay={0.1 * index}>
              <div className="py-10 first:pt-0 last:pb-0 flex items-start gap-6">
                {/* Ãcone de CÃ­rculo Vermelho Ã  Esquerda */}
                <div className="h-5 w-5 rounded-full bg-brand-red shrink-0 mt-1.5 shadow-[0_0_12px_rgba(227,80,77,0.6)]" />

                <div className="flex flex-col gap-3 max-w-4xl">
                  <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                    {item.title}
                  </h3>

                  {item.description && (
                    <p className="text-sm text-neutral-400 leading-relaxed md:text-base">
                      {item.description}
                    </p>
                  )}

                  {item.bullets && item.bullets.length > 0 && (
                    <ul className="flex flex-col gap-2 mt-1">
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx} className="text-xs text-neutral-300 md:text-sm leading-relaxed">
                          â€¢ {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  <span className="text-xs md:text-sm font-semibold text-brand-red mt-2 block">
                    {item.duration}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
