"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { mainNav, primaryCta, site } from "@/content/site";
import { Container } from "@/components/atoms/container";
import { NavLink } from "@/components/molecules/nav-link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Header ganha fundo e borda depois de sair do topo.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // O menu mobile fecha sozinho ao navegar: cada link esta dentro de
  // <SheetClose asChild>. Nao adicione um useEffect com o pathname aqui.

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6 md:h-20">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight transition-opacity duration-200 hover:opacity-70"
        >
          {site.shortName}
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {mainNav.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link href={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Abrir menu">
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle className="font-display text-left">
                {site.shortName}
              </SheetTitle>
            </SheetHeader>

            <nav aria-label="Principal (mobile)" className="flex flex-col gap-1 px-4">
              {mainNav.map((item) => (
                <SheetClose asChild key={item.href}>
                  <NavLink href={item.href} className="py-3 text-base">
                    {item.label}
                  </NavLink>
                </SheetClose>
              ))}
            </nav>

            <div className="mt-2 px-4">
              <SheetClose asChild>
                <Button asChild className="w-full">
                  <Link href={primaryCta.href}>{primaryCta.label}</Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
