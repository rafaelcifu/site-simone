import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Site estatico: nao ha backend proprio. Nao adicionar rewrites/proxies
  // sem alinhar antes (ver AGENTS.md).
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    // Fixa a raiz no proprio projeto. Sem isso o Turbopack sobe a arvore
    // procurando lockfile e pode eleger a home do usuario como raiz — o
    // build local passa a olhar arquivos de fora do repo.
    root: dirname(fileURLToPath(import.meta.url)),
  },
};

export default nextConfig;
