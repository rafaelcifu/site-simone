"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { getSiteContent } from "@/content/site";
import { LOCALES, DEFAULT_LOCALE } from "@/content/locales";
import { NavLink } from "@/components/molecules/nav-link";
import { LanguageSwitcher } from "@/components/molecules/language-switcher";
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
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  const currentLang =
    segments.length > 0 && LOCALES.some((l) => l.code === segments[0])
      ? segments[0]
      : DEFAULT_LOCALE;

  const { mainNav, siteUi } = getSiteContent(currentLang);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div
        className={cn(
          "mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full bg-white/90 px-4 md:px-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-md transition-all duration-300 pointer-events-auto",
          scrolled ? "translate-y-0" : "translate-y-2"
        )}
      >
        {/* Logo desktop */}
        <Link
          href={currentLang === DEFAULT_LOCALE ? "/" : `/${currentLang}`}
          className="flex items-center transition-opacity duration-200 hover:opacity-70"
        >
          <Image
            src="/logo-novo.png"
            alt="Simone Moura"
            width={180}
            height={50}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Navegação desktop */}
        <nav
          aria-label={siteUi.header.navigationLabel}
          className="hidden items-center gap-6 md:flex"
        >
          {mainNav.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-600 hover:text-brand-dark"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Ações desktop */}
        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher />

          <Button
            asChild
            className="rounded-full bg-brand-red hover:bg-brand-red/90 text-white font-semibold shadow-md px-6"
          >
            <Link href="/contato">Fale com a Simone</Link>
          </Button>
        </div>

        {/* Menu mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label={siteUi.header.openMenuLabel}
                className="text-brand-dark"
              >
                <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-72 flex flex-col justify-between"
            >
              <div>
                <SheetHeader className="mb-6 mt-4">
                  <SheetTitle className="text-left">
                    <Image
                      src="/logo-novo.png"
                      alt="Simone Moura"
                      width={160}
                      height={45}
                      priority
                      className="h-9 w-auto object-contain"
                    />
                  </SheetTitle>
                </SheetHeader>

                <nav
                  aria-label={siteUi.header.mobileNavigationLabel}
                  className="flex flex-col gap-1 px-2"
                >
                  {mainNav.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <NavLink
                        href={item.href}
                        className="py-3 text-base text-neutral-600"
                      >
                        {item.label}
                      </NavLink>
                    </SheetClose>
                  ))}
                </nav>
              </div>

              <div className="flex flex-col gap-3 px-2 pb-6">
                <SheetClose asChild>
                  <Button
                    asChild
                    className="w-full rounded-full bg-brand-red text-white"
                  >
                    <Link href="/contato">Fale com a Simone</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}