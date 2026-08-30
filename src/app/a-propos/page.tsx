import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { HistorySection } from "@/components/about/history-section";
import { ValuesSection } from "@/components/about/values-section";
import { MethodSection } from "@/components/about/method-section";
import { TeamSection } from "@/components/about/team-section";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "À propos — CFIGE Tchad",
  description: "Page À propos du CFIGE : histoire, valeurs, méthode et contact."
};

export default function AProposPage() {
  return (
    <main className="relative">
      <AboutHero />
      <HistorySection />
      <ValuesSection />
      <MethodSection />
      <TeamSection />
      <WhatsAppButton />
    </main>
  );
}
