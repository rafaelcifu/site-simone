/**
 * Configuração central de i18n (multi-idiomas).
 * Suporta Português (pt-BR), Inglês (en), Espanhol (es).
 */

export const DEFAULT_LOCALE = "pt";

export const LOCALES = [
  {
    code: "pt",
    name: "Português",
    shortName: "PT",
    flag: "🇧🇷",
    locale: "pt-BR",
    ogLocale: "pt_BR",
    /** Rótulo do primeiro item da trilha de navegação (JSON-LD BreadcrumbList). */
    homeLabel: "Início",
  },
  {
    code: "en",
    name: "English",
    shortName: "EN",
    flag: "🇺🇸",
    locale: "en-US",
    ogLocale: "en_US",
    homeLabel: "Home",
  },
  {
    code: "es",
    name: "Español",
    shortName: "ES",
    flag: "🇪🇸",
    locale: "es-ES",
    ogLocale: "es_ES",
    homeLabel: "Inicio",
  },
];

export const LOCALE_MAP = Object.fromEntries(
  LOCALES.map((loc) => [loc.code, loc])
);

/**
 * Retorna as informações do locale informado ou do padrão.
 */
export function getLocaleInfo(code) {
  return LOCALE_MAP[code] || LOCALE_MAP[DEFAULT_LOCALE];
}

/**
 * Gera um link localizado respeitando a linguagem.
 */
export function getLocalizedHref(path, locale = DEFAULT_LOCALE) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) {
    return cleanPath;
  }
  return `/${locale}${cleanPath === "/" ? "" : cleanPath}`;
}
