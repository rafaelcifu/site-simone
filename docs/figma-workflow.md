# Workflow do Figma → código

Como transformar o layout do Figma em componentes deste projeto, sem virar uma pilha de divs com valores mágicos.

## Setup (uma vez)

1. Abra o **Figma Desktop** (o MCP não funciona pelo navegador).
2. Ative o servidor MCP: menu Figma → **Preferences → Enable local MCP server**. Ele sobe em `http://127.0.0.1:3845/mcp`.
3. O `.mcp.json` na raiz do projeto já aponta para lá. Reinicie o agente depois de ligar o servidor.
4. Para conferir se está conectado, peça ao agente para chamar `get_metadata` em um frame selecionado.

O `.mcp.json` também registra o `next-devtools-mcp`, que dá ao agente acesso a erros de build e runtime enquanto o `npm run dev` roda. Use os dois juntos.

## As ferramentas, na ordem certa

| Ferramenta | Para quê | Quando |
|---|---|---|
| `get_variable_defs` | Variáveis do design system (cor, spacing, tipografia) | **Primeiro de tudo**, uma vez |
| `get_metadata` | Árvore de nós do frame: nomes, tipos, hierarquia | Antes de pedir código |
| `get_screenshot` | Imagem do frame | Sempre — é a referência visual |
| `get_design_context` | Código gerado do nó selecionado | Por último, em **um frame por vez** |
| `download_assets` | Exportar imagens e SVGs | Ao encontrar assets |

## Passo a passo

### 1. Tokens (uma vez, antes de tudo)

Selecione qualquer frame e rode `get_variable_defs`. Traduza o resultado para `:root` em `src/app/globals.css`:

```css
:root {
  --primary: oklch(...);        /* Figma: color/brand/primary */
  --secondary: oklch(...);      /* Figma: color/surface/muted  */
  --radius: 0.75rem;            /* Figma: radius/md            */
}
```

Depois exponha em `@theme inline` para virar utility do Tailwind.

**Regra:** cor que existe no Figma vira token. Se você está escrevendo `className="bg-[#1a1a1a]"`, parou no lugar errado — esse valor deveria ser um token.

Fontes: identifique as famílias e troque em `src/app/layout.js` (os loaders `Inter` são placeholder).

### 2. Estrutura antes do código

Com o frame selecionado, rode `get_metadata`. Você vê a hierarquia e os nomes das camadas — o suficiente para decidir:

- Isso é uma `section` nova ou uma variação de uma que já existe?
- Quais partes viram `atoms`/`molecules`?
- O que aqui é conteúdo (vai para `/content`) e o que é estrutura?

Decida isso **antes** de gerar código. É a parte que o MCP não faz por você.

### 3. Código, um frame por vez

`get_design_context` no nó específico. Nunca na página inteira — o retorno fica gigante, o agente perde contexto e o resultado é pior.

### 4. Traduza — não cole

O output do Figma é markup plano com valores absolutos. Antes de commitar, sempre:

- [ ] Trocar cores hex/rgb pelos tokens (`bg-primary`, `text-muted-foreground`)
- [ ] Trocar `px` fixos pela escala do Tailwind (`py-24` em vez de `padding: 96px`)
- [ ] Substituir markup solto pelos componentes do projeto (`<Section>`, `<Container>`, `<Button>`, `<Card>`)
- [ ] Extrair todo texto para `src/content/`
- [ ] Adicionar `hover` e `focus-visible`
- [ ] Envolver em `<Reveal>` ou `<Stagger>`
- [ ] Conferir responsivo — o Figma normalmente só tem desktop e mobile; os breakpoints intermediários são decisão sua
- [ ] Comparar com o `get_screenshot`

### 5. Assets

`download_assets` para imagens e SVGs → salve em `public/`.

- Fotos: exporte em 2x, use `next/image`.
- Ícones: se existir equivalente no `lucide-react`, prefira o lucide (fica com `currentColor` e anima junto com o texto).
- Ilustrações e logos: SVG em `public/`.

## O que o MCP não resolve

- **Responsivo.** O Figma tem breakpoints discretos; a web é contínua. Você decide os estados intermediários.
- **Animação.** A não ser que o arquivo tenha prototype (aí `get_motion_context` ajuda), o movimento é decisão sua — use os variants de `lib/motion.js`.
- **Semântica.** O Figma não sabe o que é `<nav>`, `<article>`, `<h2>`. Você sabe.
- **Estados.** Hover, focus, disabled, loading, vazio, erro. Raramente estão desenhados. Se não estiverem, pergunte ao Rafa em vez de inventar.

## Quando o layout pede algo que não existe pronto

Pare e apresente as opções, com o trade-off de cada uma (ver AGENTS.md, seção "Quando o Figma trouxer algo fora da caixa"). Não saia implementando um carousel do zero porque o do Figma tem bolinhas diferentes.
