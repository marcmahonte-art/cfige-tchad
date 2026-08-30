import { UserRoundCheck, BookOpen, ShieldCheck } from "lucide-react";
import { methods } from "@/data/about";

const methodIcons: Record<string, React.ElementType> = {
  UserRoundCheck,
  BookOpen,
  ShieldCheck,
};

export function MethodSection() {
  return (
    <section
      className="cfige-section bg-white border-b border-gray-200"
      aria-labelledby="method-title"
    >
      <div className="cfige-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
            NOTRE MÉTHODE
          </p>
          <h2
            id="method-title"
            className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900"
          >
            Comment nous travaillons
          </h2>
          <span className="mx-auto mt-3 block h-1 w-10 rounded-full bg-primary" />
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {methods.map((m) => {
            const Icon = methodIcons[m.icon] || UserRoundCheck;
            return (
              <article
                key={m.number}
                className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-7 pt-8 shadow-cfige-sm transition-all duration-300 hover:border-primary hover:shadow-cfige-md hover:-translate-y-1"
              >
                {/* Floating number badge */}
                <span
                  className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-sm ring-4 ring-white"
                  aria-hidden="true"
                >
                  {m.number}
                </span>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary mb-5">
                  <Icon className="h-6 w-6" strokeWidth={1.9} />
                </div>

                <h3 className="text-lg font-bold tracking-tight text-gray-900">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {m.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
