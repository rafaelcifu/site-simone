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
  /** Caminho da foto em /public. Usada em JSON-LD e OG. */
  image: "/simone-moura.jpg",
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
 */
export const pageSeo = {
  home: {
    // A home usa `title.absolute` para nao virar "Simone Moura | Simone Moura"
    title: "Simone Moura | Branding Estrategico e Neurociencia do Consumo",
    description:
      "Estrategista de branding e marketing com +30 anos e +700 projetos. Reposicionamento de marca, neurociencia aplicada ao consumo e Jobs to be Done.",
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
};
