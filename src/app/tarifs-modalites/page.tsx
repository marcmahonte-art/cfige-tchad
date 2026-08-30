import type { Metadata } from "next";
import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingIntro } from "@/components/pricing/PricingIntro";
import { FormatSection } from "@/components/pricing/FormatSection";
import { AudienceSection } from "@/components/pricing/AudienceSection";
import { DiscountSection } from "@/components/pricing/DiscountSection";
import { PaymentSection } from "@/components/pricing/PaymentSection";
import { TrainingModalities } from "@/components/pricing/TrainingModalities";
import { CustomQuote } from "@/components/pricing/CustomQuote";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";
import { CTAPricing } from "@/components/pricing/CTAPricing";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "Tarifs & Modalités — CFIGE Tchad",
  description:
    "Découvrez les tarifs, formats, remises et conditions de paiement des formations CFIGE. Investissez dans votre avenir à des tarifs compétitifs.",
};

export default function TarifsModalitesPage() {
  return (
    <main className="relative">
      <PricingHero />
      <PricingIntro />
      <FormatSection />
      <AudienceSection />
      <DiscountSection />
      <PaymentSection />
      <TrainingModalities />
      <CustomQuote />
      <PricingFAQ />
      <CTAPricing />
      <WhatsAppButton />
    </main>
  );
}