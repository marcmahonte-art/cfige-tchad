import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

export function ServicesGrid() {
  return (
    <section
      className="cfige-section bg-white"
      aria-labelledby="services-grid-title"
    >
      <div className="cfige-container">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
            Prestations
          </p>
          <h2
            id="services-grid-title"
            className="mt-3 text-[30px] font-bold leading-[38px] text-gray-900 md:text-[40px] md:leading-[48px]"
          >
            Nos services
          </h2>
          <p className="mt-3 text-base leading-6 text-gray-600">
            Une offre complète pour accompagner votre transformation numérique,
            de la conception au déploiement.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-cfige-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                <s.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {s.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-5 text-gray-600">
                {s.description}
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
              >
                Demander un devis
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
