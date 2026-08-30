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
    <section className="cfige-section bg-white py-12 lg:py-16 border-b border-[#ECEEF0]" aria-labelledby="history-title">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-10 items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#E30613]">
                NOTRE HISTOIRE
              </span>
              <span className="h-[2px] w-6 bg-[#E30613]" />
            </div>
            <h2
              id="history-title"
              className="mt-3 text-2xl sm:text-[28px] font-bold leading-[34px] tracking-[-0.025em] text-[#17212B]"
            >
              De la vision à la réalité
            </h2>
            <p className="mt-4 text-[12.5px] sm:text-[13px] leading-[1.7] text-[#434C55]">
              Fort de plusieurs années d'expérience dans la formation professionnelle,
              le CFIGE s'est imposé comme un acteur incontournable du développement
              des compétences au Tchad. Notre parcours est marqué par un engagement
              constant envers l'excellence éducative et l'accessibilité.
            </p>
            <p className="mt-4 text-[12.5px] sm:text-[13px] leading-[1.7] text-[#434C55]">
              De nos débuts modestes à notre position actuelle, nous avons constamment
              élargi notre offre de formations pour répondre aux besoins croissants
              des étudiants, des professionnels et des entreprises du secteur privé
              et public à travers le Tchad.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((s) => {
              const Icon = statIcons[s.icon] || Star;
              return (
                <div
                  key={s.label}
                  className="flex flex-col items-center justify-center p-4 rounded-xl border border-[#ECEEF0] bg-white shadow-[0_3px_14px_rgba(17,30,42,0.035)] text-center transition-transform hover:-translate-y-0.5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF1F2] text-[#E30613] mb-3">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span className="text-[26px] sm:text-[28px] font-extrabold leading-none text-[#17212B]">
                    {s.value}
                  </span>
                  <span className="mt-2 text-[11px] font-medium leading-tight text-[#626A73]">
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
