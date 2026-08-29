import { services } from "@/data/services";
import { Card } from "@/components/ui/card";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="cfige-section bg-white"
      aria-labelledby="services-title"
    >
      <div className="cfige-container">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
            Solutions IT
          </p>
          <h2
            id="services-title"
            className="mt-3 text-[30px] font-bold leading-[38px] text-gray-900 md:text-[40px] md:leading-[48px]"
          >
            Des solutions numériques pour votre organisation
          </h2>
          <p className="mt-3 text-base leading-6 text-gray-600">
            Du développement web à la transformation digitale, le CFIGE conçoit
            et accompagne vos projets technologiques.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {services.map((s) => (
            <Card
              key={s.title}
              className="flex min-h-[112px] flex-col gap-2 p-5"
            >
              <span className="text-primary">
                <s.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="text-sm font-semibold leading-5 text-gray-900">
                {s.title}
              </h3>
              <p className="text-xs leading-5 text-gray-500">
                {s.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
