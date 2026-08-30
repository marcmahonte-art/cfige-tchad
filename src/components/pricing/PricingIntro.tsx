import { BookOpen, Sparkles } from "lucide-react";

export function PricingIntro() {
  return (
    <section className="cfige-section bg-gray-50 border-b border-gray-200" aria-labelledby="pricing-intro-title">
      <div className="cfige-container">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 lg:p-10 shadow-cfige-sm">
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-light text-primary">
              <BookOpen className="h-7 w-7" strokeWidth={1.8} />
            </span>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
                  TRANSPARENCE &amp; ACCESSIBILITÉ
                </span>
              </div>
              <h2
                id="pricing-intro-title"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900"
              >
                Politique d&apos;investissement Formation CFIGE
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Le CFIGE adopte une politique tarifaire équilibrée et compétitive visant à rendre les formations professionnelles d&apos;excellence accessibles à tous, tout en garantissant des conditions d&apos;apprentissage de standard international.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 bg-gray-50 p-3 rounded-xl border border-gray-200">
                <Sparkles className="h-4 w-4 text-primary shrink-0" />
                <span>
                  Les montants indiqués représentent des fourchettes d&apos;investissement indicatives ajustables selon le niveau, la durée, le format et les besoins sur mesure.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
