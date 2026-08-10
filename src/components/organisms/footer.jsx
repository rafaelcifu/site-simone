"use client";

import Link from "next/link";

import { mainNav, site, siteUi, social } from "@/content/site";
import { Container } from "@/components/atoms/container";

const TwitterIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.547 12 3.547 12 3.547s-7.505 0-9.377.503A3.014 3.014 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.503 9.376.503 9.376.503s7.505 0 9.377-.503a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const WhatsappIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-1.125 0-2.703.332-2.703 1.86v1.834h3.394l-.402 3.666h-2.992v7.981a11.882 11.882 0 0 0 2.228.208C22.431 23.691 24 17.656 24 11.845 24 5.304 18.627 0 12 0 5.373 0 0 5.304 0 11.845c0 5.96 4.714 10.825 10.985 11.846h-.001a11.58 11.58 0 0 0-1.884 0z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const ICON_MAP = {
  twitter: TwitterIcon,
  youtube: YoutubeIcon,
  whatsapp: WhatsappIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
};

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8 items-start">
          
          {/* Coluna 1: Logo e Texto */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <Link href="/" aria-label={site.name} className="inline-block">
              <svg width="60" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 8C20 8 18 11 18 15C18 20 28 19 28 25C28 30 24 32 20 32C15 32 13 29 13 25" stroke="#E5484D" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M12 12C9 14 7 18 7 23C7 31 12 34 16 34" stroke="#E5484D" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </Link>
            <p className="text-[13px] text-neutral-300 leading-relaxed max-w-sm">
              {siteUi.footer.quote}
            </p>
          </div>

          {/* Coluna 2: Navegação (Centralizada) */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-center">
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

          {/* Coluna 3: Redes e Newsletter */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end gap-10">
            {/* Redes Sociais */}
            <div className="flex items-center gap-4">
              {social.map((item) => {
                const IconComponent = ICON_MAP[item.icon];
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#E5484D] transition-colors"
                    aria-label={item.label}
                  >
                    {IconComponent && <IconComponent className="h-5 w-5" />}
                  </a>
                );
              })}
            </div>

            {/* Newsletter */}
            <div className="flex flex-col items-center lg:items-end gap-4 w-full max-w-md">
              <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-white mb-2 text-center lg:text-right">
                {siteUi.footer.newsletterTitle}
              </h3>
              
              <form onSubmit={(e) => e.preventDefault()} className="w-full relative flex items-center bg-white rounded-full p-1 h-14">
                <input
                  type="email"
                  placeholder={siteUi.footer.newsletterPlaceholder}
                  className="flex-1 bg-transparent border-none text-neutral-900 placeholder:text-neutral-400 px-6 outline-none text-sm h-full"
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
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="mt-20 border-t border-white/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400">
            {siteUi.footer.copyrightText}
          </p>
          <Link
            href="/privacidade"
            className="text-xs text-[#E5484D] hover:underline underline-offset-4"
          >
            {siteUi.footer.privacyPolicy}
          </Link>
        </div>
      </Container>
    </footer>
  );
}
