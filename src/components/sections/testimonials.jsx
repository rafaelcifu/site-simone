"use client";

import { depoimentos } from "@/content/home";
import { Section } from "@/components/atoms/section";
import { SectionHeading } from "@/components/atoms/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/**
 * Carrossel de depoimentos.
 * Client component por causa do embla — mantenha a fronteira aqui e nao
 * suba o "use client" para a pagina.
 */
export function Testimonials() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Depoimentos"
        title="O que dizem"
        align="center"
      />

      <Carousel
        opts={{ align: "start", loop: true }}
        className="mx-auto mt-12 w-full max-w-5xl"
      >
        <CarouselContent>
          {depoimentos.map((item, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="h-full transition-shadow duration-300 hover:shadow-md">
                <CardContent className="flex h-full flex-col gap-6">
                  <p className="text-pretty">&ldquo;{item.quote}&rdquo;</p>
                  <div className="mt-auto">
                    <p className="text-sm font-medium">{item.author}</p>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden lg:inline-flex" />
        <CarouselNext className="hidden lg:inline-flex" />
      </Carousel>
    </Section>
  );
}
