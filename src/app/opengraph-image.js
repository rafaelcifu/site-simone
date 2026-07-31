import { ImageResponse } from "next/og";

import { site, siteUi } from "@/content/site";
import { person } from "@/content/seo";

/**
 * Imagem de Open Graph gerada no build (1200x630).
 * E o card que aparece no WhatsApp, LinkedIn, X e Slack.
 *
 * Esta e a versao generica do site. Quando houver arte definitiva do Figma,
 * troque por um arquivo estatico `opengraph-image.jpg` nesta mesma pasta —
 * o Next detecta sozinho e ignora este arquivo.
 *
 * Regras do Satori (motor por tras): so flexbox, sem grid, sem CSS externo.
 */
export const alt = `${site.name} — ${person.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          color: "#fafafa",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, letterSpacing: "-0.02em" }}>
          {site.name}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 62,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: "900px",
            }}
          >
            {person.jobTitle}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#a3a3a3",
              maxWidth: "820px",
              lineHeight: 1.4,
            }}
          >
            {siteUi.socialCard.description}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#a3a3a3" }}>
          {siteUi.socialCard.stats}
        </div>
      </div>
    ),
    size
  );
}
