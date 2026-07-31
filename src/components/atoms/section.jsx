import { cn } from "@/lib/utils";
import { Container } from "@/components/atoms/container";

const paddings = {
  none: "",
  sm: "py-12 md:py-16",
  base: "py-16 md:py-24",
  lg: "py-24 md:py-32",
};

const tones = {
  default: "bg-background",
  muted: "bg-secondary",
  inverted: "bg-primary text-primary-foreground",
};

/**
 * Casca padrao de uma secao da pagina: espacamento vertical, fundo e Container.
 *
 * <Section id="servicos" tone="muted">...</Section>
 * <Section padding="lg" contained={false}>  // full-bleed, cuida do Container voce
 */
export function Section({
  id,
  tone = "default",
  padding = "base",
  contained = true,
  className,
  containerClassName,
  children,
  ...props
}) {
  return (
    <section
      id={id}
      className={cn("relative", paddings[padding], tones[tone], className)}
      {...props}
    >
      {contained ? (
        <Container className={containerClassName}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}
