import Script from "next/script";

import { leadster } from "@/content/integrations";

/** Carrega o chatbot uma unica vez para todas as rotas do site. */
export function Leadster() {
  return (
    <>
      <Script id={leadster.configScriptId} strategy="afterInteractive">
        {`window.neuroleadId = ${JSON.stringify(leadster.accountId)};`}
      </Script>
      <Script
        id={leadster.loaderScriptId}
        src={leadster.scriptSrc}
        strategy="afterInteractive"
        charSet="UTF-8"
      />
    </>
  );
}
