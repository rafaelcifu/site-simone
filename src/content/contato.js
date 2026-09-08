import { DEFAULT_LOCALE } from "./locales";

export const contatoPageByLocale = {
  pt: {
    eyebrow: "Contato",
    title: "Vamos conversar",
    description:
      "Conte o momento da sua empresa e o desafio que precisa enfrentar. A partir daí, avaliamos juntos o formato de trabalho mais adequado.",
  },
  en: {
    eyebrow: "Contact",
    title: "Let's talk",
    description:
      "Tell us about your company's current stage and the challenges you face. From there, we evaluate the most suitable engagement format together.",
  },
  es: {
    eyebrow: "Contacto",
    title: "Conversemos",
    description:
      "Cuéntanos el momento de tu empresa y el desafío que necesitas enfrentar. A partir de ahí, evaluamos juntos el formato de trabajo más adecuado.",
  },
};

export const horariosByLocale = {
  pt: [
    { day: "Segunda a sexta", hours: "09h - 18h" },
    { day: "Sábado", hours: "09h - 13h" },
  ],
  en: [
    { day: "Monday to Friday", hours: "9 AM - 6 PM" },
    { day: "Saturday", hours: "9 AM - 1 PM" },
  ],
  es: [
    { day: "Lunes a viernes", hours: "09:00 - 18:00" },
    { day: "Sábado", hours: "09:00 - 13:00" },
  ],
};

export const formFieldsByLocale = {
  pt: [
    { name: "nome", label: "Nome", type: "text", required: true },
    { name: "email", label: "E-mail", type: "email", required: true },
    { name: "telefone", label: "Telefone", type: "tel", required: false },
    { name: "mensagem", label: "Mensagem", type: "textarea", required: true },
  ],
  en: [
    { name: "nome", label: "Name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "telefone", label: "Phone", type: "tel", required: false },
    { name: "mensagem", label: "Message", type: "textarea", required: true },
  ],
  es: [
    { name: "nome", label: "Nombre", type: "text", required: true },
    { name: "email", label: "Correo electrónico", type: "email", required: true },
    { name: "telefone", label: "Teléfono", type: "tel", required: false },
    { name: "mensagem", label: "Mensaje", type: "textarea", required: true },
  ],
};

export const contatoUiByLocale = {
  pt: {
    scheduleTitle: "Horários",
    form: {
      emailSubject: "Contato pelo site",
      submitLabel: "Enviar mensagem",
      requiredMark: "*",
    },
  },
  en: {
    scheduleTitle: "Business hours",
    form: {
      emailSubject: "Website contact request",
      submitLabel: "Send message",
      requiredMark: "*",
    },
  },
  es: {
    scheduleTitle: "Horarios",
    form: {
      emailSubject: "Contacto desde el sitio web",
      submitLabel: "Enviar mensaje",
      requiredMark: "*",
    },
  },
};

export const contatoPage = contatoPageByLocale.pt;
export const horarios = horariosByLocale.pt;
export const formFields = formFieldsByLocale.pt;
export const contatoUi = contatoUiByLocale.pt;

export function getContatoContent(locale = DEFAULT_LOCALE) {
  const loc = contatoPageByLocale[locale] ? locale : DEFAULT_LOCALE;
  return {
    contatoPage: contatoPageByLocale[loc],
    horarios: horariosByLocale[loc],
    formFields: formFieldsByLocale[loc],
    contatoUi: contatoUiByLocale[loc],
  };
}
