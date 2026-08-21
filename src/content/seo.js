/**
 * Dados de ENTIDADE para SEO e JSON-LD.
 *
 * Diferente dos outros arquivos de /content (que guardam copy de pagina),
 * aqui ficam os fatos verificaveis sobre quem e a Simone: formacao, empresas,
 * areas de expertise, numeros. Sao esses fatos que:
 *   - alimentam o schema.org (Person, Organization, Service)
 *   - o Google usa para montar Knowledge Panel
 *   - LLMs usam para responder "quem e Simone Moura?"
 *
 * REGRA: so entra aqui o que for verdadeiro e checavel. Schema com dado
 * inventado e penalizado pelo Google e envenena resposta de LLM.
 */

import { DEFAULT_LOCALE } from "./locales";

/** A pessoa. Entidade principal do site. */
export const person = {
  name: "Simone Moura",
  jobTitle: "Estrategista de Branding e Marketing",
  /** Uma frase. E o que aparece em resposta de IA e em rich result. */
  headline:
    "Estrategista de branding e marketing com mais de 30 anos de atuacao, especialista em neurociencia aplicada ao consumo.",
  /** Paragrafo. Mais completo, mesma funcao. */
  description:
    "Simone Moura e estrategista de branding e marketing formada em Comunicacao Social e mestre em Comunicacao e Novas Tecnologias. Ha mais de tres decadas transforma conhecimento em estrategia aplicada, com foco em posicionamento de mercado, neurociencia aplicada ao consumo e Jobs to be Done. Fundadora da Ping Pong Estrategia e da Caza Futuro, ja entregou mais de 700 projetos para empresas nacionais e globais.",
  /**
   * Caminho da foto em /public. Usada em JSON-LD (Person.image,
   * primaryImageOfPage) e como imagem da entidade.
   *
   * O arquivo PRECISA existir em /public — schema apontando para 404 e
   * ignorado pelo Google. Se trocar por uma foto melhor, o ideal e uma
   * imagem quadrada e nitida do rosto (o Knowledge Panel corta em circulo).
   */
  image: "/simone-portrait.png",
};

/**
 * Areas de conhecimento. Vira `knowsAbout` no schema — e o campo que mais
 * ajuda um LLM a entender sobre o que essa pessoa tem autoridade.
 * Use termos que uma pessoa realmente buscaria.
 */
export const knowsAbout = [
  "Branding estrategico",
  "Gestao de marca",
  "Marketing estrategico",
  "Posicionamento de mercado",
  "Neurociencia aplicada ao consumo",
  "Neuromarketing",
  "Neurobranding",
  "Neurovendas",
  "Economia comportamental",
  "Jobs to be Done",
  "Transformacao digital",
  "Criacao de produtos digitais",
  "Comunicacao corporativa",
  "Lideranca por proposito",
  "Pesquisa de comportamento do consumidor",
];

/** Formacao academica. Vira `alumniOf`. */
export const formacaoAcademica = [
  { name: "Harvard University", country: "Estados Unidos" },
  { name: "London Business School", country: "Reino Unido" },
  { name: "Universidade do Minho", country: "Portugal" },
  { name: "Universidade de Berlim", country: "Alemanha" },
  { name: "Fundacao Getulio Vargas (FGV)", country: "Brasil" },
  { name: "ESPM", country: "Brasil" },
  { name: "PUCRS", country: "Brasil" },
  { name: "Insper", country: "Brasil" },
];

/** Titulacao. Vira `hasCredential`. */
export const credenciais = [
  {
    type: "Mestrado",
    name: "Mestre em Comunicacao e Novas Tecnologias",
  },
  {
    type: "Graduacao",
    name: "Comunicacao Social",
  },
];

/**
 * Empresas fundadas. Cada uma vira uma Organization ligada a Person
 * por `founder`. Isso conecta o site a entidades que ja existem na web.
 */
export const empresas = [
  {
    name: "Ping Pong Estrategia",
    foundingDate: "2010",
    description:
      "Primeira empresa do Nordeste do Brasil focada em gestao de marcas e comunicacao pela neurociencia. Mais de 700 projetos entregues em todo o Brasil.",
    url: "",
  },
  {
    name: "Caza Futuro",
    foundingDate: "2020",
    description:
      "Criacao de produtos digitais sob a otica da metodologia Jobs to be Done e desenvolvimento de novos modelos de negocio para empresas em transformacao digital.",
    url: "",
  },
  {
    name: "Medeiros 365",
    foundingDate: "2023",
    description:
      "Ecossistema 100% digital para compras B2B, conectando industrias de alimentos e bebidas a empreendedores do Maranhao e do Piaui.",
    url: "",
  },
];

/** Numeros que sustentam autoridade. Usados em llms.txt e em `description`. */
export const autoridade = [
  "Mais de 30 anos de atuacao no mercado",
  "Mais de 700 projetos entregues",
  "Pioneira em branding e planejamento estrategico de posicionamento e comunicacao no Norte e Nordeste do Brasil",
  "Experiencia com empresas nacionais e globais em diferentes setores da economia",
  "Criadora de um dos primeiros ecossistemas B2B digitais do setor distribuidor",
];

