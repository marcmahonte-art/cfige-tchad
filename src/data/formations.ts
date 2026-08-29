import type { LucideIcon } from "lucide-react";
import {
  Cpu,
  Code2,
  Calculator,
  Building2,
  Scale,
  LineChart,
  FolderKanban,
  Users,
  Megaphone,
  Gavel,
  Network,
  Server,
  ShieldCheck,
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
    slug: "audit-controle-de-gestion",
    category: "Gestion",
    title: "Audit et Contrôle de gestion",
    description:
      "Maîtrisez les outils d'analyse, de pilotage et de contrôle de l'activité d'une organisation.",
    duration: "À confirmer",
    level: "À confirmer",
    price: "À confirmer",
    image: "/images/dev-web.jpg",
    icon: Scale,
  },
  {
    slug: "economie-de-gestion",
    category: "Gestion",
    title: "Économie de gestion",
    description:
      "Comprenez les mécanismes économiques et les décisions de gestion d'entreprise.",
    duration: "À confirmer",
    level: "À confirmer",
    price: "À confirmer",
    image: "/images/dev-web-2.jpg",
    icon: LineChart,
  },
  {
    slug: "management-des-projets",
    category: "Management",
    title: "Management des projets",
    description:
      "Pilotez des projets de bout en bout : planification, suivi et conduite du changement.",
    duration: "À confirmer",
    level: "À confirmer",
    price: "À confirmer",
    image: "/images/apps-1.jpg",
    icon: FolderKanban,
  },
  {
    slug: "gestion-des-ressources-humaines",
    category: "Ressources humaines",
    title: "Gestion des ressources humaines",
    description:
      "Développez les compétences RH : recrutement, paie, relations sociales et développement des talents.",
    duration: "À confirmer",
    level: "À confirmer",
    price: "À confirmer",
    image: "/images/apps-2.jpg",
    icon: Users,
  },
  {
    slug: "marketing-et-strategie",
    category: "Marketing",
    title: "Marketing et stratégie",
    description:
      "Élaborez des stratégies marketing adaptées au marché tchadien et international.",
    duration: "À confirmer",
    level: "À confirmer",
    price: "À confirmer",
    image: "/images/apps-3.jpg",
    icon: Megaphone,
  },
  {
    slug: "sciences-juridiques",
    category: "Droit",
    title: "Sciences juridiques",
    description:
      "Appréhendez les fondamentaux du droit des affaires et du cadre réglementaire.",
    duration: "À confirmer",
    level: "À confirmer",
    price: "À confirmer",
    image: "/images/dev-web.jpg",
    icon: Gavel,
  },
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
    category: "Comptabilité & Finance",
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
  {
    slug: "reseaux-informatiques",
    category: "Réseaux & Systèmes",
    title: "Réseaux informatiques",
    description:
      "Concevez, câblez et administrez des réseaux locaux et étendus sécurisés et performants.",
    duration: "À confirmer",
    level: "À confirmer",
    price: "À confirmer",
    image: "/images/apps-1.jpg",
    icon: Network,
  },
  {
    slug: "administration-systemes",
    category: "Réseaux & Systèmes",
    title: "Administration des systèmes",
    description:
      "Installez et maintenez les serveurs et systèmes d'exploitation d'une organisation.",
    duration: "À confirmer",
    level: "À confirmer",
    price: "À confirmer",
    image: "/images/apps-2.jpg",
    icon: Server,
  },
  {
    slug: "securite-des-reseaux",
    category: "Réseaux & Systèmes",
    title: "Cybersécurité & sécurité des réseaux",
    description:
      "Protégez les données et infrastructures contre les menaces numériques courantes.",
    duration: "À confirmer",
    level: "À confirmer",
    price: "À confirmer",
    image: "/images/apps-3.jpg",
    icon: ShieldCheck,
  },
];
