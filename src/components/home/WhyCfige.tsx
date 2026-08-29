import { Award, MapPin, Lightbulb, TrendingUp, BadgeCheck, Users } from "lucide-react";

const benefits = [
  {
    title: "Excellence",
    description: "Un niveau d'exigence élevé dans chaque formation et prestation.",
    icon: Award,
  },
  {
    title: "Proximité",
    description: "Un accompagnement présent à N'Djaména et partout au Tchad.",
    icon: MapPin,
  },
  {
    title: "Innovation",
    description: "Des approches et outils adaptés aux usages numériques actuels.",
    icon: Lightbulb,
  },
  {
    title: "Impact",
    description: "Des compétences qui produisent des résultats concrets.",
    icon: TrendingUp,
  },
  {
    title: "Certification",
    description: "Des parcours structurés et valorisables pour votre parcours.",
    icon: BadgeCheck,
  },
  {
    title: "Réseau",
    description: "Une communauté d'apprenants, professionnels et partenaires.",
    icon: Users,
  },
];

export function WhyCfige() {
  return (
    <section className="cfige-section bg-gray-50" aria-labelledby="why-title">
      <div className="cfige-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
            Pourquoi nous choisir
          </p>
          <h2
            id="why-title"
            className="mt-3 text-[30px] font-bold leading-[38px] text-gray-900 md:text-[40px] md:leading-[48px]"
          >
            Pourquoi choisir le CFIGE ?
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="flex min-h-[120px] items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6"
            >
              <span className="mt-1 h-10 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              <div>
                <span className="text-primary">
                  <b.icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-1 text-base font-semibold text-gray-900">
                  {b.title}
                </h3>
                <p className="mt-1.5 text-sm leading-5 text-gray-600">
                  {b.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
