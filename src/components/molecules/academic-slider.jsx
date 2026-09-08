"use client";

import React, { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

function AcademicCard({ item, readMore, readLess }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xs transition-all duration-300 hover:border-white/25 hover:bg-white/[0.07]">
      <div className="flex flex-col gap-2.5">
        <span className="font-display text-xl font-normal tracking-tight text-[#F98384] transition-colors duration-200 group-hover:text-[#fa9a9b] sm:text-2xl">
          {item.institution}
        </span>
        <h3 className="text-sm font-light leading-relaxed text-white/90 sm:text-base">
          {item.title}
        </h3>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden border-t border-white/10 pt-3"
            >
              <p className="text-xs font-light leading-relaxed text-white/75 sm:text-sm">
                {item.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-4 pt-2">
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#F98384] transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F98384] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          aria-expanded={isExpanded}
        >
          <span>{isExpanded ? readLess : readMore}</span>
          <ChevronDown
            className={cn(
              "size-3.5 transition-transform duration-300",
              isExpanded && "rotate-180"
            )}
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
}

export function AcademicSlider({ data }) {
  if (!data?.items || data.items.length === 0) return null;

  const {
    items,
    readMore = "Saiba mais",
    readLess = "Menos detalhes",
    previousSlide = "Slide anterior",
    nextSlide = "Próximo slide",
  } = data;

  return (
    <div className="relative w-full px-2 sm:px-4">
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="relative w-full"
      >
        <CarouselContent className="-ml-3 sm:-ml-4">
          {items.map((item, idx) => (
            <CarouselItem
              key={`${item.institution}-${idx}`}
              className="min-w-0 shrink-0 grow-0 basis-full pl-3 sm:basis-1/2 sm:pl-4 lg:basis-1/3"
            >
              <AcademicCard
                item={item}
                readMore={readMore}
                readLess={readLess}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          className="left-0 -translate-x-3 sm:-translate-x-4 border-white/20 bg-black/70 text-white backdrop-blur-md transition-all hover:bg-white hover:text-black focus-visible:ring-2 focus-visible:ring-[#F98384] sm:size-10"
          aria-label={previousSlide}
        />
        <CarouselNext
          className="right-0 translate-x-3 sm:translate-x-4 border-white/20 bg-black/70 text-white backdrop-blur-md transition-all hover:bg-white hover:text-black focus-visible:ring-2 focus-visible:ring-[#F98384] sm:size-10"
          aria-label={nextSlide}
        />
      </Carousel>
    </div>
  );
}
