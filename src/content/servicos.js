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
      id: "branding",
      slug: "branding-e-marketing-estrategico",
      number: "1",
      title: "1. Branding e Marketing Estratégico (Gestão de Marca)",
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
      // Dados para rota dinâmica /servicos/[slug]
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
    {
      id: "workshops",
      slug: "oficinas-workshops-corporativos",
      number: "2",
      title: "2. Oficinas & Workshops Corporativos Customizados",
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
      number: "3",
      title: "3. Imersão Corporativa",
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
      id: "produtos-digitais",
      slug: "criacao-de-produtos-e-servicos-digitais",
      number: "4",
      title: "4. Criação de Produtos e Serviços 100% Digitais (via Caza Futuro)",
      excerpt: "Desenvolvimento ponta a ponta de produtos e serviços digitais em parceria com a Caza Futuro.",
      description:
        "Criação e desenvolvimento de produtos 100% digitais que transformam a vida dos consumidores e sejam capazes de levar as empresas ao futuro.\n\nIncluindo: descoberta do produto ideal (metodologia JTBD e ágeis) Posicionamento mercadológico, jornada do usuário, pesquisas junto ao público-alvo, identidade visual, conceito, visão estruturada de produto digital, desenvolvedores, especialistas em UX/UI, IA, integrações de sistemas e API´s e CRM etc.\nEstratégia de marketing digital (incluindo captação de leads).\nCriação publicitária com copywriting e performance digital.",
      image: {
        src: "/images/servicos/servico-4.png",
        alt: "Criação de Produtos Digitais - Simone Moura",
      },
      cta: {
        label: "Quero falar sobre minha empresa",
        href: "/contato",
      },
      details: [
        {
          icon: "Handshake",
          label: "Parceria",
          value: "Caza Futuro",
        },
      ],
      hero: {
        title: "Criação de Produtos e Serviços 100% Digitais",
        description:
          "Desenvolvimento ponta a ponta de produtos e serviços digitais em parceria com a Caza Futuro.",
      },
      sections: [
        {
          title: "Para quem é",
          body: "Empresas que desejam criar novos modelos de negócio digitais e plataformas escaláveis.",
        },
        {
          title: "Como funciona",
          body: "Do discovery ao go-to-market com equipe multidisciplinar especializada.",
        },
      ],
      highlights: [
        "Metodologia JTBD e discovery completo",
        "Design UX/UI, IA e engenharia",
        "Estratégia de marketing e performance",
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
