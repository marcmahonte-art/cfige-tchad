import type { LucideIcon } from "lucide-react";
import {
  Cpu,
  Code2,
  Calculator,
  Building2,
} from "lucide-react";

export interface Formation {
  slug: string;
  category: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  price: string;
  image: string;
  icon: LucideIcon;
}

// Données commerciales non confirmées -> "À confirmer" (ne pas inventer).
export const formations: Formation[] = [
  {
    slug: "maintenance-informatique",
    category: "Informatique",
    title: "Maintenance Informatique",
    description:
      "Maîtrisez le diagnostic, la réparation et l'entretien des ordinateurs et périphériques professionnels.",
    duration: "À confirmer",
    level: "À confirmer",
    price: "À confirmer",
    image: "/images/apps-3.jpg",
    icon: Cpu,
  },
  {
    slug: "developpement-web",
    category: "Développement Web",
    title: "Développement Web",
    description:
      "Concevez et déployez des sites et applications web modernes, du HTML/CSS aux frameworks actuels.",
    duration: "À confirmer",
    level: "À confirmer",
    price: "À confirmer",
    image: "/images/dev-web.jpg",
    icon: Code2,
  },
  {
    slug: "comptabilite-gestion",
    category: "Comptabilité & Gestion",
    title: "Comptabilité & Gestion",
    description:
      "Acquérez les bases de la comptabilité générale et de la gestion financière pour les organisations.",
    duration: "À confirmer",
    level: "À confirmer",
    price: "À confirmer",
    image: "/images/apps-1.jpg",
    icon: Calculator,
  },
  {
    slug: "gestion-des-entreprises",
    category: "Gestion",
    title: "Gestion des Entreprises",
    description:
      "Développez les compétences managériales et organisationnelles pour piloter une activité efficace.",
    duration: "À confirmer",
    level: "À confirmer",
    price: "À confirmer",
    image: "/images/apps-2.jpg",
    icon: Building2,
  },
];
