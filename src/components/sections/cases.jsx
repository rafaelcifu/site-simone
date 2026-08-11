"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

import { Reveal } from "@/components/motion/reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Cases({ data }) {
  if (!data) return null;
  const { title, subtitle, items } = data;

  return (
    <section className="mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 bg-white overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Reveal>
          <h2 className="font-display text-4xl font-bold tracking-tight text-neutral-900 md:text-[2.75rem]">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-3 text-sm font-medium text-neutral-500 md:text-base">
            {subtitle}
          </p>
        </Reveal>
      </div>

      <div className="max-w-[1400px] mx-auto relative">
        <Reveal delay={0.16}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {items?.map((item, index) => (
                <CarouselItem key={item.id || index} className="pl-4 md:pl-6 basis-full sm:basis-1/2 md:basis-1/3 xl:basis-[28%]">
                  <Link
                    href={item.href}
                    className="group relative flex h-[480px] w-full flex-col justify-end overflow-hidden rounded-[2rem] p-8 shadow-sm transition-transform duration-500 hover:-translate-y-2"
                  >
                    {/* Imagem de Fundo do Card */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />

                    {/* Degradê escuro para contraste */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />

                    {/* Conteúdo sobreposto */}
                    <div className="relative z-10 flex flex-col gap-2 h-full justify-end">
                      <h3 className="font-display text-2xl font-bold text-white leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs text-neutral-300 line-clamp-3 leading-relaxed mt-1">
                        {item.description}
                      </p>
                      
                      <div className="mt-6 flex items-center justify-end gap-2 text-[11px] font-medium text-neutral-200">
                        <span>Saiba mais</span>
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E5484D] text-white transition-transform duration-300 group-hover:scale-110">
                          <ChevronRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12 bg-black/70 hover:bg-black border-none text-white w-10 h-10" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-12 bg-black/70 hover:bg-black border-none text-white w-10 h-10" />
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
