import { Target, Handshake, Lightbulb, Globe2, BadgeCheck, Link2 } from "lucide-react";
import { values } from "@/data/about";

const valueIcons: Record<string, React.ElementType> = {
  Target,
  Handshake,
  Lightbulb,
  Globe2,
  BadgeCheck,
  Link2,
};

export function ValuesSection() {
  return (
    <section
      className="cfige-section bg-gray-50 border-b border-gray-200"
      aria-labelledby="values-title"
    >
      <div className="cfige-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
            CE QUI NOUS GUIDE
          </p>
          <h2
            id="values-title"
            className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900"
          >
            Nos valeurs
          </h2>
          <span className="mx-auto mt-3 block h-1 w-10 rounded-full bg-primary" />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => {
            const Icon = valueIcons[v.icon] || Target;
            return (
              <div
                key={v.title}
                className="flex flex-col p-6 sm:p-7 rounded-2xl border border-gray-200 bg-white shadow-cfige-sm transition-all duration-300 hover:border-primary hover:shadow-cfige-md hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary mb-5 shrink-0">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-gray-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {v.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
