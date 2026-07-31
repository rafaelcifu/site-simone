@AGENTS.md

---

# Lembretes críticos

O `AGENTS.md` acima é a fonte da verdade. Estas são as regras que mais custam caro quando ignoradas — releia antes de cada tarefa.

## 1. `src/app/globals.css` é arquivo protegido

Lá dentro só entra: **token** em `:root`, **mapeamento** em `@theme inline`, **reset mínimo** em `@layer base`.

Nunca entra: estilo de componente (`.hero`, `.card`), seletor de elemento com aparência (`h1 {}`, `p {}`, `section {}`), `!important`, ou regra solta fora de `@layer`.

**Por quê:** regra global vence utility do Tailwind na cascata. O sintoma aparece semanas depois, num componente sem relação nenhuma, e ninguém acha a causa.

Antes de editar, responda: *"isso é token ou é estilo de um componente específico?"* Se for a segunda, vai para o `className`.

## 2. `src/components/ui/` é gerado — não edite

É output do CLI do shadcn. Qualquer `npx shadcn@latest add` sobrescreve. Para customizar, envolva em `molecules/`.

## 3. Não escreva componente de UI do zero sem checar o shadcn

Carousel, accordion, dialog, tabs, tooltip, dropdown, popover, form, toast — já existem, acessíveis e testados. `npx shadcn@latest add <nome>`.

Se o Figma pedir algo que não encaixa exatamente no pronto: **apresente as opções ao Rafa com os trade-offs e espere a decisão.** Não implemente custom em silêncio.

## 4. Texto no JSX é bug

Todo texto, lista, número e URL vive em `src/content/`. Se você está digitando uma frase dentro de uma tag, pare.

## 5. Nada aparece "seco"

Toda seção entra com `<Reveal>` ou `<Stagger>`. Todo elemento clicável tem `hover:` com transition e `focus-visible:` visível.

## 6. `"use client"` fica na folha, não na raiz

Nunca em `layout.js` ou `page.js`. Empurre a fronteira para o componente que realmente precisa de estado, evento ou API do browser.

## 7. Antes de dizer "pronto"

`npm run lint` e `npm run build` — ambos precisam passar. Sem exceção.

---

## Antes de codar

- **Next.js:** leia o doc relevante em `node_modules/next/dist/docs/`. É a versão exata instalada; seu treino está desatualizado.
- **Figma:** leia `docs/figma-workflow.md`. Tokens primeiro, estrutura depois, código por último — e nunca cole o output do MCP direto.

## Comunicação

Rafa fala português. Responda em português, direto e sem enrolação.

Quando uma decisão de arquitetura, biblioteca ou custo aparecer, **pergunte antes de escolher** — não assuma.
