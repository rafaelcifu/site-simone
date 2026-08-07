import Image from "next/image";
import { Star } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";

export function Testimonials({ data }) {
  if (!data) return null;
  const { title, avatars, current } = data;

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 bg-background">
      <Reveal>
        <h2 className="font-display text-4xl font-bold tracking-tight text-brand-dark md:text-5xl mb-12">
          {title}
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
        {/* Coluna Esquerda: Miniaturas dos Avatares */}
        <div className="lg:col-span-4 flex lg:flex-col lg:-space-y-4 items-center sm:flex-row -space-x-4 lg:space-x-0 pt-4">
          {avatars && avatars.map((avatar, idx) => (
            <Reveal key={idx} delay={0.08 * idx} className={`z-[${30 - idx * 10}]`}>
              <div className={`relative h-24 w-24 overflow-hidden rounded-full border-4 border-brand-light transition-all duration-300 ${idx === 1 ? 'border-brand-red scale-110 shadow-lg z-40' : 'opacity-80 hover:opacity-100 hover:scale-105 hover:z-50'}`}>
                <Image
                  src={avatar.src}
                  alt={avatar.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Coluna Direita: Depoimento em Destaque */}
        <div className="lg:col-span-8 flex flex-col gap-6 rounded-3xl bg-brand-light p-8 md:p-12 border border-border/60">
          <Reveal>
            <h3 className="font-display text-2xl font-bold text-brand-dark">
              {current.company}
            </h3>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="text-base text-neutral-700 leading-relaxed md:text-lg italic">
              &ldquo;{current.quote}&rdquo;
            </p>
          </Reveal>

          <Reveal delay={0.12} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-border/50">
            <div>
              <p className="text-xs font-semibold text-neutral-800">
                {current.author}
              </p>
            </div>

            {/* Estrelas de AvaliaÃ§Ã£o Amarelas */}
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </Reveal>

          {/* Dots de PaginaÃ§Ã£o */}
          <div className="flex items-center gap-2 pt-2">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-red" />
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
