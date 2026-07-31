/**
 * Servicos. Cada item vira um card em /servicos e uma pagina em
 * /servicos/[slug]. Adicionar um servico = adicionar um objeto aqui.
 *
 * PLACEHOLDER — substituir pelo conteudo real.
 */

export const servicosPage = {
  eyebrow: "Servicos",
  title: "Como posso ajudar",
  description: "Resumo em uma ou duas frases do que e oferecido.",
};

export const servicosUi = {
  cardCtaLabel: "Saiba mais",
  detailEyebrow: "Servico",
};

export const servicos = [
  {
    slug: "servico-um",
    title: "Servico um",
    // Frase curta usada no card da listagem
    excerpt: "Resumo de uma linha que aparece no card.",
    // Nome do icone do lucide-react (ex.: "Scale", "HeartHandshake", "Sparkles")
    icon: "Sparkles",
    // Conteudo da pagina interna
    hero: {
      title: "Servico um",
      description: "Paragrafo de abertura da pagina do servico.",
    },
    // Blocos de texto da pagina interna
    sections: [
      {
        title: "Para quem e",
        body: "Descreva o publico e a dor que esse servico resolve.",
      },
      {
        title: "Como funciona",
        body: "Descreva o processo em linguagem simples.",
      },
    ],
    // Lista de entregas / beneficios
    highlights: ["Beneficio um", "Beneficio dois", "Beneficio tres"],
  },
  {
    slug: "servico-dois",
    title: "Servico dois",
    excerpt: "Resumo de uma linha que aparece no card.",
    icon: "Compass",
    hero: {
      title: "Servico dois",
      description: "Paragrafo de abertura da pagina do servico.",
    },
    sections: [
      { title: "Para quem e", body: "..." },
      { title: "Como funciona", body: "..." },
    ],
    highlights: ["Beneficio um", "Beneficio dois"],
  },
  {
    slug: "servico-tres",
    title: "Servico tres",
    excerpt: "Resumo de uma linha que aparece no card.",
    icon: "Target",
    hero: {
      title: "Servico tres",
      description: "Paragrafo de abertura da pagina do servico.",
    },
    sections: [
      { title: "Para quem e", body: "..." },
      { title: "Como funciona", body: "..." },
    ],
    highlights: ["Beneficio um", "Beneficio dois"],
  },
];

/** Helper usado por /servicos/[slug]. */
export function getServico(slug) {
  return servicos.find((s) => s.slug === slug);
}
