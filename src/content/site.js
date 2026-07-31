/**
 * Dados globais do site: identidade, contato, navegacao e redes.
 * PLACEHOLDER — substituir pelos dados reais ao importar o layout do Figma.
 */

export const site = {
  name: "Simone",
  shortName: "Simone",
  // Usado em metadata, sitemap e og:url. Trocar pelo dominio final.
  url: "https://www.exemplo.com.br",
  description:
    "Descricao curta do site (150-160 caracteres). Aparece no Google e nos previews de link.",
  locale: "pt-BR",
};

export const contact = {
  email: "contato@exemplo.com.br",
  phone: "+55 11 90000-0000",
  phoneDisplay: "(11) 90000-0000",
  whatsapp: "5511900000000",
  address: {
    street: "Rua Exemplo, 123",
    city: "Sao Paulo",
    state: "SP",
    zip: "00000-000",
  },
};

export const social = [
  { label: "Instagram", href: "https://instagram.com/", icon: "instagram" },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: "linkedin" },
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
