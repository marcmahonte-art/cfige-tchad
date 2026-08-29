import type { Metadata } from "next";
import { Stats } from "@/components/home/Stats";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { MethodSection } from "@/components/home/MethodSection";
import { WhyCfige } from "@/components/home/WhyCfige";
import { ContactSection } from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Services — CFIGE Tchad",
  description:
    "Services du CFIGE : développement web, applications mobiles, e-commerce, maintenance informatique, réseaux, transformation digitale et conseil stratégique.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <Stats />
      <ServicesGrid />
      <MethodSection />
      <WhyCfige />
      <ContactSection />
    </>
  );
}
