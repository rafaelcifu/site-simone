<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# site-simone

Site institucional **estático**, multi-página. Next.js 16 (App Router) · React 19 · Tailwind v4 · shadcn/ui · Motion · JavaScript. Deploy na Vercel, região `gru1`.

Layout desenhado no Figma — o trabalho é traduzir, não inventar design.

**Não há backend.** Sem banco, sem auth, sem API própria. Se uma tarefa parecer exigir isso, pare e pergunte.

Rafa fala português. Responda em português, direto. Decisão de arquitetura, biblioteca ou custo: **pergunte antes de escolher**.

## As 8 regras

1. **`src/app/globals.css` é protegido.** Só entra token (`:root`), mapeamento (`@theme inline`) e reset mínimo (`@layer base`). Nunca estilo de componente, seletor de elemento com aparência, `!important`, ou regra fora de `@layer` — isso vence as utilities do Tailwind na cascata e o sintoma aparece semanas depois, longe da causa.
2. **`src/components/ui/` é gerado pelo CLI do shadcn.** Não edite — `shadcn add` sobrescreve. Para customizar, envolva em `molecules/`.
3. **Não escreva componente de UI do zero sem checar o shadcn.** Se o Figma pedir algo que não encaixa no pronto, apresente as opções com trade-offs e espere a decisão. Não implemente custom em silêncio.
4. **Texto no JSX é bug.** Todo texto, lista, número e URL vive em `src/content/`.
5. **Nada aparece "seco".** Toda seção com `<Reveal>` ou `<Stagger>`. Todo clicável com `hover:` (com transition) e `focus-visible:` visível.
6. **`"use client"` fica na folha, não na raiz.** Nunca em `layout.js` ou `page.js`.
7. **SEO sai de `/content`, nunca da página.** Nada de `export const metadata = {}` na mão — use `buildMetadata(pageSeo.rota)`. E **JSON-LD só descreve o que está visível na tela**: `FAQPage` sem FAQ na página derruba os rich results do site inteiro.
8. **`npm run verify` antes de dizer "pronto".** Sem exceção.

## Estrutura

```
src/
├── app/              Rotas. Páginas MONTAM seções, sem markup solto.
│   ├── globals.css   PROTEGIDO (regra 1)
│   ├── layout.js     Fontes, metadata raiz, JSON-LD global, Header/Footer
│   ├── sitemap.js · robots.js · manifest.js · opengraph-image.js · llms.txt/
│   └── (rotas)       / · /sobre · /servicos · /servicos/[slug] · /metodologias · /contato
├── components/
│   ├── ui/           shadcn — GERADO, NÃO EDITAR
│   ├── atoms/        Container, Section, SectionHeading, Icon, JsonLd
│   ├── molecules/    NavLink, ServiceCard
│   ├── organisms/    Header, Footer
│   ├── sections/     Hero, ServicesGrid, Testimonials, Faq, CtaBand
│   └── motion/       Reveal, Stagger, StaggerItem
├── content/          DADOS. Nenhum JSX. (seo.js = fatos de entidade p/ schema)
└── lib/              utils (cn) · motion (variants) · icons (mapa lucide)
                      seo (buildMetadata) · schema (JSON-LD)
```

Onde colocar componente novo: existe no shadcn → use. Bloco visual reutilizado → `atoms/`. Combina atoms → `molecules/`. Peça estrutural do site → `organisms/`. Faixa que consome `/content` → `sections/`.

## Antes de codar — leia o doc da tarefa

| Tarefa | Leia |
|---|---|
| Qualquer coisa em Next.js | `node_modules/next/dist/docs/` — versão exata instalada, seu treino está desatualizado |
| Criar rota nova | `docs/nova-rota.md` — template dos 4 arquivos, copiável |
| Componentes, animação, CSS, client/server | `docs/arquitetura.md` |
| Metadata, JSON-LD, schema, indexação | `docs/seo.md` |
| Traduzir layout do Figma | `docs/figma-workflow.md` — tokens → estrutura → código, nunca cole o output do MCP direto |

## Verificação

```bash
npm run verify    # lint + build + auditoria de SEO — os três precisam passar
```

`scripts/check-seo.mjs` lê o HTML renderizado e reprova: página sem `<h1>` (ou com dois), canonical ausente/duplicado/apontando errado, `og:image`/`og:title`/`og:url`/`twitter:card`/description faltando, JSON-LD ausente ou sem `Person`/`ProfessionalService`/`WebSite`/`WebPage`, página fora da home sem `BreadcrumbList`, schema com campo obrigatório faltando ou `@id` instável, `FAQPage` com pergunta invisível, `<img>` sem `alt`, rota fora do sitemap.

À mão, ainda confira: 375/768/1024/1440px · hover e focus em todo clicável · seções animadas · nenhum texto no JSX · `globals.css` intocado · nenhum `"use client"` desnecessário.

## Comandos

```bash
npm run dev              # Turbopack
npm run verify           # lint + build + seo — use antes de entregar
npm run seo              # só a auditoria (exige build antes)
npx shadcn@latest add X  # adicionar componente
```
