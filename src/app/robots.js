import { site } from "@/content/site";

/**
 * robots.txt
 *
 * Os crawlers de IA estao liberados de proposito: queremos que ChatGPT,
 * Claude, Perplexity e Gemini consigam ler e citar o site. Se em algum
 * momento a Simone quiser bloquear treinamento de modelo, o lugar de
 * mudar isso e aqui — mas saiba que bloquear tambem tira o site das
 * respostas dessas ferramentas.
 */
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Sem area privada no site. Se surgir, liste aqui.
        disallow: [],
      },
      {
        // Crawlers de IA, explicitos para nao dependerem do fallback "*".
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-User",
          "Claude-SearchBot",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Applebot",
          "Applebot-Extended",
          "Bingbot",
          "cohere-ai",
          "meta-externalagent",
        ],
        allow: "/",
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
