import { FormatPriceCard } from "./FormatPriceCard";

export function FormatSection() {
  return (
    <section className="cfige-section bg-white" aria-labelledby="format-title">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
            FORMATS —
          </p>
          <h2 id="format-title" className="mt-3 text-[28px] font-bold tracking-[-0.025em] text-[#17212B]">
            Fourchettes d&apos;Investissement par Format
          </h2>
          <p className="mt-3 text-[13px] leading-[1.6] text-[#69737D]">
            Quatre parcours, quatre niveaux d&apos;engagement
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <FormatPriceCard
            number="01"
            name="Express"
            duration="3 h à 4 semaines"
            price="25 000 – 150 000"
          />
          <FormatPriceCard
            number="02"
            name="Intensif"
            duration="4 à 8 semaines"
            price="75 000 – 350 000"
          />
          <FormatPriceCard
            number="03"
            name="Professional"
            duration="1 à 6 mois"
            price="150 000 – 800 000"
            recommended
          />
          <FormatPriceCard
            number="04"
            name="Executive Certification"
            duration="6 à 12 mois"
            price="400 000 – 2 000 000+"
          />
        </div>
      </div>
    </section>
  );
}