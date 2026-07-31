import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

/**
 * Cabecalho padrao de secao: eyebrow + titulo + descricao, ja animado.
 *
 * <SectionHeading
 *   eyebrow="Areas de atuacao"
 *   title="Como podemos ajudar"
 *   description="..."
 *   align="center"
 * />
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: TitleTag = "h2",
  className,
}) {
  return (
    <Reveal
      className={cn(
        "flex max-w-2xl flex-col gap-3",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      {eyebrow ? (
        <span className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
          {eyebrow}
        </span>
      ) : null}

      <TitleTag className="font-display text-3xl leading-tight font-semibold text-balance md:text-4xl">
        {title}
      </TitleTag>

      {description ? (
        <p className="text-base text-pretty text-muted-foreground md:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
