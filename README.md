# site-simone

Site institucional estático, multi-página.

**Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · shadcn/ui · Motion · JavaScript
**Deploy:** Vercel, região `gru1` (São Paulo)

## Rodando

```bash
npm install
npm run dev      # http://localhost:3000
```

| Comando | O quê |
|---|---|
| `npm run dev` | Dev server com Turbopack |
| `npm run build` | Build de produção |
| `npm run lint` | ESLint |
| `npm run seo` | Auditoria de SEO no HTML gerado (exige `build` antes) |
| **`npm run verify`** | **lint + build + seo — rode antes de entregar qualquer coisa** |
| `npm run start` | Serve o build localmente |
| `npx shadcn@latest add <nome>` | Adiciona componente do shadcn/ui |

## Estrutura

```
src/
├── app/          Rotas. Páginas montam seções, não contêm markup solto.
├── components/
│   ├── ui/       shadcn/ui (gerado pelo CLI — não editar)
│   ├── atoms/    Container, Section, SectionHeading, Icon
│   ├── molecules/ NavLink, ServiceCard
│   ├── organisms/ Header, Footer
│   ├── sections/ Hero, ServicesGrid, Testimonials, Faq, CtaBand
│   └── motion/   Reveal, Stagger, StaggerItem
├── content/      Textos e dados (sem JSX)
└── lib/          utils, variants de animação, mapa de ícones
```

## Rotas

`/` · `/sobre` · `/servicos` · `/servicos/[slug]` · `/metodologias` · `/contato`

As páginas de serviço são geradas a partir de `src/content/servicos.js` — adicionar um objeto no array cria a rota.

## Documentação

- **[AGENTS.md](./AGENTS.md)** — as 8 regras, a estrutura e o índice. **Leitura obrigatória** antes de codar. Carregado em toda sessão de agente, por isso é curto.
- **[docs/nova-rota.md](./docs/nova-rota.md)** — template dos 4 arquivos para criar uma página.
- **[docs/arquitetura.md](./docs/arquitetura.md)** — CSS global, design atômico, shadcn, animações, server/client.
- **[docs/seo.md](./docs/seo.md)** — metadata, JSON-LD, verificador automático e descoberta por LLMs.
- **[docs/figma-workflow.md](./docs/figma-workflow.md)** — como transformar o layout do Figma em componentes.

## SEO

Tudo derivado de `src/content/`. Gerado automaticamente:

`/sitemap.xml` · `/robots.txt` · `/llms.txt` · `/manifest.webmanifest` · `/opengraph-image` (1200×630)

JSON-LD em todas as páginas, com grafo conectado por `@id`: `Person`, `ProfessionalService`, `WebSite`, `WebPage`, `BreadcrumbList`, `Service`, `FAQPage`.

`npm run seo` audita o HTML gerado e reprova o build se alguma página sair sem `<h1>`, canonical, JSON-LD, breadcrumb ou entrada no sitemap. As regras não dependem de alguém lembrar delas.

## Pendências antes do deploy

**Layout**

- [ ] Substituir tokens de cor em `src/app/globals.css` pelos valores do Figma
- [ ] Trocar as fontes placeholder (`Inter`) em `src/app/layout.js`
- [ ] Substituir o conteúdo placeholder em `src/content/` (home, sobre, serviços, metodologias, contato)
- [ ] Decidir o destino do formulário de contato (hoje é `mailto:`)

**SEO**

- [ ] Confirmar as URLs de `social` em `src/content/site.js` — hoje são chute, e link errado atrapalha mais que ajuda
- [ ] E-mail e telefone reais em `contact`
- [ ] Foto em `public/simone-moura.jpg` (usada no schema `Person` e no OG)
- [ ] Favicon definitivo em `src/app/favicon.ico`
- [ ] Verificação do Search Console em `src/app/layout.js` (campo `verification`, comentado)
- [ ] Validar em [Rich Results Test](https://search.google.com/test/rich-results) e [Schema Validator](https://validator.schema.org/)
