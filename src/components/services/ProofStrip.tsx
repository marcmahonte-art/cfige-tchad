import {
  Presentation,
  Award,
  ChartNoAxesCombined,
  Headphones,
} from "lucide-react";

const proof = [
  { icon: Presentation, label: "Formateurs Qualifiés" },
  { icon: Award, label: "Formations Certifiées" },
  { icon: ChartNoAxesCombined, label: "Solutions Performantes" },
  { icon: Headphones, label: "Accompagnement Personnalisé" },
];

export function ProofStrip() {
  return (
    <div className="mt-10 flex flex-col gap-4 border-t border-[#EEF0F2] pt-6 sm:flex-row sm:items-center">
      {proof.map((p, i) => (
        <div
          key={p.label}
          className={[
            "flex items-center gap-2",
            i > 0
              ? "sm:ml-5 sm:border-l sm:border-[#E7E8EA] sm:pl-5"
              : "",
          ].join(" ")}
        >
          <p.icon className="h-6 w-6 text-primary" strokeWidth={1.8} />
          <span className="text-[13px] font-medium leading-tight text-gray-700">
            {p.label}
          </span>
        </div>
      ))}
    </div>
  );
}
