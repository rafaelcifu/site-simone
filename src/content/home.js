import { DEFAULT_LOCALE } from "./locales";

export const homeContentByLocale = {
  pt: {
    hero: {
      title: "Simone Moura",
      subtitle: {
        part1: "Eu crio ",
        highlight1: "estratégia para empresas com foco nas pessoas, na inovação e na transformação de mercados",
        part2: ". Quer o meu apoio para destravar o seu crescimento e da sua empresa?",
      },
      primaryCta: { label: "Conheça a minha trajetória", href: "/sobre" },
      image: { src: "/simone-headset-hero.png", alt: "Simone Moura" },
    },
    manifesto: {
      taglinePrefix: "SIMONE MOURA",
      taglineSuffix: " • ESTRATÉGIA DE MARCA",
      title: {
        part1: "Em tempo de ",
        highlight1: "IA",
        part2: ", ",
        highlight2: "IoT",
        part3: ", ",
        highlight3: "Machine Learning",
        part4: " e tanta pressa por inovação",
      },
      description:
        "Muitas empresas estão perdendo suas melhores pessoas e a oportunidade de se posicionarem de maneira clara e atitudinal porque estão se distraindo com o que não vale a pena. Muito mais do que perder dinheiro, estão tomando decisões fora de propósito organizacional.",
      image: { src: "/office-chair.png", alt: "Manifesto Simone Moura" },
    },
    aboutSection: {
      tagline: "SOBRE",
      name: "Simone Moura",
      leftImage: "/simone-stage-left.png",
      paragraph1:
        "A Ping Pong Estratégia é a primeira empresa do Nordeste do Brasil focada em gestão de marcas e comunicação pela neurociência.",
      paragraph2:
        "Com mais de 700 projetos entregues em todo o Brasil para diversos segmentos tais como: Saúde e wellness, mercado financeiro, agronegócio, canal distribuidor, setor de alimentos, shopping centers, construção civil e incorporadoras, setor industrial, veículos de comunicação e mídia, agências de publicidade dentre outros.",
      paragraph3:
        "Experiências internacionais: Universidade de Berlim e London Business School.",
      cta: { label: "Conheça a história da Simone", href: "/sobre" },
    },
    statsSection: {
      title:
        "Muito mais que 700 projetos entregues. Quer marcas que gerem a verdadeira mudança de hábitos no seu consumidor e no seu cliente?",
      description:
        "A Ping Pong Estratégia une branding, neurociência e JTBD para criar posicionamentos atitudinais que aceleram o crescimento das empresas.",
      items: [
        {
          value: "+30",
          label: "Anos dedicados à gestão de marcas e estratégia",
        },
        {
          value: "+700",
          label: "Projetos entregues em todo o Brasil para diversos segmentos",
        },
        {
          value: "+2B",
          label: "Faturamento gerado",
        },
      ],
    },
    cases: {
      title: "Cases memoráveis e em evolução",
      subtitle: "Projetos que valem a pena compartilhar",
      items: [
        {
          id: "esmaltec",
          title: "Esmaltec Eletrodomésticos",
          description:
            "Empresa com mais de 60 anos de atuação no Brasil e no exterior, setor de linha branca.",
          image: "/case-esmaltec.png",
          href: "/servicos",
        },
        {
          id: "medeiros",
          title: "Medeiros Distribuidora",
          description:
            "Projeto de rebranding da marca onde foi revisitada toda a essência e cultura.",
          image: "/case-medeiros.png",
          href: "/servicos",
        },
        {
          id: "clementino",
          title: "Grupo Clementino Fraga",
          description:
            "Empresa de 55 anos com atuação em todo o estado do Ceará",
          image: "/case-clementino.png",
          href: "/servicos",
        },
        {
          id: "bando",
          title: "Bando de Criação",
          description:
            "Agência premiada internacionalmente e uma das referências em publicidade em todo o país",
          image: "/case-bando.png",
          href: "/servicos",
        },
      ],
    },
    products: {
      title: "Produtos",
      items: [
        {
          id: "branding",
          title: "Projeto em Branding Estratégico e Posicionamento de mercado",
          description:
            "Reposicionamento de marca e de produtos com foco na descoberta do D.N.A e essência da marca cultura organizacional.",
          duration: "Duração: 06 meses dentro da organização.",
        },
        {
          id: "workshops",
          title: "Workshops Corporativos com colaboradores e lideranças",
          bullets: [
            "Cultura com Propósito (Colaboradores entendendo a essência da Marca)",
            "Como criar valor real para o cliente em tempos de inovação, tecnologia e IA",
            "Posicione sua marca sob a ótica da metodologia do trabalho a ser feito (JTBD)",
            "Técnicas de neurovendas para times de atendimento e de vendas — Construindo narrativas que o cliente entende.",
          ],
          duration: "Duração: 04 horas",
        },
        {
          id: "immersao",
          title: "Imersão corporativa",
          description:
            "Como o cérebro humano entende o que a sua marca diz - neurociência aplicada ao branding, marketing e ao processo de tomada de decisão na jornada de compras - estudos de caso e dinâmicas em grupo. (pelo preceito da economia comportamental e pela neurociência)",
          duration: "Duração: 02 dias",
        },
      ],
    },
    testimonials: {
      title: "Depoimentos de clientes",
      avatars: [
        { src: "/testimonial-avatar1.png", name: "Hotel Sonata" },
        { src: "/testimonial-avatar2.png", name: "Bando Propaganda" },
        { src: "/testimonial-avatar3.png", name: "Max" },
      ],
      current: {
        company: "Bando Propaganda",
        quote:
          "Construção de valor, marcas com propósito. Há 12 anos atrás, a Simone Moura já tratava desses temas com uma desenvoltura impressionante, ela parece estar sempre a um passo à frente das coisas.",
        author: "Giacomo Brayner - Sócio-diretor da Bando Propaganda",
        rating: 5,
      },
    },
    finalCta: {
      title: 'A sua marca já sabe quem ela é. O problema é que o mercado ainda não."',
      cta: { label: "Fale com a Simone", href: "/contato" },
      image: { src: "/simone-cta-cutout.png", alt: "Simone Moura" },
    },
  },
  en: {
    hero: {
      title: "Simone Moura",
      subtitle: {
        part1: "I build ",
        highlight1: "strategies for companies focused on people, innovation, and market transformation",
        part2: ". Want my support to unlock your growth and your company's growth?",
      },
      primaryCta: { label: "Discover my journey", href: "/en/about" },
      image: { src: "/simone-headset-hero.png", alt: "Simone Moura" },
    },
    manifesto: {
      taglinePrefix: "SIMONE MOURA",
      taglineSuffix: " • BRAND STRATEGY",
      title: {
        part1: "In an era of ",
        highlight1: "AI",
        part2: ", ",
        highlight2: "IoT",
        part3: ", ",
        highlight3: "Machine Learning",
        part4: " and rush for innovation",
      },
      description:
        "Many companies are losing their best people and the opportunity to position themselves clearly because they are distracted by what doesn't matter. Far beyond losing money, they are making decisions outside organizational purpose.",
      image: { src: "/office-chair.png", alt: "Simone Moura Manifesto" },
    },
    aboutSection: {
      tagline: "ABOUT",
      name: "Simone Moura",
      leftImage: "/simone-stage-left.png",
      paragraph1:
        "Ping Pong Estratégia is the first firm in Northeastern Brazil focused on brand management and communication powered by neuroscience.",
      paragraph2:
        "Over 700 delivered projects across Brazil in sectors such as healthcare, finance, agribusiness, retail, food, construction, industrial, and media.",
      paragraph3:
        "International experience: Berlin University and London Business School.",
      cta: { label: "Learn Simone's story", href: "/en/about" },
    },
    statsSection: {
      title:
        "Much more than 700 delivered projects. Want brands that create real habit change for your consumers and clients?",
      description:
        "Ping Pong Estratégia combines branding, neuroscience, and JTBD to build attitudinal positioning that accelerates business growth.",
      items: [
        { value: "+30", label: "Years dedicated to brand strategy" },
        { value: "+700", label: "Delivered projects across Brazil" },
        { value: "+$2B", label: "Revenue generated" },
      ],
    },
    cases: {
      title: "Memorable & evolving cases",
      subtitle: "Projects worth sharing",
      items: [
        {
          id: "esmaltec",
          title: "Esmaltec Appliances",
          description:
            "Home appliance manufacturer with over 60 years of history in Brazil and abroad.",
          image: "/case-esmaltec.png",
          href: "/en/services",
        },
        {
          id: "medeiros",
          title: "Medeiros Distribution",
          description:
            "Brand rebranding project revisiting company essence and culture.",
          image: "/case-medeiros.png",
          href: "/en/services",
        },
        {
          id: "clementino",
          title: "Grupo Clementino Fraga",
          description:
            "55-year-old enterprise operating across Ceará state.",
          image: "/case-clementino.png",
          href: "/en/services",
        },
        {
          id: "bando",
          title: "Bando de Criação",
          description:
            "Internationally awarded advertising agency and industry benchmark.",
          image: "/case-bando.png",
          href: "/en/services",
        },
      ],
    },
    products: {
      title: "Products",
      items: [
        {
          id: "branding",
          title: "Strategic Branding & Market Positioning Project",
          description:
            "Brand and product repositioning focusing on discovering brand DNA, essence, and organizational culture.",
          duration: "Duration: 06 months embedded.",
        },
        {
          id: "workshops",
          title: "Corporate Workshops for Leaders and Teams",
          bullets: [
            "Purposeful culture (employees understanding brand essence)",
            "Creating real customer value in the era of technology and AI",
            "Positioning your brand through Jobs to be Done (JTBD)",
            "Neurosales techniques for sales teams — building clear narratives.",
          ],
          duration: "Duration: 04 hours",
        },
        {
          id: "immersao",
          title: "Corporate Immersion",
          description:
            "How the human brain perceives your brand — applied neuroscience for branding, marketing, and buyer journey decision-making.",
          duration: "Duration: 02 days",
        },
      ],
    },
    testimonials: {
      title: "Client Testimonials",
      avatars: [
        { src: "/testimonial-avatar1.png", name: "Hotel Sonata" },
        { src: "/testimonial-avatar2.png", name: "Bando Propaganda" },
        { src: "/testimonial-avatar3.png", name: "Max" },
      ],
      current: {
        company: "Bando Propaganda",
        quote:
          "Value creation, purpose-driven brands. 12 years ago, Simone Moura was already handling these topics with impressive fluency. She always seems to be one step ahead.",
        author: "Giacomo Brayner - Managing Partner at Bando Propaganda",
        rating: 5,
      },
    },
    finalCta: {
      title: 'Your brand already knows who it is. The problem is the market doesn\'t yet."',
      cta: { label: "Get in touch with Simone", href: "/en/contact" },
      image: { src: "/simone-cta-cutout.png", alt: "Simone Moura" },
    },
  },
  es: {
    hero: {
      title: "Simone Moura",
      subtitle: {
        part1: "Yo creo ",
        highlight1: "estrategias para empresas con foco en las personas, la innovación y la transformación de mercados",
        part2: ". ¿Quieres mi apoyo para desbloquear el crecimiento de tu empresa?",
      },
      primaryCta: { label: "Conoce mi trayectoria", href: "/es/sobre" },
      image: { src: "/simone-headset-hero.png", alt: "Simone Moura" },
    },
    manifesto: {
      taglinePrefix: "SIMONE MOURA",
      taglineSuffix: " • ESTRATEGIA DE MARCA",
      title: {
        part1: "En tiempos de ",
        highlight1: "IA",
        part2: ", ",
        highlight2: "IoT",
        part3: ", ",
        highlight3: "Machine Learning",
        part4: " y tanta prisa por innovar",
      },
      description:
        "Muchas empresas están perdiendo a sus mejores personas y la oportunidad de posicionarse claramente por distraerse con lo que no importa. Más allá de perder dinero, están tomando decisiones fuera del propósito organizacional.",
      image: { src: "/office-chair.png", alt: "Manifiesto Simone Moura" },
    },
    aboutSection: {
      tagline: "SOBRE",
      name: "Simone Moura",
      leftImage: "/simone-stage-left.png",
      paragraph1:
        "Ping Pong Estratégia es la primera firma del noreste de Brasil enfocada en gestión de marcas y comunicación basada en neurociencia.",
      paragraph2:
        "Más de 700 proyectos entregados en salud, finanzas, agronegocio, alimentos y medios.",
      paragraph3:
        "Experiencia internacional: Universidad de Berlín y London Business School.",
      cta: { label: "Conoce la historia de Simone", href: "/es/sobre" },
    },
    statsSection: {
      title:
        "Mucho más que 700 proyectos entregados. ¿Quieres marcas que generen un verdadero cambio de hábitos en tu consumidor?",
      description:
        "Ping Pong Estratégia une branding, neurociencia y JTBD para crear posicionamientos que aceleran el crecimiento empresarial.",
      items: [
        { value: "+30", label: "Años dedicados a la estrategia de marca" },
        { value: "+700", label: "Proyectos entregados en todo Brasil" },
        { value: "+$2B", label: "Ingresos generados" },
      ],
    },
    cases: {
      title: "Casos memorables en evolución",
      subtitle: "Proyectos que valen la pena compartir",
      items: [
        {
          id: "esmaltec",
          title: "Esmaltec Electrodomésticos",
          description:
            "Empresa con más de 60 años de trayectoria en Brasil y el exterior.",
          image: "/case-esmaltec.png",
          href: "/es/servicios",
        },
        {
          id: "medeiros",
          title: "Medeiros Distribuidora",
          description:
            "Proyecto de rebranding donde se revisitó la esencia de la marca.",
          image: "/case-medeiros.png",
          href: "/es/servicios",
        },
        {
          id: "clementino",
          title: "Grupo Clementino Fraga",
          description:
            "Empresa de 55 años con presencia en todo el estado de Ceará.",
          image: "/case-clementino.png",
          href: "/es/servicios",
        },
        {
          id: "bando",
          title: "Bando de Criação",
          description:
            "Agencia premiada internacionalmente y referente en publicidad.",
          image: "/case-bando.png",
          href: "/es/servicios",
        },
      ],
    },
    products: {
      title: "Productos",
      items: [
        {
          id: "branding",
          title: "Proyecto en Branding Estratégico y Posicionamiento de mercado",
          description:
            "Reposicionamiento de marca y productos enfocado en el ADN de la marca y cultura organizacional.",
          duration: "Duración: 06 meses dentro de la organización.",
        },
        {
          id: "workshops",
          title: "Workshops Corporativos para líderes y equipos",
          bullets: [
            "Cultura con propósito (colaboradores entendiendo la esencia)",
            "Cómo crear valor real en tiempos de tecnología e IA",
            "Posicione su marca bajo la metodología JTBD",
            "Técnicas de neuroventas para equipos comerciales.",
          ],
          duration: "Duración: 04 horas",
        },
        {
          id: "immersao",
          title: "Inmersión corporativa",
          description:
            "Cómo entiende el cerebro humano lo que dice tu marca — neurociencia aplicada al branding y toma de decisiones.",
          duration: "Duración: 02 días",
        },
      ],
    },
    testimonials: {
      title: "Testimonios de clientes",
      avatars: [
        { src: "/testimonial-avatar1.png", name: "Hotel Sonata" },
        { src: "/testimonial-avatar2.png", name: "Bando Propaganda" },
        { src: "/testimonial-avatar3.png", name: "Max" },
      ],
      current: {
        company: "Bando Propaganda",
        quote:
          "Construcción de valor, marcas con propósito. Hace 12 años, Simone Moura ya trataba estos temas con una soltura impresionante. Parece estar siempre un paso adelante.",
        author: "Giacomo Brayner - Socio-director de Bando Propaganda",
        rating: 5,
      },
    },
    finalCta: {
      title: 'Tu marca ya sabe quién es. El problema es que el mercado todavía no."',
      cta: { label: "Habla con Simone", href: "/es/contacto" },
      image: { src: "/simone-cta-cutout.png", alt: "Simone Moura" },
    },
  },
};

export function getHomeContent(locale = DEFAULT_LOCALE) {
  return homeContentByLocale[locale] || homeContentByLocale[DEFAULT_LOCALE];
}

export const hero = homeContentByLocale.pt.hero;
export const sobreResumo = homeContentByLocale.pt.aboutSection;
export const numeros = homeContentByLocale.pt.statsSection.items;
export const depoimentos = [homeContentByLocale.pt.testimonials.current];
export const homeSections = {
  testimonials: { eyebrow: "Depoimentos", title: "Depoimentos de clientes" },
};
