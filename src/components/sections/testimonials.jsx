import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";

export function Testimonials({ data }) {
  if (!data) return null;
  const { title, avatars, current } = data;

  return (
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-24 bg-white overflow-hidden">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 items-start">
        
        {/* Coluna Esquerda: Avatares Empilhados */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          {avatars && avatars.map((avatar, idx) => {
            const isCenter = idx === 1;
            return (
              <Reveal key={idx} delay={0.08 * idx}>
                <div 
                  className={`relative w-full rounded-2xl overflow-hidden transition-all duration-300 ${
                    isCenter 
                      ? 'h-64 opacity-100 shadow-md' 
                      : 'h-32 opacity-80'
                  }`}
                >
                  <Image
                    src={avatar.src}
                    alt={avatar.name}
                    fill
                    className="object-cover grayscale"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Coluna Direita: Conteúdo */}
        <div className="lg:col-span-9 flex flex-col pt-2 lg:pl-8">
          <Reveal>
            <h2 className="font-display text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl lg:text-[3.5rem] leading-[1.1] mb-16 max-w-lg">
              {title}
            </h2>
          </Reveal>

          <Reveal delay={0.06}>
            <h3 className="font-display text-2xl font-bold text-neutral-900 md:text-3xl mb-4">
              {current.company}
            </h3>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="text-[13px] text-neutral-700 leading-relaxed md:text-[15px] font-medium max-w-4xl">
              {current.quote}
            </p>
          </Reveal>

          <Reveal delay={0.18} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-8 max-w-4xl">
            <div>
              <p className="text-[13px] font-bold text-neutral-900">
                {current.author}
              </p>
            </div>

            {/* Estrelas de Avaliação */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < (current.rating || 5) ? 'fill-[#EFCF46] text-[#EFCF46]' : 'fill-[#D1D5DB] text-[#D1D5DB]'}`} 
                />
              ))}
            </div>
          </Reveal>

          {/* Navegação */}
          <Reveal delay={0.24}>
            <div className="flex items-center gap-3 mt-12">
              <button className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E5484D] text-white transition-transform duration-300 hover:scale-110">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E5484D] text-white transition-transform duration-300 hover:scale-110">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
