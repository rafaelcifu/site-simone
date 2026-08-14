"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

function wrap(index, total) {
  return (index + total) % total;
}

function Stars({ count, total = 5 }) {
  return (
    <div className="flex gap-1" aria-label={`${count} de ${total} estrelas`}>
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={
            i < count ? "text-2xl text-yellow-400" : "text-2xl text-neutral-300"
          }
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export function Testimonials({ data }) {
  const items = data?.items ?? [];
  const total = items.length;

  const [activeIndex, setActiveIndex] = useState(0);

  const next = useCallback(() => {
    setActiveIndex((i) => wrap(i + 1, total));
  }, [total]);

  const prev = useCallback(() => {
    setActiveIndex((i) => wrap(i - 1, total));
  }, [total]);

  // autoplay — pausa se total === 0
  useEffect(() => {
    if (total === 0) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next, total]);

  if (total === 0) return null;

  const active = items[activeIndex];
  const prevItem = items[wrap(activeIndex - 1, total)];
  const nextItem = items[wrap(activeIndex + 1, total)];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12 lg:gap-16">
        {/* ── Coluna das imagens ─────────────────────────────── */}
        <div className="flex flex-col gap-5 lg:col-span-4">
          {/* Imagem anterior — clicável para navegar */}
          <button
            type="button"
            onClick={prev}
            aria-label="Ver depoimento anterior"
            className="group relative h-40 w-full overflow-hidden rounded-2xl bg-neutral-200 opacity-60 transition-opacity duration-300 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E5484D]"
          >
            <Image
              src={prevItem.image}
              alt={`Foto de ${prevItem.author}`}
              fill
              sizes="(max-width: 1024px) 100vw, 320px"
              className="object-cover grayscale transition-transform duration-500 group-hover:scale-105"
            />
          </button>

          {/* Imagem principal */}
          <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-neutral-200 shadow-md">
            <Image
              key={active.image}
              src={active.image}
              alt={`Foto de ${active.author}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 320px"
              className="object-cover grayscale transition-opacity duration-500"
            />
          </div>

          {/* Imagem seguinte — clicável para navegar */}
          <button
            type="button"
            onClick={next}
            aria-label="Ver próximo depoimento"
            className="group relative h-40 w-full overflow-hidden rounded-2xl bg-neutral-200 opacity-60 transition-opacity duration-300 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E5484D]"
          >
            <Image
              src={nextItem.image}
              alt={`Foto de ${nextItem.author}`}
              fill
              sizes="(max-width: 1024px) 100vw, 320px"
              className="object-cover grayscale transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        </div>

        {/* ── Coluna do texto ───────────────────────────────── */}
        <div className="lg:col-span-8">
          <h2 className="max-w-xl text-5xl font-bold leading-tight tracking-tight text-neutral-950 lg:text-6xl">
            {data.title}
          </h2>

          <div className="mt-20 min-h-[260px] transition-all duration-300">
            <p className="text-3xl font-semibold text-neutral-950">
              {active.company}
            </p>

            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-neutral-800">
              {active.quote}
            </p>

            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-bold text-neutral-950">
                {active.author}
                {active.role && (
                  <> &mdash; <span className="font-normal">{active.role}</span></>
                )}
              </p>

              <Stars count={active.stars} />
            </div>

            {/* Botões de navegação */}
            <div className="mt-14 flex items-center gap-4">
              <button
                type="button"
                onClick={prev}
                aria-label="Depoimento anterior"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E5484D] text-2xl text-white transition-transform duration-200 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E5484D]"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Próximo depoimento"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E5484D] text-2xl text-white transition-transform duration-200 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E5484D]"
              >
                ›
              </button>

              {/* Indicadores de posição */}
              <div className="ml-2 flex gap-2" aria-hidden="true">
                {items.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? "w-6 bg-[#E5484D]"
                        : "w-2 bg-neutral-300 hover:bg-neutral-400"
                    }`}
                    aria-label={`Ir para depoimento ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}