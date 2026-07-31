"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { fadeUp, VIEWPORT } from "@/lib/motion";

/**
 * Anima um bloco quando ele entra na viewport.
 *
 * <Reveal>                       -> fade + subida
 * <Reveal delay={0.1}>
 * <Reveal variants={slideInLeft}>
 * <Reveal as="section" className="py-24">
 *
 * `as` aceita qualquer tag HTML (div, section, li, h2...).
 * Respeita `prefers-reduced-motion` automaticamente (ver globals.css).
 */
export function Reveal({
  as = "div",
  variants = fadeUp,
  delay = 0,
  className,
  children,
  ...props
}) {
  const Comp = motion[as];

  return (
    <Comp
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={variants}
      transition={delay ? { delay } : undefined}
      className={cn(className)}
      {...props}
    >
      {children}
    </Comp>
  );
}
