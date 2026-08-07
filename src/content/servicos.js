import { DEFAULT_LOCALE } from "./locales";

/**
 * Serviços por idioma com slugs localizados.
 */

export const servicosPageByLocale = {
  pt: {
    eyebrow: "Serviços",
    title: "Como posso ajudar",
    description: "Estratégia de branding, neurociência aplicada e inovação para o seu negócio.",
  },
  en: {
    eyebrow: "Services",
    title: "How I can help",
    description: "Strategic branding, applied neuroscience, and business innovation.",
  },
  es: {
    eyebrow: "Servicios",
    title: "Cómo posso ayudar",
    description: "Estrategia de branding, neurociencia aplicada e innovación empresarial.",
  },
};

export const servicosPage = servicosPageByLocale.pt;

export const servicosUiByLocale = {
  pt: {
    cardCtaLabel: "Saiba mais",
    detailEyebrow: "Serviço",
  },
  en: {
    cardCtaLabel: "Learn more",
    detailEyebrow: "Service",
  },
  es: {
    cardCtaLabel: "Saber más",
    detailEyebrow: "Servicio",
  },
};

export const servicosUi = servicosUiByLocale.pt;

export const servicosByLocale = {
  pt: [
    {
      id: "branding",
      slug: "servico-um",
      title: "Serviço um",
      excerpt: "Resumo de uma linha que aparece no card.",
      icon: "Sparkles",
      hero: {
        title: "Serviço um",
        description: "Parágrafo de abertura da página do serviço.",
      },
      sections: [
        {
          title: "Para quem é",
          body: "Descreva o público e a dor que esse serviço resolve.",
        },
        {
          title: "Como funciona",
          body: "Descreva o processo em linguagem simples.",
        },
      ],
      highlights: ["Benefício um", "Benefício dois", "Benefício três"],
    },
    {
      id: "neuroscience",
      slug: "servico-dois",
      title: "Serviço dois",
      excerpt: "Resumo de uma linha que aparece no card.",
      icon: "Compass",
      hero: {
        title: "Serviço dois",
        description: "Parágrafo de abertura da página do serviço.",
      },
      sections: [
        { title: "Para quem é", body: "..." },
        { title: "Como funciona", body: "..." },
      ],
      highlights: ["Benefício um", "Benefício dois"],
    },
    {
      id: "innovation",
      slug: "servico-tres",
      title: "Serviço três",
      excerpt: "Resumo de uma linha que aparece no card.",
      icon: "Target",
      hero: {
        title: "Serviço três",
        description: "Parágrafo de abertura da página do serviço.",
      },
      sections: [
        { title: "Para quem é", body: "..." },
        { title: "Como funciona", body: "..." },
      ],
      highlights: ["Benefício um", "Benefício dois"],
    },
  ],
  en: [
    {
      id: "branding",
      slug: "servico-um",
      title: "Service one",
      excerpt: "One-line summary for the card.",
      icon: "Sparkles",
      hero: {
        title: "Service one",
        description: "Opening paragraph for the service page.",
      },
      sections: [
        { title: "Who it is for", body: "Target audience description." },
        { title: "How it works", body: "Simple process description." },
      ],
      highlights: ["Benefit one", "Benefit two", "Benefit three"],
    },
    {
      id: "neuroscience",
      slug: "servico-dois",
      title: "Service two",
      excerpt: "One-line summary for the card.",
      icon: "Compass",
      hero: {
        title: "Service two",
        description: "Opening paragraph for the service page.",
      },
      sections: [
        { title: "Who it is for", body: "..." },
        { title: "How it works", body: "..." },
      ],
      highlights: ["Benefit one", "Benefit two"],
    },
    {
      id: "innovation",
      slug: "servico-tres",
      title: "Service three",
      excerpt: "One-line summary for the card.",
      icon: "Target",
      hero: {
        title: "Service three",
        description: "Opening paragraph for the service page.",
      },
      sections: [
        { title: "Who it is for", body: "..." },
        { title: "How it works", body: "..." },
      ],
      highlights: ["Benefit one", "Benefit two"],
    },
  ],
  es: [
    {
      id: "branding",
      slug: "servico-um",
      title: "Servicio uno",
      excerpt: "Resumen de una línea para la tarjeta.",
      icon: "Sparkles",
      hero: {
        title: "Servicio uno",
        description: "Párrafo de apertura de la página del servicio.",
      },
      sections: [
        { title: "Para quién es", body: "Descripción del público objetivo." },
        { title: "Cómo funciona", body: "Descripción simple del proceso." },
      ],
      highlights: ["Beneficio uno", "Beneficio dos", "Beneficio tres"],
    },
    {
      id: "neuroscience",
      slug: "servico-dois",
      title: "Servicio dos",
      excerpt: "Resumen de una línea para la tarjeta.",
      icon: "Compass",
      hero: {
        title: "Servicio dos",
        description: "Párrafo de apertura de la página del servicio.",
      },
      sections: [
        { title: "Para quién es", body: "..." },
        { title: "Cómo funciona", body: "..." },
      ],
      highlights: ["Beneficio uno", "Beneficio dos"],
    },
    {
      id: "innovation",
      slug: "servico-tres",
      title: "Servicio tres",
      excerpt: "Resumen de una línea para la tarjeta.",
      icon: "Target",
      hero: {
        title: "Servicio tres",
        description: "Párrafo de apertura de la página del servicio.",
      },
      sections: [
        { title: "Para quién es", body: "..." },
        { title: "Cómo funciona", body: "..." },
      ],
      highlights: ["Beneficio uno", "Beneficio dos"],
    },
  ],
};

export const servicos = servicosByLocale.pt;

export function getServico(slug, locale = DEFAULT_LOCALE) {
  const items = servicosByLocale[locale] || servicosByLocale[DEFAULT_LOCALE];
  return items.find((s) => s.slug === slug);
}

export function getServicosContent(locale = DEFAULT_LOCALE) {
  return {
    page: servicosPageByLocale[locale] || servicosPageByLocale[DEFAULT_LOCALE],
    ui: servicosUiByLocale[locale] || servicosUiByLocale[DEFAULT_LOCALE],
    items: servicosByLocale[locale] || servicosByLocale[DEFAULT_LOCALE],
  };
}
