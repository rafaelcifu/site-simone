import Link from "next/link";

import { site, siteUi } from "@/content/site";
import { Section } from "@/components/atoms/section";
import { Button } from "@/components/ui/button";

// 404 nunca deve ser indexada.
// `metadataBase` aqui porque esta rota fica fora de /[locale] e nao herda o
// do layout — sem ele o Next resolve as URLs sociais em localhost no build.
export const metadata = {
  metadataBase: new URL(site.url),
  title: siteUi.notFound.title,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Section padding="lg" className="flex min-h-[60vh] items-center">
      <div className="flex max-w-md flex-col gap-4">
        <span className="font-display text-5xl font-semibold">
          {siteUi.notFound.code}
        </span>
        <h1 className="font-display text-2xl font-semibold">
          {siteUi.notFound.title}
        </h1>
        <p className="text-muted-foreground">
          {siteUi.notFound.description}
        </p>
        <Button asChild className="mt-2 self-start">
          <Link href={siteUi.notFound.ctaHref}>{siteUi.notFound.ctaLabel}</Link>
        </Button>
      </div>
    </Section>
  );
}
