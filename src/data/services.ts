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
} from "lucide-react";

export interface Service {
  title: string;
  category: string;
  description: string;
  image: string;
  icon: LucideIcon;
  href: string;
}

// Données issues de SPEC_service_PAGE.md (captures). Les images sont des
// placeholders (pas de photos produits/services réelles disponibles).
export const services: Service[] = [
  {
    title: "Développement Web",
    category: "Informatique",
    description:
      "Sites et plateformes web professionnels, performants et adaptés à votre organisation.",
    image: "/images/dev-web.jpg",
    icon: Globe,
    href: "#contact",
  },
  {
    title: "Logiciels sur mesure",
    category: "Informatique",
    description:
      "Applications métier et outils internes conçus pour vos processus.",
    image: "/images/dev-web-2.jpg",
    icon: AppWindow,
    href: "#contact",
  },
  {
    title: "Applications mobiles",
    category: "Informatique",
    description: "Applications iOS et Android pour mieux servir vos utilisateurs.",
    image: "/images/apps-1.jpg",
    icon: Smartphone,
    href: "#contact",
  },
  {
    title: "E-commerce",
    category: "Informatique",
    description: "Boutiques en ligne sécurisées et performantes.",
    image: "/images/apps-2.jpg",
    icon: ShoppingCart,
    href: "#contact",
  },
  {
    title: "Maintenance informatique",
    category: "Informatique",
    description: "Support, diagnostic et entretien de votre parc matériel.",
    image: "/images/apps-3.jpg",
    icon: Wrench,
    href: "#contact",
  },
  {
    title: "Réseaux",
    category: "Informatique",
    description: "Conception et administration de réseaux d'entreprise.",
    image: "/images/dev-web-2.jpg",
    icon: Network,
    href: "#contact",
  },
  {
    title: "Transformation digitale",
    category: "Conseil",
    description: "Digitalisation et automatisation de vos activités.",
    image: "/images/apps-1.jpg",
    icon: Sparkles,
    href: "#contact",
  },
  {
    title: "Conseil stratégique",
    category: "Conseil",
    description: "Accompagnement et stratégie en système d'information.",
    image: "/images/apps-2.jpg",
    icon: Lightbulb,
    href: "#contact",
  },
];
