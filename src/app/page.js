import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";

/**
 * Home. Pagina = montagem de secoes, nada de markup solto aqui.
 * Reordenar/remover secao = mexer so nesta lista.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesGrid limit={3} />
      <Testimonials />
      <Faq />
      <CtaBand />
    </>
  );
}
