import { Users, BookOpen, ClipboardCheck, Award, CheckCircle2 } from "lucide-react";

const chips = [
  "Étudiants",
  "Jeunes diplômés",
  "Demandeurs d'emploi",
  "Salariés & Cadres",
  "Entrepreneurs",
  "Entreprises & PME",
  "ONG & Projets",
  "Institutions publiques",
];

const sections = [
  {
    title: "Formats d'enseignement",
    icon: <Users className="h-6 w-6" strokeWidth={1.8} />,
    items: [
      "Formation en présentiel en groupe restreint",
      "Cours particuliers et coaching individuel",
      "Formation intra-entreprise sur site ou dédiée",
      "Séminaires intensifs et ateliers pratiques",
      "Parcours hybrides et classes virtuelles",
    ],
  },
  {
    title: "Méthodes pédagogiques",
    icon: <BookOpen className="h-6 w-6" strokeWidth={1.8} />,
    items: [
      "70 % de pratique immédiate sur cas réels tchadiens",
      "Démonstrations interactives et mises en situation",
      "Études de cas métier et résolutions de problèmes",
      "Projets d'application concrets en conditions réelles",
      "Accompagnement et tutorat individualisé",
    ],
  },
  {
    title: "Évaluation & validation",
    icon: <ClipboardCheck className="h-6 w-6" strokeWidth={1.8} />,
    items: [
      "Test de positionnement initial avant démarrage",
      "Contrôle continu et travaux pratiques évalués",
      "Soutenance de projet final devant jury métier",
      "Validation assiduité (minimum 85 % de présence requise)",
    ],
  },
  {
    title: "Attestations & certifications",
    icon: <Award className="h-6 w-6" strokeWidth={1.8} />,
    items: [
      "Attestation officielle de fin de formation",
      "Certificat de compétences professionnelles CFIGE",
      "Préparation et passage de certifications internationales",
      "Reconnaissance auprès des recruteurs et partenaires",
    ],
  },
];

export function TrainingModalities() {
  return (
    <section className="cfige-section bg-white border-b border-gray-200" aria-labelledby="modalities-title">
      <div className="cfige-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
            ORGANISATION &amp; PÉDAGOGIE
          </p>
          <h2 id="modalities-title" className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            Modalités et Cadre d&apos;Apprentissage
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Des formats flexibles et une méthodologie axée sur l&apos;acquisition rapide de compétences opérationnelles
          </p>
          <span className="mx-auto mt-3 block h-1 w-10 rounded-full bg-primary" />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:border-primary hover:text-primary hover:bg-primary-light"
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <div
              key={section.title}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-cfige-sm transition-all duration-300 hover:border-primary hover:shadow-cfige-md"
            >
              <div className="mb-5 flex items-center gap-3.5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                  {section.icon}
                </span>
                <h3 className="text-lg font-bold text-gray-900 leading-snug">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
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
