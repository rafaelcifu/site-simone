"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { mainNav, site, siteUi, social } from "@/content/site";
import { Container } from "@/components/atoms/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/10 bg-brand-dark text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Coluna 1: Identidade & Logo */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link href="/" className="font-display text-2xl font-bold tracking-tight text-white">
              {site.name}
            </Link>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              {site.description}
            </p>
          </div>

          {/* Coluna 2: NavegaÃ§Ã£o */}
          <div className="lg:col-span-3">
            <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              NavegaÃ§Ã£o
            </p>
            <ul className="space-y-2.5">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Newsletter */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <p className="text-sm font-semibold text-white uppercase tracking-wider">
              Inscreva-se na newsletter
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="bg-white/10 border-white/10 text-white placeholder:text-neutral-500 rounded-full h-11 px-4 text-xs focus-visible:ring-[#E3504D]"
              />
              <Button type="submit" size="icon" className="rounded-full bg-brand-red hover:bg-brand-red/90 h-11 w-11 shrink-0 text-white">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            Â© {year} {site.name}. {siteUi.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            {social.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors duration-200"
                aria-label={item.label}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
