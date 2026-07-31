import Link from "next/link";

import { Section } from "@/components/atoms/section";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Pagina nao encontrada" };

export default function NotFound() {
  return (
    <Section padding="lg" className="flex min-h-[60vh] items-center">
      <div className="flex max-w-md flex-col gap-4">
        <span className="font-display text-5xl font-semibold">404</span>
        <h1 className="font-display text-2xl font-semibold">
          Pagina nao encontrada
        </h1>
        <p className="text-muted-foreground">
          O endereco que voce tentou acessar nao existe ou foi movido.
        </p>
        <Button asChild className="mt-2 self-start">
          <Link href="/">Voltar para o inicio</Link>
        </Button>
      </div>
    </Section>
  );
}
