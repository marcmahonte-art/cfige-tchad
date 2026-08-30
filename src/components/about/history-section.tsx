import { UsersRound, GraduationCap, CalendarDays, Star } from "lucide-react";
import { stats } from "@/data/about";

const statIcons: Record<string, React.ElementType> = {
  UsersRound,
  GraduationCap,
  CalendarDays,
  Star,
};

export function HistorySection() {
  return (
    <section className="cfige-section bg-white border-b border-gray-200" aria-labelledby="history-title">
      <div className="cfige-container">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
                NOTRE HISTOIRE
              </span>
              <span className="h-0.5 w-6 bg-primary" />
            </div>
            <h2
              id="history-title"
              className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900"
            >
              De la vision à la réalité
            </h2>
            <div className="mt-5 space-y-4 text-sm sm:text-base leading-relaxed text-gray-600">
              <p>
                Fort de plusieurs années d'expérience dans la formation professionnelle,
                le CFIGE s'est imposé comme un acteur incontournable du développement
                des compétences au Tchad. Notre parcours est marqué par un engagement
                constant envers l'excellence éducative et l'accessibilité.
              </p>
              <p>
                De nos débuts modestes à notre position actuelle, nous avons constamment
                élargi notre offre de formations pour répondre aux besoins croissants
                des étudiants, des professionnels et des entreprises du secteur privé
                et public à travers le Tchad.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => {
              const Icon = statIcons[s.icon] || Star;
              return (
                <div
                  key={s.label}
                  className="flex flex-col items-center justify-center p-5 rounded-2xl border border-gray-200 bg-white shadow-cfige-sm text-center transition-all duration-300 hover:border-primary hover:shadow-cfige-md hover:-translate-y-0.5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary mb-3">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                    {s.value}
                  </span>
                  <span className="mt-2 text-xs sm:text-sm font-medium leading-snug text-gray-500">
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
