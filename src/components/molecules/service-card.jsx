import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Icon } from "@/components/atoms/icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Card de servico. Hover eleva o card e desloca a seta.
 * O <Link> cobre o card inteiro via `after:absolute after:inset-0`.
 */
export function ServiceCard({ slug, title, excerpt, icon, className }) {
  return (
    <Card
      className={cn(
        "group relative h-full gap-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-foreground/20 hover:shadow-md",
        className
      )}
    >
      <CardHeader className="gap-3">
        {icon ? (
          <span className="flex size-11 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon name={icon} />
          </span>
        ) : null}
        <CardTitle className="text-lg">
          <Link
            href={`/servicos/${slug}`}
            className="after:absolute after:inset-0 focus-visible:outline-none"
          >
            {title}
          </Link>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <p className="text-sm text-pretty text-muted-foreground">{excerpt}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium">
          Saiba mais
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </CardContent>
    </Card>
  );
}
