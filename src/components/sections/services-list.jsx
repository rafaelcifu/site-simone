import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Icon } from "@/components/atoms/icon";
import { LeadsterLink } from "@/components/molecules/leadster-link";
import { Button } from "@/components/ui/button";

export function ServicesList({ page, items }) {
  return (
    <div className="w-full">
      {/* Hero Header da Página Serviços */}
      <section className="relative w-full bg-background pt-32 pb-12 md:pt-40 md:pb-16 lg:pt-44 lg:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            {/* Badge Pill "Serviços" */}
            <div className="mb-6 inline-flex items-center rounded-full border border-brand-red bg-white/60 px-4 py-1 backdrop-blur-xs">
              <span className="text-xs font-normal text-[#B22522]">
                {page?.eyebrow || "Serviços"}
              </span>
            </div>

            {/* Título Principal <h1> */}
            <h1 className="mb-4 max-w-3xl font-display text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl md:text-[36px] md:leading-tight">
              {page?.title}
            </h1>

            {/* Subtítulo */}
            {page?.description && (
              <p className="max-w-2xl text-base font-normal leading-relaxed text-brand-darker sm:text-lg">
                {page.description}
              </p>
            )}
          </Reveal>
        </div>
      </section>

      {/* Lista dos 4 Serviços com fundo alternado */}
      <div className="flex flex-col w-full">
        {items?.map((servico, index) => {
          const isEven = index % 2 === 1;

          return (
            <section
              key={servico.id || index}
              id={servico.slug}
              className={`w-full scroll-mt-24 py-16 md:py-20 lg:py-24 border-t border-black/5 ${
                isEven ? "bg-[#F7F7FA]" : "bg-white"
              }`}
            >
              <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 items-start">
                  {/* Coluna da Imagem */}
                  <div className="lg:col-span-5">
                    <Reveal>
                      <div className="relative aspect-[4/5] w-full max-w-[420px] mx-auto lg:max-w-none overflow-hidden rounded-2xl bg-neutral-100 shadow-md">
                        <Image
                          src={servico.image?.src || "/images/servicos/servico-1.png"}
                          alt={servico.image?.alt || servico.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 420px"
                          className="object-cover object-center transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </Reveal>
                  </div>

                  {/* Coluna do Conteúdo */}
                  <div className="lg:col-span-7 flex flex-col justify-start">
                    <Reveal delay={0.1}>
                      {/* Título do Serviço */}
                      <h2 className="mb-5 font-display text-xl sm:text-2xl font-bold tracking-tight text-brand-dark">
                        {servico.title}
                      </h2>

                      {/* Descrição */}
                      <p className="mb-8 text-sm sm:text-[15px] leading-relaxed text-brand-darker font-normal whitespace-pre-line">
                        {servico.description}
                      </p>

                      {/* Grid de Detalhes / Especificações */}
                      {servico.details && servico.details.length > 0 && (
                        <div
                          className={`mb-8 grid gap-4 ${
                            servico.details.length === 1
                              ? "grid-cols-1 sm:max-w-xs"
                              : "grid-cols-1 sm:grid-cols-2"
                          }`}
                        >
                          {servico.details.map((detail, dIdx) => (
                            <div
                              key={dIdx}
                              className="flex flex-col justify-start rounded-2xl border border-brand-red/40 bg-white p-4 shadow-xs"
                            >
                              <div className="mb-2 flex items-center gap-2">
                                <Icon
                                  name={detail.icon}
                                  className="size-5 shrink-0 text-brand-red"
                                />
                                <span className="text-sm font-bold text-[#B22522]">
                                  {detail.label}
                                </span>
                              </div>
                              <p className="text-xs sm:text-sm font-normal leading-relaxed text-brand-darker whitespace-pre-line">
                                {detail.value}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Botão de Ação CTA */}
                      <div>
                        <Button
                          asChild
                          size="lg"
                          className="w-full sm:w-fit rounded-full bg-brand-red hover:bg-brand-red/90 text-white font-semibold shadow-md px-8 py-6 text-sm transition-all duration-300 hover:scale-105"
                        >
                          <LeadsterLink href={servico.cta?.href || "/contato"}>
                            {servico.cta?.label || "Quero falar sobre minha empresa"}
                          </LeadsterLink>
                        </Button>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
