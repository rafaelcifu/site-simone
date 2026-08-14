import { DEFAULT_LOCALE } from "./locales";

export const homeContentByLocale = {
  pt: {
    hero: {
      title: "Simone Moura",
      subtitle: {
        part1: "“Eu crio ",
        highlight1: "estratégias para empresas com foco na transformação",
        part2: " das pessoas e dos mercados. Sem desperdícios, sem distrações e com propósito verdadeiro.”",
      },
      primaryCta: { label: "Quero falar sobre minha empresa", href: "/contato" },
      image: { src: "/simone-headset-hero.png", alt: "Simone Moura" },
    },
    manifesto: {
      taglinePrefix: "Simone Moura",
      taglineSuffix: " • Estratégia de marca",
      title: {
        part1: "Em tempo de ",
        highlight1: "IA",
        part2: ", OIT, ",
        highlight2: "Machine\nLearning",
        part3: " e tanta pressa por\ninovação",
      },
      description:
        "Muitas empresas estão perdendo suas melhores pessoas e a oportunidade de se posicionarem de maneira clara e atitudinal porque estão se distraindo com o que não vale a pena. Muito mais do que perder dinheiro, es tomando decisões fora de propósito organizacional.",
      image: { src: "/slide-hero-1.png", alt: "Manifesto Simone Moura" },
    },
    aboutSection: {
      tagline: "Sobre",
      name: "Simone Moura",
      leftImage: "/simone-stage-left.png",
      paragraphs: [
        "Mais de 35 anos transformando conhecimento em estratégia aplicada. Formação na Universidade de Harvard, EUA - Universidade do Minho, Portugal, FGV, ESPM, PUCRS, INSPER, Universidade Berlim e London Business School.",
        "Colunista de importantes portais de comunicação e palestrante.",
        "Ama Música e esportes. Prefere tênis à sapato alto. Como paixão, estudar e conversar com as pessoas.",
        "De executiva a construtora de marcas em movimento.\nApós 25 anos em grandes empresas, fundei a Ping Pong Estratégia com uma convicção que, na época, parecia ousada: marcas não são produtos, são relações. Antes de propósito, branding e comportamento de consumo se tornarem pauta do mercado, já defendíamos que valor nasce da conexão entre pessoas, negócios e estratégia.",
        "Em 2020, nasceu a Caza Futuro, ampliando essa visão para a transformação digital. Porque tecnologia, por si só, não transforma empresas; ela transforma quando melhora a vida das pessoas e cria caminhos para os negócios.",
        "Essa mesma inquietação deu origem à 365, plataforma digital de compras para o mercado B2B, da qual sou cofundadora. Lançada em 2024, após dois anos de estudos, pesquisas e desenvolvimento, a 365 nasceu para tornar a experiência de compra empresarial mais simples, ágil e conectada às novas dinâmicas do mercado.",
        "Hoje, após mais de 35 anos de trajetória, metodologia própria e mais de 700 empresas impactadas, sigo fazendo o que sempre acreditei: unir estratégia, inovação, neurociência e comportamento para transformar empresas em marcas vivas, relevantes, desejadas e preparadas para evoluir continuamente."
      ],
      cta: { label: "Conheça um pouco da minha formação", href: "/sobre" },
    },
    statsSection: {
      title: {
        highlight: "Muito mais que 700 projetos entregues. ",
        text: "Uma trajetória que une gestores e líderes a uma metodologia de trabalho autoral, customizada para cada cliente."
      },
      paragraph1: "Pilares de metodologia: Branding estratégico · Neurociência aplicada ao consumo · Economia comportamental · Posicionamento de mercado e de produtos pela metodologia JTBD (Jobs to be done) · Análise de mercado em profundidade e entrevista · Liderança por propósito",
      paragraph2: "Inspirada por: Richard Thaler, Simon Sinek, Paco Underhill, Martin Lindstrom, Clayton Christensen, Philip Kotler, etc.",
      items: [
        {
          value: "+30",
          label: "anos de atuação nos mercados do Brasil e exterior",
        },
        {
          value: "+700",
          label: "Projetos entregues para empresas de diversos tamanhos e segmentos",
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
          id: "medeiros",
          title: "Medeiros Distribuidora",
          description:
            "Projeto de rebranding da marca onde foi revisitada toda a essência e cultura.",
          image: "/case-esmaltec.png",
          href: "/servicos",
        },
        {
          id: "esmaltec",
          title: "Esmaltec Eletrodomésticos",
          description:
            "Empresa com mais de 60 anos de atuação no Brasil e no exterior, setor de linha branca.",
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
      items: [
        {
          company: "Bando Propaganda",
          quote:
            "Construção de valor, marcas com propósito. Há 12 anos atrás, a Simone Moura já tratava desses temas com uma desenvoltura impressionante, ela parece estar sempre a um passo à frente das coisas.",
          author: "Giacomo Brayner",
          role: "Sócio-diretor da Bando Propaganda",
          image: "/testimonial-avatar2.png",
          stars: 4,
        },
        {
          company: "Hotel Sonata",
          quote:
            "O Hotel Sonata tem duas fases: Antes e após a Simone Moura. A PingPong Estratégia chegou até nós com uma proposta de fazer a diferença em nossas vidas e conseguiu de imediato. Hoje a Simone faz parte do nosso dia a dia e eu digo que eu nunca vi uma profissional tão comprometida, responsável e envolvida em todos os negócios que ela faz.",
          author: "Ivana Rangel",
          role: "CEO Hotel Sonata de Iracema · Presidente Fortaleza Convention & Visitors Bureau",
          image: "/testimonial-avatar1.png",
          stars: 4,
        },
        {
          company: "Max Propaganda",
          quote:
            "Com trabalhos realizados tanto para a Max Propaganda, quanto para vários clientes nossos, a contribuição para todos foi imensa no que se refere às estratégias, ao planejamento, posicionamento e branding.",
          author: "Gustavo Rocha",
          role: "Diretor comercial da Max Propaganda",
          image: "/testimonial-avatar3.png",
          stars: 4,
        },
        {
          company: "AUDO",
          quote:
            "A Ping Pong foi um divisor de águas para a AUDO, nos ajudou a entender que podemos colocar os pés no chão, mesmo buscando mostrar ao mercado soluções totalmente disruptivas. A Simone nos fez remar no mar da inovação sem temer, trabalhando junto, lado a lado e nos ajudando a emplacar nosso propósito e posicionamento. Nesse maremoto de informações e mudanças, ela nos conduziu a desenvolver e entregar projetos inovadores aliados a esse novo contexto.",
          author: "Milena Rosado",
          role: "CEO da AUDO",
          image: "/case-bando.png",
          stars: 4,
        },
        {
          company: "Clementino Fraga",
          quote:
            "Ver sua forma de trabalhar, ouvir suas explicações e exemplos é simplesmente magnético. Sua fala talvez seja um dos segredos de seu sucesso profissional, pois tem uma forma encantadora de te prender no conteúdo e ter desejo de querer crescer muito mais.",
          author: "Vanessa Nunes",
          role: "Gerente de RH do Laboratório Clementino Fraga",
          image: "/case-clementino.png",
          stars: 4,
        },
      ],
    },
    finalCta: {
      title: "A sua marca já sabe quem ela é. O problema é que o mercado ainda não.",
      cta: { label: "Quero falar sobre minha empresa", href: "/contato" },
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
      image: { src: "/slide-hero-1.png", alt: "Simone Moura Manifesto" },
    },
    aboutSection: {
      tagline: "ABOUT",
      name: "Simone Moura",
      leftImage: "/simone-stage-left.png",
      paragraphs: [
        "Over 35 years transforming knowledge into applied strategy. Executive education at Harvard University (USA), University of Minho (Portugal), FGV, ESPM, PUCRS, INSPER, Berlin University, and London Business School.",
        "Columnist for leading communication portals and keynote speaker.",
        "Loves music and sports. Prefers sneakers to high heels. Her true passions: studying and connecting with people.",
        "From corporate executive to builder of brands in motion.\nAfter 25 years in major corporations, I founded Ping Pong Estratégia with a conviction that seemed bold at the time: brands are not products, they are relationships. Long before purpose, branding, and consumer behavior became mainstream market trends, we were already championing that value stems from connecting people, business, and strategy.",
        "In 2020, Caza Futuro was born, expanding that vision into digital transformation. Because technology alone does not transform companies; it transforms when it improves people's lives and paves new paths for business.",
        "That same drive led to 365, a B2B digital procurement platform of which I am co-founder. Launched in 2024 after two years of research and development, 365 was built to make enterprise purchasing simpler, faster, and aligned with modern market dynamics.",
        "Today, with over 35 years of experience, a proprietary methodology, and more than 700 companies impacted, I continue doing what I have always believed in: combining strategy, innovation, neuroscience, and human behavior to turn companies into living, relevant, desirable brands prepared to evolve continuously."
      ],
      cta: { label: "Learn about my background", href: "/en/about" },
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
          id: "medeiros",
          title: "Medeiros Distribution",
          description:
            "Brand rebranding project revisiting company essence and culture.",
          image: "/case-esmaltec.png",
          href: "/en/services",
        },
        {
          id: "esmaltec",
          title: "Esmaltec Appliances",
          description:
            "Home appliance manufacturer with over 60 years of history in Brazil and abroad.",
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
      items: [
        {
          company: "Bando Propaganda",
          quote:
            "Value creation, purpose-driven brands. 12 years ago, Simone Moura was already handling these topics with impressive fluency. She always seems to be one step ahead.",
          author: "Giacomo Brayner",
          role: "Managing Partner at Bando Propaganda",
          image: "/testimonial-avatar2.png",
          stars: 4,
        },
        {
          company: "Hotel Sonata",
          quote:
            "Hotel Sonata has two phases: before and after Simone Moura. PingPong Estratégia came to us with a proposal to make a real difference — and succeeded immediately. I've never seen a professional so committed, responsible, and invested in her clients' businesses.",
          author: "Ivana Rangel",
          role: "CEO Hotel Sonata de Iracema · President Fortaleza Convention & Visitors Bureau",
          image: "/testimonial-avatar1.png",
          stars: 4,
        },
        {
          company: "Max Propaganda",
          quote:
            "Working both for Max Propaganda and several of our clients, the contribution to all of them was immense in terms of strategy, planning, positioning, and branding.",
          author: "Gustavo Rocha",
          role: "Commercial Director at Max Propaganda",
          image: "/testimonial-avatar3.png",
          stars: 4,
        },
        {
          company: "AUDO",
          quote:
            "Ping Pong was a turning point for AUDO. Simone helped us understand that we can stay grounded even while showing the market truly disruptive solutions. She guided us to develop and deliver innovative projects aligned with this new context.",
          author: "Milena Rosado",
          role: "CEO of AUDO",
          image: "/case-bando.png",
          stars: 4,
        },
        {
          company: "Clementino Fraga",
          quote:
            "Watching her work, listening to her explanations and examples is simply magnetic. Her communication is perhaps one of the secrets to her professional success — she has an enchanting way of keeping you engaged and making you want to grow even more.",
          author: "Vanessa Nunes",
          role: "HR Manager at Laboratório Clementino Fraga",
          image: "/case-clementino.png",
          stars: 4,
        },
      ],
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
      image: { src: "/slide-hero-1.png", alt: "Manifiesto Simone Moura" },
    },
    aboutSection: {
      tagline: "SOBRE",
      name: "Simone Moura",
      leftImage: "/simone-stage-left.png",
      paragraphs: [
        "Más de 35 años transformando conocimiento en estrategia aplicada. Formación en la Universidad de Harvard (EE. UU.), Universidad del Miño (Portugal), FGV, ESPM, PUCRS, INSPER, Universidad de Berlín y London Business School.",
        "Columnista en destacados portales de comunicación y conferencista.",
        "Ama la música y el deporte. Prefiere zapatillas a tacones. Su verdadera pasión: estudiar y conversar con la gente.",
        "De ejecutiva a constructora de marcas en movimiento.\nTras 25 años en grandes corporaciones, fundé Ping Pong Estratégia con una convicción que, en su momento, parecía audaz: las marcas no son productos, son relaciones. Mucho antes de que el propósito, el branding y el comportamiento del consumidor fueran tendencia en el mercado, ya defendíamos que el valor nace de la conexión entre personas, negocios y estrategia.",
        "En 2020 nació Caza Futuro, ampliando esa visión hacia la transformación digital. Porque la tecnología, por sí sola, no transforma empresas; las transforma cuando mejora la vida de las personas y crea nuevos caminos para los negocios.",
        "Esa misma inquietud dio origen a 365, plataforma digital de compras para el mercado B2B, de la cual soy cofundadora. Lanzada en 2024 tras dos años de investigación y desarrollo, 365 nació para hacer la experiencia de compra empresarial más simple, ágil y conectada con las nuevas dinámicas del mercado.",
        "Hoy, tras más de 35 años de trayectoria, metodología propia y más de 700 empresas impactadas, sigo haciendo lo que siempre creí: unir estrategia, innovación, neurociencia y comportamiento para transformar empresas en marcas vivas, relevantes, deseadas y preparadas para evolucionar continuamente."
      ],
      cta: { label: "Conoce un poco de mi formación", href: "/es/sobre" },
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
          id: "medeiros",
          title: "Medeiros Distribuidora",
          description:
            "Proyecto de rebranding donde se revisitó la esencia de la marca.",
          image: "/case-esmaltec.png",
          href: "/es/servicios",
        },
        {
          id: "esmaltec",
          title: "Esmaltec Electrodomésticos",
          description:
            "Empresa con más de 60 años de trayectoria en Brasil y el exterior.",
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
      items: [
        {
          company: "Bando Propaganda",
          quote:
            "Construcción de valor, marcas con propósito. Hace 12 años, Simone Moura ya trataba estos temas con una soltura impresionante. Parece estar siempre un paso adelante.",
          author: "Giacomo Brayner",
          role: "Socio-director de Bando Propaganda",
          image: "/testimonial-avatar2.png",
          stars: 4,
        },
        {
          company: "Hotel Sonata",
          quote:
            "Hotel Sonata tiene dos fases: antes y después de Simone Moura. Nunca he visto a una profesional tan comprometida, responsable e involucrada en los negocios de sus clientes.",
          author: "Ivana Rangel",
          role: "CEO Hotel Sonata de Iracema · Presidenta Fortaleza Convention & Visitors Bureau",
          image: "/testimonial-avatar1.png",
          stars: 4,
        },
        {
          company: "Max Propaganda",
          quote:
            "La contribución de Simone tanto para Max Propaganda como para varios de nuestros clientes fue inmensa en cuanto a estrategias, planificación, posicionamiento y branding.",
          author: "Gustavo Rocha",
          role: "Director comercial de Max Propaganda",
          image: "/testimonial-avatar3.png",
          stars: 4,
        },
        {
          company: "AUDO",
          quote:
            "Ping Pong fue un punto de inflexión para AUDO. Simone nos ayudó a desarrollar y entregar proyectos innovadores alineados con este nuevo contexto de mercado.",
          author: "Milena Rosado",
          role: "CEO de AUDO",
          image: "/case-bando.png",
          stars: 4,
        },
        {
          company: "Clementino Fraga",
          quote:
            "Ver su forma de trabajar es simplemente magnético. Tiene una forma encantadora de mantenerte involucrado en el contenido y con deseos de crecer mucho más.",
          author: "Vanessa Nunes",
          role: "Gerente de RR.HH. del Laboratorio Clementino Fraga",
          image: "/case-clementino.png",
          stars: 4,
        },
      ],
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
export const depoimentos = homeContentByLocale.pt.testimonials.items;
export const homeSections = {
  testimonials: { eyebrow: "Depoimentos", title: "Depoimentos de clientes" },
};
