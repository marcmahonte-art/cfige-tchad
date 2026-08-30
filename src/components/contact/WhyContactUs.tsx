import { Headphones, UsersRound, BadgeCheck, Handshake } from "lucide-react";

const reasons = [
  {
    title: "Réponse rapide",
    description: "Nous vous répondons dans les meilleurs délais et assurons un premier retour rapide.",
    icon: Headphones,
  },
  {
    title: "Conseils personnalisés",
    description: "Nous écoutons vos besoins spécifiques et vous proposons la solution la plus adaptée.",
    icon: UsersRound,
  },
  {
    title: "Experts qualifiés",
    description: "Une équipe de formateurs et consultants chevronnés à votre disposition.",
    icon: BadgeCheck,
  },
  {
    title: "Accompagnement complet",
    description: "Un suivi de proximité avant, pendant et après votre cursus ou mission.",
    icon: Handshake,
  },
];

export function WhyContactUs() {
  return (
    <section className="cfige-section bg-gray-50 border-b border-gray-200" aria-labelledby="why-contact-title">
      <div className="cfige-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
            POURQUOI NOUS CONTACTER ?
          </p>
          <h2
            id="why-contact-title"
            className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900"
          >
            Nous sommes là pour vous accompagner
          </h2>
          <span className="mx-auto mt-3 block h-1 w-10 rounded-full bg-primary" />
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="flex flex-col p-6 rounded-2xl border border-gray-200 bg-white shadow-cfige-sm transition-all duration-300 hover:border-primary hover:shadow-cfige-md hover:-translate-y-1"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary mb-4 shrink-0">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <h3 className="text-base font-bold text-gray-900 leading-snug">
                  {r.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600">
                  {r.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
