import { GraduationCap, Cpu, Lightbulb, ShieldCheck, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const expertises = [
  {
    badge: "FORMATION",
    title: "Expertise Formation",
    description:
      "Développer vos compétences clés : formations certifiantes, ingénierie pédagogique et parcours pratiques.",
    icon: GraduationCap,
    href: "/formations",
  },
  {
    badge: "CONSEIL",
    title: "Conseil Stratégique",
    description:
      "Optimiser vos processus métiers : diagnostics de performance PME/PMI et pilotage de la croissance.",
    icon: Lightbulb,
    href: "/services",
  },
  {
    badge: "DIGITAL & IT",
    title: "Innovation Digitale",
    description:
      "Accélérer votre transformation numérique : solutions logicielles sur-mesure, tableaux de bord et IT.",
    icon: Cpu,
    href: "/services",
  },
  {
    badge: "EXTERNALISATION",
    title: "Gestion Externalisée",
    description:
      "Sécuriser votre conformité fiscale et financière : comptabilité, fiscalité et agilité opérationnelle.",
    icon: ShieldCheck,
    href: "/services",
  },
];

export function ExpertiseSection() {
  return (
    <section className="cfige-section bg-white" aria-labelledby="expertise-title">
      <div className="cfige-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
            NOTRE EXPERTISE EN UN COUP D&apos;ŒIL
          </p>
          <h2
            id="expertise-title"
            className="mt-3 text-[30px] font-bold leading-[38px] text-gray-900 md:text-[40px] md:leading-[48px]"
          >
            Former les talents. Transformer les organisations.
          </h2>
          <p className="mt-3 text-base leading-6 text-gray-600">
            Conseil • Formation • Digital • Externalisation
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {expertises.map((e) => (
            <Card key={e.badge} className="p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-cfige-md hover:border-primary">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                <e.icon className="h-6 w-6" aria-hidden="true" strokeWidth={1.8} />
              </span>
              <Badge variant="outline" className="mt-4 text-[10px] font-bold">
                {e.badge}
              </Badge>
              <h3 className="mt-3 text-lg font-bold leading-6 text-gray-900">
                {e.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600 flex-grow">
                {e.description}
              </p>
              <a
                href={e.href}
                className="mt-4 inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
              >
                En savoir plus
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
