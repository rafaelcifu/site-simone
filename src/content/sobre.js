import { DEFAULT_LOCALE } from "./locales";

export const sobreContentByLocale = {
  pt: {
    hero: {
      tagline: "Sobre",
      title: "Mestre em Comunicação e Novas Tecnologias",
      paragraphs: [
        "Com mais de 30 anos de atuação, Simone conduz imersões e treinamentos com foco em vendas, liderança e inovação, utilizando a neurociência aplicada ao consumo para melhorar a comunicação de times e à tomada de decisão.",
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
      items: [
        { institution: "INSPER", field: "Comunicação" },
        { institution: "Harvard University", field: "Gestão De Marca" },
        { institution: "Universidade do Minho", field: "Comunicação" },
        { institution: "FGV", field: "Comunicação" },
        { institution: "ESPM", field: "Comunicação" },
        { institution: "PUCRS", field: "Comunicação" },
      ],
    },
    timeline: {
      items: [
        {
          id: "2010",
          tag: "Fundou em",
          highlight: "2010",
          isYear: true,
          text: "A Ping Pong Estratégia a primeira empresa do Nordeste do Brasil focada em gestão de marcas e comunicação pela neurociência. Com mais de 700 projetos entregues em todo o Brasil para diversos segmentos tais como: Saúde e wellness, mercado financeiro, agronegócio, canal distribuidor, setor de alimentos, shopping centers, construção civil e incorporadoras, setor industrial, veículos de comunicação e mídia, agências de publicidade dentre outros.",
        },
        {
          id: "2020",
          tag: "Fundou em",
          highlight: "2020",
          isYear: true,
          text: "A Caza Futuro, voltada a criação de produtos digitais sob a ótica da metodologia Jobs to be done (focada nas necessidades das pessoas) e desenvolvimento de novos modelos de negócio para as empresas que buscam transformação digital",
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
};

export function getSobreContent(locale = DEFAULT_LOCALE) {
  return sobreContentByLocale[locale] ?? sobreContentByLocale[DEFAULT_LOCALE];
}
