// Témoignages : placeholders clairement remplaçables.
// Ne sont PAS présentés comme réels — à valider avant publication.
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Le CFIGE m'a permis de acquérir des compétences concrètes, directement utilisables dans mon poste. La formation était pratique et bien encadrée.",
    name: "Placeholder — À confirmer",
    role: "Apprenant·e, formation professionnelle",
    initials: "CF",
  },
  {
    quote:
      "Notre équipe a été accompagnée dans sa transformation digitale avec écoute et professionnalisme. Un partenaire sérieux sur N'Djaména.",
    name: "Placeholder — À confirmer",
    role: "Responsable, organisation partenaire",
    initials: "EN",
  },
  {
    quote:
      "Les solutions développées par le CFIGE répondent précisément à nos besoins. Un accompagnement de qualité, du cadrage au déploiement.",
    name: "Placeholder — À confirmer",
    role: "Dirigeant·e, entreprise cliente",
    initials: "CF",
  },
];
