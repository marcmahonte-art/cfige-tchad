import { Users, Briefcase, Building2 } from "lucide-react";
import { AudiencePricingCard } from "./AudiencePricingCard";

const studentRows = [
  { label: "Express", price: "25 000 – 75 000" },
  { label: "Intensif", price: "50 000 – 150 000" },
  { label: "Professional", price: "100 000 – 400 000" },
];

const proRows = [
  { label: "Express", price: "50 000 – 150 000" },
  { label: "Intensif", price: "100 000 – 300 000" },
  { label: "Professional", price: "250 000 – 700 000" },
];

const orgRows = [
  { label: "Intensif", price: "250 000 – 700 000" },
  { label: "Professional", price: "400 000 – 1 200 000" },
  { label: "Executive Certification", price: "800 000 – 3 000 000+" },
];

export function AudienceSection() {
  return (
    <section className="cfige-section bg-white" aria-labelledby="audience-title">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
            CIBLES —
          </p>
          <h2 id="audience-title" className="mt-3 text-[28px] font-bold tracking-[-0.025em] text-[#17212B]">
            Tarification par Cible
          </h2>
          <p className="mt-3 text-[13px] leading-[1.6] text-[#69737D]">
            Un tarif adapté à votre profil
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <AudiencePricingCard
            title="Étudiants & Jeunes Diplômés"
            icon={<Users className="h-5 w-5" strokeWidth={1.8} />}
            rows={studentRows}
          />
          <AudiencePricingCard
            title="Professionnels & Salariés"
            icon={<Briefcase className="h-5 w-5" strokeWidth={1.8} />}
            rows={proRows}
          />
          <AudiencePricingCard
            title="PME / ONG / Institutions"
            icon={<Building2 className="h-5 w-5" strokeWidth={1.8} />}
            rows={orgRows}
          />
        </div>
      </div>
    </section>
  );
}