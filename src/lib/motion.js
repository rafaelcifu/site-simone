/**
 * Variants de animacao compartilhados.
 *
 * Regra: NAO escreva `initial/animate/transition` solto dentro de uma secao.
 * Use um destes variants (ou adicione um novo aqui) para o site inteiro ter
 * o mesmo ritmo. Duracoes e easing conversam com os tokens do globals.css.
 */

export const EASE_OUT_SOFT = [0.16, 1, 0.3, 1];

/** Distancia padrao de deslocamento na entrada (px). */
export const REVEAL_DISTANCE = 24;

/** Fade + subida. Uso geral em blocos de conteudo. */
export const fadeUp = {
  hidden: { opacity: 0, y: REVEAL_DISTANCE },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT_SOFT },
  },
};

/** Fade puro. Para imagens grandes e backgrounds, onde translate incomoda. */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE_OUT_SOFT } },
};

/** Entrada lateral. Para layouts de duas colunas (texto x imagem). */
export const slideInLeft = {
  hidden: { opacity: 0, x: -REVEAL_DISTANCE },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: EASE_OUT_SOFT },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: REVEAL_DISTANCE },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: EASE_OUT_SOFT },
  },
};

/** Container de cascata. Combine com `staggerItem` nos filhos. */
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

export const staggerItem = fadeUp;

/** Quando o elemento e considerado "visivel" (dispara uma vez so). */
export const VIEWPORT = { once: true, amount: 0.25, margin: "0px 0px -80px 0px" };
