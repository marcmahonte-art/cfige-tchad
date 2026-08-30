import { GraduationCap, Users, Handshake, Percent } from "lucide-react";

export function DiscountSection() {
  return (
    <section className="cfige-section bg-white border-b border-gray-200" aria-labelledby="discount-title">
      <div className="cfige-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
            AVANTAGES &amp; REMISES
          </p>
          <h2 id="discount-title" className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            Politique de Remises et Réductions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Des avantages tarifaires pour encourager la formation continue et collective
          </p>
          <span className="mx-auto mt-3 block h-1 w-10 rounded-full bg-primary" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Étudiants */}
          <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-cfige-sm transition-all duration-300 hover:border-primary hover:shadow-cfige-md hover:-translate-y-1">
            <div className="flex items-center gap-3.5 mb-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                <GraduationCap className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Étudiants</h3>
                <span className="text-xs text-gray-500 font-medium">Sur justificatif scolaire</span>
              </div>
            </div>
            <div className="my-auto py-4">
              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl font-extrabold text-primary tracking-tight">10 % à 20 %</span>
                <span className="text-xs font-bold text-gray-500">de remise</span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                Applicable sur présentation d&apos;une carte d&apos;étudiant valide pour l&apos;année académique en cours.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 text-xs font-semibold text-primary">
              ✓ Valable sur les parcours Express et Intensif
            </div>
          </div>

          {/* Groupes */}
          <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-cfige-sm transition-all duration-300 hover:border-primary hover:shadow-cfige-md hover:-translate-y-1">
            <div className="flex items-center gap-3.5 mb-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                <Users className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Inscriptions en Groupe</h3>
                <span className="text-xs text-gray-500 font-medium">Pour équipes et collectifs</span>
              </div>
            </div>
            <div className="divide-y divide-gray-100 flex-grow my-2">
              {[
                { qty: "3 à 5 personnes", rate: "5 % de réduction" },
                { qty: "6 à 10 personnes", rate: "10 % de réduction" },
                { qty: "11 à 20 personnes", rate: "15 % de réduction" },
                { qty: "+20 personnes", rate: "Tarif conventionné" },
              ].map((row) => (
                <div key={row.qty} className="flex items-center justify-between py-2.5">
                  <span className="text-xs sm:text-sm font-medium text-gray-700">{row.qty}</span>
                  <span className="text-xs sm:text-sm font-bold text-primary">{row.rate}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 text-xs font-semibold text-primary">
              ✓ Facturation unique entreprise ou individuel
            </div>
          </div>

          {/* Partenaires */}
          <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-cfige-sm transition-all duration-300 hover:border-primary hover:shadow-cfige-md hover:-translate-y-1">
            <div className="flex items-center gap-3.5 mb-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                <Handshake className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Partenaires Institutionnels</h3>
                <span className="text-xs text-gray-500 font-medium">ONG &amp; Entreprises partenaires</span>
              </div>
            </div>
            <div className="my-auto py-4">
              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl font-extrabold text-primary tracking-tight">10 % à 30 %</span>
                <span className="text-xs font-bold text-gray-500">de remise</span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                Conditions préférentielles modulées selon le volume annuel d&apos;apprenants et la convention cadre de partenariat.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 text-xs font-semibold text-primary">
              ✓ Convention de partenariat annuelle
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
