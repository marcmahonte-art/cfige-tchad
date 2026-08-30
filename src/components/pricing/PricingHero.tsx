import Image from "next/image";
import { ShieldCheck, BadgePercent, CalendarCheck, Headphones } from "lucide-react";

export function PricingHero() {
  return (
    <section
      className="relative bg-white py-12 sm:py-16 lg:py-20 border-b border-gray-200 overflow-hidden"
      aria-labelledby="pricing-hero-title"
    >
      <div className="cfige-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-14 items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
                TARIFS &amp; MODALITÉS
              </span>
              <span className="h-0.5 w-6 bg-primary" />
            </div>
            <h1
              id="pricing-hero-title"
              className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-gray-900"
            >
              Investissez dans{" "}
              <span className="text-primary">votre avenir</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-600 max-w-xl">
              Des formations de haute qualité à des tarifs compétitifs, adaptées à vos objectifs de carrière et à votre budget.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-gray-100 bg-gray-50/70">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Qualité garantie
                  </p>
                  <p className="text-xs text-gray-500 leading-normal mt-0.5">
                    Formations certifiantes reconnues
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-gray-100 bg-gray-50/70">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                  <BadgePercent className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Tarifs compétitifs
                  </p>
                  <p className="text-xs text-gray-500 leading-normal mt-0.5">
                    Des prix justes et transparents
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-gray-100 bg-gray-50/70">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                  <CalendarCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Modalités flexibles
                  </p>
                  <p className="text-xs text-gray-500 leading-normal mt-0.5">
                    Paiement échelonné possible
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-gray-100 bg-gray-50/70">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                  <Headphones className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Accompagnement
                  </p>
                  <p className="text-xs text-gray-500 leading-normal mt-0.5">
                    Support continu et personnalisé
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[300px] sm:h-[360px] lg:h-[400px] w-full rounded-2xl overflow-hidden border border-gray-200 shadow-cfige-sm bg-gray-50">
            <Image
              src="/images/apropos/apropos.png"
              alt="Locaux et apprenants du CFIGE"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
