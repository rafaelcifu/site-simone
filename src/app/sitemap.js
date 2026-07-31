import { site } from "@/content/site";
import { servicos } from "@/content/servicos";

/** Sitemap gerado no build. Adicionar rota nova aqui tambem. */
export default function sitemap() {
  const rotas = ["", "/sobre", "/servicos", "/metodologias", "/contato"];
  const now = new Date();

  return [
    ...rotas.map((rota) => ({
      url: `${site.url}${rota}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: rota === "" ? 1 : 0.8,
    })),
    ...servicos.map((servico) => ({
      url: `${site.url}/servicos/${servico.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  ];
}
