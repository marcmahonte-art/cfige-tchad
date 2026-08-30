import { Card } from "@/components/ui/card";
import { Stats } from "@/components/home/Stats";

export function HistorySection() {
  return (
    <section className="cfige-section bg-white" aria-labelledby="history-title">
      <div className="container-site">
        <div className="grid lg:grid-cols-[.72fr_1.28fr] lg:gap-7 md:gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
              NOTRE HISTOIRE —
            </p>
            <h2 id="history-title" className="mt-3 text-[25px] font-bold leading-[31px] text-gray-900">
              De la vision à la réalité
            </h2>
            <p className="mt-4 text-[10.5px] leading-[18px] text-gray-500">
              Fort de plusieurs années d'expérience dans la formation professionnelle,
              le CFIGE s'est imposé comme un acteur incontournable du développement
              des compétences au Tchad. Notre parcours est marqué par un engagement
              constant envers l'excellence éducative et l'accessibilité.
            </p>
            <p className="mt-6 text-[10.5px] leading-[18px] text-gray-500">
              De nos débuts modestes à notre position actuelle, nous avons constamment
              élargi notre offre de formations pour répondre aux besoins croissants
              des étudiants, des professionnels et des entreprises du secteur privé
              et public à travers le Tchad.
            </p>
          </div>

          <Stats />
        </div>
      </div>
    </section>
  );
}