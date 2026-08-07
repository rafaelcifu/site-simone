import { DEFAULT_LOCALE } from "./locales";

/**
 * Dados globais do site por idioma (identidade, contato, navegação e redes).
 */

export const siteByLocale = {
  pt: {
    name: "Simone Moura",
    shortName: "Simone Moura",
    url: "https://www.simonemoura.com.br",
    description:
      "Simone Moura une branding estratégico, neurociência aplicada ao consumo e Jobs to be Done para reposicionar marcas e destravar crescimento. +30 anos, +700 projetos.",
    tagline:
      "Crio estratégias para empresas com foco nas pessoas, na inovação e na transformação de mercados",
    locale: "pt-BR",
    ogLocale: "pt_BR",
  },
  en: {
    name: "Simone Moura",
    shortName: "Simone Moura",
    url: "https://www.simonemoura.com.br/en",
    description:
      "Simone Moura combines strategic branding, applied neuroscience, and Jobs to be Done to reposition brands and unlock growth. +30 years, +700 projects.",
    tagline:
      "Building human-centered strategies for business innovation and market transformation",
    locale: "en-US",
    ogLocale: "en_US",
  },
  es: {
    name: "Simone Moura",
    shortName: "Simone Moura",
    url: "https://www.simonemoura.com.br/es",
    description:
      "Simone Moura combina branding estratégico, neurociencia aplicada y Jobs to be Done para reposicionar marcas y desbloquear el crecimiento. +30 años, +700 proyectos.",
    tagline:
      "Estrategias empresariales con foco en las personas, la innovación y la transformación de mercados",
    locale: "es-ES",
    ogLocale: "es_ES",
  },
};

export const site = siteByLocale.pt;

export const contact = {
  email: "contato@simonemoura.com.br",
  phone: "+55 85 90000-0000",
  phoneDisplay: "(85) 90000-0000",
  whatsapp: "5585900000000",
  address: {
    street: "",
    city: "Fortaleza",
    state: "CE",
    stateName: "Ceará",
    zip: "",
    country: "BR",
  },
};

export const social = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/simonemoura",
    icon: "instagram",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/simonemoura",
    icon: "linkedin",
  },
];

export const mainNavByLocale = {
  pt: [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Serviços", href: "/servicos" },
    { label: "Metodologias", href: "/metodologias" },
    { label: "Contato", href: "/contato" },
  ],
  en: [
    { label: "Home", href: "/en" },
    { label: "About", href: "/en/about" },
    { label: "Services", href: "/en/services" },
    { label: "Methodologies", href: "/en/methodologies" },
    { label: "Contact", href: "/en/contact" },
  ],
  es: [
    { label: "Inicio", href: "/es" },
    { label: "Sobre mí", href: "/es/sobre" },
    { label: "Servicios", href: "/es/servicios" },
    { label: "Metodologías", href: "/es/metodologias" },
    { label: "Contacto", href: "/es/contacto" },
  ],
};

export const mainNav = mainNavByLocale.pt;

export const primaryCtaByLocale = {
  pt: { label: "Fale comigo", href: "/contato" },
  en: { label: "Get in touch", href: "/en/contact" },
  es: { label: "Contacto", href: "/es/contacto" },
};

export const primaryCta = primaryCtaByLocale.pt;

export const siteUiByLocale = {
  pt: {
    accessibility: { skipToContent: "Pular para o conteúdo" },
    header: {
      navigationLabel: "Principal",
      mobileNavigationLabel: "Principal (mobile)",
      openMenuLabel: "Abrir menu",
      languageLabel: "Idioma",
    },
    footer: {
      navigationLabel: "Rodapé",
      navigationTitle: "Navegação",
      contactTitle: "Contato",
      copyrightSymbol: "©",
      rights: "Todos os direitos reservados.",
    },
    ctaBand: {
      title: "Pronto para começar?",
      description: "Frase curta reforçando o próximo passo.",
    },
    notFound: {
      code: "404",
      title: "Página não encontrada",
      description: "O endereço que você tentou acessar não existe ou foi movido.",
      ctaLabel: "Voltar para o início",
      ctaHref: "/",
    },
    socialCard: {
      description:
        "Branding estratégico, neurociência aplicada ao consumo e Jobs to be Done.",
      stats: "+30 anos · +700 projetos entregues",
    },
  },
  en: {
    accessibility: { skipToContent: "Skip to content" },
    header: {
      navigationLabel: "Main",
      mobileNavigationLabel: "Main (mobile)",
      openMenuLabel: "Open menu",
      languageLabel: "Language",
    },
    footer: {
      navigationLabel: "Footer",
      navigationTitle: "Navigation",
      contactTitle: "Contact",
      copyrightSymbol: "©",
      rights: "All rights reserved.",
    },
    ctaBand: {
      title: "Ready to start?",
      description: "Short message highlighting the next step.",
    },
    notFound: {
      code: "404",
      title: "Page not found",
      description: "The page you are looking for does not exist or has been moved.",
      ctaLabel: "Back to home",
      ctaHref: "/en",
    },
    socialCard: {
      description:
        "Strategic branding, applied consumer neuroscience, and Jobs to be Done.",
      stats: "+30 years · +700 delivered projects",
    },
  },
  es: {
    accessibility: { skipToContent: "Saltar al contenido" },
    header: {
      navigationLabel: "Principal",
      mobileNavigationLabel: "Principal (móvil)",
      openMenuLabel: "Abrir menú",
      languageLabel: "Idioma",
    },
    footer: {
      navigationLabel: "Pie de página",
      navigationTitle: "Navegación",
      contactTitle: "Contacto",
      copyrightSymbol: "©",
      rights: "Todos los derechos reservados.",
    },
    ctaBand: {
      title: "¿Listo para comenzar?",
      description: "Frase corta reforzando el siguiente paso.",
    },
    notFound: {
      code: "404",
      title: "Página no encontrada",
      description: "La dirección que intentó acceder no existe o fue movida.",
      ctaLabel: "Volver al inicio",
      ctaHref: "/es",
    },
    socialCard: {
      description:
        "Branding estratégico, neurociencia aplicada al consumo y Jobs to be Done.",
      stats: "+30 años · +700 proyectos entregados",
    },
  },
};

export const siteUi = siteUiByLocale.pt;

export function getSiteContent(locale = DEFAULT_LOCALE) {
  const loc = siteByLocale[locale] ? locale : DEFAULT_LOCALE;
  return {
    site: siteByLocale[loc],
    contact,
    social,
    mainNav: mainNavByLocale[loc],
    primaryCta: primaryCtaByLocale[loc],
    siteUi: siteUiByLocale[loc],
  };
}
