import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";

export function FinalCta({ data }) {
  if (!data) return null;
  const { title, cta, image } = data;

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-white via-[#fdebeb] to-[#fad2d2]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[400px] md:min-h-[500px]">
          
          {/* Coluna Esquerda: Texto e Botão */}
          <div className="flex flex-col gap-8 lg:col-span-7 z-10 py-16 lg:py-24">
            <Reveal>
              <h2 className="font-display text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold tracking-tight text-neutral-900 leading-[1.2] max-w-2xl">
                {title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <Link
                  href={cta.href}
                  className="inline-flex h-12 md:h-14 items-center justify-center rounded-full bg-[#E5484D] px-8 md:px-10 text-sm md:text-[15px] font-medium text-white transition-transform hover:scale-105"
                >
                  {cta.label}
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Coluna Direita: Imagem da Simone */}
          <div className="lg:col-span-5 h-full relative flex items-end justify-center lg:justify-end">
            <Reveal delay={0.2} className="relative w-full h-[350px] md:h-[500px] lg:h-[600px] -mb-4 lg:-mb-10 lg:absolute lg:bottom-0 lg:right-0 lg:w-[650px]">
              <Image
                src={image.src || "/simone-cta-cutout.png"}
                alt={image.alt || "Simone Moura"}
                fill
                className="object-contain object-bottom grayscale"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </Reveal>
          </div>
          
        </div>
      </div>
    </section>
  );
}
