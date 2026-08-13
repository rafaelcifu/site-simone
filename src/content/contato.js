/**
 * Pagina de contato.
 * PLACEHOLDER — substituir pelo conteudo real.
 */

export const contatoPage = {
  eyebrow: "Contato",
  title: "Vamos conversar",
  description: "Frase de apoio incentivando o contato.",
};

/** Horarios de atendimento exibidos ao lado do formulario. */
export const horarios = [
  { day: "Segunda a sexta", hours: "09h - 18h" },
  { day: "Sabado", hours: "09h - 13h" },
];

/**
 * Campos do formulario. O envio ainda NAO esta implementado —
 * definir destino (mailto, Formspree, Web3Forms...) antes de ligar.
 */
export const formFields = [
  { name: "nome", label: "Nome", type: "text", required: true },
  { name: "email", label: "E-mail", type: "email", required: true },
  { name: "telefone", label: "Telefone", type: "tel", required: false },
  { name: "mensagem", label: "Mensagem", type: "textarea", required: true },
];

export const contatoUi = {
  scheduleTitle: "Horarios",
  form: {
    emailSubject: "Contato pelo site",
    submitLabel: "Enviar mensagem",
    requiredMark: "*",
  },
};

export function getContatoContent(locale = "pt") {
  return {
    contatoPage,
    horarios,
    formFields,
    contatoUi,
  };
}
