"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight, X } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";

import { Reveal } from "@/components/motion/reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Cases({ data }) {
  const [expandedId, setExpandedId] = useState(null);

  if (!data) return null;
  const { title, subtitle, items } = data;

  const handleCardClick = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

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
                stopOnInteraction: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6 items-start">
              {items?.map((item, index) => {
                const isExpanded = expandedId === item.id;

                return (
                  <CarouselItem
                    key={item.id || index}
                    className="pl-4 md:pl-6 basis-full sm:basis-1/2 md:basis-1/3 xl:basis-[28%]"
                  >
                    <motion.div
                      layout
                      onClick={() => handleCardClick(item.id)}
                      className="group relative flex w-full cursor-pointer flex-col overflow-hidden rounded-[2rem] bg-neutral-900 shadow-sm transition-shadow hover:shadow-md"
                      style={{ minHeight: "480px" }}
                    >
                      {/* Top section with Image (Shrinks when expanded) */}
                      <motion.div
                        layout
                        className="relative w-full overflow-hidden"
                        animate={{ height: isExpanded ? 200 : 480 }}
                        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />

                        {/* Conteúdo sobreposto na imagem */}
                        <motion.div 
                          layout
                          className="absolute inset-0 z-10 flex flex-col justify-end p-8"
                        >
                          <motion.h3 layout className="font-display text-2xl font-bold leading-tight text-white">
                            {item.title}
                          </motion.h3>
                          
                          <AnimatePresence mode="popLayout">
                            {!isExpanded && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <p className="mt-2 text-xs leading-relaxed text-neutral-300 line-clamp-3">
                                  {item.description}
                                </p>
                                <div className="mt-6 flex items-center justify-end gap-2 text-[11px] font-medium text-neutral-200">
                                  <span>Saiba mais</span>
                                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E5484D] text-white transition-transform duration-300 group-hover:scale-110">
                                    <ChevronRight className="h-3.5 w-3.5" />
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      </motion.div>

                      {/* Expanded Content Section */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                            className="flex flex-col bg-neutral-900 px-8 pb-8 pt-4 text-sm text-neutral-300"
                          >
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2, duration: 0.4 }}
                              className="flex flex-col gap-4"
                            >
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris.
                              </p>
                              <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                              </p>
                              <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                              </p>
                              
                              <div className="mt-4 flex items-center justify-between text-[#E5484D]">
                                <span className="text-[11px] font-bold uppercase tracking-wider">
                                  Fechar detalhes
                                </span>
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20">
                                  <X className="h-4 w-4" />
                                </div>
                              </div>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12 bg-black/70 hover:bg-black border-none text-white w-10 h-10" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-12 bg-black/70 hover:bg-black border-none text-white w-10 h-10" />
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
