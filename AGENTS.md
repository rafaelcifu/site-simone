<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# site-simone — regras do projeto

Leia este arquivo inteiro antes de escrever a primeira linha de código.

## O que é este projeto

Site institucional **estático**, multi-página, em Next.js 16 (App Router) + React 19 + Tailwind v4, hospedado na Vercel (região `gru1`).

Layout desenhado no Figma. O trabalho do dev é traduzir esse layout em componentes — não inventar design.

**Não há backend.** Sem banco, sem autenticação, sem API própria. Se uma tarefa parecer exigir isso, pare e pergunte antes de implementar.

## Regras que não se negociam

1. **Não mexa em `src/app/globals.css` sem ler a seção "Regra do CSS global" abaixo.**
2. **Não edite arquivos em `src/components/ui/`.** São gerados pelo CLI do shadcn.
3. **Todo elemento interativo precisa de `hover` e `focus-visible` visíveis.**
4. **Toda seção entra animada.** Nada aparece "seco".
5. **Textos e listas vivem em `src/content/`**, nunca hardcoded no JSX.
6. **`npm run build` e `npm run lint` precisam passar** antes de considerar qualquer tarefa concluída.

---

## Regra do CSS global

Esta é a regra que mais causa dor de cabeça no projeto, então ela vem primeiro.

**O problema que estamos prevenindo:** alguém escreve `h2 { font-size: 2rem }` ou `.card { padding: 24px }` no `globals.css`. Meses depois, um componente com `className="text-xl p-4"` simplesmente não obedece — e ninguém entende por quê. A causa é que regras fora de `@layer` (ou seletores de elemento) ganham das utilities do Tailwind na cascata.

### O que pode entrar em `globals.css`

| Permitido | Onde |
|---|---|
| Definir tokens (`--primary`, `--radius`, `--duration-base`) | `:root` |
| Mapear token → utility do Tailwind | `@theme inline` |
| Reset mínimo, `scroll-behavior`, `prefers-reduced-motion` | `@layer base` |

### O que NÃO pode entrar

- Estilo de componente ou seção: `.hero`, `.btn`, `.card`, `.servicos-grid`.
- Seletores de elemento com aparência: `h1 { }`, `p { }`, `a { }`, `section { }`.
- `!important`.
- Qualquer regra solta fora de `@layer`.

### Fluxo obrigatório antes de tocar no arquivo

1. Pergunte: *"isso é um token ou é estilo de um componente específico?"*
   Se for estilo de componente → **vai para o `className` do componente**, não para o global.
2. Se for token de verdade, adicione em `:root` **e** exponha em `@theme inline`.
3. Rode `npm run build` e confira visualmente pelo menos uma página que usa o token.
4. No commit, explique o que mudou e por quê.

Precisa de um estilo complexo que o Tailwind não cobre (um `clip-path`, um gradiente animado)? Use `style={{}}` inline no componente, ou um CSS Module ao lado do componente (`meu-componente.module.css`). Nunca o global.

---

## Estrutura de pastas

```
src/
├── app/                      Rotas (App Router). Páginas só MONTAM seções.
│   ├── layout.js             Fontes, metadata, Header, Footer
│   ├── globals.css           ARQUIVO PROTEGIDO — leia a regra acima
│   ├── page.js               /
│   ├── sobre/page.js         /sobre
│   ├── servicos/page.js      /servicos
│   ├── servicos/[slug]/      /servicos/:slug (gerado de content/servicos.js)
│   ├── metodologias/page.js  /metodologias
│   ├── contato/page.js       /contato
│   ├── not-found.js          404
│   ├── sitemap.js            sitemap.xml
│   └── robots.js             robots.txt
│
├── components/
│   ├── ui/          shadcn/ui — GERADO, NÃO EDITAR
│   ├── atoms/       Blocos indivisíveis: Container, Section, Icon, SectionHeading
│   ├── molecules/   Composição pequena e reutilizável: NavLink, ServiceCard
│   ├── organisms/   Blocos completos e independentes: Header, Footer
│   ├── sections/    Seções de página, acopladas ao conteúdo: Hero, Faq, CtaBand
│   └── motion/      Reveal, Stagger, StaggerItem
│
├── content/         TEXTOS E DADOS. Nenhum JSX aqui.
└── lib/             utils.js (cn), motion.js (variants), icons.js (mapa lucide)
```

### Onde colocar um componente novo

Pergunte, nesta ordem:

1. **Existe no shadcn?** (`button`, `dialog`, `tabs`, `tooltip`, `carousel`...) → instale com o CLI, não escreva do zero.
2. **É um bloco visual sem lógica própria, reutilizado em vários lugares?** → `atoms/`
3. **Combina 2-3 atoms e é reutilizado?** → `molecules/`
4. **É um pedaço estrutural do site inteiro (header, footer, nav)?** → `organisms/`
5. **É uma faixa de página que consome `/content`?** → `sections/`

