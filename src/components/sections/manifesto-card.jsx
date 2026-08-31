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

export function ManifestoCard({ data }) {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  const slides =
    data?.slides && data.slides.length > 0
      ? data.slides
      : data?.image
      ? [data.image]
      : [{ src: "/slide-hero-1.png", alt: "Manifesto Simone Moura" }];

  const hasMultipleSlides = slides.length > 1;

  useEffect(() => {
    if (!api || !hasMultipleSlides) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api, hasMultipleSlides]);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 relative z-20 -mt-20 md:-mt-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-black text-white shadow-2xl">
          <Carousel
            setApi={setApi}
            opts={{ loop: hasMultipleSlides }}
            plugins={hasMultipleSlides ? [Autoplay({ delay: 5000 })] : []}
            className="w-full h-full relative group"
          >
            <CarouselContent className="-ml-0">
              {slides.map((slide, index) => (
                <CarouselItem key={index} className="pl-0 relative w-full">
                  <Image
                    src={slide.src}
                    alt={slide.alt || "Manifesto Simone Moura"}
                    width={2782}
                    height={1007}
                    priority={index === 0}
                    className="w-full h-auto object-cover block"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Setas de Navegação (visíveis apenas quando houver múltiplos slides) */}
            {hasMultipleSlides && (
              <>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 border-none bg-black/40 hover:bg-black/80 text-white hover:text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden md:flex h-12 w-12 z-40" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 border-none bg-black/40 hover:bg-black/80 text-white hover:text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden md:flex h-12 w-12 z-40" />
              </>
            )}

            {/* Dots customizados animados (visíveis apenas quando houver múltiplos slides) */}
            {hasMultipleSlides && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-50">
                {slides.map((_, index) => {
                  const isActive = index === current;
                  return (
                    <button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      aria-label={`Ir para slide ${index + 1}`}
                      className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                        isActive
                          ? "w-12 h-3 bg-white"
                          : "w-3 h-3 bg-white/70 hover:bg-white"
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
            )}
          </Carousel>
        </div>
      </Reveal>
    </section>
  );
}
