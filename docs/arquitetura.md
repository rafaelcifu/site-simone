# Arquitetura e convenções

Referência detalhada. O `AGENTS.md` tem o resumo operacional; leia aqui quando precisar do porquê.

## CSS global

`src/app/globals.css` é arquivo protegido.

**O problema que a regra previne:** alguém escreve `h2 { font-size: 2rem }` ou `.card { padding: 24px }` no global. Meses depois, um componente com `className="text-xl p-4"` não obedece — e ninguém entende por quê. A causa é que regra fora de `@layer` (ou seletor de elemento) vence as utilities do Tailwind na cascata. O sintoma aparece longe da causa.

| Permitido | Onde |
|---|---|
| Tokens (`--primary`, `--radius`, `--duration-base`) | `:root` |
| Mapear token → utility do Tailwind | `@theme inline` |
| Reset mínimo, `scroll-behavior`, `prefers-reduced-motion` | `@layer base` |

Proibido: estilo de componente (`.hero`, `.btn`), seletor de elemento com aparência (`h1 {}`, `p {}`), `!important`, regra solta fora de `@layer`.

Antes de editar, responda: *"isso é token ou é estilo de um componente específico?"* Se for a segunda, vai para o `className`.

Precisa de algo que o Tailwind não cobre (`clip-path`, gradiente animado)? `style={{}}` inline no componente, ou CSS Module ao lado dele (`meu-componente.module.css`). Nunca o global.

## Onde colocar um componente novo

Pergunte nesta ordem:

1. **Existe no shadcn?** → `npx shadcn@latest add <nome>`, não escreva do zero
2. **Bloco visual sem lógica, reutilizado?** → `atoms/`
3. **Combina 2-3 atoms e é reutilizado?** → `molecules/`
4. **Peça estrutural do site inteiro?** → `organisms/`
5. **Faixa de página que consome `/content`?** → `sections/`

Na dúvida entre `molecules` e `sections`: se importa de `@/content`, é `section`.

## shadcn/ui

Já instalados: `accordion`, `badge`, `button`, `card`, `carousel`, `input`, `label`, `separator`, `sheet`, `textarea`.

O `components.json` está configurado (`"tsx": false` → gera `.jsx`, base `radix`, alias `@/components/ui`).

### Customizando

`src/components/ui/**` é território do CLI — um `shadcn add` futuro sobrescreve. Para customizar, **envolva**:

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

Se a mudança for estrutural (variante nova no `cva`), edite `ui/` **e deixe claro na mensagem de commit** — para ninguém rodar `shadcn add` depois e perder.

### Quando o Figma pedir algo fora da caixa

Não parta para implementação custom em silêncio. Faça isto:

1. Diga qual componente pronto chega mais perto (shadcn, embla, radix, vaul, react-hook-form)
2. Aponte o que falta e quanto de customização é necessário
3. Ofereça as opções ao Rafa com o trade-off:
   - **A)** usar o pronto e ajustar o design — mais rápido, menos fiel
   - **B)** usar o pronto e customizar por cima — equilíbrio, geralmente o certo
   - **C)** do zero — mais fiel, mais bug, mais manutenção
4. Espere a decisão

## Conteúdo

Nenhum texto, número, lista ou URL hardcoded no JSX.

```js
// src/content/servicos.js
export const servicos = [
  { slug: "consultoria", title: "Consultoria", excerpt: "...", icon: "Sparkles" },
];
```

```jsx
import { servicos } from "@/content/servicos";
{servicos.map((s) => <ServiceCard key={s.slug} {...s} />)}
```

- Arquivos de content exportam **apenas dados** — sem JSX
- Ícones vêm por **nome** (string), resolvidos em `src/lib/icons.js`. Para usar um ícone novo, adicione ao mapa. **Nunca** `import * as lucide` — puxa 1.500 ícones para o bundle
- Adicionar um serviço = adicionar um objeto. A rota `/servicos/[slug]` é gerada sozinha
- O conteúdo hoje é **placeholder** (exceto `content/seo.js`, que tem fatos reais)

