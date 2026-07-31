import { cn } from "@/lib/utils";

/**
 * Largura maxima + gutters do site. TODA secao deve usar.
 * Nao repita `max-w-... mx-auto px-...` solto nas secoes.
 */
export function Container({ as: Comp = "div", className, ...props }) {
  return (
    <Comp
      className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}
      {...props}
    />
  );
}
