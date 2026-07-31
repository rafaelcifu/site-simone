/**
 * Injeta JSON-LD no HTML.
 *
 * Server Component: o script sai no HTML inicial, entao crawler e LLM
 * enxergam sem precisar executar JavaScript. Nao adicione "use client" aqui.
 *
 *   import { graph, personSchema, webPageSchema } from "@/lib/schema";
 *   <JsonLd data={graph(personSchema(), webPageSchema({ ... }))} />
 */
export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify de dado nosso, nao de input de usuario.
      // O replace evita que "</script>" dentro de uma string quebre o HTML.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
