import { DEFAULT_LOCALE } from "./locales";

export const sobreContentByLocale = {
  pt: {
    hero: {
      tagline: "Sobre",
      title: "Mestre em Comunicação e Novas Tecnologias",
      paragraphs: [
        "Com mais de 35 anos de atuação no mercado do Brasil e do exterior, Simone conduz imersões e treinamentos com foco em vendas, liderança e inovação, utilizando a neurociência aplicada ao consumo para melhorar a comunicação das equipes e a tomada de decisão.",
        "Desenvolveu uma metodologia própria aplicada a empresas e líderes que buscam crescimento estruturado, clareza estratégica e diferenciação real no mercado.",
        "É ainda colunista de veículos de comunicação relevantes, palestrante e escritora.",
      ],
      image: {
        src: "/images/sobre/simone-hero.png",
        alt: "Simone Moura - Mestre em Comunicação e Novas Tecnologias",
      },
    },
    academic: {
      title: "Formação acadêmica",
      subtitle: "Experiências internacionais:\nUniversidade de Berlim e London Business School",
      badgeSvg: "/images/sobre/formacao-badge.svg",
      readMore: "Saiba mais",
      readLess: "Menos detalhes",
      previousSlide: "Slide anterior",
      nextSlide: "Próximo slide",
      items: [
        {
          institution: "Universidade de Harvard",
          title: "Extensão em Teorias Disruptivas e Jobs to be done",
          description: "Curso de extensão em Teorias Disruptivas e Jobs to be done pela Universidade de Harvard, Massachusetts, Estados Unidos.",
        },
        {
          institution: "Universidade de Berlim",
          title: "Extensão em Marketing e Comunicação",
          description: "Curso de extensão em Marketing e Comunicação pela Universidade de Berlim, Alemanha.",
        },
        {
          institution: "London Business School",
          title: "Fundamentos da Liderança",
          description: "Fundamentos da liderança pela London School of Business Administration.",
        },
        {
          institution: "Universidade do Minho",
          title: "Mestrado em Comunicação e Novas Tecnologias",
          description: "Mestre em Comunicação e novas Tecnologias Educativas pela Universidade do Minho — Braga, Portugal.",
        },
        {
          institution: "Universidade do Minho",
          title: "Doutoranda em Comunicação e Tecnologias",
          description: "Doutoranda em Comunicação e Tecnologias pela Universidade do Minho — Braga, Portugal.",
        },
        {
          institution: "FGV / SP",
          title: "Pós-graduação em Comportamento de Consumo",
          description: "Pós-graduada em comportamento de consumo e Administração pela FGV/SP.",
        },
        {
          institution: "PUCRS",
          title: "MBA em Branding Growth",
          description: "MBA em Branding Growth pela Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS).",
        },
        {
          institution: "PUCRS",
          title: "MBA em Neuromarketing e Consumo",
          description: "MBA em neuro marketing e comportamento consumo pela Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS).",
        },
        {
          institution: "ESPM / SP",
          title: "Extensão em Comunicação e Neurociência",
          description: "Extensão em Comunicação e Neurociência pela Escola Superior de Propaganda e Marketing (ESPM/SP).",
        },
        {
          institution: "Estácio / RJ",
          title: "MBA em Administração e Marketing",
          description: "MBA em Administração e Marketing pela Estácio / RJ.",
        },
        {
          institution: "PUCRS",
          title: "Branded Content e Reputação de Marcas",
          description: "Especialização curta em Branded Content e Comunicação e reputação de marcas pela PUCRS.",
        },
        {
          institution: "UBM / RJ",
          title: "Comunicação Social - Relações Públicas",
          description: "Bacharel em comunicação Social - Relações Públicas pela UBM/RJ.",
        },
        {
          institution: "Idaho Language School",
          title: "Proficiência em Língua Inglesa",
          description: "Proficiência em língua Inglesa pela Idaho Language School / EUA.",
        },
        {
          institution: "Instituto Yázigi / SP",
          title: "Proficiência em Língua Inglesa",
          description: "Proficiência em língua Inglesa pelo Instituto Yázigi / SP.",
        },
        {
          institution: "Instituto Prospera do Brasil",
          title: "Formação em Coaching Ikigai",
          description: "Formação em Coaching Ikigai pelo Instituto Prospera do Brasil pela Escola de Negócios e Competências.",
        },
      ],
    },
    timeline: {
      items: [
        {
          id: "2010",
          tag: "Fundou em",
          highlight: "2010",
          isYear: true,
          text: "A Ping Pong Estratégia, primeira empresa do Nordeste do Brasil focada em gestão de marcas e comunicação pela neurociência. Com mais de 700 projetos entregues em todo o país, atuou em segmentos como saúde e bem-estar, mercado financeiro, agronegócio, distribuição, alimentos, shopping centers, construção civil e incorporação, indústria, veículos de comunicação e mídia e agências de publicidade, entre outros.",
        },
        {
          id: "2020",
          tag: "Fundou em",
          highlight: "2020",
          isYear: true,
          text: "A Caza Futuro, voltada à criação de produtos digitais sob a ótica da metodologia Jobs to Be Done, focada nas necessidades das pessoas, e ao desenvolvimento de novos modelos de negócio para empresas que buscam a transformação digital.",
        },
        {
          id: "medeiros",
          tag: "Criadora da\nplataforma",
          highlight: "Medeiros\n365",
          isYear: false,
          text: "Ecossistema 100% digital para compras B2B conectando indústrias de alimentos e bebidas a empreendedores dos estados do Maranhão e Piauí. Fundada em 2023 e lançada em 2024 após estudos e pesquisas, supera os 60 milhões de faturamento e movimenta a economia local de dois estados que sofrem escassez de abastecimento.",
        },
      ],
    },
  },
  en: {
    hero: {
      tagline: "About",
      title: "Master in Communication and New Technologies",
      paragraphs: [
        "With over 35 years of experience across Brazilian and international markets, Simone leads executive immersions and workshops focused on sales, leadership, and innovation, applying consumer neuroscience to elevate communication and strategic decision-making.",
        "She developed a proprietary methodology applied to companies and leadership teams seeking structured growth, strategic clarity, and authentic market differentiation.",
        "She is also a columnist for prominent media outlets, an international keynote speaker, and an author.",
      ],
      image: {
        src: "/images/sobre/simone-hero.png",
        alt: "Simone Moura - Master in Communication and New Technologies",
      },
    },
    academic: {
      title: "Academic Background",
      subtitle: "International experiences:\nUniversity of Berlin and London Business School",
      badgeSvg: "/images/sobre/formacao-badge.svg",
      readMore: "Learn more",
      readLess: "Less details",
      previousSlide: "Previous slide",
      nextSlide: "Next slide",
      items: [
        {
          institution: "Harvard University",
          title: "Executive Education in Disruptive Theories & JTBD",
          description: "Executive education course in Disruptive Theories and Jobs to be Done at Harvard University, Massachusetts, United States.",
        },
        {
          institution: "University of Berlin",
          title: "Executive Education in Marketing and Communication",
          description: "Executive education program in Marketing and Communication at the University of Berlin, Germany.",
        },
        {
          institution: "London Business School",
          title: "Foundations of Leadership",
          description: "Leadership foundations program by London School of Business Administration.",
        },
        {
          institution: "University of Minho",
          title: "Master's in Communication and Educational Technologies",
          description: "Master in Communication and New Educational Technologies from Universidade do Minho — Braga, Portugal.",
        },
        {
          institution: "University of Minho",
          title: "Ph.D. Candidate in Communication and Technologies",
          description: "Ph.D. candidate in Communication and Technologies at Universidade do Minho — Braga, Portugal.",
        },
        {
          institution: "FGV / SP",
          title: "Postgraduate in Consumer Behavior and Administration",
          description: "Postgraduate specialization in Consumer Behavior and Business Administration at FGV/SP, Brazil.",
        },
        {
          institution: "PUCRS",
          title: "MBA in Branding Growth",
          description: "MBA in Branding Growth from Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS).",
        },
        {
          institution: "PUCRS",
          title: "MBA in Neuromarketing and Consumer Behavior",
          description: "MBA in Neuromarketing and Consumer Behavior from Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS).",
        },
        {
          institution: "ESPM / SP",
          title: "Executive Extension in Communication and Neuroscience",
          description: "Executive course in Communication and Neuroscience at Escola Superior de Propaganda e Marketing (ESPM/SP).",
        },
        {
          institution: "Estácio / RJ",
          title: "MBA in Administration and Marketing",
          description: "MBA in Business Administration and Marketing from Universidade Estácio de Sá (RJ).",
        },
        {
          institution: "PUCRS",
          title: "Branded Content & Brand Reputation",
          description: "Executive specialization in Branded Content, Communication, and Brand Reputation from PUCRS.",
        },
        {
          institution: "UBM / RJ",
          title: "Bachelor of Social Communication - Public Relations",
          description: "Bachelor's degree in Social Communication with emphasis on Public Relations from UBM/RJ.",
        },
        {
          institution: "Idaho Language School",
          title: "English Language Proficiency",
          description: "English Language Proficiency certification by Idaho Language School, United States.",
        },
        {
          institution: "Instituto Yázigi / SP",
          title: "English Language Proficiency",
          description: "English Language Proficiency certification from Instituto Yázigi, São Paulo.",
        },
        {
          institution: "Instituto Prospera do Brasil",
          title: "Ikigai Executive Coaching Certification",
          description: "Certified Ikigai Executive Coaching from Instituto Prospera do Brasil and Business & Competence School.",
        },
      ],
    },
    timeline: {
      items: [
        {
          id: "2010",
          tag: "Founded in",
          highlight: "2010",
          isYear: true,
          text: "Ping Pong Estratégia, the first consultancy in Northeast Brazil focused on brand management and neuroscience-based communication. Delivering over 700 projects nationwide across sectors including healthcare, financial markets, agribusiness, distribution, retail, real estate, manufacturing, and media.",
        },
        {
          id: "2020",
          tag: "Founded in",
          highlight: "2020",
          isYear: true,
          text: "Caza Futuro, dedicated to building digital products through the Jobs to Be Done framework, centered on genuine human needs and developing new business models for companies undergoing digital transformation.",
        },
        {
          id: "medeiros",
          tag: "Platform\nCreator",
          highlight: "Medeiros\n365",
          isYear: false,
          text: "A 100% digital B2B marketplace connecting food and beverage producers with entrepreneurs in Maranhão and Piauí. Founded in 2023 and launched in 2024 with institutional investment, exceeding R$ 60M in revenue and strengthening local regional commerce.",
        },
      ],
    },
  },
  es: {
    hero: {
      tagline: "Sobre mí",
      title: "Máster en Comunicación y Nuevas Tecnologías",
      paragraphs: [
        "Con más de 35 años de trayectoria en el mercado de Brasil y el exterior, Simone lidera inmersiones y capacitaciones con foco en ventas, liderazgo e innovación, aplicando la neurociencia del consumo para optimizar la comunicación de equipos y la toma de decisiones.",
        "Desarrolló una metodología propia orientada a empresas y directivos que buscan crecimiento estructurado, claridad estratégica y diferenciación real en el mercado.",
        "Es además columnista en reconocidos medios de comunicación, conferencista y escritora.",
      ],
      image: {
        src: "/images/sobre/simone-hero.png",
        alt: "Simone Moura - Máster en Comunicación y Nuevas Tecnologías",
      },
    },
    academic: {
      title: "Formación académica",
      subtitle: "Experiencias internacionales:\nUniversidad de Berlín y London Business School",
      badgeSvg: "/images/sobre/formacao-badge.svg",
      readMore: "Saber más",
      readLess: "Menos detalles",
      previousSlide: "Slide anterior",
      nextSlide: "Próximo slide",
      items: [
        {
          institution: "Universidad de Harvard",
          title: "Extensión en Teorías Disruptivas y Jobs to be Done",
          description: "Curso de extensión en Teorías Disruptivas y Jobs to be done por la Universidad de Harvard, Massachusetts, Estados Unidos.",
        },
        {
          institution: "Universidad de Berlín",
          title: "Extensión en Marketing y Comunicación",
          description: "Curso de extensión en Marketing y Comunicación por la Universidad de Berlín, Alemania.",
        },
        {
          institution: "London Business School",
          title: "Fundamentos del Liderazgo",
          description: "Formación en Fundamentos del liderazgo por la London School of Business Administration.",
        },
        {
          institution: "Universidad del Minho",
          title: "Máster en Comunicación y Nuevas Tecnologías",
          description: "Máster en Comunicación y Nuevas Tecnologías Educativas por la Universidade do Minho — Braga, Portugal.",
        },
        {
          institution: "Universidad del Minho",
          title: "Doctoranda en Comunicación y Tecnologías",
          description: "Doctoranda en Comunicación y Tecnologías por la Universidade do Minho — Braga, Portugal.",
        },
        {
          institution: "FGV / SP",
          title: "Posgrado en Comportamiento del Consumidor",
          description: "Posgraduada en comportamiento del consumidor y Administración por la FGV/SP.",
        },
        {
          institution: "PUCRS",
          title: "MBA en Branding Growth",
          description: "MBA en Branding Growth por la Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS).",
        },
        {
          institution: "PUCRS",
          title: "MBA en Neuromarketing y Consumo",
          description: "MBA en neuromarketing y comportamiento del consumidor por la PUCRS.",
        },
        {
          institution: "ESPM / SP",
          title: "Extensión en Comunicación y Neurociencia",
          description: "Extensión en Comunicación y Neurociencia por la Escola Superior de Propaganda e Marketing (ESPM/SP).",
        },
        {
          institution: "Estácio / RJ",
          title: "MBA en Administración y Marketing",
          description: "MBA en Administración y Marketing por la Universidad Estácio de Sá (RJ).",
        },
        {
          institution: "PUCRS",
          title: "Branded Content y Reputación de Marcas",
          description: "Especialización en Branded Content y Comunicación y reputación de marcas por la PUCRS.",
        },
        {
          institution: "UBM / RJ",
          title: "Licenciatura en Comunicación Social - Relaciones Públicas",
          description: "Licenciada en Comunicación Social con énfasis en Relaciones Públicas por la UBM/RJ.",
        },
        {
          institution: "Idaho Language School",
          title: "Competencia en Lengua Inglesa",
          description: "Certificado de competencia en lengua inglesa por la Idaho Language School / EE.UU.",
        },
        {
          institution: "Instituto Yázigi / SP",
          title: "Competencia en Lengua Inglesa",
          description: "Certificado de competencia en lengua inglesa por el Instituto Yázigi / SP.",
        },
        {
          institution: "Instituto Prospera do Brasil",
          title: "Formación en Coaching Ikigai",
          description: "Formación en Coaching Ikigai por el Instituto Prospera do Brasil / Escuela de Negocios y Competencias.",
        },
      ],
    },
    timeline: {
      items: [
        {
          id: "2010",
          tag: "Fundó en",
          highlight: "2010",
          isYear: true,
          text: "Ping Pong Estratégia, primera consultora del Nordeste de Brasil enfocada en gestión de marcas y comunicación basada en neurociencia. Con más de 700 proyectos entregados en todo el país en salud, sector financiero, agronegocio, distribución, retail, industria y medios.",
        },
        {
          id: "2020",
          tag: "Fundó en",
          highlight: "2020",
          isYear: true,
          text: "Caza Futuro, orientada a la creación de productos digitales bajo la metodología Jobs to Be Done, centrada en las necesidades de las personas y en desarrollar nuevos modelos de negocio para la transformación digital.",
        },
        {
          id: "medeiros",
          tag: "Creadora de la\nplataforma",
          highlight: "Medeiros\n365",
          isYear: false,
          text: "Ecosistema digital B2B que conecta a productores de alimentos y bebidas con comercios de Maranhão y Piauí. Fundada en 2023 y lanzada en 2024 con inversión institucional, superando los 60 millones en facturación y dinamizando la economía regional.",
        },
      ],
    },
  },
};

export function getSobreContent(locale = DEFAULT_LOCALE) {
  return sobreContentByLocale[locale] ?? sobreContentByLocale[DEFAULT_LOCALE];
}
