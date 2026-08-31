import { DEFAULT_LOCALE } from "./locales";

/**
 * Conteúdo da página de Política de Privacidade estruturado por idioma.
 * Em conformidade com a LGPD (Lei nº 13.709/2018).
 */

export const privacidadePageByLocale = {
  pt: {
    eyebrow: "Transparência e Segurança",
    title: "Política de Privacidade",
    description:
      "Entenda como coletamos, utilizamos, armazenamos e protegemos seus dados pessoais ao navegar em nosso site ou entrar em contato conosco, em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
    lastUpdated: "Última atualização: Agosto de 2026",
    sections: [
      {
        title: "1. Informações Gerais",
        content:
          "Esta Política de Privacidade estabelece o compromisso de Simone Moura com a segurança, privacidade e proteção dos dados pessoais de todos os usuários e clientes que utilizam nosso site institucional ou entram em contato pelos nossos canais oficiais.",
      },
      {
        title: "2. Coleta de Dados Pessoais",
        content:
          "Coletamos apenas os dados estritamente necessários para viabilizar o atendimento e responder a solicitações enviadas pelo usuário, incluindo:\n\n• Dados fornecidos voluntariamente no formulário de contato: nome completo, endereço de e-mail, número de telefone / WhatsApp, nome da empresa e mensagem descritiva da demanda.\n• Dados de navegação e métricas: endereço IP, tipo de navegador, sistema operacional e páginas acessadas para fins analíticos agregados e segurança.",
      },
      {
        title: "3. Finalidade do Tratamento de Dados",
        content:
          "Os dados pessoais coletados são utilizados exclusivamente para as seguintes finalidades:\n\n• Retorno de contatos comerciais, dúvidas e solicitações de propostas;\n• Agendamento e realização de reuniões de diagnóstico e alinhamento;\n• Cumprimento de obrigações legais e regulatórias cabíveis;\n• Melhoria contínua da navegabilidade, segurança e experiência do usuário no site.",
      },
      {
        title: "4. Compartilhamento de Dados",
        content:
          "Nenhum dado pessoal coletado é vendido, alugado ou compartilhado com terceiros para fins de marketing não autorizado. O compartilhamento somente poderá ocorrer:\n\n• Com parceiros tecnológicos e prestadores de serviços estritamente essenciais para a operação do site e atendimento (ex.: provedores de hospedagem e e-mail);\n• Por determinação judicial ou requisição de autoridades competentes.",
      },
      {
        title: "5. Armazenamento e Segurança da Informação",
        content:
          "Adotamos padrões e medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acessos não autorizados, destruição, perda, alteração ou qualquer forma de tratamento inadequado ou ilícito. As informações são mantidas apenas pelo período necessário para atingir as finalidades para as quais foram coletadas.",
      },
      {
        title: "6. Direitos do Titular dos Dados",
        content:
          "Em conformidade com o artigo 18 da LGPD, o titular dos dados possui o direito de solicitar a qualquer momento:\n\n• Confirmação da existência de tratamento e acesso aos dados;\n• Correção de dados incompletos, inexatos ou desatualizados;\n• Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei;\n• Revogação do consentimento, mediante manifestação expressa.",
      },
      {
        title: "7. Cookies e Tecnologias de Rastreamento",
        content:
          "Nosso site pode utilizar cookies essenciais e analíticos para garantir o funcionamento técnico adequado das páginas e compreender estatísticas gerais de uso, sem identificar individualmente os visitantes. Você pode configurar seu navegador para recusar cookies a qualquer momento.",
      },
      {
        title: "8. Canal de Contato e Encarregado (DPO)",
        content:
          "Para esclarecer dúvidas sobre esta Política de Privacidade ou para exercer qualquer um dos seus direitos como titular de dados, entre em contato diretamente pelo e-mail: contato@simonemoura.com.br.",
      },
    ],
  },
  en: {
    eyebrow: "Transparency and Security",
    title: "Privacy Policy",
    description:
      "Learn how we collect, use, store, and protect your personal data when browsing our website or contacting us, in compliance with applicable data protection regulations.",
    lastUpdated: "Last updated: August 2026",
    sections: [
      {
        title: "1. General Information",
        content:
          "This Privacy Policy outlines Simone Moura's commitment to security, privacy, and data protection for all visitors and clients using our website or official contact channels.",
      },
      {
        title: "2. Personal Data Collection",
        content:
          "We collect only the data strictly necessary to fulfill inquiries and provide services, including:\n\n• Voluntarily provided details via contact forms: full name, email, phone/WhatsApp, company name, and message.\n• Navigation data and aggregated analytics: IP address, browser type, and page interactions for technical security and platform enhancement.",
      },
      {
        title: "3. Purpose of Data Processing",
        content:
          "Collected data is used solely for responding to business inquiries, scheduling diagnostic sessions, fulfilling legal obligations, and improving overall website performance.",
      },
      {
        title: "4. Data Sharing and Protection",
        content:
          "We do not sell or rent personal information to third parties. Data is only processed by essential infrastructure providers under strict confidentiality agreements.",
      },
      {
        title: "5. User Rights",
        content:
          "You have the right to request access, correction, or deletion of your personal data at any time by contacting our team.",
      },
      {
        title: "6. Contact",
        content:
          "For questions or privacy inquiries, please contact us at: contato@simonemoura.com.br.",
      },
    ],
  },
  es: {
    eyebrow: "Transparencia y Seguridad",
    title: "Política de Privacidad",
    description:
      "Conozca cómo recopilamos, utilizamos, almacenamos y protegemos sus datos personales al navegar en nuestro sitio web o contactarnos.",
    lastUpdated: "Última actualización: Agosto de 2026",
    sections: [
      {
        title: "1. Información General",
        content:
          "Esta Política de Privacidad establece el compromiso de Simone Moura con la seguridad, privacidad y protección de los datos personales de todos los usuarios y clientes.",
      },
      {
        title: "2. Recopilación y Uso de Datos",
        content:
          "Recopilamos únicamente los datos necesarios para atender solicitudes enviadas a través de nuestros formularios (nombre, correo electrónico, teléfono, empresa y mensaje) con el fin exclusivo de brindar la atención requerida.",
      },
      {
        title: "3. Derechos del Titular y Contacto",
        content:
          "Puede solicitar el acceso, rectificación o eliminación de sus datos personales en cualquier momento a través del correo: contato@simonemoura.com.br.",
      },
    ],
  },
};

export function getPrivacidadeContent(locale = DEFAULT_LOCALE) {
  return (
    privacidadePageByLocale[locale] || privacidadePageByLocale[DEFAULT_LOCALE]
  );
}