Na dúvida entre `molecules` e `sections`: se ele importa de `@/content`, é `section`.

---

## Componentes: use o que já existe

**Antes de escrever qualquer componente de UI do zero, verifique se o shadcn/ui já tem.** Carousel, accordion, dialog, tabs, tooltip, dropdown, popover, form, toast — tudo isso já existe, é acessível e testado.

```bash
npx shadcn@latest add tabs tooltip dialog
```

O `components.json` já está configurado (`"tsx": false` → gera `.jsx`, base `radix`, alias `@/components/ui`).

Já instalados: `accordion`, `badge`, `button`, `card`, `carousel`, `input`, `label`, `separator`, `sheet`, `textarea`.

### Quando o Figma trouxer algo fora da caixa

Se o layout pede um componente que o shadcn não cobre exatamente — um carousel com paginação em pílula, um accordion com ícone customizado, um slider com parallax — **não parta para uma implementação custom em silêncio**. Faça isto:

1. Diga qual componente do shadcn (ou de uma lib consolidada: embla, radix, vaul, react-hook-form) chega mais perto.
2. Aponte o que falta e quanto de customização é necessário.
3. Ofereça as opções ao Rafa, com o trade-off de cada uma:
   - **A)** usar o pronto e ajustar o design (mais rápido, menos fiel ao Figma)
   - **B)** usar o pronto e customizar por cima (equilíbrio — geralmente o certo)
   - **C)** implementar do zero (mais fiel, mais bug, mais manutenção)
4. Espere a decisão antes de codar.

### Customizando um componente do shadcn

`src/components/ui/**` é território do CLI — um `shadcn add` futuro sobrescreve tudo que você escrever lá.

Para customizar, **envolva**, não edite:

```jsx
// src/components/molecules/cta-button.jsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaButton({ className, ...props }) {
  return (
    <Button
      size="lg"
      className={cn("shadow-lg transition-transform hover:scale-[1.02]", className)}
      {...props}
    />
  );
}
```

Se a mudança for realmente estrutural (uma variante nova no `cva`, por exemplo), edite `ui/` **e deixe claro na mensagem de commit** — para que ninguém rode `shadcn add` depois e perca a mudança.

---

## Conteúdo: `src/content/`

Nenhum texto, número, lista ou URL fica hardcoded no JSX. Tudo vem de `src/content/`.

```js
// src/content/servicos.js
export const servicos = [
  { slug: "consultoria", title: "Consultoria", excerpt: "...", icon: "Sparkles" },
];
```

```jsx
// src/components/sections/services-grid.jsx
import { servicos } from "@/content/servicos";

{servicos.map((s) => <ServiceCard key={s.slug} {...s} />)}
```

Regras:

- Arquivos de content exportam **apenas dados** — sem JSX, sem componentes.
- Ícones são referenciados por **nome** (string) e resolvidos via `src/lib/icons.js`. Para usar um ícone novo, adicione-o ao mapa em `lib/icons.js`. **Nunca** faça `import * as lucide` — puxa 1.500 ícones para o bundle.
- Adicionar um serviço = adicionar um objeto em `servicos.js`. A rota `/servicos/[slug]` é gerada sozinha.
- Todo o conteúdo hoje é **placeholder**. Substitua conforme o Figma e o material da cliente.

---

## Animações e micro-interações

O site é institucional: o capricho está nos detalhes. Toda seção entra animada, todo elemento interativo responde.

### Ferramentas

- **Motion** (`motion/react`) para entrada de seções e orquestração.
- **Tailwind** (`transition-*`, `hover:`, `group-hover:`) para hover e estados.
- Variants compartilhados em `src/lib/motion.js`. Durações e easing em `globals.css`.

### Entrada de seções

Use `<Reveal>` e `<Stagger>`. **Não escreva `initial`/`animate`/`transition` solto** dentro de uma seção — isso quebra a consistência de ritmo do site.

```jsx
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

<Reveal>...</Reveal>
<Reveal delay={0.1} variants={slideInLeft}>...</Reveal>

<Stagger className="grid gap-6 md:grid-cols-3">
  {itens.map((i) => <StaggerItem key={i.slug}><Card {...i} /></StaggerItem>)}
</Stagger>
```

Precisa de um movimento novo? Adicione um variant em `lib/motion.js` e use por lá.

### Checklist de micro-interação

Para todo elemento clicável:

- [ ] `hover:` com `transition-*` e `duration-200`/`duration-300`
- [ ] `focus-visible:` visível (não some o outline — acessibilidade)
- [ ] estado ativo, quando fizer sentido (link da página atual)
- [ ] estado `disabled` quando aplicável
- [ ] cursor correto

Padrões que já estão no projeto e valem copiar:

