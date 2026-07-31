"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem, VIEWPORT } from "@/lib/motion";

/**
 * Cascata: os filhos <StaggerItem> entram um a um.
 * Use em grids de cards, listas de servicos, logos, etc.
 *
 * <Stagger className="grid gap-6 md:grid-cols-3">
 *   {itens.map((i) => (
 *     <StaggerItem key={i.slug}>
 *       <ServiceCard {...i} />
 *     </StaggerItem>
 *   ))}
 * </Stagger>
 */
export function Stagger({ as = "div", className, children, ...props }) {
  const Comp = motion[as];

  return (
    <Comp
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={staggerContainer}
      className={cn(className)}
      {...props}
    >
      {children}
    </Comp>
  );
}

export function StaggerItem({ as = "div", className, children, ...props }) {
  const Comp = motion[as];

  return (
    <Comp variants={staggerItem} className={cn(className)} {...props}>
      {children}
    </Comp>
  );
}
