"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { Reveal } from "@/components/motion/reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export function ManifestoCard({ data }) {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  if (!data) return null;
  const { taglinePrefix, taglineSuffix, title, description, image } = data;

  const slides = [
    { type: "image", src: image.src || "/office-chair.png", alt: image.alt || "Manifesto" },
    { type: "placeholder", text: "Placeholder 2 (800x600)" },
    { type: "placeholder", text: "Placeholder 3 (800x600)" },
    { type: "placeholder", text: "Placeholder 4 (800x600)" },
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 relative z-20 -mt-20 md:-mt-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-black text-white shadow-2xl">
          <Carousel
            setApi={setApi}
            opts={{ loop: true }}
            plugins={[Autoplay({ delay: 4000 })]}
            className="w-full h-full relative group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
              {/* Conteúdo à Esquerda */}
              <div className="lg:col-span-7 relative z-10 flex flex-col justify-center p-8 md:p-14 lg:p-16 lg:pr-12 bg-black">
                <span className="text-xs font-normal text-brand-red mb-6">
                  {taglinePrefix}
                  <span className="text-neutral-400"> {taglineSuffix}</span>
                </span>

                <h2 className="font-display text-3xl font-normal leading-snug text-white md:text-4xl lg:text-[2.5rem] mb-6 tracking-tight whitespace-pre-line max-w-[600px]">
                  {title.part1}
                  <span className="text-brand-red">{title.highlight1}</span>
                  {title.part2}
                  <span className="text-brand-red">{title.highlight2}</span>
                  {title.part3}
                </h2>

                <p className="text-sm md:text-base text-neutral-300 leading-relaxed max-w-[600px]">
                  {description}
                </p>
                
                {/* Slider Dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 lg:left-auto lg:translate-x-0 lg:right-[-2rem] z-30">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        current === index ? "w-6 bg-brand-red" : "w-1.5 bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`Ir para slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Imagem de Fundo à Direita */}
              <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-[500px] h-full flex flex-col bg-black">
                {/* Degradê para mesclar imagem com o fundo */}
                <div className="absolute inset-y-0 left-0 w-32 lg:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-10 hidden lg:block pointer-events-none" />
                
                <div className="flex-1 w-full h-full relative">
                  <CarouselContent className="-ml-0 h-full absolute inset-0">
                    {slides.map((slide, index) => (
                      <CarouselItem key={index} className="pl-0 relative h-full w-full">
                        {slide.type === "image" ? (
                          <Image
                            src={slide.src}
                            alt={slide.alt}
                            fill
                            className="object-cover object-center opacity-90"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-900/50 text-neutral-400 opacity-90 border-l border-neutral-800">
                            <span className="text-sm font-medium">{slide.text}</span>
                            <span className="text-xs mt-2 opacity-50">Substituir no futuro</span>
                          </div>
                        )}
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </div>

                {/* Curvas Vermelhas Decorativas sobrepostas no canto inferior direito */}
                <div className="absolute -bottom-2 right-4 z-20 pointer-events-none overflow-hidden h-32 w-24">
                  <svg width="100%" height="100%" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0">
                    <path d="M100 0C100 55.228 55.228 100 0 100" stroke="#E5484D" strokeWidth="12" opacity="0.9" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Setas de Navegação */}
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 border-none bg-black/30 hover:bg-black/60 text-white/70 hover:text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden md:flex h-10 w-10 z-40" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 border-none bg-black/30 hover:bg-black/60 text-white/70 hover:text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden md:flex h-10 w-10 z-40" />
          </Carousel>
        </div>
      </Reveal>
    </section>
  );
}
