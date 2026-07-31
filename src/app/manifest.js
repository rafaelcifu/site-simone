import { site } from "@/content/site";

/** Web App Manifest. Melhora o compartilhamento e o "adicionar a tela inicial". */
export default function manifest() {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    lang: site.locale,
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
