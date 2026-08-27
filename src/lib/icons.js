/**
 * Mapa explicito de icones do lucide-react.
 *
 * Por que um mapa e nao import dinamico: `import * as lucide` puxa o pacote
 * inteiro (~1.500 icones) para o bundle. Aqui so entra o que e usado.
 *
 * Para usar um icone novo em /content: importe ele aqui e adicione no mapa.
 */
import {
  ArrowRight,
  Building,
  Check,
  Clock,
  Compass,
  CreditCard,
  GitBranch,
  Handshake,
  Heart,
  Layers,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

export const icons = {
  ArrowRight,
  Building,
  Check,
  Clock,
  Compass,
  CreditCard,
  GitBranch,
  Handshake,
  Heart,
  Layers,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
};

/** Retorna o componente do icone pelo nome, ou null se nao estiver no mapa. */
export function getIcon(name) {
  return icons[name] ?? null;
}
