import { Users, Briefcase, Building2, BookOpen, ClipboardCheck, Award } from "lucide-react";

const chips = [
  "Étudiants",
  "Jeunes diplômés",
  "Demandeurs d'emploi",
  "Salariés",
  "Entrepreneurs",
  "Entreprises",
  "ONG",
  "Institutions publiques et privées",
];

const sections = [
  {
    title: "Formats proposés",
    icon: <Users className="h-6 w-6" strokeWidth={1.8} />,
    items: [
      "Formation en groupe",
      "Formation individuelle",
      "Formation personnalisée sur mesure",
      "Formation en entreprise",
      "Coaching professionnel",
      "Séminaires et ateliers pratiques",
    ],
  },
  {
    title: "Méthodes pédagogiques",
    icon: <BookOpen className="h-6 w-6" strokeWidth={1.8} />,
    items: [
      "Exposés interactifs",
      "Démonstrations & travaux pratiques",
      "Études de cas",
      "Mises en situation",
      "Exercices individuels et collectifs",
      "Projets d'application",
      "Accompagnement personnalisé",
    ],
  },
  {
    title: "Évaluation & validation",
    icon: <ClipboardCheck className="h-6 w-6" strokeWidth={1.8} />,
    items: [
      "Test de positionnement",
      "Évaluations continues",
      "Exercices pratiques",
      "Projet d'application",
      "Évaluation finale",
      "Validation basée sur l'assiduité et la participation",
    ],
  },
  {
    title: "Attestations & certificats",
    icon: <Award className="h-6 w-6" strokeWidth={1.8} />,
    items: [
      "Attestation de participation",
      "Certificat de compétences",
      "Critères de présence et de validation",
      "Certification selon les exigences du programme",
    ],
  },
];

export function TrainingModalities() {
  return (
    <section className="cfige-section bg-white" aria-labelledby="modalities-title">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
            MODALITÉS —
          </p>
          <h2 id="modalities-title" className="mt-3 text-[28px] font-bold tracking-[-0.025em] text-[#17212B]">
            Modalités de formation
          </h2>
          <p className="mt-3 text-[13px] leading-[1.6] text-[#69737D]">
            Des formats adaptés aux particuliers comme aux organisations.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center rounded-full border border-[#E9ECEF] px-4 py-2 text-[12px] font-medium text-[#303A43] transition-colors hover:border-primary hover:text-primary"
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-[10px] border border-[#E9ECEF] bg-white p-6 shadow-[0_3px_14px_rgba(17,30,42,.035)]"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF1F2] text-primary">
                  {section.icon}
                </span>
                <h3 className="text-[16px] font-bold leading-5 text-[#17212B]">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] leading-[1.5] text-[#303A43]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}