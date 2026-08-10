import { ArrowRight, Box, Users, BrainCircuit } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";

const iconMap = {
  branding: Box,
  workshops: Users,
  immersao: BrainCircuit,
};

export function Products({ data }) {
  if (!data) return null;
  const { title, items } = data;

  return (
    <section className="relative bg-black text-white py-32 lg:py-40 overflow-hidden">
      {/* Decorative Red Abstract Shape on the Right */}
      <div className="absolute right-[-10%] top-[10%] w-[50%] h-[80%] pointer-events-none opacity-90 hidden lg:block">
        <svg viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#E5484D] stroke-current" strokeWidth="12" strokeLinecap="round">
          <path d="M 400,0 C 100,50 50,250 250,300 C 400,350 400,500 200,600" />
          <path d="M 400,100 C 150,150 100,250 250,400 C 350,500 300,550 400,600" />
        </svg>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <h2 className="font-display text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-[80px] mb-12 lg:mb-16">
            {title}
          </h2>
        </Reveal>

        <div className="flex flex-col">
          {items?.map((item, index) => {
            const Icon = iconMap[item.id] || Box;
            
            // Controle preciso de paddings para não colapsar com o Reveal
            const isFirst = index === 0;
            const isLast = index === items.length - 1;

            return (
              <Reveal 
                key={item.id || index} 
                delay={0.1 * index}
                className={`flex flex-col border-neutral-800 ${
                  isLast ? "border-b-0" : "border-b"
                } ${
                  isFirst ? "pt-8 pb-16 lg:pt-10 lg:pb-24" : "py-16 lg:py-24"
                }`}
              >
                {/* Ícone Redondo */}
                <div className="flex h-14 w-14 lg:h-16 lg:w-16 shrink-0 items-center justify-center rounded-full bg-neutral-200 mb-8 lg:mb-10">
                  <Icon className="h-6 w-6 lg:h-8 lg:w-8 text-[#E5484D]" strokeWidth={1.5} />
                </div>

                {/* Conteúdo */}
                <div className="flex flex-col max-w-4xl">
                  <h3 className="font-display text-2xl font-bold text-white md:text-3xl lg:text-[32px] mb-4 lg:mb-6 leading-tight">
                    {item.title}
                  </h3>

                  {item.description && (
                    <p className="text-[15px] text-neutral-400 leading-relaxed md:text-[17px]">
                      {item.description}
                    </p>
                  )}

                  {item.bullets && item.bullets.length > 0 && (
                    <ul className="flex flex-col gap-2 mt-2 pl-4">
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx} className="text-[15px] text-neutral-400 leading-relaxed list-disc md:text-[17px]">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  <span className="text-[15px] text-[#E5484D] mt-8 mb-6 block md:text-[17px]">
                    {item.duration}
                  </span>

                  <Link href="/servicos" className="inline-flex items-center gap-2 text-[#E5484D] text-[15px] hover:text-white transition-colors group w-fit md:text-[17px]">
                    Saber mais 
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
