import Link from "next/link";

import { contact, mainNav, site, social } from "@/content/site";
import { Container } from "@/components/atoms/container";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t bg-secondary text-secondary-foreground">
      <Container className="py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-lg font-semibold">{site.name}</p>
            <p className="mt-3 text-sm text-muted-foreground">
              {site.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <nav aria-label="Rodape">
              <p className="text-sm font-semibold">Navegacao</p>
              <ul className="mt-4 space-y-2.5">
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="text-sm font-semibold">Contato</p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    {contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${contact.phone.replace(/\D/g, "")}`}
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    {contact.phoneDisplay}
                  </a>
                </li>
                {social.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <p className="text-xs text-muted-foreground">
          &copy; {year} {site.name}. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
}
