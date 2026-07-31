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
| `npm run start` | Serve o build localmente |
| `npm run lint` | ESLint |
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

- **[AGENTS.md](./AGENTS.md)** — arquitetura, convenções e regras do projeto. **Leitura obrigatória** antes de codar.
- **[CLAUDE.md](./CLAUDE.md)** — mesmas regras, formato resumido para agentes de IA.
- **[docs/figma-workflow.md](./docs/figma-workflow.md)** — como transformar o layout do Figma em componentes.

## Pendências antes do deploy

- [ ] Substituir tokens de cor em `src/app/globals.css` pelos valores do Figma
- [ ] Trocar as fontes placeholder (`Inter`) em `src/app/layout.js`
- [ ] Substituir todo o conteúdo placeholder em `src/content/`
- [ ] Definir `site.url` em `src/content/site.js` com o domínio final
- [ ] Adicionar favicon e imagem de Open Graph
- [ ] Decidir o destino do formulário de contato (hoje é `mailto:`)
