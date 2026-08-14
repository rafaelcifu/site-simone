import { Reveal } from "@/components/motion/reveal";
import Image from "next/image";

const CLIENT_LOGOS = [
  { name: "Hapvida", src: "/logos/hapvida.png" },
  { name: "Bando", src: "/logos/bando.png" },
  { name: "Mulato", src: "/logos/Mulato.png" },
  { name: "BSPAR", src: "/logos/BSPAR.png" },
  { name: "Unimed", src: "/logos/Unimed.png" },
  { name: "Hotel Sonata", src: "/logos/Hotel Sonata.png" },
  
  { name: "Sucré", src: "/logos/Sucré.png" },
  { name: "Nacional Gás", src: "/logos/Nacional Gás.png" },
  { name: "Esmaltec", src: "/logos/Esmaltec.png" },
  { name: "Minalba", src: "/logos/minalba.png" },
  { name: "Freitas", src: "/logos/Freitas.png" },
  { name: "Agrointeli", src: "/logos/Agro.png" },
  
  { name: "Esphera", src: "/logos/esphera.png" },
  { name: "Audo", src: "/logos/Audo.png" },
  { name: "Via Médica", src: "/logos/Via médica.png" },
  { name: "Nova Saúde", src: "/logos/nowa saude.png" },
  { name: "WSTC", src: "/logos/wstc.png" },
  { name: "Clementino", src: "/logos/clementino.png" },
  
  { name: "Identidade", src: "/logos/Frame 62.png" },
  { name: "Korujatec", src: "/logos/koruja.png" },
  { name: "Softlab", src: "/logos/softlab.png" },
  { name: "365", src: "/logos/365.png" },
  { name: "Medeiros", src: "/logos/medeiros.png" },
  { name: "Fruto", src: "/logos/fruta.png" },
];

export function ClientLogosGrid() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-24 bg-white overflow-hidden">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
        
        {/* Coluna Esquerda: Título */}
        <div className="lg:col-span-4">
          <Reveal>
            <h2 className="font-display text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold tracking-tight text-neutral-900 leading-[1.1]">
              Marcas que acreditam no nosso trabalho
            </h2>
          </Reveal>
        </div>

        {/* Coluna Direita: Grid de Logos 6x4 */}
        <div className="lg:col-span-8 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 gap-2 lg:gap-3">
          {CLIENT_LOGOS.map((logo, index) => (
            <Reveal key={index} delay={0.02 * index}>
              <div className="relative flex aspect-square items-center justify-center rounded-2xl p-0 overflow-hidden transition-transform duration-300 hover:scale-105 shadow-[0_2px_8px_rgba(0,0,0,0.04)] bg-[#F9F9F9]">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 25vw, 15vw"
                />
              </div>
            </Reveal>
          ))}
        </div>
        
      </div>
    </section>
  );
}
