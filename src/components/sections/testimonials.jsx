"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const testimonials = [
  {
    name: "Giacomo Brayner",
    role: "Sócio-diretor da Bando Propaganda",
    company: "Bando Propaganda",
    text: "Construção de valor, marcas com propósito. Há 12 anos atrás, a Simone Moura já tratava desses temas com uma desenvoltura impressionante, ela parece estar sempre a um passo à frente das coisas.",
    image: "/depoimentos/testimonial-avatar1.png",
  },
  {
    name: "Nome da segunda pessoa",
    role: "Cargo da segunda pessoa",
    company: "Empresa da segunda pessoa",
    text: "Digite aqui o depoimento da segunda pessoa.",
    image: "/depoimentos/testimonial-avatar2.png",
  },
  {
    name: "Nome da terceira pessoa",
    role: "Cargo da terceira pessoa",
    company: "Empresa da terceira pessoa",
    text: "Digite aqui o depoimento da terceira pessoa.",
    image: "/depoimentos/testimonial-avatar3.png",
  },
];

function getSlideIndex(index) {
  const total = testimonials.length;

  return (index + total) % total;
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((currentIndex) =>
      getSlideIndex(currentIndex + 1)
    );
  }, []);

  const previousSlide = useCallback(() => {
    setActiveIndex((currentIndex) =>
      getSlideIndex(currentIndex - 1)
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [nextSlide]);

  const activeTestimonial = testimonials[activeIndex];

  const previousTestimonial =
    testimonials[getSlideIndex(activeIndex - 1)];

  const nextTestimonial =
    testimonials[getSlideIndex(activeIndex + 1)];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12 lg:gap-16">
        {/* Coluna das imagens */}
        <div className="flex flex-col gap-5 lg:col-span-4">
          {/* Imagem anterior */}
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Ver depoimento anterior"
            className="relative h-40 w-full overflow-hidden rounded-2xl bg-neutral-200 opacity-70 transition hover:opacity-100"
          >
            <Image
              src={previousTestimonial.image}
              alt={`Foto de ${previousTestimonial.name}`}
              fill
              sizes="(max-width: 1024px) 100vw, 320px"
              className="object-cover grayscale"
            />
          </button>

          {/* Imagem principal */}
          <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-neutral-200 shadow-md">
            <Image
              key={activeTestimonial.image}
              src={activeTestimonial.image}
              alt={`Foto de ${activeTestimonial.name}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 320px"
              className="object-cover grayscale transition-opacity duration-500"
            />
          </div>

          {/* Imagem seguinte */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Ver próximo depoimento"
            className="relative h-40 w-full overflow-hidden rounded-2xl bg-neutral-200 opacity-70 transition hover:opacity-100"
          >
            <Image
              src={nextTestimonial.image}
              alt={`Foto de ${nextTestimonial.name}`}
              fill
              sizes="(max-width: 1024px) 100vw, 320px"
              className="object-cover grayscale"
            />
          </button>
        </div>

        {/* Coluna do texto */}
        <div className="lg:col-span-8">
          <h2 className="max-w-xl text-5xl font-bold leading-tight tracking-tight text-neutral-950 lg:text-6xl">
            Depoimentos de clientes
          </h2>

          <div className="mt-20">
            <p className="text-3xl font-semibold text-neutral-950">
              {activeTestimonial.company}
            </p>

            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-neutral-800">
              {activeTestimonial.text}
            </p>

            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-bold text-neutral-950">
                {activeTestimonial.name} —{" "}
                {activeTestimonial.role}
              </p>

              <div
                className="text-2xl tracking-[0.3em] text-yellow-400"
                aria-label="5 estrelas"
              >
                ★★★★★
              </div>
            </div>

            {/* Botões de navegação */}
            <div className="mt-14 flex gap-4">
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Depoimento anterior"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E5484D] text-2xl text-white transition hover:scale-110"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Próximo depoimento"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E5484D] text-2xl text-white transition hover:scale-110"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}