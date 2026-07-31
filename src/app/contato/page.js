import { contatoPage, contatoUi, horarios } from "@/content/contato";
import { contact } from "@/content/site";
import { pageSeo } from "@/content/seo";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/atoms/json-ld";
import { Section } from "@/components/atoms/section";
import { SectionHeading } from "@/components/atoms/section-heading";
import { Icon } from "@/components/atoms/icon";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata = buildMetadata(pageSeo.contato);

export default function ContatoPage() {
  const pageGraph = graph(
    webPageSchema({ ...pageSeo.contato, type: "ContactPage" }),
    breadcrumbSchema([{ name: "Contato", path: "/contato" }])
  );

  return (
    <Section padding="lg">
      <JsonLd data={pageGraph} />

      <SectionHeading
        as="h1"
        eyebrow={contatoPage.eyebrow}
        title={contatoPage.title}
        description={contatoPage.description}
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <ContactForm />
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-8">
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <Icon name="Mail" className="mt-0.5 text-muted-foreground" />
              <a
                href={`mailto:${contact.email}`}
                className="text-sm transition-colors duration-200 hover:text-muted-foreground"
              >
                {contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="Phone" className="mt-0.5 text-muted-foreground" />
              <a
                href={`tel:${contact.phone.replace(/\D/g, "")}`}
                className="text-sm transition-colors duration-200 hover:text-muted-foreground"
              >
                {contact.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="MapPin" className="mt-0.5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {contact.address.street}, {contact.address.city} -{" "}
                {contact.address.state}
              </span>
            </li>
          </ul>

          <div>
            <p className="text-sm font-medium">{contatoUi.scheduleTitle}</p>
            <ul className="mt-3 flex flex-col gap-2">
              {horarios.map((item) => (
                <li
                  key={item.day}
                  className="flex justify-between gap-4 text-sm text-muted-foreground"
                >
                  <span>{item.day}</span>
                  <span>{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
