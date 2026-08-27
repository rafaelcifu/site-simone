import { DEFAULT_LOCALE } from "./locales";

export const metodologiasContentByLocale = {
  pt: {
    hero: {
      eyebrow: "Metodologia",
      title: "Mais de 700 projetos não nascem por acaso.",
      subtitle:
        "Branding estratégico · Neurociência aplicada · Economia comportamental · JTBD · Análise de mercado · Liderança por propósito",
      inspiration:
        "Inspirada por: Richard Thaler, Simon Sinek, Paco Underhill, Martin Lindstrom, Clayton Christensen",
    },
    diagram: {
      topGraphic: "/images/metodologias/metodologia-top-diagram.svg",
      curvesGraphic: "/images/metodologias/metodologia-curves-diagram.svg",
      pillars: [
        "Branding estratégico",
        "Neurociência aplicada ao consumo",
        "Economia comportamental",
        "Jobs to Be Done (JTBD)",
        "Análise de mercado e comportamento humano",
        "Pesquisa de comportamento",
        "Liderança por propósito",
      ],
    },
  },
  en: {
    hero: {
      eyebrow: "Methodology",
      title: "More than 700 projects do not happen by chance.",
      subtitle:
        "Strategic branding · Applied neuroscience · Behavioral economics · JTBD · Market analysis · Purpose-driven leadership",
      inspiration:
        "Inspired by: Richard Thaler, Simon Sinek, Paco Underhill, Martin Lindstrom, Clayton Christensen",
    },
    diagram: {
      topGraphic: "/images/metodologias/metodologia-top-diagram.svg",
      curvesGraphic: "/images/metodologias/metodologia-curves-diagram.svg",
      pillars: [
        "Strategic branding",
        "Applied consumer neuroscience",
        "Behavioral economics",
        "Jobs to Be Done (JTBD)",
        "Market analysis & human behavior",
        "Behavioral research",
        "Purpose-driven leadership",
      ],
    },
  },
  es: {
    hero: {
      eyebrow: "Metodología",
      title: "Más de 700 proyectos no nacen por casualidad.",
      subtitle:
        "Branding estratégico · Neurociencia aplicada · Economía del comportamiento · JTBD · Análisis de mercado · Liderazgo por propósito",
      inspiration:
        "Inspirada por: Richard Thaler, Simon Sinek, Paco Underhill, Martin Lindstrom, Clayton Christensen",
    },
    diagram: {
      topGraphic: "/images/metodologias/metodologia-top-diagram.svg",
      curvesGraphic: "/images/metodologias/metodologia-curves-diagram.svg",
      pillars: [
        "Branding estratégico",
        "Neurociencia aplicada al consumo",
        "Economía del comportamiento",
        "Jobs to Be Done (JTBD)",
        "Análisis de mercado y comportamiento humano",
        "Investigación de comportamiento",
        "Liderazgo por propósito",
      ],
    },
  },
};

export const metodologias =
  metodologiasContentByLocale.pt.diagram.pillars.map((p, i) => ({
    slug: `metodologia-${i + 1}`,
    title: p,
    excerpt: p,
  }));

export const metodologiasPage = metodologiasContentByLocale.pt.hero;

export function getMetodologiasContent(locale = DEFAULT_LOCALE) {
  return (
    metodologiasContentByLocale[locale] ??
    metodologiasContentByLocale[DEFAULT_LOCALE]
  );
}
