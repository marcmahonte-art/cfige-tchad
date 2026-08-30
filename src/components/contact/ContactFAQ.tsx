"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Quels types de formations proposez-vous ?",
    answer:
      "Le CFIGE dispense des formations complètes en informatique (développement web & mobile, bureautique avancée, réseaux & cybersécurité, maintenance) et en gestion (comptabilité OHADA, fiscalité, audit, gestion de projets, management).",
  },
  {
    question: "Comment s'inscrire à une formation ?",
    answer:
      "L'inscription peut s'effectuer directement en ligne via notre formulaire de contact, sur WhatsApp, ou à notre siège dans le 7e arrondissement de N'Djaména avec une pièce d'identité et un acompte d'inscription.",
  },
  {
    question: "Proposez-vous des formations en entreprise ?",
    answer:
      "Oui. Nous élaborons des programmes de formation intra-entreprise sur mesure pour vos collaborateurs, dispensés directement dans vos locaux ou dans nos salles équipées.",
  },
  {
    question: "Quels sont les modes de paiement acceptés ?",
    answer:
      "Nous acceptons les règlements par virement bancaire, chèque d'entreprise, espèces à l'accueil, ainsi que les paiements mobiles (Airtel Money, Moov Money) avec facilités d'échelonnement sans frais.",
  },
];

export function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="cfige-section bg-white border-b border-gray-200" aria-labelledby="faq-contact-title">
      <div className="cfige-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
            QUESTIONS COURANTES
          </p>
          <h2
            id="faq-contact-title"
            className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900"
          >
            Questions fréquentes
          </h2>
          <span className="mx-auto mt-3 block h-1 w-10 rounded-full bg-primary" />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-5xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-200 hover:border-gray-300 shadow-cfige-sm self-start"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-3 p-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${isOpen ? "bg-primary-light text-primary" : "bg-gray-100 text-gray-500"}`}>
                      <HelpCircle className="h-4 w-4" />
                    </span>
                    <span className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
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
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed text-gray-600 border-t border-gray-100 animate-cfige-fade-up">
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
