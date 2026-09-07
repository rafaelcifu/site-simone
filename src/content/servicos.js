import { DEFAULT_LOCALE } from "./locales";

/**
 * Conteúdo da página de Serviços estruturado para fidelidade ao Figma.
 */

export const servicosPageByLocale = {
  pt: {
    eyebrow: "Serviços",
    title: "4 formas de contar com Simone para fazer sua empresa crescer",
    description: "Escolha o formato que faz sentido para o momento da sua empresa.",
  },
  en: {
    eyebrow: "Services",
    title: "4 ways Simone can help your company grow",
    description: "Choose the format that best fits your company's current needs.",
  },
  es: {
    eyebrow: "Servicios",
    title: "4 formas de contar con Simone para hacer crecer tu empresa",
    description: "Elige el formato que mejor se adapte al momento actual de tu empresa.",
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
        "- Os desafios das marcas para conectar inovação à cultura e ao propósito da organização e posicionar produtos e serviços no mercado.\n\n- A falha é de comunicação: por que estamos perdendo valor, talentos e receita?\n\n- Reposicionamento de estratégias e argumentos de comunicação pela ótica da neurociência aplicada a vendas e atendimento.\n\n- Propósito de marca vende. Não é poesia nem conto de fadas: é direcionamento. Descubra o que pode mudar o jogo da operação da sua empresa.",
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
          label: "Pagamento",
          value: "Único por evento",
        },
        {
          icon: "Sparkles",
          label: "Metodologia aplicada",
          value: "JTBD e neurociência aplicada ao consumo e ao comportamento",
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
        "- Transformação digital não é apenas tecnologia. Introdução à cultura analítica para compreender e adotar a mentalidade digital na organização. Aplicação de metodologias ágeis e estudos de caso reais, criados por Simone Moura, para levar sua empresa ao futuro.\n\n- Vendas sob a ótica da neurociência: seu time comercial e de atendimento compreende como o cérebro do cliente reage durante a tomada de decisão de compra.",
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
          value: "2 dias",
        },
        {
          icon: "Target",
          label: "Público-alvo",
          value: "Gestores de empresas",
        },
        {
          icon: "CreditCard",
          label: "Pagamento",
          value: "Único por evento",
        },
        {
          icon: "Sparkles",
          label: "Metodologia aplicada",
          value:
            "Neurociência, neurobranding, neurovendas, economia comportamental e JTBD",
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
        "Para negócios e empreendedores, cada empresa é única. A estratégia transforma.\n\nMentoria personalizada que une diagnóstico, fortalecimento do core business, posicionamento de mercado e comunicação baseada na neurociência para gerar crescimento consistente e sustentável.",
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
            "7 encontros ao vivo com Simone Moura via Google Meet, com 2 horas de duração cada.",
        },
        {
          icon: "Target",
          label: "Público-alvo",
          value:
            "Gestores de pequenas e médias empresas de diversos setores da economia, pequenos e médios empreendedores, startups, profissionais em geral que precisam reposicionar seus negócios e estratégias.",
        },
        {
          icon: "CreditCard",
          label: "Modalidade de pagamento",
          value:
            "50% de sinal, conforme contrato e nota fiscal, e 50% ao final da mentoria.\n\nObservação: valor cobrado por participante.",
        },
        {
          icon: "Sparkles",
          label: "Metodologia aplicada",
          value:
            "• Ferramentas de gestão\n• Metodologia Jobs to Be Done\n• Estudos de caso\n• Exercícios customizados",
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
          body: "7 encontros ao vivo com Simone Moura via Google Meet, com 2 horas de duração cada.",
        },
      ],
      highlights: [
        "Diagnóstico e fortalecimento do core business",
        "Comunicação baseada na neurociência",
        "Metodologia Jobs to Be Done e estudos de caso",
      ],
    },
    {
      id: "branding",
      slug: "branding-e-marketing-estrategico",
      number: "4",
      title: "4. Branding e Marketing Estratégico (Gestão de Marca)",
      excerpt: "Reposicionamento real de empresas que querem crescer com consistência.",
      description:
        "Reposicionamento real de empresas que querem crescer com consistência. Um olhar para dentro da organização a fim de ressignificar seus caminhos.\n\nProjeto de branding e marketing estratégico com foco no DNA da marca, no reposicionamento e na ressignificação de estratégias para produtos e serviços alinhados à cultura e à essência da organização.",
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
            "6 meses, em formato presencial ou remoto, com gestores e lideranças da empresa contratante e metodologia própria.",
        },
        {
          icon: "Target",
          label: "Público-alvo",
          value: "Gestores e lideranças",
        },
        {
          icon: "CreditCard",
          label: "Pagamento",
          value: "Mensal",
        },
        {
          icon: "Sparkles",
          label: "Metodologia aplicada",
          value: "JTBD e neurociência aplicada ao consumo e ao comportamento",
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
          body: "6 meses, em formato presencial ou remoto, com gestores e lideranças da empresa contratante e metodologia própria.",
        },
      ],
      highlights: [
        "Foco no DNA da marca",
        "Alinhamento à cultura e à essência",
        "Metodologia JTBD e neurociência",
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
