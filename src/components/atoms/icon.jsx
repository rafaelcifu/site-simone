import { icons } from "@/lib/icons";
import { cn } from "@/lib/utils";

/**
 * Renderiza um icone do lucide pelo nome vindo de /content.
 * Se o nome nao estiver em lib/icons.js, nao renderiza nada.
 */
export function Icon({ name, className, ...props }) {
  const Cmp = icons[name];
  if (!Cmp) return null;
  return <Cmp className={cn("size-5", className)} aria-hidden="true" {...props} />;
}
