"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

import { Reveal } from "@/components/motion/reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export function ManifestoCard() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const slides = [
    { type: "image", src: "/slide-hero-1.png", alt: "Manifesto Slide 1" },
    { type: "placeholder", text: "Placeholder 2 (1200x500)" },
    { type: "placeholder", text: "Placeholder 3 (1200x500)" },
    { type: "placeholder", text: "Placeholder 4 (1200x500)" },
    { type: "placeholder", text: "Placeholder 5 (1200x500)" },
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 relative z-20 -mt-20 md:-mt-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-black text-white shadow-2xl">
          <Carousel
            setApi={setApi}
            opts={{ loop: true }}
            plugins={[Autoplay({ delay: 5000 })]}
            className="w-full h-full relative group"
          >
            <CarouselContent className="-ml-0">
              {slides.map((slide, index) => (
                <CarouselItem key={index} className="pl-0 relative w-full">
                  {slide.type === "image" ? (
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="w-full h-full object-cover block"
                    />
                  ) : (
                    <div className="w-full aspect-[2782/1007] flex flex-col items-center justify-center bg-neutral-900 text-neutral-400 border border-neutral-800">
                      <span className="text-xl font-medium">{slide.text}</span>
                      <span className="text-sm mt-2 opacity-50">Substituir por imagem no futuro</span>
                    </div>
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Setas de Navegação */}
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 border-none bg-black/40 hover:bg-black/80 text-white hover:text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden md:flex h-12 w-12 z-40" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 border-none bg-black/40 hover:bg-black/80 text-white hover:text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden md:flex h-12 w-12 z-40" />
            
            {/* Dots customizados animados */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-50">
              {slides.map((_, index) => {
                const isActive = index === current;
                return (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Ir para slide ${index + 1}`}
                    className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                      isActive ? "w-12 h-3 bg-white" : "w-3 h-3 bg-white/70 hover:bg-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 5, ease: "linear" }}
                        className="absolute left-0 top-0 h-full bg-brand-red"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </Carousel>
        </div>
      </Reveal>
    </section>
  );
}
