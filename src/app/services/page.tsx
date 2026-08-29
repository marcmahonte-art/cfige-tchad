import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { AdvantagesSection } from "@/components/services/AdvantagesSection";
import { ProductsSection } from "@/components/services/ProductsSection";
import { ContactCta } from "@/components/services/ContactCta";

export const metadata: Metadata = {
  title: "Services & Produits — CFIGE Tchad",
  description:
    "Services du CFIGE : développement web, applications mobiles, e-commerce, maintenance informatique, réseaux, transformation digitale, conseil et vente de matériels informatiques.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServiceGrid />
      <AdvantagesSection />
      <ProductsSection />
      <ContactCta />
    </main>
  );
}
