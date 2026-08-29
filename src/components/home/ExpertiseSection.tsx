import { GraduationCap, Cpu, Lightbulb, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const expertises = [
  {
    badge: "FORMATION",
    title: "Développez vos compétences",
    description:
      "Des formations pratiques et professionnelles pour acquérir des compétences directement utilisables.",
    icon: GraduationCap,
  },
  {
    badge: "SOLUTIONS IT",
    title: "Transformez vos idées en solutions",
    description:
      "Des solutions numériques sur mesure pour digitaliser et automatiser votre activité.",
    icon: Cpu,
  },
  {
    badge: "CONSEIL",
    title: "Accélérez votre performance",
    description:
      "Un accompagnement stratégique pour piloter votre transformation et votre croissance.",
    icon: Lightbulb,
  },
];

export function ExpertiseSection() {
  return (
    <section className="cfige-section bg-white" aria-labelledby="expertise-title">
      <div className="cfige-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
            Nos expertises
          </p>
          <h2
            id="expertise-title"
            className="mt-3 text-[30px] font-bold leading-[38px] text-gray-900 md:text-[40px] md:leading-[48px]"
          >
            Des compétences aux solutions digitales
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {expertises.map((e) => (
            <Card key={e.badge} className="p-7 transition-shadow duration-200">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                <e.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <Badge variant="outline" className="mt-5">
                {e.badge}
              </Badge>
              <h3 className="mt-3 text-xl font-semibold leading-7 text-gray-900">
                {e.title}
              </h3>
              <p className="mt-2 text-sm leading-[22px] text-gray-600">
                {e.description}
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
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
