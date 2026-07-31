import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Junta classes condicionais e resolve conflitos do Tailwind.
 * Use SEMPRE que um componente aceitar `className` de fora.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
