"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { getSiteContent, social } from "@/content/site";
import { DEFAULT_LOCALE, LOCALES, getLocalizedHref } from "@/content/locales";
import { Container } from "@/components/atoms/container";

const TwitterIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.547 12 3.547 12 3.547s-7.505 0-9.377.503A3.014 3.014 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.503 9.376.503 9.376.503s7.505 0 9.377-.503a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const WhatsappIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-1.125 0-2.703.332-2.703 1.86v1.834h3.394l-.402 3.666h-2.992v7.981a11.882 11.882 0 0 0 2.228.208C22.431 23.691 24 17.656 24 11.845 24 5.304 18.627 0 12 0 5.373 0 0 5.304 0 11.845c0 5.96 4.714 10.825 10.985 11.846h-.001a11.58 11.58 0 0 0-1.884 0z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const ICON_MAP = {
  twitter: TwitterIcon,
  youtube: YoutubeIcon,
  whatsapp: WhatsappIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
};

// Flag para controle de exibição da newsletter no footer (preservada para ativação futura)
const SHOW_NEWSLETTER = false;

export function Footer() {
  const pathname = usePathname();
  const segments = pathname?.split("/").filter(Boolean) || [];
  const currentLang =
    segments.length > 0 && LOCALES.some((l) => l.code === segments[0])
      ? segments[0]
      : DEFAULT_LOCALE;

  const { mainNav, site, siteUi } = getSiteContent(currentLang);

  return (
    <footer className="bg-black py-16 text-white lg:py-24">
      <Container>
        <div className="grid grid-cols-1 items-start gap-16 lg:col-span-12 lg:grid-cols-12 lg:gap-8">
          {/* Coluna 1: Logo e texto */}
          <div className="flex flex-col gap-8 lg:col-span-4">
            <Link
              href={currentLang === DEFAULT_LOCALE ? "/" : `/${currentLang}`}
              aria-label={site.name}
              className="inline-block transition-opacity hover:opacity-80"
            >
              <Image
                src="/logo-novo.png"
                alt="Simone Moura"
                width={180}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="max-w-sm text-[13px] leading-relaxed text-neutral-300">
              {siteUi.footer.quote}
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="flex flex-col items-center lg:col-span-4 lg:items-center">
            <nav className="flex flex-col items-center gap-4">
              {mainNav.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-[#E5484D] ${
                    index === 0 ? "text-[#E5484D]" : "text-white/80"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Coluna 3: Redes sociais e newsletter */}
          <div className="flex flex-col items-center gap-10 lg:col-span-4 lg:items-end">
            {/* Redes sociais */}
            <div className="flex items-center gap-4">
              {social.map((item) => {
                const IconComponent = ICON_MAP[item.icon];

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white transition-colors hover:text-[#E5484D]"
                    aria-label={item.label}
                  >
                    {IconComponent && <IconComponent className="h-5 w-5" />}
                  </a>
                );
              })}
            </div>

            {/* Newsletter (oculto temporariamente; preservado para reativação futura) */}
            {SHOW_NEWSLETTER && (
              <div className="flex w-full max-w-md flex-col items-center gap-4 lg:items-end">
                <h3 className="mb-2 text-center text-2xl font-bold tracking-tight text-white lg:text-right lg:text-3xl">
                  {siteUi.footer.newsletterTitle}
                </h3>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="relative flex h-14 w-full items-center rounded-full bg-white p-1"
                >
                  <input
                    type="email"
                    placeholder={siteUi.footer.newsletterPlaceholder}
                    className="h-full flex-1 border-none bg-transparent px-6 text-sm text-neutral-900 outline-none placeholder:text-neutral-400"
                    required
                  />

                  <button
                    type="submit"
                    className="h-full rounded-full bg-[#E5484D] px-6 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-95"
                  >
                    {siteUi.footer.newsletterButton}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Linha divisória */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 sm:flex-row">
          <p className="text-xs text-neutral-400">
            {siteUi.footer.copyrightText}
          </p>

          <Link
            href={getLocalizedHref("/privacidade", currentLang)}
            className="text-xs text-[#E5484D] underline-offset-4 hover:underline"
          >
            {siteUi.footer.privacyPolicy}
          </Link>
        </div>
      </Container>
    </footer>
  );
}