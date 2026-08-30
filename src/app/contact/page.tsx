import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfoCards } from "@/components/contact/ContactInfoCards";
import { ContactLocationAndForm } from "@/components/contact/ContactLocationAndForm";
import { WhyContactUs } from "@/components/contact/WhyContactUs";
import { ContactFAQ } from "@/components/contact/ContactFAQ";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "Contactez-nous — CFIGE Tchad",
  description:
    "Contactez le CFIGE à N'Djaména, Tchad. Téléphone (+235 66 91 02 96 / 95 69 22 00), email, localisation 7e arrondissement et formulaire de contact direct.",
};

export default function ContactPage() {
  return (
    <main className="relative">
      <ContactHero />
      <ContactInfoCards />
      <ContactLocationAndForm />
      <WhyContactUs />
      <ContactFAQ />
      <ContactCTA />
      <WhatsAppButton />
    </main>
  );
}
