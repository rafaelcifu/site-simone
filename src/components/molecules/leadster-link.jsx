"use client";

import Link from "next/link";

/**
 * Abre o chatbot em cliques comuns e preserva o href como fallback caso o
 * script externo ainda nao esteja disponivel ou o usuario abra uma nova aba.
 */
export function LeadsterLink({ href, onClick, ref, ...props }) {
  function handleClick(event) {
    onClick?.(event);

    const isModifiedClick =
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey;

    if (event.defaultPrevented || isModifiedClick) return;

    try {
      if (typeof window.neurolead?.open !== "function") return;

      window.neurolead.open();
      event.preventDefault();
      event.stopPropagation();
    } catch {
      // O href continua sendo o fallback se o script de terceiros falhar.
    }
  }

  return (
    <Link
      ref={ref}
      href={href}
      data-leadster-cta="true"
      onClick={handleClick}
      {...props}
    />
  );
}
