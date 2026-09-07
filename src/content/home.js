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
      primaryCta: {
        label: "Quero falar sobre minha empresa",
        href: "/contato",
        opensLeadster: true,
      },
      image: { src: "/simone-headset-hero.png", alt: "Simone Moura" },
    },
    manifesto: {
      taglinePrefix: "Simone Moura",
      taglineSuffix: " • Estratégia de marca",
      title: {
        part1: "Em tempo de ",
        highlight1: "IA",
        part2: ", IoT, ",
        highlight2: "Machine\nLearning",
        part3: " e tanta pressa por\ninovação",
      },
      description:
        "Muitas empresas estão perdendo suas melhores pessoas e a oportunidade de se posicionar de maneira clara e atitudinal porque se distraem com o que não vale a pena. Mais do que perder dinheiro, estão tomando decisões desconectadas do propósito organizacional.",
      image: { src: "/slide-hero-1.png", alt: "Manifesto Simone Moura" },
      slides: [
        { src: "/slide-hero-1.png", alt: "Manifesto Simone Moura" },
      ],
    },
    aboutSection: {
      tagline: "Sobre",
      name: "Simone Moura",
      leftImage: "/simone-stage-left.png",
      paragraphs: [
        "Mais de 35 anos transformando conhecimento em estratégia aplicada. Formação na Universidade de Harvard, nos Estados Unidos; Universidade do Minho, em Portugal; FGV; ESPM; PUCRS; Insper; Universidade de Berlim; e London Business School.",
        "Colunista em importantes portais de comunicação e palestrante.",
        "Ama música e esportes. Prefere tênis a sapato alto. Suas paixões são estudar e conversar com as pessoas.",
        "De executiva a construtora de marcas em movimento.\nApós 25 anos em grandes empresas, fundei a Ping Pong Estratégia com uma convicção que, na época, parecia ousada: marcas não são produtos, são relações. Antes de propósito, branding e comportamento de consumo se tornarem pauta do mercado, já defendíamos que valor nasce da conexão entre pessoas, negócios e estratégia.",
        "Em 2020, nasceu a Caza Futuro, ampliando essa visão para a transformação digital. Porque tecnologia, por si só, não transforma empresas; ela transforma quando melhora a vida das pessoas e cria caminhos para os negócios.",
        "Essa mesma inquietação deu origem à 365, plataforma digital de compras para o mercado B2B da qual fui criadora e cofundadora. Lançado em 2024, após dois anos de estudos, pesquisas e desenvolvimento e com aporte de investidor, o ecossistema digital nasceu para resolver uma dor de milhares de clientes da distribuidora Medeiros e tornar a experiência de compra mais simples, ágil, personalizada e dinâmica.",
        "Hoje, após mais de 35 anos de trajetória, com metodologia própria e mais de 700 empresas impactadas, sigo fazendo o que sempre acreditei: unir estratégia, inovação, neurociência e comportamento para transformar empresas em marcas vivas, relevantes, desejadas e preparadas para evoluir continuamente.",
      ],
      cta: { label: "Conheça um pouco da minha formação", href: "/sobre" },
    },
    statsSection: {
      title: {
        highlight: "Muito mais que 700 projetos entregues. ",
        text: "Uma trajetória que conecta gestores e líderes a uma metodologia de trabalho autoral, customizada para cada cliente.",
      },
      paragraph1: "Pilares da metodologia: branding estratégico · neurociência aplicada ao consumo · economia comportamental · posicionamento de mercado e de produtos pela metodologia JTBD (Jobs to Be Done) · análise aprofundada de mercado e entrevistas · liderança por propósito.",
      paragraph2: "Inspirada por Richard Thaler, Simon Sinek, Paco Underhill, Martin Lindstrom, Clayton Christensen e Philip Kotler.",
      items: [
        {
          value: "+ de 35",
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
      readMoreLabel: "Saiba mais",
      closeDetailsLabel: "Fechar detalhes",
      items: [
        {
          id: "esmaltec",
          title: "Esmaltec Eletrodomésticos",
          description:
            "Empresa com mais de 60 anos de atuação no Brasil e no exterior, setor de linha branca.",
          fullDescription:
            "Empresa com mais de 60 anos de atuação no Brasil e no exterior, no setor de linha branca. Em parceria com a agência de publicidade que atendia a organização, desenvolveu o planejamento de rebranding e reposicionamento da marca, contribuindo para o reconhecimento nacional da empresa, o lançamento de produtos em grandes varejistas brasileiros — Magalu, Casas Bahia, Carrefour e Ponto Frio — e a liderança em participação de mercado no segmento de fogões populares. O trabalho também gerou cases de sucesso em mídias alternativas e ações de merchandising em importantes programas de mídia eletrônica.",
          logo: "/logos/esmaltec2.png",
          href: "/servicos",
        },
        {
          id: "medeiros",
          title: "Medeiros Distribuidora",
          description:
            "Projeto de rebranding da marca onde foi revisitada toda a essência e cultura.",
          fullDescription:
            "Projeto de rebranding em que toda a essência e a cultura da marca foram revisitadas. O trabalho incluiu nova identidade visual, posicionamento de mercado, projetos de trade marketing, implementação de CRM, estruturação do setor de marketing e posicionamento digital em redes sociais e site.",
          logo: "/novos-logos-cases/medeiros.png",
          href: "/servicos",
        },
        {
          id: "clementino",
          title: "Grupo Clementino Fraga",
          description:
            "Empresa de 55 anos com atuação em todo o estado do Ceará e referência em saúde.",
          fullDescription:
            "Empresa com 55 anos de atuação em todo o Ceará e referência na prestação de serviços de saúde. O projeto de rebranding revisitou a essência e a cultura da marca e incluiu nova identidade visual, posicionamento de mercado, implementação de CRM, criação de um setor de marketing, posicionamento digital e desenvolvimento de novos produtos. O trabalho também envolveu treinamento de equipes, implementação da voz da marca e planejamento estratégico anual.",
          logo: "/novos-logos-cases/clementino.png",
          href: "/servicos",
        },
        {
          id: "bando",
          title: "Bando",
          description:
            "Agência premiada internacionalmente e uma das referências em publicidade no país.",
          fullDescription:
            "Agência premiada internacionalmente e referência em publicidade no Brasil, especialmente no Nordeste. O trabalho contemplou importantes projetos de reposicionamento de marca, rebranding e planejamento estratégico de mídia para clientes como Hapvida NotreDame, Granja Regina e Grupo BSPAR.",
          logo: "/logos/bandoo.png",
          href: "/servicos",
        },
      ],
    },
    products: {
      title: "Produtos",
      items: [
        {
          id: "workshops",
          slug: "oficinas-workshops-corporativos",
          href: "/servicos#oficinas-workshops-corporativos",
          ctaLabel: "Saber mais",
          title: "Workshops Corporativos com colaboradores e lideranças",
          bullets: [
            "Cultura com Propósito (Colaboradores entendendo a essência da Marca)",
            "Como criar valor real para o cliente em tempos de inovação, tecnologia e IA",
            "Posicione sua marca sob a ótica da metodologia do trabalho a ser feito (JTBD)",
            "Técnicas de neurovendas para times de atendimento e de vendas — Construindo narrativas que o cliente entende.",
          ],
          duration: "Duração: 4 horas",
        },
        {
          id: "immersao",
          slug: "imersao-corporativa",
          href: "/servicos#imersao-corporativa",
          ctaLabel: "Saber mais",
          title: "Imersão corporativa",
          description:
            "Como o cérebro humano entende o que a sua marca diz - neurociência aplicada ao branding, marketing e ao processo de tomada de decisão na jornada de compras - estudos de caso e dinâmicas em grupo. (pelo preceito da economia comportamental e pela neurociência)",
          duration: "Duração: 2 dias",
        },
        {
          id: "mentoria",
          slug: "mentoria-estrategica",
          href: "/servicos#mentoria-estrategica",
          ctaLabel: "Saber mais",
          title: "Mentoria estratégica",
          description:
            "Mentoria personalizada para negócios e empreendedores que une diagnóstico, fortalecimento do core business, posicionamento de mercado e comunicação baseada na neurociência para gerar crescimento consistente e sustentável.",
          duration: "Duração: 7 encontros ao vivo (Google Meet)",
        },
        {
          id: "branding",
          slug: "branding-e-marketing-estrategico",
          href: "/servicos#branding-e-marketing-estrategico",
          ctaLabel: "Saber mais",
          title: "Projeto de Branding Estratégico e Posicionamento de Mercado",
          description:
            "Reposicionamento de marcas e produtos com foco na descoberta do DNA, da essência da marca e da cultura organizacional.",
          duration: "Duração: 6 meses dentro da organização",
        },
      ],
    },
    testimonials: {
      title: "Depoimentos de clientes",
      items: [
        {
          company: "Bando Propaganda",
          quote:
            "Construção de valor, marcas com propósito. Há mais de 20 anos, Simone Moura já tratava desses temas com uma desenvoltura impressionante. Ela parece estar sempre um passo à frente.",
          author: "Giacomo Brayner",
          role: "Sócio-diretor da Bando Propaganda",
          image: "/testimonial-avatar2.png",
          stars: 4,
        },
        {
          company: "Hotel Sonata",
          quote:
            "O Hotel Sonata tem duas fases: antes e depois de Simone Moura. Simone chegou até nós com a proposta de fazer a diferença em nossas vidas e conseguiu de imediato. Hoje, faz parte do nosso dia a dia. Nunca vi uma profissional tão comprometida, responsável e envolvida em todos os negócios que realiza.",
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
            "Simone Moura foi um divisor de águas para a AUDO. Ela nos ajudou a entender que podemos manter os pés no chão mesmo ao apresentar soluções totalmente disruptivas ao mercado. Simone nos fez remar no mar da inovação sem medo, trabalhando conosco, lado a lado, e nos ajudando a consolidar nosso propósito e posicionamento. Nesse maremoto de informações e mudanças, ela nos conduziu no desenvolvimento e na entrega de projetos inovadores alinhados a esse novo contexto.",
          author: "Milena Rosado",
          role: "CEO da AUDO",
          image: "/audo-nova.png",
          stars: 4,
        },
        {
          company: "Clementino Fraga",
          quote:
            "Ver sua forma de trabalhar e ouvir suas explicações e exemplos é simplesmente magnético. Sua fala talvez seja um dos segredos de seu sucesso profissional, pois ela tem uma forma encantadora de prender você ao conteúdo e despertar o desejo de crescer ainda mais.",
          author: "Vanessa Nunes",
          role: "Gerente de RH do Laboratório Clementino Fraga",
          image: "/clementino-fraga-nova.png",
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
      primaryCta: { label: "Discover my journey", href: "/en/sobre" },
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
        part4: " and the rush to innovate",
      },
      description:
        "Many companies are losing their best people and the opportunity to position themselves clearly because they are distracted by what doesn't matter. Far beyond losing money, they are making decisions outside organizational purpose.",
      image: { src: "/slide-hero-1.png", alt: "Simone Moura Manifesto" },
      slides: [
        { src: "/slide-hero-1.png", alt: "Simone Moura Manifesto" },
      ],
    },
    aboutSection: {
      tagline: "ABOUT",
      name: "Simone Moura",
      leftImage: "/simone-stage-left.png",
      paragraphs: [
        "Over 35 years of transforming knowledge into applied strategy. Executive education at Harvard University (USA), the University of Minho (Portugal), FGV, ESPM, PUCRS, Insper, the University of Berlin, and London Business School.",
        "Columnist for leading communication portals and keynote speaker.",
        "Loves music and sports. Prefers sneakers to high heels. Her true passions: studying and connecting with people.",
        "From corporate executive to builder of brands in motion.\nAfter 25 years in major corporations, I founded Ping Pong Estratégia with a conviction that seemed bold at the time: brands are not products, they are relationships. Long before purpose, branding, and consumer behavior became mainstream market trends, we were already championing that value stems from connecting people, business, and strategy.",
        "In 2020, Caza Futuro was born, expanding that vision into digital transformation. Because technology alone does not transform companies; it transforms when it improves people's lives and paves new paths for business.",
        "That same drive gave rise to 365, a B2B digital procurement platform of which I was the creator and co-founder. Launched in 2024 after two years of research, studies, and development, backed by investor funding, the digital ecosystem was born to solve a major pain point for thousands of Medeiros distributor clients and make the purchasing experience simpler, faster, personalized, and dynamic.",
        "Today, with over 35 years of experience, a proprietary methodology, and more than 700 companies impacted, I continue doing what I have always believed in: combining strategy, innovation, neuroscience, and human behavior to turn companies into living, relevant, desirable brands prepared to evolve continuously.",
      ],
      cta: { label: "Learn about my background", href: "/en/sobre" },
    },
    statsSection: {
      title: {
        highlight: "Much more than 700 projects delivered. ",
        text: "A journey that connects managers and leaders to a proprietary methodology tailored to each client.",
      },
      paragraph1:
        "Methodology pillars: strategic branding · applied consumer neuroscience · behavioral economics · market and product positioning through JTBD (Jobs to Be Done) · in-depth market analysis and interviews · purpose-driven leadership.",
      paragraph2:
        "Inspired by Richard Thaler, Simon Sinek, Paco Underhill, Martin Lindstrom, Clayton Christensen, and Philip Kotler.",
      items: [
        { value: "+35", label: "Years dedicated to brand strategy" },
        { value: "+700", label: "Delivered projects across Brazil" },
        { value: "+$2B", label: "Revenue generated" },
      ],
    },
    cases: {
      title: "Memorable & evolving cases",
      subtitle: "Projects worth sharing",
      readMoreLabel: "Learn more",
      closeDetailsLabel: "Close details",
      items: [
        {
          id: "esmaltec",
          title: "Esmaltec Appliances",
          description:
            "Home appliance manufacturer with over 60 years of history in Brazil and abroad.",
          fullDescription:
            "Home appliance manufacturer with over 60 years of operations in Brazil and abroad. Led the strategic rebranding and market repositioning plan, helping the company achieve national recognition, major retail partnerships, and market share leadership.",
          logo: "/logos/esmaltec2.png",
          href: "/en/servicos",
        },
        {
          id: "medeiros",
          title: "Medeiros Distribution",
          description:
            "A rebranding project that revisited the company's essence and culture.",
          fullDescription:
            "Rebranding project revisiting the complete essence and organizational culture. New brand identity, market positioning, trade marketing strategies, CRM implementation, and digital marketing presence.",
          logo: "/novos-logos-cases/medeiros.png",
          href: "/en/servicos",
        },
        {
          id: "clementino",
          title: "Grupo Clementino Fraga",
          description:
            "55-year-old healthcare leader operating across Ceará state.",
          fullDescription:
            "Healthcare reference in Ceará with 55 years of history: Brand repositioning, CRM implementation, marketing division setup, digital positioning, and team training for consistent brand voice.",
          logo: "/novos-logos-cases/clementino.png",
          href: "/en/servicos",
        },
        {
          id: "bando",
          title: "Bando",
          description:
            "Internationally awarded advertising agency and industry benchmark.",
          fullDescription:
            "Internationally awarded advertising agency responsible for major brand repositioning and media planning for top regional and national clients.",
          logo: "/logos/bandoo.png",
          href: "/en/servicos",
        },
      ],
    },
    products: {
      title: "Products",
      items: [
        {
          id: "workshops",
          slug: "oficinas-workshops-corporativos",
          href: "/en/servicos#oficinas-workshops-corporativos",
          ctaLabel: "Learn more",
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
          slug: "imersao-corporativa",
          href: "/en/servicos#imersao-corporativa",
          ctaLabel: "Learn more",
          title: "Corporate Immersion",
          description:
            "How the human brain perceives your brand — applied neuroscience for branding, marketing, and buyer journey decision-making.",
          duration: "Duration: 02 days",
        },
        {
          id: "mentoria",
          slug: "mentoria-estrategica",
          href: "/en/servicos#mentoria-estrategica",
          ctaLabel: "Learn more",
          title: "Strategic Mentorship",
          description:
            "Personalized mentorship for businesses and founders blending diagnostics, core business strengthening, market positioning, and neuroscience-based messaging for sustainable growth.",
          duration: "Duration: 07 live sessions (Google Meet)",
        },
        {
          id: "branding",
          slug: "branding-e-marketing-estrategico",
          href: "/en/servicos#branding-e-marketing-estrategico",
          ctaLabel: "Learn more",
          title: "Strategic Branding & Market Positioning Project",
          description:
            "Brand and product repositioning focusing on discovering brand DNA, essence, and organizational culture.",
          duration: "Duration: 06 months embedded.",
        },
      ],
    },
    testimonials: {
      title: "Client Testimonials",
      items: [
        {
          company: "Bando Propaganda",
          quote:
            "Value creation, purpose-driven brands. Over 20 years ago, Simone Moura was already handling these topics with impressive fluency. She always seems to be one step ahead.",
          author: "Giacomo Brayner",
          role: "Managing Partner at Bando Propaganda",
          image: "/testimonial-avatar2.png",
          stars: 4,
        },
        {
          company: "Hotel Sonata",
          quote:
            "Hotel Sonata has two phases: before and after Simone Moura. Simone came to us determined to make a real difference — and succeeded immediately. I've never seen a professional so committed, responsible, and invested in her clients' businesses.",
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
            "Simone Moura was a turning point for AUDO. She helped us understand that we can stay grounded even while bringing truly disruptive solutions to the market. She guided us in developing and delivering innovative projects aligned with this new context.",
          author: "Milena Rosado",
          role: "CEO of AUDO",
          image: "/audo-nova.png",
          stars: 4,
        },
        {
          company: "Clementino Fraga",
          quote:
            "Watching her work, listening to her explanations and examples is simply magnetic. Her communication is perhaps one of the secrets to her professional success — she has an enchanting way of keeping you engaged and making you want to grow even more.",
          author: "Vanessa Nunes",
          role: "HR Manager at Laboratório Clementino Fraga",
          image: "/clementino-fraga-nova.png",
          stars: 4,
        },
      ],
    },
    finalCta: {
      title: "Your brand already knows who it is. The problem is that the market doesn't yet.",
      cta: { label: "Get in touch with Simone", href: "/en/contato" },
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
      slides: [
        { src: "/slide-hero-1.png", alt: "Manifiesto Simone Moura" },
      ],
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
        "Esa misma inquietud dio origen a 365, plataforma digital de compras para el mercado B2B de la cual fui creadora y cofundadora. Lanzada en 2024 tras dos años de estudios, investigaciones y desarrollo, con aporte de inversionistas, el ecosistema digital nació para resolver un problema de miles de clientes de la distribuidora Medeiros y hacer la experiencia de compra más simple, ágil, personalizada y dinámica.",
        "Hoy, tras más de 35 años de trayectoria, con una metodología propia y más de 700 empresas impactadas, sigo haciendo lo que siempre he creído: unir estrategia, innovación, neurociencia y comportamiento para transformar empresas en marcas vivas, relevantes, deseadas y preparadas para evolucionar continuamente.",
      ],
      cta: { label: "Conoce un poco de mi formación", href: "/es/sobre" },
    },
    statsSection: {
      title: {
        highlight: "Mucho más que 700 proyectos entregados. ",
        text: "Una trayectoria que conecta a gestores y líderes con una metodología de trabajo propia, adaptada a cada cliente.",
      },
      paragraph1:
        "Pilares de la metodología: branding estratégico · neurociencia aplicada al consumo · economía del comportamiento · posicionamiento de mercados y productos mediante JTBD (Jobs to Be Done) · análisis de mercado en profundidad y entrevistas · liderazgo con propósito.",
      paragraph2:
        "Inspirada por Richard Thaler, Simon Sinek, Paco Underhill, Martin Lindstrom, Clayton Christensen y Philip Kotler.",
      items: [
        { value: "+ de 35", label: "Años dedicados a la estrategia de marca" },
        { value: "+700", label: "Proyectos entregados en todo Brasil" },
        { value: "+$2B", label: "Ingresos generados" },
      ],
    },
    cases: {
      title: "Casos memorables en evolución",
      subtitle: "Proyectos que vale la pena compartir",
      readMoreLabel: "Saber más",
      closeDetailsLabel: "Cerrar detalles",
      items: [
        {
          id: "esmaltec",
          title: "Esmaltec Electrodomésticos",
          description:
            "Empresa con más de 60 años de trayectoria en Brasil y el exterior, sector de línea blanca.",
          fullDescription:
            "Empresa con más de 60 años de operaciones en Brasil y en el exterior, en el sector de línea blanca. Responsable de la creación y el desarrollo del plan de rebranding y reposicionamiento de marca, con el que alcanzó reconocimiento nacional y liderazgo en participación de mercado.",
          logo: "/logos/esmaltec2.png",
          href: "/es/servicios",
        },
        {
          id: "medeiros",
          title: "Medeiros Distribuidora",
          description:
            "Proyecto de rebranding donde se revisitó la esencia de la marca y su cultura.",
          fullDescription:
            "Proyecto de rebranding de marca donde fue revisitada toda la esencia y cultura organizacional. Nueva marca, posicionamiento de mercado, proyectos de trade marketing, CRM y posicionamiento digital.",
          logo: "/novos-logos-cases/medeiros.png",
          href: "/es/servicios",
        },
        {
          id: "clementino",
          title: "Grupo Clementino Fraga",
          description:
            "Empresa de 55 años con presencia en todo el estado de Ceará y líder en salud.",
          fullDescription:
            "Referencia en servicios de salud con 55 años de trayectoria: Proyecto de rebranding, nueva marca, implementación de CRM, creación de departamento de marketing y capacitación de equipos para la voz de la marca.",
          logo: "/novos-logos-cases/clementino.png",
          href: "/es/servicios",
        },
        {
          id: "bando",
          title: "Bando",
          description:
            "Agencia premiada internacionalmente y referente en publicidad en el país.",
          fullDescription:
            "Agencia premiada internacionalmente y referente publicitario, responsable por proyectos clave de reposicionamiento de marca, rebranding y planificación estratégica para grandes empresas.",
          logo: "/logos/bandoo.png",
          href: "/es/servicios",
        },
      ],
    },
    products: {
      title: "Productos",
      items: [
        {
          id: "workshops",
          slug: "oficinas-workshops-corporativos",
          href: "/es/servicios#oficinas-workshops-corporativos",
          ctaLabel: "Saber más",
          title: "Workshops Corporativos para líderes y equipos",
          bullets: [
            "Cultura con propósito (colaboradores entendiendo la esencia)",
            "Cómo crear valor real en tiempos de tecnología e IA",
            "Posiciona tu marca mediante la metodología JTBD",
            "Técnicas de neuroventas para equipos comerciales.",
          ],
          duration: "Duración: 4 horas",
        },
        {
          id: "immersao",
          slug: "imersao-corporativa",
          href: "/es/servicios#imersao-corporativa",
          ctaLabel: "Saber más",
          title: "Inmersión corporativa",
          description:
            "Cómo entiende el cerebro humano lo que dice tu marca — neurociencia aplicada al branding y toma de decisiones.",
          duration: "Duración: 2 días",
        },
        {
          id: "mentoria",
          slug: "mentoria-estrategica",
          href: "/es/servicios#mentoria-estrategica",
          ctaLabel: "Saber más",
          title: "Mentoría estratégica",
          description:
            "Mentoría personalizada para negocios y emprendedores que une diagnóstico, fortalecimiento del core business, posicionamiento y comunicación basada en neurociencia para un crecimiento sostenible.",
          duration: "Duración: 7 sesiones en vivo (Google Meet)",
        },
        {
          id: "branding",
          slug: "branding-e-marketing-estrategico",
          href: "/es/servicios#branding-e-marketing-estrategico",
          ctaLabel: "Saber más",
          title: "Proyecto de Branding Estratégico y Posicionamiento de Mercado",
          description:
            "Reposicionamiento de marca y productos enfocado en el ADN de la marca y cultura organizacional.",
          duration: "Duración: 6 meses dentro de la organización",
        },
      ],
    },
    testimonials: {
      title: "Testimonios de clientes",
      items: [
        {
          company: "Bando Propaganda",
          quote:
            "Construcción de valor, marcas con propósito. Hace más de 20 años, Simone Moura ya trataba estos temas con una soltura impresionante. Parece estar siempre un paso adelante.",
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
            "Simone Moura fue un punto de inflexión para AUDO. Nos ayudó a desarrollar y entregar proyectos innovadores alineados con este nuevo contexto de mercado.",
          author: "Milena Rosado",
          role: "CEO de AUDO",
          image: "/audo-nova.png",
          stars: 4,
        },
        {
          company: "Clementino Fraga",
          quote:
            "Ver su forma de trabajar es simplemente magnético. Tiene una forma encantadora de mantenerte involucrado en el contenido y con deseos de crecer mucho más.",
          author: "Vanessa Nunes",
          role: "Gerente de RR.HH. del Laboratorio Clementino Fraga",
          image: "/clementino-fraga-nova.png",
          stars: 4,
        },
      ],
    },
    finalCta: {
      title: "Tu marca ya sabe quién es. El problema es que el mercado todavía no.",
      cta: { label: "Habla con Simone", href: "/es/contato" },
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
