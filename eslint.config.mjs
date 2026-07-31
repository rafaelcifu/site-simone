import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,

  {
    // src/components/ui/** e codigo gerado pelo CLI do shadcn.
    // Nao lintamos nem editamos: qualquer `npx shadcn add` sobrescreve.
    // Precisa customizar? Envolva o componente em molecules/ (ver AGENTS.md).
    files: ["src/components/ui/**"],
    rules: {
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/static-components": "off",
      "react-hooks/exhaustive-deps": "off",
    },
  },

  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
