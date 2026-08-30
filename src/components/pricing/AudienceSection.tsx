import { GraduationCap, Briefcase, Building2 } from "lucide-react";
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
    <section className="cfige-section bg-gray-50 border-b border-gray-200" aria-labelledby="audience-title">
      <div className="cfige-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
            PROFILES &amp; CIBLES
          </p>
          <h2 id="audience-title" className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            Tarification adaptée par Public
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Des grilles transparentes et modulables selon votre statut et vos besoins
          </p>
          <span className="mx-auto mt-3 block h-1 w-10 rounded-full bg-primary" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <AudiencePricingCard
            title="Étudiants & Jeunes Diplômés"
            badge="-20% Tarif Étudiant"
            icon={<GraduationCap className="h-5 w-5" strokeWidth={1.9} />}
            rows={studentRows}
          />
          <AudiencePricingCard
            title="Professionnels & Salariés"
            badge="Standard Pro"
            icon={<Briefcase className="h-5 w-5" strokeWidth={1.9} />}
            rows={proRows}
          />
          <AudiencePricingCard
            title="PME, ONG &amp; Institutions"
            badge="Sur Mesure"
            icon={<Building2 className="h-5 w-5" strokeWidth={1.9} />}
            rows={orgRows}
          />
        </div>
      </div>
    </section>
  );
}
