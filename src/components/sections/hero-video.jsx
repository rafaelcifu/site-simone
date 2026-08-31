"use client";

import { useRef, useEffect } from "react";

/**
 * HeroVideo — Client Component.
 *
 * Reproduz o vídeo de fundo da hero em loop contínuo sem cortes,
 * garantindo autoplay imediato e retomada após saída/retorno de aba.
 */
export function HeroVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      if (video.paused) {
        video.play().catch(() => {});
      }
    };

    playVideo();

    const handleVisibility = () => {
      if (!document.hidden) {
        playVideo();
      }
    };

    const handleEnded = () => {
      video.currentTime = 0;
      playVideo();
    };

    document.addEventListener("visibilitychange", handleVisibility);
    video.addEventListener("ended", handleEnded);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src="/video-simone-novo.mp4"
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
