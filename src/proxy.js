import { NextResponse } from "next/server";
import { LOCALES, DEFAULT_LOCALE } from "./content/locales";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // Arquivos públicos devem ser servidos diretamente,
  // sem passar pelo redirecionamento de idioma.
  const isPublicFile =
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    pathname === "/favicon.ico" ||
    pathname === "/sitemap.xml" ||
    pathname === "/robots.txt" ||
    pathname === "/manifest.webmanifest" ||
    /\.(?:mp4|webm|ogg|mov|m4v|png|jpg|jpeg|svg|ico|webp|gif|woff|woff2|ttf|css|js|json)$/i.test(
      pathname
    );

  if (isPublicFile) {
    return NextResponse.next();
  }

  // O idioma padrão é servido SEM prefixo (/sobre, não /pt/sobre). Como o
  // Next também responde em /pt/sobre, as duas URLs existiriam com o mesmo
  // conteúdo — conteúdo duplicado. O 301 elege uma só.
  if (pathname === `/${DEFAULT_LOCALE}` || pathname.startsWith(`/${DEFAULT_LOCALE}/`)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(`/${DEFAULT_LOCALE}`.length) || "/";
    return NextResponse.redirect(url, 301);
  }

  // Verifica se a URL já possui um locale
  const pathnameHasLocale = LOCALES.some(
    (loc) =>
      pathname.startsWith(`/${loc.code}/`) ||
      pathname === `/${loc.code}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Reescreve somente páginas sem locale
  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname}`;

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|manifest.webmanifest).*)",
  ],
};