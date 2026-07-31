import { site } from "@/content/site";
import { servicos } from "@/content/servicos";

/**
 * Sitemap gerado no build.
 *
 * ROTA NOVA = ADICIONAR AQUI. Rota fora do sitemap demora muito mais
 * para ser indexada.
 *
 * `priority` e relativo dentro do proprio site (nao e nota de qualidade):
 * home 1.0, paginas principais 0.8, paginas de detalhe 0.7.
 */
export default function sitemap() {
  const now = new Date();

  const paginas = [
    { path: "", priority: 1, changeFrequency: "monthly" },
    { path: "/sobre", priority: 0.8, changeFrequency: "yearly" },
    { path: "/servicos", priority: 0.9, changeFrequency: "monthly" },
    { path: "/metodologias", priority: 0.8, changeFrequency: "yearly" },
    { path: "/contato", priority: 0.7, changeFrequency: "yearly" },
  ];

  return [
    ...paginas.map((p) => ({
      url: `${site.url}${p.path}`,
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...servicos.map((servico) => ({
      url: `${site.url}/servicos/${servico.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  ];
}