## Animações

**Ferramentas:** Motion (`motion/react`) para entrada de seções; Tailwind (`transition-*`, `hover:`, `group-hover:`) para estados. Variants em `src/lib/motion.js`, durações e easing em `globals.css`.

### Entrada de seções

Use `<Reveal>` e `<Stagger>`. **Não escreva `initial`/`animate`/`transition` solto** — quebra a consistência de ritmo do site.

```jsx
<Reveal>...</Reveal>
<Reveal delay={0.1} variants={slideInLeft}>...</Reveal>

<Stagger className="grid gap-6 md:grid-cols-3">
  {itens.map((i) => <StaggerItem key={i.slug}><Card {...i} /></StaggerItem>)}
</Stagger>
```

Movimento novo? Adicione um variant em `lib/motion.js`.

### Micro-interação — checklist

Todo elemento clicável precisa de: `hover:` com `transition-*` e `duration-200`/`300`; `focus-visible:` visível (não some o outline); estado ativo quando fizer sentido; `disabled` quando aplicável; cursor correto.

Padrões já no projeto, vale copiar:

- **Card:** `hover:-translate-y-1 hover:shadow-md` + seta deslizando (`group-hover:translate-x-1`)
- **Nav link:** underline com `scale-x-0 → scale-x-100`, `origin-left`
- **Header:** fundo e borda no scroll (`bg-background/85 backdrop-blur-md`)

### Performance

- Anime **apenas `transform` e `opacity`**. Nunca `width`, `height`, `top`, `left`, `margin` — causam layout thrashing
- Entrada dispara **uma vez** (`viewport: { once: true }`), já em `lib/motion.js`
- Nada de animação infinita em elemento grande
- `prefers-reduced-motion` já tratado no `globals.css`. Não desfaça

## Server vs Client Components

Tudo é Server Component por padrão. É assim que o site fica rápido — e é o que faz crawler de IA (que raramente executa JS) enxergar o conteúdo.

`"use client"` só quando o componente precisar de: `useState`/`useEffect`/`useRef`, handlers de evento, APIs do browser, `motion/react` ou primitives do Radix.

**Empurre a fronteira para baixo.** Se uma página tem uma seção interativa, o `"use client"` fica *naquela seção*.

```jsx
// ERRADO — a página inteira vira client
"use client";
export default function Page() {
  return (<><Hero /><Testimonials /><Faq /></>);
}

// CERTO — só o carrossel é client (Testimonials tem "use client" dentro)
export default function Page() {
  return (<><Hero /><Testimonials /><Faq /></>);
}
```

Nunca em `app/layout.js` ou `app/page.js`.

## Imagens, fontes e ícones

- **Imagens:** `next/image` com `width`/`height` (ou `fill` + container `relative`). `alt` sempre — vazio (`alt=""`) só se for decorativa. `priority` só na imagem do hero
- **Fontes:** `next/font`. Nunca `<link>` para Google Fonts — bloqueia render e vaza IP dos visitantes. As variáveis (`--font-body`, `--font-display`) vivem em `app/layout.js` e são consumidas em `globals.css`
- **Ícones:** `lucide-react`, por import nomeado ou pelo mapa em `lib/icons.js`
- **SVGs do Figma:** exporte para `public/`; inline como componente só se precisar de `currentColor`

## Formulários e integrações

O formulário de contato (`src/components/sections/contact-form.jsx`) monta um `mailto:` — funciona, mas depende do cliente de e-mail do visitante.

**Antes de trocar por serviço real (Formspree, Web3Forms, Resend + Route Handler), pergunte ao Rafa.** Envolve conta, chave e custo.

Scripts de terceiros (chatbot, pixel, analytics): `next/script` com `strategy="lazyOnload"` ou `"afterInteractive"`. Nunca `<script>` cru no `layout.js`.
