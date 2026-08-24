"use client";

import { useRef, useEffect } from "react";

/**
 * HeroVideo — Client Component (folha).
 *
 * Problemas resolvidos:
 * 1. Flash preto no fim do vídeo → RAF a 60fps faz seek 1s antes do fim.
 * 2. Vídeo some ao voltar ao topo após scroll → IntersectionObserver detecta
 *    re-entrada no viewport e força play(); evento `pause` captura qualquer
 *    pausa inesperada do browser e retoma imediatamente.
 * 3. Tab/janela em background → visibilitychange retoma ao voltar.
 */

const SEEK_BEFORE = 1.0; // segundos antes do fim para fazer o seek preventivo

export function HeroVideo() {
  const videoRef = useRef(null);
  const rafRef = useRef(null);
  const isVisibleRef = useRef(true); // controla se o elemento está no viewport

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    /* ─── helpers ─────────────────────────────────────────────── */
    const safePlay = () => {
      if (!video.paused) return;
      video.play().catch(() => {});
    };

    /* ─── RAF: monitora o tempo e previne frame preto no fim ──── */
    const tick = () => {
      if (
        video.duration > 0 &&
        video.currentTime >= video.duration - SEEK_BEFORE
      ) {
        video.currentTime = 0.05;
        safePlay();
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    const startRAF = () => {
      if (!rafRef.current) rafRef.current = requestAnimationFrame(tick);
    };

    const stopRAF = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    /* ─── IntersectionObserver: detecta entrada/saída do viewport */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisibleRef.current = true;
            safePlay();
            startRAF();
          } else {
            isVisibleRef.current = false;
            // Não pausamos manualmente — deixamos o browser gerenciar
            // mas paramos o RAF para não desperdiçar CPU fora do viewport
            stopRAF();
          }
        });
      },
      { threshold: 0.01 } // basta 1% visível para retomar
    );

    observer.observe(video);

    /* ─── Evento `pause`: captura qualquer pausa inesperada ────── */
    const handlePause = () => {
      // Só retoma se o elemento estiver visível e a tab ativa
      if (isVisibleRef.current && !document.hidden) {
        // Pequeno delay para deixar o browser terminar seu ciclo
        setTimeout(safePlay, 50);
      }
    };

    /* ─── Evento `ended`: fallback final ───────────────────────── */
    const handleEnded = () => {
      video.currentTime = 0.05;
      safePlay();
    };

    /* ─── visibilitychange: tab voltou ao foco ─────────────────── */
    const handleVisibility = () => {
      if (!document.hidden && isVisibleRef.current) {
        safePlay();
      }
    };

    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);
    document.addEventListener("visibilitychange", handleVisibility);

    /* ─── Início: toca e inicia RAF quando metadata disponível ─── */
    const init = () => {
      safePlay();
      startRAF();
    };

    if (video.readyState >= 1) {
      init();
    } else {
      video.addEventListener("loadedmetadata", init, { once: true });
    }

    /* ─── Cleanup ───────────────────────────────────────────────── */
    return () => {
      stopRAF();
      observer.disconnect();
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src="/novo-video-simone-header.mp4"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
      className="absolute inset-0 h-full w-full object-cover object-center"
    />
  );
}
