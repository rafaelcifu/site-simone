/** @type {import('next').NextConfig} */
const nextConfig = {
  // Site estatico: nao ha backend proprio. Nao adicionar rewrites/proxies
  // sem alinhar antes (ver AGENTS.md).
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
