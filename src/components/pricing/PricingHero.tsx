import Image from "next/image";

export function PricingHero() {
  return (
    <section
      className="relative pt-6 pb-12 overflow-hidden"
      aria-labelledby="pricing-hero-title"
    >
      <div className="container-site">
        <div className="grid lg:grid-cols-[.92fr_1.25fr] lg:gap-8 md:gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
              TARIFS &amp; MODALITÉS —
            </p>
            <h1
              id="pricing-hero-title"
              className="mt-2 text-[36px] font-bold leading-[1.12] tracking-[-0.035em] text-white"
            >
              Investissez dans{" "}
              <span className="text-primary">votre avenir</span>
            </h1>
            <p className="mt-4 max-w-[335px] text-[11px] leading-[1.8] text-[#303B45]">
              Des formations de qualité à des tarifs compétitifs, adaptées à
              vos objectifs et à votre budget.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#FFF1F2] text-primary">
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-[11px] font-bold text-[#17212B]">
                    Qualité garantie
                  </p>
                  <p className="text-[9.5px] leading-[1.4] text-[#69737D]">
                    Formations certifiantes et reconnues
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#FFF1F2] text-primary">
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-[11px] font-bold text-[#17212B]">
                    Tarifs compétitifs
                  </p>
                  <p className="text-[9.5px] leading-[1.4] text-[#69737D]">
                    Des prix justes et accessibles
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#FFF1F2] text-primary">
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-[11px] font-bold text-[#17212B]">
                    Modalités flexibles
                  </p>
                  <p className="text-[9.5px] leading-[1.4] text-[#69737D]">
                    Paiement échelonné possible
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#FFF1F2] text-primary">
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-[11px] font-bold text-[#17212B]">
                    Accompagnement
                  </p>
                  <p className="text-[9.5px] leading-[1.4] text-[#69737D]">
                    Support avant, pendant et après
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/apropos/apropos.png"
              alt="Bâtiment du CFIGE à N'Djaména"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 540px"
            />
            <div className="absolute inset-0 bg-black/30 z-10 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}