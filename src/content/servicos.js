import { DEFAULT_LOCALE } from "./locales";

/**
 * Conteúdo da página de Serviços estruturado para fidelidade ao Figma.
 */

export const servicosPageByLocale = {
  pt: {
    eyebrow: "Serviços",
    title: "04 formas de ter a Simone para fazer sua empresa crescer",
    description: "Escolha o formato que faz sentido para o momento da sua empresa.",
  },
  en: {
    eyebrow: "Services",
    title: "04 ways to have Simone help your company grow",
    description: "Choose the format that makes sense for your company's moment.",
  },
  es: {
    eyebrow: "Servicios",
    title: "04 formas de contar con Simone para hacer crecer tu empresa",
    description: "Elige el formato que tenga sentido para el momento de tu empresa.",
  },
};

export const servicosUiByLocale = {
  pt: {
    cardCtaLabel: "Quero falar sobre minha empresa",
    detailEyebrow: "Serviço",
  },
  en: {
    cardCtaLabel: "I want to talk about my company",
    detailEyebrow: "Service",
  },
  es: {
    cardCtaLabel: "Quiero hablar sobre mi empresa",
    detailEyebrow: "Servicio",
  },
};

export const servicosByLocale = {
  pt: [
    {
      id: "workshops",
      slug: "oficinas-workshops-corporativos",
      number: "1",
      title: "1. Oficinas & Workshops Corporativos Customizados",
      excerpt: "Oficinas práticas de 4 horas focadas em comunicação, propósito e vendas pela ótica da neurociência.",
      description:
        "- Os desafios das marcas para a inovação conectada À cultura e propósito da organização para posicionar produtos e serviços no mercado.\n\n- A falha é de Comunicação! Porque estamos perdendo valor, talentos e receita.\n\n- Reposicionando as estratégias e argumentos de comunicação pela ótica da neurociência para vendas e atendimento.\n\n- Propósito de marca vende. Não é poesia e nem conto de fadas. É direcionamento. Como sua empresa pode descobrir o que muda o jogo da operação.",
      image: {
        src: "/images/servicos/servico-2.png",
        alt: "Oficinas & Workshops Corporativos - Simone Moura",
      },
      cta: {
        label: "Quero falar sobre minha empresa",
        href: "/contato",
      },
      details: [
        {
          icon: "Clock",
          label: "Duração",
          value: "4 horas de oficina com colaboradores",
        },
        {
          icon: "Building",
          label: "Formato",
          value: "Presencial na empresa contratante",
        },
        {
          icon: "CreditCard",
          label: "Pagamento:",
          value: "Único por evento",
        },
        {
          icon: "Sparkles",
          label: "Metodologia aplicada:",
          value: "JTBD e Neurociência aplicada ao consumo e comportamento",
        },
      ],
      hero: {
        title: "Oficinas & Workshops Corporativos Customizados",
        description:
          "Oficinas práticas de 4 horas focadas em comunicação, propósito e vendas pela ótica da neurociência.",
      },
      sections: [
        {
          title: "Para quem é",
          body: "Equipes e colaboradores que precisam alinhar discurso, cultura e argumentos de vendas.",
        },
        {
          title: "Como funciona",
          body: "Oficinas imersivas presenciais de 4 horas com dinâmicas reais.",
        },
      ],
      highlights: [
        "Inovação conectada à cultura",
        "Argumentos de vendas por neurociência",
        "Propósito aplicado à operação",
      ],
    },
    {
      id: "imersao",
      slug: "imersao-corporativa",
      number: "2",
      title: "2. Imersão Corporativa",
      excerpt: "Imersão de 2 dias em transformação digital, cultura analítica e neurovendas para gestores.",
      description:
        "- Transformação digital não é tecnologia! Introdução à cultura analítica para compreensão e adoção da mentalidade digital dentro da organização. Aplicação de metodologias ágeis e estudos de caso reais (criados por Simone Moura) para levar sua empresa para o futuro.\n\n- Vendas sob a ótica da neurociência: Seu time comercial e de atendimento entendendo como o cérebro do cliente reage à tomada de decisão de compra.",
      image: {
        src: "/images/servicos/servico-3.png",
        alt: "Imersão Corporativa - Simone Moura",
      },
      cta: {
        label: "Quero falar sobre minha empresa",
        href: "/contato",
      },
      details: [
        {
          icon: "Clock",
          label: "Duração",
          value: "02 dias",
        },
        {
          icon: "Target",
          label: "Público-Alvo",
          value: "Gestores de empresa",
        },
        {
          icon: "CreditCard",
          label: "Pagamento:",
          value: "Único por evento",
        },
        {
          icon: "Sparkles",
          label: "Metodologia aplicada:",
          value:
            "Neurociência, Neurobranding, Neurovendas, Economia comportamental e JTBD",
        },
      ],
      hero: {
        title: "Imersão Corporativa",
        description:
          "Imersão de 2 dias em transformação digital, cultura analítica e neurovendas para gestores.",
      },
      sections: [
        {
          title: "Para quem é",
          body: "Gestores de empresas que desejam acelerar a mentalidade digital e comercial.",
        },
        {
          title: "Como funciona",
          body: "Dois dias completos de imersão com estudos de caso reais.",
        },
      ],
      highlights: [
        "Cultura analítica e mentalidade digital",
        "Neurovendas e decisão de compra",
        "Estudos de caso autorais",
      ],
    },
    {
      id: "mentoria",
      slug: "mentoria-estrategica",
      number: "3",
      title: "3. Mentoria estratégica",
      excerpt:
        "Mentoria personalizada para negócios e empreendedores focada em crescimento consistente e sustentável.",
      description:
        "Para negócios e empreendedores cada empresa é única. A estratégia transforma.\n\nMentoria personalizada que une diagnóstico, fortalecimento do core business, posicionamento de mercado e comunicação baseada na neurociência para gerar crescimento consistente e sustentável.",
      image: {
        src: "/images/servicos/servico-4.png",
        alt: "Mentoria Estratégica - Simone Moura",
      },
      cta: {
        label: "Quero falar sobre minha empresa",
        href: "/contato",
      },
      details: [
        {
          icon: "Clock",
          label: "Duração",
          value:
            "07 encontros via googlemeet “ao vivo” com Simone Moura com 02 horas de duração cada.",
        },
        {
          icon: "Target",
          label: "Público-Alvo",
          value:
            "Gestores de pequenas e médias empresas de diversos setores da economia, pequenos e médios empreendedores, startups, profissionais em geral que precisam reposicionar seus negócios e estratégias.",
        },
        {
          icon: "CreditCard",
          label: "Modalidade de pagamento:",
          value:
            "50% de sinal vide contrato e NF e 50% no fim da mentoria.\n\nObservação: valor cobrado por participante.",
        },
        {
          icon: "Sparkles",
          label: "Metodologia aplicada:",
          value:
            "• Ferramentas de gestão\n• Metodologia Jobs to be done\n• Estudos de caso\n• Exercícios customizados.",
        },
      ],
      hero: {
        title: "Mentoria estratégica",
        description:
          "Mentoria personalizada que une diagnóstico, fortalecimento do core business, posicionamento de mercado e comunicação baseada na neurociência para gerar crescimento consistente e sustentável.",
      },
      sections: [
        {
          title: "Para quem é",
          body: "Gestores de pequenas e médias empresas, empreendedores, startups e profissionais em geral que precisam reposicionar seus negócios e estratégias.",
        },
        {
          title: "Como funciona",
          body: "07 encontros via Google Meet ao vivo com Simone Moura com 02 horas de duração cada.",
        },
      ],
      highlights: [
        "Diagnóstico e fortalecimento do core business",
        "Comunicação baseada na neurociência",
        "Metodologia Jobs to be done e estudos de caso",
      ],
    },
    {
      id: "branding",
      slug: "branding-e-marketing-estrategico",
      number: "4",
      title: "4. Branding e Marketing Estratégico (Gestão de Marca)",
      excerpt: "Reposicionamento real de empresas que querem crescer com consistência.",
      description:
        "Reposicionamento real de empresas que querem crescer com consistência. Um olhar por dentro da organização para ressignificar seus caminhos.\n\nProjeto em Branding e marketing estratégico (*) com foco no D.N.A da marca, do (re) posicionamento e ressignificado de estratégias para produtos e serviços alinhado à cultura e a essência da organização.",
      image: {
        src: "/images/servicos/servico-1.png",
        alt: "Branding e Marketing Estratégico - Simone Moura",
      },
      cta: {
        label: "Quero falar sobre minha empresa",
        href: "/contato",
      },
      details: [
        {
          icon: "Clock",
          label: "Duração",
          value:
            "06 meses (presencial ou remoto) realizado dentro da empresa contratante. (metodologia própria) com gestores e lideranças.",
        },
        {
          icon: "Target",
          label: "Público-Alvo",
          value: "Gestores e lideranças",
        },
        {
          icon: "CreditCard",
          label: "Pagamento:",
          value: "Mensal",
        },
        {
          icon: "Sparkles",
          label: "Metodologia aplicada:",
          value: "JTBD e Neurociência aplicada ao consumo e comportamento",
        },
      ],
      hero: {
        title: "Branding e Marketing Estratégico (Gestão de Marca)",
        description:
          "Reposicionamento real de empresas que querem crescer com consistência. Um olhar por dentro da organização para ressignificar seus caminhos.",
      },
      sections: [
        {
          title: "Para quem é",
          body: "Gestores e lideranças de empresas que buscam reposicionamento consistente no mercado.",
        },
        {
          title: "Como funciona",
          body: "06 meses (presencial ou remoto) realizado dentro da empresa contratante com metodologia própria.",
        },
      ],
      highlights: [
        "Foco no D.N.A da marca",
        "Alinhado à cultura e essência",
        "Metodologia JTBD e Neurociência",
      ],
    },
  ],
  en: [],
  es: [],
};

// Fallback para EN e ES usando os mesmos IDs e slugs
servicosByLocale.en = servicosByLocale.pt;
servicosByLocale.es = servicosByLocale.pt;

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
