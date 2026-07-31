# Criando uma rota nova

São **quatro arquivos**, sempre nesta ordem. Copie e adapte.

## 1. `src/content/seo.js` — entrada em `pageSeo`

```js
export const pageSeo = {
  // ...
  palestras: {
    title: "Palestras",              // curto: o template já adiciona "| Simone Moura"
    description: "150-160 caracteres, termo principal no começo, escrito para humano.",
    path: "/palestras",
  },
};
```

## 2. `src/content/palestras.js` — o conteúdo

Só dados, nada de JSX.

```js
export const palestrasPage = {
  eyebrow: "Palestras",
  title: "Título visível na página",
  description: "Frase de apoio.",
};

export const palestras = [
  { slug: "...", title: "...", excerpt: "...", icon: "Sparkles" },
];
```

## 3. `src/app/palestras/page.js` — a rota

```jsx
import { palestrasPage } from "@/content/palestras";
import { pageSeo } from "@/content/seo";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/atoms/json-ld";
import { Section } from "@/components/atoms/section";
import { SectionHeading } from "@/components/atoms/section-heading";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata = buildMetadata(pageSeo.palestras);

export default function PalestrasPage() {
  const pageGraph = graph(
    webPageSchema(pageSeo.palestras),
    breadcrumbSchema([{ name: "Palestras", path: "/palestras" }])
  );

  return (
    <>
      <JsonLd data={pageGraph} />

      <Section padding="lg">
        {/* as="h1": toda página precisa de um <h1>, e só um */}
        <SectionHeading
          as="h1"
          eyebrow={palestrasPage.eyebrow}
          title={palestrasPage.title}
          description={palestrasPage.description}
        />
      </Section>

      <CtaBand />
    </>
  );
}
```

## 4. `src/app/sitemap.js` — adicione ao array `paginas`

```js
{ path: "/palestras", priority: 0.8, changeFrequency: "monthly" },
```

E, se for rota de navegação, adicione em `mainNav` (`src/content/site.js`).

---

Rode `npm run verify`. Ele reprova a página se faltar `<h1>`, canonical, JSON-LD, breadcrumb, `alt` de imagem ou entrada no sitemap.

## Variações

| Caso | O que muda |
|---|---|
| Rota dinâmica `[slug]` | `generateMetadata` + `generateStaticParams`. Veja `app/servicos/[slug]/page.js` |
| Página biográfica | `webPageSchema({ ..., type: "AboutPage" })` |
| Página de contato | `type: "ContactPage"` |
| Listagem | `type: "CollectionPage"` + um `ItemList`. Veja `app/servicos/page.js` |
| Não indexar (obrigado, rascunho) | `buildMetadata({ ..., noIndex: true })` |
| Página com FAQ visível | Adicione `faqSchema(faq)` ao `graph()`. **Só se as perguntas estiverem na tela** |
