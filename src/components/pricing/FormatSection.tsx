import { FormatPriceCard } from "./FormatPriceCard";

export function FormatSection() {
  return (
    <section className="cfige-section bg-white border-b border-gray-200" aria-labelledby="format-title">
      <div className="cfige-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
            PARCOURS DE FORMATION
          </p>
          <h2 id="format-title" className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            Fourchettes d&apos;Investissement par Format
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Quatre parcours progressifs adaptés à votre rythme et à votre niveau d&apos;engagement
          </p>
          <span className="mx-auto mt-3 block h-1 w-10 rounded-full bg-primary" />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
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
