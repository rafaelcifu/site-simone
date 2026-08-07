"use client";

import { usePathname, useRouter } from "next/navigation";
import { Globe, Check } from "lucide-react";

import { LOCALES, DEFAULT_LOCALE } from "@/content/locales";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher({ className }) {
  const pathname = usePathname();
  const router = useRouter();

  // Identifica o idioma atual a partir da rota (/en/..., /es/..., ou padrão /)
  const segments = pathname.split("/").filter(Boolean);
  const currentLang =
    segments.length > 0 && LOCALES.some((l) => l.code === segments[0])
      ? segments[0]
      : DEFAULT_LOCALE;

  const currentLocaleObj =
    LOCALES.find((l) => l.code === currentLang) || LOCALES[0];

  const handleLanguageChange = (targetLang) => {
    if (targetLang === currentLang) return;

    let newPathname = pathname;

    // Remove prefixo do idioma atual se for diferente do default
    if (currentLang !== DEFAULT_LOCALE && segments[0] === currentLang) {
      const rest = segments.slice(1).join("/");
      newPathname = rest ? `/${rest}` : "/";
    }

    // Adiciona o novo prefixo se o idioma alvo não for o default
    if (targetLang !== DEFAULT_LOCALE) {
      newPathname =
        newPathname === "/" ? `/${targetLang}` : `/${targetLang}${newPathname}`;
    }

    router.push(newPathname);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={`gap-2 font-medium ${className || ""}`}
          aria-label="Alterar idioma / Change language"
        >
          <span className="text-base" role="img" aria-label={currentLocaleObj.name}>
            {currentLocaleObj.flag}
          </span>
          <span className="uppercase text-xs font-semibold">{currentLocaleObj.shortName}</span>
          <Globe className="h-3.5 w-3.5 opacity-60 ml-0.5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {LOCALES.map((loc) => {
          const isSelected = loc.code === currentLang;
          return (
            <DropdownMenuItem
              key={loc.code}
              onClick={() => handleLanguageChange(loc.code)}
              className="flex items-center justify-between cursor-pointer py-2"
            >
              <span className="flex items-center gap-2 text-sm">
                <span className="text-base" role="img" aria-label={loc.name}>
                  {loc.flag}
                </span>
                <span>{loc.name}</span>
              </span>
              {isSelected && <Check className="h-4 w-4 text-primary" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
