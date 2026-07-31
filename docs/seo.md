# SEO e descoberta por LLMs

Como o SEO deste projeto está montado, e o que você precisa fazer ao mexer em qualquer coisa.

## A ideia geral

Todo o SEO é **derivado de `src/content/`**. Não existe título, descrição ou dado estruturado escrito à mão dentro de uma página. Isso significa duas coisas:

1. Corrigir um dado em `content/` conserta o site inteiro — metas, JSON-LD, sitemap e `llms.txt` de uma vez.
2. Escrever meta tag na mão dentro de uma página quebra essa garantia. Não faça.

```
content/site.js  ─┐
content/seo.js   ─┼─→  lib/seo.js (metadata)  ─→  <head> de cada página
content/*.js     ─┘    lib/schema.js (JSON-LD) ─→  <script type="ld+json">
                       app/sitemap.js          ─→  /sitemap.xml
                       app/robots.js           ─→  /robots.txt
                       app/llms.txt/route.js   ─→  /llms.txt
                       app/opengraph-image.js  ─→  /opengraph-image (1200x630)
```

## Metadata de página

Sempre via `buildMetadata`. Ele monta canonical, Open Graph e Twitter Card de forma consistente, e nenhuma página sai sem canonical (causa clássica de conteúdo duplicado) nem sem `og:image` (link feio no WhatsApp).

```js
// Página estática
import { pageSeo } from "@/content/seo";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.sobre);
```

```js
// Página dinâmica
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const servico = getServico(slug);
  if (!servico) return {};

  return buildMetadata({
    title: servico.title,
    description: servico.excerpt,
    path: `/servicos/${servico.slug}`,
  });
}
```

Opções de `buildMetadata`:

| Opção | Para quê |
|---|---|
| `title` | Título curto. O template adiciona `\| Simone Moura` — **não repita o nome** |
| `description` | 150-160 caracteres, termo principal no começo, escrita para humano |
| `path` | Caminho da rota. Vira canonical e `og:url` |
| `absoluteTitle` | `true` só na home, para não virar "Simone Moura \| Simone Moura" |
| `type` | `"profile"` na página sobre, `"article"` em posts |
| `image` | OG específica da página. O padrão já aponta para `/opengraph-image` |
| `noIndex` | `true` em páginas de obrigado, rascunho, etc. |

### Sobre `description`

O Google reescreve a description na maioria das buscas, mas ela ainda decide o preview no WhatsApp, LinkedIn e X — e LLMs a usam como resumo da página. Vale escrever bem:

- 150-160 caracteres
- Termo principal nos primeiros 60 caracteres
- Uma promessa concreta, não adjetivos ("+30 anos e +700 projetos" ganha de "excelência e qualidade")
- Única por página. Description duplicada é sinal de página de baixo valor

## JSON-LD

Cada página emite dois blocos:

1. **Grafo global** (no `layout.js`): `Person` + `ProfessionalService` + `WebSite`. Sai em todas as páginas.
2. **Grafo da página**: `WebPage` (ou `AboutPage`/`ContactPage`/`CollectionPage`) + `BreadcrumbList` + o que for específico.

```jsx
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/atoms/json-ld";

export default function Page() {
  const pageGraph = graph(
    webPageSchema({ ...pageSeo.sobre, type: "AboutPage" }),
    breadcrumbSchema([{ name: "Sobre", path: "/sobre" }])
  );

  return (
    <>
      <JsonLd data={pageGraph} />
      {/* ... */}
    </>
  );
}
```

O item "Início" já entra automaticamente no breadcrumb — não inclua na lista.

### Estratégia de `@id`

Cada entidade tem um `@id` estável. É isso que faz o Google entender que a "Simone Moura" da home e a da página de contato são **a mesma pessoa**, em vez de tratar como duas entidades soltas.

```
{url}/#person      → Simone Moura (a pessoa)
{url}/#business    → a consultoria (entidade comercial, ProfessionalService)
{url}/#website     → o site
{pageUrl}#webpage  → cada página
```

Ao criar um schema novo, referencie o existente com `{ "@id": PERSON_ID }` em vez de repetir o objeto inteiro.

### A regra que não se quebra

**Schema só descreve o que está visível na página.**

Declarar `FAQPage` numa página sem FAQ, ou `AggregateRating` sem avaliação visível, é violação das diretrizes do Google — e a penalidade não é só naquela página, é nos rich results do site inteiro.

Por isso o `faqSchema` só aparece na home: é lá que a seção `<Faq />` existe. Se ela sair da home, o schema sai junto.

## Adicionando uma rota nova

Template completo dos quatro arquivos: **`docs/nova-rota.md`**.

## O verificador automático

`npm run seo` (ou `npm run verify`, que roda lint + build + seo) executa `scripts/check-seo.mjs`. Ele lê o HTML **já renderizado** em `.next/server/app` — então testa o resultado real, não a intenção do código.

