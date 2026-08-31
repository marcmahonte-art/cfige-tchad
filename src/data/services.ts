import type { LucideIcon } from "lucide-react";
import {
  Globe,
  AppWindow,
  Smartphone,
  ShoppingCart,
  Wrench,
  Network,
  Sparkles,
  Lightbulb,
  BarChart3,
  LineChart,
  ShieldCheck,
} from "lucide-react";

export interface Service {
  title: string;
  category: string;
  description: string;
  image: string;
  icon: LucideIcon;
  href: string;
}

export const services: Service[] = [
  {
    title: "Développement Web & Plateformes",
    category: "Solutions Digitales",
    description:
      "Sites et plateformes web professionnels, performants et adaptés à votre organisation.",
    image: "/images/dev-web.jpg",
    icon: Globe,
    href: "#contact",
  },
  {
    title: "Tableaux de bord & BI (Power BI, Excel)",
    category: "Solutions Digitales",
    description:
      "Déploiement d'indicateurs de performance et tableaux de bord décisionnels sur Power BI et Excel.",
    image: "/images/dev-web-2.jpg",
    icon: BarChart3,
    href: "#contact",
  },
  {
    title: "Logiciels sur mesure",
    category: "Solutions Digitales",
    description:
      "Applications métier et outils internes conçus sur mesure pour vos processus quotidiens.",
    image: "/images/dev-web-2.jpg",
    icon: AppWindow,
    href: "#contact",
  },
  {
    title: "Applications mobiles",
    category: "Solutions Digitales",
    description: "Applications iOS et Android fluides et ergonomiques pour vos utilisateurs et clients.",
    image: "/images/apps-1.jpg",
    icon: Smartphone,
    href: "#contact",
  },
  {
    title: "E-commerce & Paiements en ligne",
    category: "Solutions Digitales",
    description: "Boutiques en ligne sécurisées, intégration de moyens de paiement et suivi des commandes.",
    image: "/images/apps-2.jpg",
    icon: ShoppingCart,
    href: "#contact",
  },
  {
    title: "Infrastructure & Maintenance IT",
    category: "Infrastructure",
    description: "Support technique, diagnostic, infogérance et entretien de votre parc matériel informatique.",
    image: "/images/apps-3.jpg",
    icon: Wrench,
    href: "#contact",
  },
  {
    title: "Réseaux & Sécurité",
    category: "Infrastructure",
    description: "Conception, câblage, sécurisation et administration de réseaux d'entreprise fiables.",
    image: "/images/dev-web-2.jpg",
    icon: Network,
    href: "#contact",
  },
  {
    title: "Transformation digitale",
    category: "Conseil",
    description: "Accompagnement, digitalisation des flux et automatisation intelligente de vos activités.",
    image: "/images/apps-1.jpg",
    icon: Sparkles,
    href: "#contact",
  },
  {
    title: "Diagnostics de performance PME/PMI",
    category: "Conseil",
    description: "Audit d'efficacité opérationnelle, optimisation des processus métiers et plan d'action stratégique.",
    image: "/images/apps-2.jpg",
    icon: LineChart,
    href: "#contact",
  },
  {
    title: "Assistance & Conformité Fiscale",
    category: "Gestion",
    description: "Sécurisation de vos opérations fiscales, déclarations d'impôts et conformité réglementaire.",
    image: "/images/apps-3.jpg",
    icon: ShieldCheck,
    href: "#contact",
  },
  {
    title: "Conseil stratégique",
    category: "Conseil",
    description: "Accompagnement stratégique en gouvernance, système d'information et croissance.",
    image: "/images/apps-2.jpg",
    icon: Lightbulb,
    href: "#contact",
  },
];
