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
  const { title, subtitle, readMoreLabel = "Saiba mais", closeDetailsLabel = "Fechar detalhes", items } = data;

  const handleCardClick = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 md:py-28 bg-white overflow-hidden">
      {/* Cabeçalho da Seção */}
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-3 text-sm sm:text-base font-medium text-neutral-500">
            {subtitle}
          </p>
        </Reveal>
      </div>

      {/* Carrossel de Cards dos Cases */}
      <div className="max-w-7xl mx-auto relative">
        <Reveal delay={0.16}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4500,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6 items-stretch">
              {items?.map((item, index) => {
                const isExpanded = expandedId === item.id;
                const isBando = item.id === "bando";

                return (
                  <CarouselItem
                    key={item.id || index}
                    className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex"
                  >
                    <motion.div
                      layout
                      onClick={() => handleCardClick(item.id)}
                      className="group relative flex w-full cursor-pointer flex-col justify-between overflow-hidden rounded-[28px] bg-[#F7F7FA] border border-neutral-200/80 p-4 sm:p-5 transition-all duration-300 hover:shadow-xl hover:border-neutral-300"
                    >
                      {/* Topo do Card: Bloco do Logo */}
                      <motion.div
                        layout
                        className={`relative w-full rounded-[20px] overflow-hidden flex items-center justify-center transition-all duration-300 ${
                          isBando ? "bg-[#fe0365]" : "bg-white border border-neutral-100 shadow-sm"
                        } ${isExpanded ? "h-36 sm:h-40" : "h-48 sm:h-52"}`}
                      >
                        {item.logo ? (
                          <div className="relative h-full w-full flex items-center justify-center p-6">
                            <Image
                              src={item.logo}
                              alt={item.title}
                              fill
                              className={`${
                                isBando ? "object-contain p-2" : "object-contain p-4"
                              } transition-transform duration-500 group-hover:scale-105`}
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            />
                          </div>
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-neutral-100 text-neutral-400 font-medium">
                            {item.title}
                          </div>
                        )}
                      </motion.div>

                      {/* Corpo do Card: Título e Descrição */}
                      <motion.div layout className="flex flex-col flex-1 justify-between pt-4">
                        <div>
                          <motion.h3
                            layout
                            className="font-display text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 leading-snug"
                          >
                            {item.title}
                          </motion.h3>

                          <AnimatePresence mode="wait">
                            {!isExpanded ? (
                              <motion.p
                                key="short"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-3 font-normal"
                              >
                                {item.description}
                              </motion.p>
                            ) : null}
                          </AnimatePresence>
                        </div>

                        {/* Conteúdo Expandido com Detalhes Completos */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              key="expanded"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                              className="mt-4 pt-4 border-t border-neutral-200/80 text-xs sm:text-sm text-neutral-700 leading-relaxed flex flex-col gap-3"
                            >
                              <p className="font-normal text-neutral-800">
                                {item.fullDescription || item.description}
                              </p>

                              <div className="mt-3 flex items-center justify-between text-[#E5484D] pt-2 border-t border-neutral-200/60">
                                <span className="text-[11px] font-bold uppercase tracking-wider">
                                  {closeDetailsLabel}
                                </span>
                                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E5484D]/10 text-[#E5484D] transition-colors hover:bg-[#E5484D] hover:text-white">
                                  <X className="h-3.5 w-3.5" />
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Botão Saiba Mais quando colapsado */}
                        {!isExpanded && (
                          <motion.div
                            layout
                            className="mt-5 flex items-center justify-end gap-2 text-xs sm:text-sm font-medium text-[#E5484D] group-hover:text-[#E5484D]/90"
                          >
                            <span>{readMoreLabel}</span>
                            <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-[#E5484D] text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                              <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[2.5]" />
                            </div>
                          </motion.div>
                        )}
                      </motion.div>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            {/* Setas de navegação do carrossel */}
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-6 bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-900 shadow-md h-10 w-10" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-6 bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-900 shadow-md h-10 w-10" />
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}

