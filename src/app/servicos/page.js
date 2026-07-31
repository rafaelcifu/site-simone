import { servicosPage } from "@/content/servicos";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata = {
  title: "Servicos",
  description: servicosPage.description,
};

export default function ServicosPage() {
  return (
    <>
      <ServicesGrid tone="default" />
      <CtaBand />
    </>
  );
}
