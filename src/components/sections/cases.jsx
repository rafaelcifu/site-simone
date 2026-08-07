import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";

export function Cases({ data }) {
  if (!data) return null;
  const { title, subtitle, items } = data;

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 bg-background">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Reveal>
          <h2 className="font-display text-4xl font-bold tracking-tight text-brand-dark md:text-5xl">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-3 text-base text-neutral-500 md:text-lg">
            {subtitle}
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <Reveal key={item.id} delay={0.1 * index}>
            <Link
              href={item.href}
              className="group relative flex min-h-[420px] w-full flex-col justify-end overflow-hidden rounded-3xl p-6 shadow-lg transition-transform duration-500 hover:-translate-y-2"
            >
              {/* Imagem de Fundo do Card */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 25vw"
              />

              {/* DegradÃª escuro para contraste */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

              {/* ConteÃºdo sobreposto */}
              <div className="relative z-10 flex flex-col gap-2">
                <h3 className="font-display text-xl font-bold text-white group-hover:text-brand-red transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center justify-between text-xs font-semibold text-white">
                  <span>Saiba mais</span>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-red text-white transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
