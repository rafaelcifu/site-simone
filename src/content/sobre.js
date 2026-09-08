import { DEFAULT_LOCALE } from "./locales";

export const sobreContentByLocale = {
  pt: {
    hero: {
      tagline: "Sobre",
      title: "Mestre em Comunicação e Novas Tecnologias",
      paragraphs: [
        "Com mais de 30 anos de atuação, Simone conduz imersões e treinamentos com foco em vendas, liderança e inovação, utilizando a neurociência aplicada ao consumo para melhorar a comunicação das equipes e a tomada de decisão.",
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
        { institution: "Harvard University", field: "Gestão de Marca" },
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
};

export function getSobreContent(locale = DEFAULT_LOCALE) {
  return sobreContentByLocale[locale] ?? sobreContentByLocale[DEFAULT_LOCALE];
}
