"use client";

import { useState } from "react";

import { contact } from "@/content/site";
import { contatoUi, formFields } from "@/content/contato";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

/**
 * Formulario de contato.
 *
 * ATENCAO: o site e estatico e nao tem backend. Hoje o envio monta um
 * `mailto:` com os dados preenchidos — funciona, mas depende do cliente de
 * e-mail do visitante.
 *
 * Para producao, trocar por um servico externo (Formspree, Web3Forms,
 * Resend + Route Handler). Alinhar antes de implementar: ver AGENTS.md,
 * secao "Formularios e integracoes".
 */
export function ContactForm() {
  const [values, setValues] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const body = formFields
      .map((field) => `${field.label}: ${values[field.name] ?? ""}`)
      .join("\n");

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      contatoUi.form.emailSubject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {formFields.map((field) => (
        <div key={field.name} className="flex flex-col gap-2">
          <Label htmlFor={field.name}>
            {field.label}
            {field.required ? (
              <span className="text-muted-foreground">
                {contatoUi.form.requiredMark}
              </span>
            ) : null}
          </Label>

          {field.type === "textarea" ? (
            <Textarea
              id={field.name}
              name={field.name}
              required={field.required}
              rows={5}
              value={values[field.name] ?? ""}
              onChange={handleChange}
            />
          ) : (
            <Input
              id={field.name}
              name={field.name}
              type={field.type}
              required={field.required}
              value={values[field.name] ?? ""}
              onChange={handleChange}
            />
          )}
        </div>
      ))}

      <Button type="submit" size="lg" className="self-start">
        {contatoUi.form.submitLabel}
      </Button>
    </form>
  );
}
