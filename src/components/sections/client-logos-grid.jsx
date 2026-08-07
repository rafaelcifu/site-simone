import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

const CLIENT_LOGOS = [
  { name: "Esmaltec", src: "/testimonial-avatar1.png" },
  { name: "Bando Propaganda", src: "/bando-logo.png" },
  { name: "Max", src: "/max-logo.png" },
  { name: "Medeiros", src: "/case-medeiros.png" },
  { name: "Clementino Fraga", src: "/case-clementino.png" },
  { name: "Sonata Hotel", src: "/testimonial-avatar1.png" },
];

export function ClientLogosGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 bg-background">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
        <div className="lg:col-span-5">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-dark md:text-4xl lg:text-5xl leading-tight">
              Marcas que acreditam no nosso trabalho
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {CLIENT_LOGOS.map((logo, index) => (
            <Reveal key={index} delay={0.05 * index}>
              <div className="flex h-20 items-center justify-center rounded-2xl border border-border/70 bg-muted/20 p-4 shadow-sm transition-all duration-300 hover:border-brand-red/40 hover:bg-white hover:shadow-md">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={40}
                  className="max-h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
