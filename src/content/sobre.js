/**
 * Pagina Sobre.
 * PLACEHOLDER — substituir pelo conteudo real.
 */

export const sobrePage = {
  eyebrow: "Sobre",
  title: "Titulo da pagina sobre",
  description: "Frase de apoio.",
};

export const bio = {
  paragraphs: [
    "Primeiro paragrafo da historia.",
    "Segundo paragrafo da historia.",
  ],
  image: { src: "", alt: "" },
};

export const formacoes = [
  { year: "2020", title: "Formacao ou certificacao", institution: "Instituicao" },
  { year: "2015", title: "Formacao ou certificacao", institution: "Instituicao" },
];

export const valores = [
  { title: "Valor um", body: "Descricao curta.", icon: "Heart" },
  { title: "Valor dois", body: "Descricao curta.", icon: "ShieldCheck" },
  { title: "Valor tres", body: "Descricao curta.", icon: "Handshake" },
];

export const sobreSections = {
  values: {
    eyebrow: "Valores",
    title: "No que eu acredito",
  },
  education: {
    eyebrow: "Trajetoria",
    title: "Formacao",
  },
};

export function getSobreContent(locale = "pt") {
  // Retorna conteúdo traduzido futuramente, por enquanto retorna PT como fallback
  return {
    bio,
    formacoes,
    sobrePage,
    sobreSections,
    valores,
  };
}
