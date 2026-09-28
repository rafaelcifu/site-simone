import { DEFAULT_LOCALE } from "./locales";

export const metodologiasContentByLocale = {
  pt: {
    hero: {
      eyebrow: "Metodologia",
      title: "Mais de 700 projetos não nascem por acaso.",
      paragraphs: [
        "Com mais de 35 anos de atuação no Brasil e no exterior, Simone Moura desenvolve planejamento estratégico em branding, comunicação e posicionamento de mercado, apoiando empresas na construção de marcas mais relevantes, negócios mais competitivos e estratégias conectadas às transformações do mundo.",
        "Também conduz imersões e treinamentos nas áreas de vendas, liderança e inovação, integrando conhecimentos de neurociência aplicada ao consumo, comportamento e estratégia para aprimorar a comunicação, a experiência e a tomada de decisão nas organizações.",
        "Palestrante, escritora e colunista, transforma conhecimento, pesquisa e experiência de mercado em provocações e caminhos aplicáveis aos desafios contemporâneos dos negócios.",
      ],
    },
    diagram: {
      topGraphic: "/images/metodologias/metodologia-top-diagram.svg",
      curvesGraphic: "/images/metodologias/metodologia-curves-diagram.svg",
      pillars: [
        "Branding estratégico",
        "Posicionamento de mercado e de comunicação",
        "Neurociência aplicada ao consumo",
        "Economia comportamental",
        "Jobs to be done",
        "Inteligência de mercado",
        "Liderança por propósito",
      ],
    },
  },
  en: {
    hero: {
      eyebrow: "Methodology",
      title: "More than 700 projects do not happen by chance.",
      paragraphs: [
        "With over 35 years of experience in Brazil and abroad, Simone Moura develops strategic planning in branding, communication, and market positioning, supporting companies in building more relevant brands, more competitive businesses, and strategies connected to global transformations.",
        "She also leads immersions and training in sales, leadership, and innovation, integrating insights from applied consumer neuroscience, behavior, and strategy to enhance organizational communication, experience, and decision-making.",
        "Keynote speaker, author, and columnist, she transforms knowledge, research, and market experience into actionable provocations and pathways for contemporary business challenges.",
      ],
    },
    diagram: {
      topGraphic: "/images/metodologias/metodologia-top-diagram.svg",
      curvesGraphic: "/images/metodologias/metodologia-curves-diagram.svg",
      pillars: [
        "Strategic branding",
        "Market and communication positioning",
        "Applied consumer neuroscience",
        "Behavioral economics",
        "Jobs to be done",
        "Market intelligence",
        "Purpose-driven leadership",
      ],
    },
  },
  es: {
    hero: {
      eyebrow: "Metodología",
      title: "Más de 700 proyectos no nacen por casualidad.",
      paragraphs: [
        "Con más de 35 años de trayectoria en Brasil y en el exterior, Simone Moura desarrolla planificación estratégica en branding, comunicación y posicionamiento de mercado, apoyando a empresas en la construcción de marcas más relevantes, negocios más competitivos y estrategias conectadas con las transformaciones del mundo.",
        "También conduce inmersiones y capacitaciones en ventas, liderazgo e innovación, integrando conocimientos de neurociencia aplicada al consumo, comportamiento y estrategia para mejorar la comunicación, la experiencia y la toma de decisiones en las organizaciones.",
        "Conferencista, escritora y columnista, transforma conocimiento, investigación y experiencia de mercado en provocaciones y caminos aplicables a los desafíos empresariales contemporáneos.",
      ],
    },
    diagram: {
      topGraphic: "/images/metodologias/metodologia-top-diagram.svg",
      curvesGraphic: "/images/metodologias/metodologia-curves-diagram.svg",
      pillars: [
        "Branding estratégico",
        "Posicionamiento de mercado y de comunicación",
        "Neurociencia aplicada al consumo",
        "Economía del comportamiento",
        "Jobs to be done",
        "Inteligencia de mercado",
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
