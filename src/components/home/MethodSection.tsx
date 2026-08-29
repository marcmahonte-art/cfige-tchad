const steps = [
  {
    n: "01",
    title: "Analyse",
    description: "Évaluation de vos besoins et cadrage du projet.",
  },
  {
    n: "02",
    title: "Accompagnement",
    description: "Un accompagnement sur mesure, proche de vos réalités.",
  },
  {
    n: "03",
    title: "Formation / Conception",
    description: "Formation pratique ou conception de la solution.",
  },
  {
    n: "04",
    title: "Déploiement",
    description: "Mise en œuvre et livraison dans les conditions réelles.",
  },
  {
    n: "05",
    title: "Suivi",
    description: "Suivi et ajustements pour garantir la réussite.",
  },
];

export function MethodSection() {
  return (
    <section className="cfige-section bg-white" aria-labelledby="method-title">
      <div className="cfige-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
            Notre méthode
          </p>
          <h2
            id="method-title"
            className="mt-3 text-[30px] font-bold leading-[38px] text-gray-900 md:text-[40px] md:leading-[48px]"
          >
            Une approche en 5 étapes
          </h2>
        </div>

        <div className="relative mt-14">
          {/* Ligne horizontale derrière les numéros (desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-0.5 bg-gray-200 lg:block"
          />
          <ol className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            {steps.map((s) => (
              <li
                key={s.n}
                className="relative flex flex-col items-center text-center"
              >
                <span
                  className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-base font-bold text-white"
                  aria-hidden="true"
                >
                  {s.n}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {s.title}
                </h3>
                <p className="mt-1.5 max-w-[200px] text-sm leading-5 text-gray-600">
                  {s.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