O que ele reprova:

| Verificação | Por quê |
|---|---|
| `<h1>` ausente ou duplicado | Crawler e leitor de tela usam o `h1` para entender do que a página trata |
| Canonical ausente, duplicado ou apontando para outra rota | Canonical errado faz o Google indexar a página errada |
| `og:image`, `og:title`, `og:url`, `twitter:card`, description | Sem isso o link fica sem preview no WhatsApp e LinkedIn |
| JSON-LD ausente ou sem `Person`/`ProfessionalService`/`WebSite` | Significa que o grafo global do layout se perdeu |
| Página fora da home sem `BreadcrumbList` | Breadcrumb aparece no lugar da URL no resultado de busca |
| Campo obrigatório faltando no schema | Rich result não é gerado |
| `@id` usado com dois tipos diferentes | Quebra a identidade da entidade entre páginas |
| `FAQPage` com pergunta que não está visível | Violação das diretrizes do Google — derruba rich results do site inteiro |
| `<img>` sem `alt` | Acessibilidade e indexação de imagem |
| Rota fora do `sitemap.xml` | Página demora muito mais para ser indexada |

Ele também emite **avisos** (não bloqueiam): heading pulando nível, campo de schema com string vazia.

**Adicionando uma regra nova:** o script é um arquivo só, sem dependência externa. Se surgir um padrão que precisa ser garantido, adicione lá e documente aqui — regra que não é verificada é regra que vai ser quebrada.

**Limite honesto:** o script verifica *estrutura*, não *qualidade*. Ele garante que existe uma description; não garante que ela é boa. Isso continua sendo trabalho humano.

## Descoberta por LLMs

O objetivo aqui é que ChatGPT, Claude, Perplexity e Gemini consigam ler, entender e **citar** o site quando alguém perguntar sobre branding, neurociência do consumo ou sobre a Simone.

O que está feito:

1. **`/llms.txt`** — resumo do site em Markdown limpo, gerado a partir de `content/`. É a proposta do [llmstxt.org](https://llmstxt.org): o análogo do `robots.txt`, mas dizendo o que o site *é* em vez do que não ler. Ainda não é padrão oficial, mas custa quase nada e já é lido por várias ferramentas.

2. **JSON-LD em todas as páginas** — dado estruturado vale mais que texto corrido para um modelo. `knowsAbout`, `alumniOf`, `hasCredential` e `founder` respondem "quem é ela e sobre o que tem autoridade" sem ambiguidade.

3. **Crawlers de IA liberados no `robots.txt`** — `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended` e outros, explicitamente. Se a Simone quiser bloquear treinamento de modelo, o lugar de mudar é `app/robots.js` — mas bloquear também tira o site das respostas dessas ferramentas.

4. **HTML renderizado no servidor** — todo o conteúdo sai no HTML inicial. Crawler que não executa JavaScript (a maioria dos de IA) enxerga tudo. É mais uma razão para não subir `"use client"` para a página.

5. **Semântica correta** — `<h1>` único, hierarquia de heading sem pular nível, `<nav>`, `<main>`, `<footer>` de verdade.

### O que mais move o ponteiro

Nenhuma dessas é tarefa de código, mas vale registrar porque é o que realmente decide se o site aparece:

- **`sameAs` com perfis reais.** LinkedIn e Instagram corretos em `content/site.js` são dos sinais mais fortes para o Google ligar o site a uma entidade que ele já conhece. Hoje as URLs são um chute — **precisam ser confirmadas**.
- **Menções externas.** LLM cita quem é citado. Colunas, entrevistas e podcasts que apontam para o domínio valem mais que qualquer meta tag.
- **Google Business Profile.** Fortaleza está no schema como `ProfessionalService`, o que ativa SEO local. Um perfil verificado no Google multiplica isso.
- **Conteúdo com substância.** Página que responde uma pergunta real é citável. Página institucional genérica não é.

## Antes do deploy

- [ ] `site.url` em `content/site.js` bate com o domínio real (com ou sem `www` — escolher um e ser consistente)
- [ ] E-mail e telefone reais em `contact`
- [ ] URLs de `social` confirmadas (não chutar)
- [ ] Foto em `/public/simone-moura.jpg` (é a `image` do schema Person e do OG)
- [ ] `favicon.ico` definitivo em `src/app/`
- [ ] Verificação do Google Search Console em `layout.js` (campo `verification`, hoje comentado)
- [ ] Testar no [Rich Results Test](https://search.google.com/test/rich-results) e no [Schema Validator](https://validator.schema.org/)
- [ ] Testar o card no [OpenGraph.xyz](https://www.opengraph.xyz/)
- [ ] Submeter o sitemap no Search Console
