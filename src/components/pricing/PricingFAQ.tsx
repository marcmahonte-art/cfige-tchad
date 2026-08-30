"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Les tarifs sont-ils fixes ?",
    answer:
      "Les tarifs indiqués constituent des fourchettes indicatives. Le coût final dépend du format choisi, de la durée, du nombre de participants et des besoins spécifiques. Un devis personnalisé est disponible sur demande.",
  },
  {
    question: "Puis-je payer en plusieurs fois ?",
    answer:
      "Oui, un paiement échelonné est possible pour les formations longues. Un acompte de 50 % est requis à l&apos;inscription, le solde pouvant être réparti sur la durée de la formation.",
  },
  {
    question: "Existe-t-il des réductions pour les groupes ?",
    answer:
      "Oui. Des remises de 5 % à 15 % sont accordées selon le nombre de participants (3 à 5 personnes : 5 %, 6 à 10 : 10 %, 11 à 20 : 15 %, +20 : tarif négociable).",
  },
  {
    question: "Les entreprises peuvent-elles demander un devis personnalisé ?",
    answer:
      "Absolument. Le CFIGE propose des conditions préférentielles pour les entreprises, PME, ONG et institutions, notamment pour des contrats annuels ou des formations en entreprise.",
  },
];

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="cfige-section bg-white" aria-labelledby="faq-title">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
            QUESTIONS —
          </p>
          <h2 id="faq-title" className="mt-3 text-[28px] font-bold tracking-[-0.025em] text-[#17212B]">
            Questions fréquentes
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-[10px] border border-[#E9ECEF] bg-white"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="pr-4 text-[14px] font-semibold text-[#17212B]">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[#69737D] transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-5 text-[13px] leading-[1.7] text-[#69737D]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
