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
  en: [
    {
      id: "workshops",
      slug: "oficinas-workshops-corporativos",
      number: "1",
      title: "1. Customized Corporate Workshops",
      excerpt: "Hands-on 4-hour workshops focused on communication, brand purpose, and sales through consumer neuroscience.",
      description:
        "- Brand challenges in connecting innovation to corporate culture, purpose, and market positioning for products and services.\n\n- The communication breakdown: why are organizations losing market value, top talent, and revenue?\n\n- Repositioning communication strategies and arguments through consumer neuroscience applied to sales and customer service.\n\n- Brand purpose drives sales. It is neither poetry nor fairy tales: it is strategic direction. Discover what changes the game in your operations.",
      image: {
        src: "/images/servicos/servico-2.png",
        alt: "Customized Corporate Workshops - Simone Moura",
      },
      cta: {
        label: "I want to talk about my company",
        href: "/en/contato",
      },
      details: [
        {
          icon: "Clock",
          label: "Duration",
          value: "4-hour workshop with your team",
        },
        {
          icon: "Building",
          label: "Format",
          value: "In-person at client company",
        },
        {
          icon: "CreditCard",
          label: "Investment",
          value: "Single fee per event",
        },
        {
          icon: "Sparkles",
          label: "Methodology",
          value: "JTBD and neuroscience applied to consumer behavior",
        },
      ],
      hero: {
        title: "Customized Corporate Workshops",
        description:
          "Hands-on 4-hour workshops focused on communication, brand purpose, and sales through consumer neuroscience.",
      },
      sections: [
        {
          title: "Who it is for",
          body: "Teams and leaders needing to align narrative, corporate culture, and commercial arguments.",
        },
        {
          title: "How it works",
          body: "Immersive 4-hour in-person workshops with real dynamics.",
        },
      ],
      highlights: [
        "Innovation connected to corporate culture",
        "Neuroscience-backed sales arguments",
        "Brand purpose applied to everyday operations",
      ],
    },
    {
      id: "imersao",
      slug: "imersao-corporativa",
      number: "2",
      title: "2. Corporate Immersion",
      excerpt: "2-day executive immersion in digital transformation, analytical culture, and neuro-sales.",
      description:
        "- Digital transformation is not just about technology. Introduction to analytical culture to understand and adopt a digital mindset across your organization. Application of agile methodologies and proprietary real case studies by Simone Moura to guide your company into the future.\n\n- Sales through consumer neuroscience: your commercial and customer-facing teams learn how the customer's brain reacts during purchasing decisions.",
      image: {
        src: "/images/servicos/servico-3.png",
        alt: "Corporate Immersion - Simone Moura",
      },
      cta: {
        label: "I want to talk about my company",
        href: "/en/contato",
      },
      details: [
        {
          icon: "Clock",
          label: "Duration",
          value: "2 full days",
        },
        {
          icon: "Target",
          label: "Target audience",
          value: "Business executives and leadership",
        },
        {
          icon: "CreditCard",
          label: "Investment",
          value: "Single fee per event",
        },
        {
          icon: "Sparkles",
          label: "Methodology",
          value:
            "Neuroscience, neurobranding, neuro-sales, behavioral economics, and JTBD",
        },
      ],
      hero: {
        title: "Corporate Immersion",
        description:
          "2-day executive immersion in digital transformation, analytical culture, and neuro-sales.",
      },
      sections: [
        {
          title: "Who it is for",
          body: "Business leaders seeking to accelerate digital and commercial mindset.",
        },
        {
          title: "How it works",
          body: "Two full days of immersive sessions with real-world case studies.",
        },
      ],
      highlights: [
        "Analytical culture and digital mindset",
        "Neuro-sales and purchase decision drivers",
        "Proprietary real case studies",
      ],
    },
    {
      id: "mentoria",
      slug: "mentoria-estrategica",
      number: "3",
      title: "3. Strategic Mentorship",
      excerpt:
        "Tailored executive mentorship for businesses and founders focused on sustainable, structured growth.",
      description:
        "For businesses and founders, every enterprise is unique. Strategy is what transforms.\n\nA personalized mentorship program combining business diagnosis, core business strengthening, market positioning, and neuroscience-based communication to deliver consistent, long-term growth.",
      image: {
        src: "/images/servicos/servico-4.png",
        alt: "Strategic Mentorship - Simone Moura",
      },
      cta: {
        label: "I want to talk about my company",
        href: "/en/contato",
      },
      details: [
        {
          icon: "Clock",
          label: "Duration",
          value:
            "7 live 2-hour sessions with Simone Moura via Google Meet.",
        },
        {
          icon: "Target",
          label: "Target audience",
          value:
            "SME leaders across economic sectors, entrepreneurs, startups, and executives repositioning their business models and strategy.",
        },
        {
          icon: "CreditCard",
          label: "Payment terms",
          value:
            "50% upfront upon contract and invoice, and 50% at mentorship completion.\n\nNote: fee per participant.",
        },
        {
          icon: "Sparkles",
          label: "Methodology",
          value:
            "• Management frameworks\n• Jobs to Be Done framework\n• Case studies\n• Custom exercises",
        },
      ],
      hero: {
        title: "Strategic Mentorship",
        description:
          "Personalized mentorship combining diagnosis, core business reinforcement, market positioning, and neuroscience-based communication for sustainable growth.",
      },
      sections: [
        {
          title: "Who it is for",
          body: "SME business leaders, entrepreneurs, startups, and professionals seeking strategic repositioning.",
        },
        {
          title: "How it works",
          body: "7 live 2-hour sessions with Simone Moura via Google Meet.",
        },
      ],
      highlights: [
        "Diagnosis and core business reinforcement",
        "Neuroscience-backed strategic communication",
        "Jobs to Be Done methodology and practical cases",
      ],
    },
    {
      id: "branding",
      slug: "branding-e-marketing-estrategico",
      number: "4",
      title: "4. Strategic Branding & Brand Management",
      excerpt: "Authentic repositioning for companies committed to structured, long-term market growth.",
      description:
        "Authentic repositioning for companies committed to structured growth. An internal deep dive to redefine organizational pathways.\n\nA comprehensive strategic branding and marketing project focused on brand DNA, market repositioning, and strategic alignment of products and services with the essence and culture of the company.",
      image: {
        src: "/images/servicos/servico-1.png",
        alt: "Strategic Branding and Marketing - Simone Moura",
      },
      cta: {
        label: "I want to talk about my company",
        href: "/en/contato",
      },
      details: [
        {
          icon: "Clock",
          label: "Duration",
          value:
            "6 months, in-person or remote, working with corporate leaders through proprietary methodology.",
        },
        {
          icon: "Target",
          label: "Target audience",
          value: "Executives and organizational leadership",
        },
        {
          icon: "CreditCard",
          label: "Investment",
          value: "Monthly retainer",
        },
        {
          icon: "Sparkles",
          label: "Methodology",
          value: "JTBD and consumer neuroscience applied to behavior and market dynamics",
        },
      ],
      hero: {
        title: "Strategic Branding & Brand Management",
        description:
          "Authentic repositioning for companies seeking structured growth. An internal deep dive to redefine strategic pathways.",
      },
      sections: [
        {
          title: "Who it is for",
          body: "Corporate leaders and executives seeking consistent market repositioning.",
        },
        {
          title: "How it works",
          body: "6-month engagement, in-person or remote, with corporate leadership using proprietary methodology.",
        },
      ],
      highlights: [
        "Focus on brand DNA",
        "Alignment with corporate essence and culture",
        "JTBD methodology and applied neuroscience",
      ],
    },
  ],
  es: [
    {
      id: "workshops",
      slug: "oficinas-workshops-corporativos",
      number: "1",
      title: "1. Talleres y Workshops Corporativos Personalizados",
      excerpt: "Talleres prácticos de 4 horas centrados en comunicación, propósito de marca y ventas desde la neurociencia.",
      description:
        "- Desafíos de las marcas para conectar la innovación con la cultura y el propósito corporativo, posicionando productos y servicios en el mercado.\n\n- La falla es de comunicación: ¿por qué estamos perdiendo valor, talento e ingresos?\n\n- Reposicionamiento de estrategias y argumentos comerciales bajo la neurociencia aplicada a ventas y atención.\n\n- El propósito de marca vende. No es poesía ni cuento de hadas: es dirección. Descubre lo que puede transformar la operación de tu empresa.",
      image: {
        src: "/images/servicos/servico-2.png",
        alt: "Talleres y Workshops Corporativos - Simone Moura",
      },
      cta: {
        label: "Quiero hablar sobre mi empresa",
        href: "/es/contato",
      },
      details: [
        {
          icon: "Clock",
          label: "Duración",
          value: "Taller de 4 horas con el equipo",
        },
        {
          icon: "Building",
          label: "Formato",
          value: "Presencial en la empresa contratante",
        },
        {
          icon: "CreditCard",
          label: "Inversión",
          value: "Tarifa única por evento",
        },
        {
          icon: "Sparkles",
          label: "Metodología",
          value: "JTBD y neurociencia aplicada al consumo y comportamiento",
        },
      ],
      hero: {
        title: "Talleres y Workshops Corporativos Personalizados",
        description:
          "Talleres prácticos de 4 horas centrados en comunicación, propósito de marca y ventas desde la neurociencia.",
      },
      sections: [
        {
          title: "Para quién es",
          body: "Equipos y directivos que necesitan alinear discurso, cultura y argumentos de ventas.",
        },
        {
          title: "Cómo funciona",
          body: "Talleres inmersivos presenciales de 4 horas con dinámicas reales.",
        },
      ],
      highlights: [
        "Innovación conectada con la cultura",
        "Argumentos de venta basados en neurociencia",
        "Propósito aplicado a la operación diaria",
      ],
    },
    {
      id: "imersao",
      slug: "imersao-corporativa",
      number: "2",
      title: "2. Inmersión Corporativa",
      excerpt: "Inmersión de 2 días en transformación digital, cultura analítica y neuroventas para directivos.",
      description:
        "- La transformación digital no es solo tecnología. Introducción a la cultura analítica para comprender y adoptar la mentalidad digital en la organización. Aplicación de metodologías ágiles y casos de estudio reales creados por Simone Moura para proyectar tu empresa hacia el futuro.\n\n- Ventas bajo la neurociencia: tu equipo comercial y de atención comprende cómo reacciona el cerebro del cliente durante la decisión de compra.",
      image: {
        src: "/images/servicos/servico-3.png",
        alt: "Inmersión Corporativa - Simone Moura",
      },
      cta: {
        label: "Quiero hablar sobre mi empresa",
        href: "/es/contato",
      },
      details: [
        {
          icon: "Clock",
          label: "Duración",
          value: "2 días completos",
        },
        {
          icon: "Target",
          label: "Público objetivo",
          value: "Directivos y líderes empresariales",
        },
        {
          icon: "CreditCard",
          label: "Inversión",
          value: "Tarifa única por evento",
        },
        {
          icon: "Sparkles",
          label: "Metodología",
          value:
            "Neurociencia, neurobranding, neuroventas, economía del comportamiento y JTBD",
        },
      ],
      hero: {
        title: "Inmersión Corporativa",
        description:
          "Inmersión de 2 días en transformación digital, cultura analítica y neuroventas para directivos.",
      },
      sections: [
        {
          title: "Para quién es",
          body: "Directivos que buscan acelerar la mentalidad digital y comercial.",
        },
        {
          title: "Cómo funciona",
          body: "Dos días completos de inmersión con casos de estudio reales.",
        },
      ],
      highlights: [
        "Cultura analítica y mentalidad digital",
        "Neuroventas y factores de decisión de compra",
        "Casos de estudio autorales y reales",
      ],
    },
    {
      id: "mentoria",
      slug: "mentoria-estrategica",
      number: "3",
      title: "3. Mentoría Estratégica",
      excerpt:
        "Mentoría personalizada para empresas y emprendedores centrada en un crecimiento sólido y sostenible.",
      description:
        "Para empresas y emprendedores, cada organización es única. La estrategia es lo que transforma.\n\nMentoría personalizada que combina diagnóstico, fortalecimiento del core business, posicionamiento de mercado y comunicación basada en neurociencia para generar crecimiento consistente y sostenible.",
      image: {
        src: "/images/servicos/servico-4.png",
        alt: "Mentoría Estratégica - Simone Moura",
      },
      cta: {
        label: "Quiero hablar sobre mi empresa",
        href: "/es/contato",
      },
      details: [
        {
          icon: "Clock",
          label: "Duración",
          value:
            "7 encuentros en vivo con Simone Moura vía Google Meet, de 2 horas cada uno.",
        },
        {
          icon: "Target",
          label: "Público objetivo",
          value:
            "Directivos de pequeñas y medianas empresas, emprendedores, startups y líderes que necesitan reposicionar sus negocios y estrategias.",
        },
        {
          icon: "CreditCard",
          label: "Modalidad de pago",
          value:
            "50% de anticipo según contrato y factura, y 50% al finalizar la mentoría.\n\nNota: tarifa por participante.",
        },
        {
          icon: "Sparkles",
          label: "Metodología",
          value:
            "• Herramientas de gestión\n• Metodología Jobs to Be Done\n• Casos de estudio\n• Ejercicios prácticos personalizados",
        },
      ],
      hero: {
        title: "Mentoría Estratégica",
        description:
          "Mentoría personalizada que une diagnóstico, fortalecimiento del core business, posicionamiento de mercado y comunicación basada en neurociencia para un crecimiento sostenible.",
      },
      sections: [
        {
          title: "Para quién es",
          body: "Directivos de pequeñas y medianas empresas, emprendedores, startups y profesionales en proceso de reposicionamiento.",
        },
        {
          title: "Cómo funciona",
          body: "7 encuentros en vivo con Simone Moura vía Google Meet, de 2 horas cada uno.",
        },
      ],
      highlights: [
        "Diagnóstico y fortalecimiento del core business",
        "Comunicación estratégica basada en neurociencia",
        "Metodología Jobs to Be Done y casos de estudio",
      ],
    },
    {
      id: "branding",
      slug: "branding-e-marketing-estrategico",
      number: "4",
      title: "4. Branding y Marketing Estratégico (Gestión de Marca)",
      excerpt: "Reposicionamiento real para empresas que buscan crecer con solidez y consistencia.",
      description:
        "Reposicionamiento real para empresas que buscan crecer con consistencia. Una mirada profunda hacia adentro para resignificar sus caminos.\n\nProyecto de branding y marketing estratégico con foco en el ADN de marca, reposicionamiento y alineación estratégica de productos y servicios con la esencia y cultura de la organización.",
      image: {
        src: "/images/servicos/servico-1.png",
        alt: "Branding y Marketing Estratégico - Simone Moura",
      },
      cta: {
        label: "Quiero hablar sobre mi empresa",
        href: "/es/contato",
      },
      details: [
        {
          icon: "Clock",
          label: "Duración",
          value:
            "6 meses, en formato presencial o remoto, con directivos y líderes mediante metodología propia.",
        },
        {
          icon: "Target",
          label: "Público objetivo",
          value: "Directivos y líderes corporativos",
        },
        {
          icon: "CreditCard",
          label: "Inversión",
          value: "Tarifa mensual",
        },
        {
          icon: "Sparkles",
          label: "Metodología",
          value: "JTBD y neurociencia aplicada al consumo y al comportamiento",
        },
      ],
      hero: {
        title: "Branding y Marketing Estratégico (Gestión de Marca)",
        description:
          "Reposicionamiento real para empresas que buscan crecer con solidez. Una mirada interna para resignificar sus caminos estratégicos.",
      },
      sections: [
        {
          title: "Para quién es",
          body: "Directivos y líderes de empresas que buscan reposicionamiento consistente en el mercado.",
        },
        {
          title: "Cómo funciona",
          body: "6 meses, en formato presencial o remoto, con directivos y líderes de la empresa mediante metodología propia.",
        },
      ],
      highlights: [
        "Foco en el ADN de la marca",
        "Alineación con la cultura y la esencia",
        "Metodología JTBD y neurociencia aplicada",
      ],
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
