"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Les tarifs sont-ils fixes ou négociables ?",
    answer:
      "Les tarifs indiqués constituent des fourchettes indicatives. Le coût exact dépend du format retenu (individuel ou collectif), de la durée exacte, du volume d'inscriptions et des besoins sur mesure. Un devis transparent et détaillé vous est délivré gratuitement.",
  },
  {
    question: "Puis-je bénéficier de facilités de paiement échelonné ?",
    answer:
      "Absolument. Pour toutes les formations de plus de 4 semaines, un échelonnement en 2 à 4 mensualités est possible sans aucun frais additionnel. Un acompte initial de 50 % valide l'inscription et la place en salle.",
  },
  {
    question: "Existe-t-il des remises pour les étudiants et demandeurs d'emploi ?",
    answer:
      "Oui. Une réduction de 10 % à 20 % est accordée aux étudiants et jeunes diplômés sur présentation d'une pièce justificative valide, applicable sur l'ensemble de nos programmes standards.",
  },
  {
    question: "Comment inscrire plusieurs collaborateurs d'une même entreprise ?",
    answer:
      "Pour les groupes de 3 personnes et plus, nous appliquons une grille de remise dégressive (5 % à 15 %+) avec facturation globale, convention de formation et suivi pédagogique sur mesure.",
  },
  {
    question: "Quels sont les moyens de paiement acceptés ?",
    answer:
      "Nous acceptons les paiements par virement bancaire, chèque d'entreprise, espèces à l'agence CFIGE, ainsi que les solutions de paiement mobile (Airtel Money, Moov Money). Un reçu officiel est délivré à chaque versement.",
  },
];

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="cfige-section bg-white border-b border-gray-200" aria-labelledby="faq-title">
      <div className="cfige-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
            FOIRE AUX QUESTIONS
          </p>
          <h2 id="faq-title" className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            Questions Fréquemment Posées
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Tout ce que vous devez savoir sur nos tarifs, conditions de paiement et inscriptions
          </p>
          <span className="mx-auto mt-3 block h-1 w-10 rounded-full bg-primary" />
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-200 hover:border-gray-300 shadow-cfige-sm"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${isOpen ? "bg-primary-light text-primary" : "bg-gray-100 text-gray-500"}`}>
                      <HelpCircle className="h-4 w-4" />
                    </span>
                    <span className="text-sm sm:text-base font-bold text-gray-900">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm leading-relaxed text-gray-600 border-t border-gray-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
