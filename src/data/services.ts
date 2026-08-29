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
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "Développement Web",
    description: "Sites et plateformes web professionnels adaptés à votre organisation.",
    icon: Globe,
  },
  {
    title: "Logiciels sur mesure",
    description: "Applications métier et outils internes conçus pour vos processus.",
    icon: AppWindow,
  },
  {
    title: "Applications mobiles",
    description: "Applications iOS et Android pour mieux servir vos utilisateurs.",
    icon: Smartphone,
  },
  {
    title: "E-commerce",
    description: "Boutiques en ligne performantes et sécurisées.",
    icon: ShoppingCart,
  },
  {
    title: "Maintenance informatique",
    description: "Support, diagnostic et entretien de votre parc matériel.",
    icon: Wrench,
  },
  {
    title: "Réseaux",
    description: "Conception et administration de réseaux d'entreprise.",
    icon: Network,
  },
  {
    title: "Transformation digitale",
    description: "Digitalisation et automatisation de vos activités.",
    icon: Sparkles,
  },
  {
    title: "Conseil stratégique",
    description: "Accompagnement et stratégie en système d'information.",
    icon: Lightbulb,
  },
];