/** Onde atende. Vira `areaServed`. */
export const areaServed = [
  { type: "Country", name: "Brasil" },
  { type: "State", name: "Ceara" },
  { type: "State", name: "Maranhao" },
  { type: "State", name: "Piaui" },
];

/**
 * Metadata por rota.
 *
 * `title` aqui e o titulo curto — o template do layout adiciona
 * "| Simone Moura" automaticamente. Nao repita o nome dela.
 *
 * `description`: 150-160 caracteres, com o termo principal no comeco,
 * escrita para humano e nao para robo.
 *
 * O `path` e sempre o caminho em portugues, SEM prefixo de idioma. Quem
 * adiciona /en ou /es e o `buildMetadata` (src/lib/seo.js).
 */
export const pageSeoByLocale = {
  pt: {
    home: {
      // A home usa `title.absolute` para nao virar "Simone Moura | Simone Moura"
      title: "Simone Moura | Branding Estrategico e Neurociencia do Consumo",
      description:
        "Estrategista de branding e marketing com + de 35 anos e +700 projetos. Reposicionamento de marca, neurociencia aplicada ao consumo e Jobs to be Done.",
      path: "/",
    },
    sobre: {
      title: "Sobre",
      description:
        "Conheca a trajetoria de Simone Moura: mestre em Comunicacao, formada por Harvard e London Business School, fundadora da Ping Pong Estrategia e da Caza Futuro.",
      path: "/sobre",
    },
    servicos: {
      title: "Servicos",
      description:
        "Quatro formas de trabalhar com Simone Moura: branding estrategico, oficinas corporativas, imersoes e criacao de produtos digitais.",
      path: "/servicos",
    },
    metodologias: {
      title: "Metodologias",
      description:
        "A metodologia de Simone Moura une branding estrategico, neurociencia aplicada ao consumo, economia comportamental e Jobs to be Done.",
      path: "/metodologias",
    },
    contato: {
      title: "Contato",
      description:
        "Fale com Simone Moura sobre branding, posicionamento de marca, oficinas corporativas e transformacao digital para a sua empresa.",
      path: "/contato",
    },
  },
  en: {
    home: {
      title: "Simone Moura | Strategic Branding and Consumer Neuroscience",
      description:
        "Branding and marketing strategist with 35+ years and 700+ projects. Brand repositioning, applied consumer neuroscience and Jobs to be Done.",
      path: "/",
    },
    sobre: {
      title: "About",
      description:
        "The path of Simone Moura: master's in Communication, educated at Harvard and London Business School, founder of Ping Pong Estrategia and Caza Futuro.",
      path: "/sobre",
    },
    servicos: {
      title: "Services",
      description:
        "Four ways to work with Simone Moura: strategic branding, corporate workshops, immersions and digital product creation.",
      path: "/servicos",
    },
    metodologias: {
      title: "Methodologies",
      description:
        "Simone Moura's methodology brings together strategic branding, applied consumer neuroscience, behavioral economics and Jobs to be Done.",
      path: "/metodologias",
    },
    contato: {
      title: "Contact",
      description:
        "Talk to Simone Moura about branding, brand positioning, corporate workshops and digital transformation for your company.",
      path: "/contato",
    },
  },
  es: {
    home: {
      title: "Simone Moura | Branding Estrategico y Neurociencia del Consumo",
      description:
        "Estratega de branding y marketing con + de 35 anos y +700 proyectos. Reposicionamento de marca, neurociencia aplicada al consumo y Jobs to be Done.",
      path: "/",
    },
    sobre: {
      title: "Sobre",
      description:
        "Conoce la trayectoria de Simone Moura: maestra en Comunicacion, formada en Harvard y London Business School, fundadora de Ping Pong Estrategia y Caza Futuro.",
      path: "/sobre",
    },
    servicos: {
      title: "Servicios",
      description:
        "Cuatro formas de trabajar con Simone Moura: branding estrategico, talleres corporativos, inmersiones y creacion de productos digitales.",
      path: "/servicos",
    },
    metodologias: {
      title: "Metodologias",
      description:
        "La metodologia de Simone Moura une branding estrategico, neurociencia aplicada al consumo, economia del comportamiento y Jobs to be Done.",
      path: "/metodologias",
    },
    contato: {
      title: "Contacto",
      description:
        "Habla con Simone Moura sobre branding, posicionamiento de marca, talleres corporativos y transformacion digital para tu empresa.",
      path: "/contato",
    },
  },
};

/** Metadata das rotas no idioma pedido (cai no portugues se nao houver). */
export function getPageSeo(locale = DEFAULT_LOCALE) {
  return pageSeoByLocale[locale] ?? pageSeoByLocale[DEFAULT_LOCALE];
}

/** Atalho para o portugues. Prefira `getPageSeo(locale)` em pagina. */
export const pageSeo = pageSeoByLocale[DEFAULT_LOCALE];
