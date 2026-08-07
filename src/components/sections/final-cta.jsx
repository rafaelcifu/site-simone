import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export function FinalCta({ data }) {
  if (!data) return null;
  const { title, cta, image } = data;

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#F7CACA]/50 via-[#F7CACA]/30 to-[#F7CACA]/10 border border-[#F7CACA]/60 p-8 md:p-14">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
            <div className="flex flex-col gap-6 lg:col-span-8 z-10">
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-dark md:text-4xl lg:text-5xl leading-tight">
                {title}
              </h2>
              <div>
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-brand-red px-8 py-6 text-base font-semibold text-white shadow-lg hover:bg-brand-red/90 transition-all duration-300"
                >
                  <Link href={cta.href}>
                    {cta.label}
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative flex justify-center lg:col-span-4 lg:justify-end">
              <div className="relative h-72 w-72 md:h-80 md:w-80 overflow-hidden">
                <Image
                  src={image.src || "/simone-cta-cutout.png"}
                  alt={image.alt || "Simone Moura"}
                  fill
                  className="object-contain object-bottom"
                  sizes="320px"
                />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