- **Card**: `hover:-translate-y-1 hover:shadow-md` + seta que desliza (`group-hover:translate-x-1`)
- **Link de nav**: underline com `scale-x-0 → scale-x-100` e `origin-left`
- **Header**: fundo e borda aparecem no scroll (`bg-background/85 backdrop-blur-md`)

### Regras de performance

- Anime **apenas `transform` e `opacity`**. Nunca `width`, `height`, `top`, `left`, `margin` — causam layout thrashing.
- Entrada na viewport dispara **uma vez** (`viewport: { once: true }`), já configurado em `lib/motion.js`.
- Nada de animação infinita em elemento grande.
- `prefers-reduced-motion` já está tratado no `globals.css`. Não desfaça.

---

## Server vs Client Components

Tudo é Server Component por padrão. É assim que o site fica rápido.

Só adicione `"use client"` quando o componente precisar de:

- `useState`, `useEffect`, `useRef`
- handlers de evento (`onClick`, `onChange`, `onSubmit`)
- APIs do browser (`window`, `localStorage`, `IntersectionObserver`)
- componentes de `motion/react` ou primitives do Radix

**Empurre a fronteira para baixo.** Se uma página tem uma seção interativa, o `"use client"` fica *naquela seção*, não na página.

```jsx
// ERRADO — a página inteira vira client
"use client";
export default function Page() {
  return (<><Hero /><Testimonials /><Faq /></>);
}

// CERTO — só o carrossel é client
export default function Page() {
  return (<><Hero /><Testimonials /><Faq /></>); // Testimonials tem "use client" dentro
}
```

Nunca coloque `"use client"` em `app/layout.js` ou `app/page.js`.

---

## Imagens, fontes e ícones

- **Imagens:** sempre `next/image` com `width`/`height` (ou `fill` + container `relative`). `alt` sempre preenchido — vazio (`alt=""`) só se for puramente decorativa. Use `priority` na imagem do hero e em nada mais.
- **Fontes:** sempre `next/font`. Nunca `<link>` para Google Fonts — bloqueia render e vaza IP dos visitantes. As variáveis (`--font-body`, `--font-display`) são declaradas em `app/layout.js` e consumidas em `globals.css`.
- **Ícones:** `lucide-react`, sempre por import nomeado ou pelo mapa em `lib/icons.js`.
- **SVGs do Figma:** exporte para `public/` e use via `next/image`, ou como componente inline se precisar de `currentColor`.

---

## Workflow do Figma

O layout é a fonte da verdade. Detalhes em `docs/figma-workflow.md`.

Resumo:

1. **Tokens primeiro.** Antes de montar qualquer tela, extraia as variáveis do Figma (`get_variable_defs`) e traduza para `:root` no `globals.css`. Cor que vem do Figma vira token, não valor solto no `className`.
2. **Estrutura depois.** Use `get_metadata` para entender a hierarquia antes de pedir o código.
3. **Código por último.** `get_design_context` no frame específico — nunca na página inteira de uma vez.
4. **Sempre confira com `get_screenshot`.** O código gerado é referência, não resultado final.
5. **Nunca cole o output do MCP direto.** O Figma gera markup plano com valores absolutos. Você precisa: mapear cores para tokens, trocar HTML solto por componentes do projeto, extrair textos para `/content`, adicionar hover e animação.

**O MCP do Figma não escreve o componente por você. Ele te dá a referência.**

---

## Formulários e integrações

O formulário de contato (`src/components/sections/contact-form.jsx`) hoje monta um `mailto:` — funciona, mas depende do cliente de e-mail do visitante.

**Antes de trocar por um serviço real (Formspree, Web3Forms, Resend + Route Handler), pergunte ao Rafa.** Envolve conta, chave e custo.

Scripts de terceiros (chatbot, pixel, analytics): use `next/script` com `strategy="lazyOnload"` ou `"afterInteractive"`. Nunca `<script>` cru no `layout.js`.

---

## SEO

- Toda página exporta `metadata` (ou `generateMetadata` se for dinâmica).
- Um `<h1>` por página. Hierarquia de heading sem pular nível.
- Rota nova = adicionar em `app/sitemap.js` **e** em `content/site.js` (`mainNav`), se for de navegação.
- Trocar `site.url` em `content/site.js` pelo domínio final antes do deploy.

---

## Antes de dizer "pronto"

```bash
npm run lint     # precisa passar sem erro
npm run build    # precisa passar sem erro
```

E confira:

- [ ] Funciona em 375px, 768px, 1024px e 1440px
- [ ] Hover e focus em todo elemento clicável
- [ ] Seções entram animadas
- [ ] Nenhum texto hardcoded no JSX
- [ ] `globals.css` intocado (ou mudança justificada)
- [ ] Imagens com `alt`
- [ ] Nenhum `"use client"` desnecessário

---

## Comandos

```bash
npm run dev              # dev server (Turbopack)
npm run build            # build de produção
npm run start            # servir o build localmente
npm run lint             # eslint
npx shadcn@latest add X  # adicionar componente
```
