/**
 * Dados globais do site: identidade, contato, navegacao e redes.
 *
 * Este arquivo alimenta metadata, JSON-LD, sitemap e llms.txt.
 * Errar um dado aqui propaga para o SEO inteiro — confira antes de commitar.
 */

export const site = {
  name: "Simone Moura",
  shortName: "Simone Moura",
  /** Dominio canonico. Sem barra no final. */
  url: "https://www.simonemoura.com.br",
  /** 150-160 caracteres. Aparece no Google e nos previews de link. */
  description:
    "Simone Moura une branding estrategico, neurociencia aplicada ao consumo e Jobs to be Done para reposicionar marcas e destravar crescimento. +30 anos, +700 projetos.",
  /** Frase curta de posicionamento. Usada em OG e llms.txt. */
  tagline:
    "Crio estrategias para empresas com foco nas pessoas, na inovacao e na transformacao de mercados",
  locale: "pt-BR",
  ogLocale: "pt_BR",
};

export const contact = {
  // TODO: substituir pelos dados reais antes do deploy.
  email: "contato@simonemoura.com.br",
  phone: "+55 85 90000-0000",
  phoneDisplay: "(85) 90000-0000",
  whatsapp: "5585900000000",
  address: {
    street: "",
    city: "Fortaleza",
    state: "CE",
    stateName: "Ceara",
    zip: "",
    country: "BR",
  },
};

/**
 * Perfis oficiais. Alimentam o `sameAs` do JSON-LD — e o `sameAs` e um dos
 * sinais mais fortes para o Google e para LLMs ligarem o site a uma entidade
 * conhecida. Preencha com as URLs REAIS; link errado atrapalha mais que ajuda.
 */
export const social = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/simonemoura",
    icon: "instagram",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/simonemoura",
    icon: "linkedin",
  },
];

/** Navegacao principal (header e footer). */
export const mainNav = [
  { label: "Inicio", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Servicos", href: "/servicos" },
  { label: "Metodologias", href: "/metodologias" },
  { label: "Contato", href: "/contato" },
];

/** CTA principal do header. */
export const primaryCta = {
  label: "Fale comigo",
  href: "/contato",
};

/** Copy compartilhada pela estrutura global do site. */
export const siteUi = {
  accessibility: {
    skipToContent: "Pular para o conteudo",
  },
  header: {
    navigationLabel: "Principal",
    mobileNavigationLabel: "Principal (mobile)",
    openMenuLabel: "Abrir menu",
  },
  footer: {
    navigationLabel: "Rodape",
    navigationTitle: "Navegacao",
    contactTitle: "Contato",
    copyrightSymbol: "©",
    rights: "Todos os direitos reservados.",
  },
  ctaBand: {
    title: "Pronto para comecar?",
    description: "Frase curta reforcando o proximo passo.",
  },
  notFound: {
    code: "404",
    title: "Pagina nao encontrada",
    description: "O endereco que voce tentou acessar nao existe ou foi movido.",
    ctaLabel: "Voltar para o inicio",
    ctaHref: "/",
  },
  socialCard: {
    description:
      "Branding estrategico, neurociencia aplicada ao consumo e Jobs to be Done.",
    stats: "+30 anos · +700 projetos entregues",
  },
};
