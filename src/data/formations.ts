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
  BarChart3,
  FileCheck2,
  Sparkles,
} from "lucide-react";

export interface Formation {
  slug: string;
  category: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  mode: string;
  price: string;
  image: string;
  icon: LucideIcon;
}

// Données commerciales non confirmées -> "À confirmer" (ne pas inventer).
// Les champs `level` et `mode` sont des valeurs par défaut à confirmer par le CFIGE
// (nécessaires pour rendre les filtres de la page Formations fonctionnels).
export const formations: Formation[] = [
  {
    slug: "audit-controle-de-gestion",
    category: "Gestion",
    title: "Audit et Contrôle de gestion",
    description:
      "Maîtrisez les outils d'analyse, de pilotage et de contrôle de l'activité d'une organisation pour maîtriser vos coûts.",
    duration: "À confirmer",
    level: "Avancé",
    mode: "Présentiel",
    price: "À confirmer",
    image: "/images/formations/audit-contrôle-de-gestion.png",
    icon: Scale,
  },
  {
    slug: "economie-de-gestion",
    category: "Gestion",
    title: "Économie de gestion",
    description:
      "Comprenez les mécanismes économiques et les décisions de gestion d'entreprise.",
    duration: "À confirmer",
    level: "Intermédiaire",
    mode: "Présentiel",
    price: "À confirmer",
    image: "/images/formations/Économie de gestion.png",
    icon: LineChart,
  },
  {
    slug: "management-des-projets",
    category: "Management",
    title: "Management des projets",
    description:
      "Pilotez des projets de bout en bout : planification, suivi et conduite du changement.",
    duration: "À confirmer",
    level: "Intermédiaire",
    mode: "Hybride",
    price: "À confirmer",
    image: "/images/formations/Management des projets.png",
    icon: FolderKanban,
  },
  {
    slug: "leadership-management",
    category: "Management",
    title: "Leadership & Management",
    description:
      "Fédérez vos équipes, développez votre posture de leader et optimisez la performance collective de votre organisation.",
    duration: "À confirmer",
    level: "Avancé",
    mode: "Présentiel",
    price: "À confirmer",
    image: "/images/formations/Management des projets.png",
    icon: Users,
  },
  {
    slug: "gestion-des-ressources-humaines",
    category: "Ressources humaines",
    title: "Gestion des ressources humaines",
    description:
      "Développez les compétences RH : recrutement, paie, relations sociales et développement des talents.",
    duration: "À confirmer",
    level: "Intermédiaire",
    mode: "Présentiel",
    price: "À confirmer",
    image: "/images/formations/Gestion des ressources humaines.png",
    icon: Users,
  },
  {
    slug: "marketing-et-strategie",
    category: "Marketing",
    title: "Stratégie & Marketing",
    description:
      "Élaborez des stratégies marketing et commerciales percutantes pour gagner en compétitivité au Tchad et à l'international.",
    duration: "À confirmer",
    level: "Intermédiaire",
    mode: "Hybride",
    price: "À confirmer",
    image: "/images/formations/Marketing et stratégie.png",
    icon: Megaphone,
  },
  {
    slug: "data-digital-ia",
    category: "Digital & IA",
    title: "Data, Digital & IA",
    description:
      "Pilotez par la donnée : création de tableaux de bord décisionnels (Power BI, Excel avancé) et intégration de l'intelligence artificielle.",
    duration: "À confirmer",
    level: "Intermédiaire",
    mode: "Hybride",
    price: "À confirmer",
    image: "/images/dev-web-2.jpg",
    icon: Sparkles,
  },
  {
    slug: "fiscalite-conformite",
    category: "Comptabilité & Finance",
    title: "Fiscalité & Conformité",
    description:
      "Naviguez en toute sérénité : sécurisation de vos opérations fiscales, déclarations d'impôts et conformité juridique et administrative.",
    duration: "À confirmer",
    level: "Intermédiaire",
    mode: "Présentiel",
    price: "À confirmer",
    image: "/images/formations/comptabilite-gestion.png",
    icon: FileCheck2,
  },
  {
    slug: "comptabilite-gestion",
    category: "Comptabilité & Finance",
    title: "Comptabilité & Finance",
    description:
      "Fiabilisez votre gestion financière et comptable : normes OHADA, états financiers et suivi rigoureux des opérations.",
    duration: "À confirmer",
    level: "Débutant",
    mode: "Présentiel",
    price: "À confirmer",
    image: "/images/formations/comptabilite-gestion.png",
    icon: Calculator,
  },
  {
    slug: "gestion-des-entreprises",
    category: "Gestion",
    title: "Gestion des Entreprises",
    description:
      "Développez les compétences managériales et organisationnelles pour piloter une activité efficace et pérenne.",
    duration: "À confirmer",
    level: "Intermédiaire",
    mode: "Présentiel",
    price: "À confirmer",
    image: "/images/formations/comptabilite-gestion.png",
    icon: Building2,
  },
  {
    slug: "sciences-juridiques",
    category: "Droit",
    title: "Sciences juridiques & Droit des affaires",
    description:
      "Appréhendez les fondamentaux du droit des affaires, des contrats et du cadre réglementaire pour sécuriser vos activités.",
    duration: "À confirmer",
    level: "Débutant",
    mode: "Présentiel",
    price: "À confirmer",
    image: "/images/formations/Sciences juridiques.png",
    icon: Gavel,
  },
  {
    slug: "developpement-web",
    category: "Développement Web",
    title: "Développement Web & Solutions Digitales",
    description:
      "Concevez et déployez des sites et applications web modernes, du HTML/CSS aux frameworks actuels et outils digitaux.",
    duration: "À confirmer",
    level: "Débutant",
    mode: "Hybride",
    price: "À confirmer",
    image: "/images/dev-web-2.jpg",
    icon: Code2,
  },
  {
    slug: "maintenance-informatique",
    category: "Informatique",
    title: "Maintenance Informatique",
    description:
      "Maîtrisez le diagnostic, la réparation et l'entretien des ordinateurs et périphériques professionnels.",
    duration: "À confirmer",
    level: "Débutant",
    mode: "Présentiel",
    price: "À confirmer",
    image: "/images/formations/Maintenance Informatique.png",
    icon: Cpu,
  },
  {
    slug: "reseaux-informatiques",
    category: "Réseaux & Systèmes",
    title: "Réseaux informatiques",
    description:
      "Concevez, câblez et administrez des réseaux locaux et étendus sécurisés et performants.",
    duration: "À confirmer",
    level: "Débutant",
    mode: "Présentiel",
    price: "À confirmer",
    image: "/images/formations/Réseaux informatiques.png",
    icon: Network,
  },
  {
    slug: "administration-systemes",
    category: "Réseaux & Systèmes",
    title: "Administration des systèmes",
    description:
      "Installez et maintenez les serveurs et systèmes d'exploitation d'une organisation.",
    duration: "À confirmer",
    level: "Intermédiaire",
    mode: "Présentiel",
    price: "À confirmer",
    image: "/images/formations/Administration des systèmes.png",
    icon: Server,
  },
  {
    slug: "securite-des-reseaux",
    category: "Réseaux & Systèmes",
    title: "Cybersécurité & sécurité des réseaux",
    description:
      "Protégez les données et infrastructures contre les menaces numériques courantes.",
    duration: "À confirmer",
    level: "Avancé",
    mode: "En ligne",
    price: "À confirmer",
    image: "/images/formations/Cybersécurité & sécurité des réseaux.png",
    icon: ShieldCheck,
  },
];
