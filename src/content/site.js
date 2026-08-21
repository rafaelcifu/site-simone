import { DEFAULT_LOCALE, LOCALES, getLocalizedHref } from "./locales";

/**
 * Dados globais do site por idioma (identidade, contato, navegação e redes).
 */

export const siteByLocale = {
  pt: {
    name: "Simone Moura",
    shortName: "Simone Moura",
    url: "https://www.simonemoura.com.br",
    description:
      "Simone Moura une branding estratégico, neurociência aplicada ao consumo e Jobs to be Done para reposicionar marcas e destravar crescimento. + de 35 anos, +700 projetos.",
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
      "Simone Moura combines strategic branding, applied neuroscience, and Jobs to be Done to reposition brands and unlock growth. +35 years, +700 projects.",
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
      "Simone Moura combina branding estratégico, neurociencia aplicada y Jobs to be Done para reposicionar marcas y desbloquear el crecimiento. + de 35 años, +700 proyectos.",
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
    label: "X",
    href: "https://x.com",
    icon: "twitter",
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: "youtube",
  },
  {
    label: "WhatsApp",
    href: "https://whatsapp.com",
    icon: "whatsapp",
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: "facebook",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: "instagram",
  },
];

/**
 * Navegação principal.
 *
 * O `path` é o caminho REAL da rota — o nome da pasta em src/app, sempre em
 * português — e o prefixo de idioma é aplicado por `getLocalizedHref`. Só o
 * RÓTULO é traduzido.
 *
 * Não escreva o href traduzido na mão (`/en/about`): a rota é `/en/sobre`, e
 * o menu inteiro do inglês já foi para 404 exatamente por isso. Item novo =
 * uma linha em `navRoutes` + o rótulo nos três idiomas.
 *
 * Item só entra aqui quando a página existe. ("Conteúdos" saiu por isso —
 * quando a rota existir, é só devolver a linha e os três rótulos.)
 */
const navRoutes = [
  { key: "home", path: "/" },
  { key: "sobre", path: "/sobre" },
  { key: "servicos", path: "/servicos" },
  { key: "metodologias", path: "/metodologias" },
];

const navLabels = {
  pt: {
    home: "Home",
    sobre: "Sobre",
    servicos: "Serviços",
    metodologias: "Metodologia",
  },
  en: {
    home: "Home",
    sobre: "About",
    servicos: "Services",
    metodologias: "Methodology",
  },
  es: {
    home: "Inicio",
    sobre: "Sobre mí",
    servicos: "Servicios",
    metodologias: "Metodología",
  },
};

export const mainNavByLocale = Object.fromEntries(
  LOCALES.map((loc) => [
    loc.code,
    navRoutes.map(({ key, path }) => ({
      label: navLabels[loc.code]?.[key] ?? navLabels[DEFAULT_LOCALE][key],
      href: getLocalizedHref(path, loc.code),
    })),
  ])
);

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
      rights: "Todos os direitos",
      copyrightText: "Simone Moura - 2026 - Todos os direitos",
      privacyPolicy: "Política de privacidade",
      quote: '"Eu crio estratégias para empresas com foco na transformação das pessoas e dos mercados. Sem desperdícios, sem distrações e com propósito verdadeiro."',
      newsletterTitle: "Inscreva-se na newsletter",
      newsletterPlaceholder: "nome@email.com.br",
      newsletterButton: "Inscreva-se"
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
      stats: "+ de 35 anos · +700 projetos entregues",
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
      stats: "+35 years · +700 delivered projects",
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
      stats: "+ de 35 años · +700 proyectos entregados",
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
