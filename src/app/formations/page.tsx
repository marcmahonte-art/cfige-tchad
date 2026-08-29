import type { Metadata } from "next";
import { Stats } from "@/components/home/Stats";
import { FormationCatalog } from "@/components/formations/FormationCatalog";
import { WhyCfige } from "@/components/home/WhyCfige";
import { ProchainesSessions } from "@/components/formations/ProchainesSessions";
import { ContactSection } from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Formations — CFIGE Tchad",
  description:
    "Catalogue des formations du CFIGE : informatique, gestion, finance, droit, management et plus. Recherche, filtres et prochaines sessions.",
};

export default function FormationsPage() {
  return (
    <>
      <Stats />
      <FormationCatalog />
      <WhyCfige />
      <ProchainesSessions />
      <ContactSection />
    </>
  );
}
