import Image from "next/image";

export function AboutHero() {
  return (
    <section
      className="relative bg-white py-12 sm:py-16 lg:py-20 border-b border-gray-200 overflow-hidden"
      aria-labelledby="about-hero-title"
    >
      <div className="cfige-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-14 items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
                À PROPOS
              </span>
              <span className="h-0.5 w-6 bg-primary" />
            </div>
            <h1
              id="about-hero-title"
              className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-gray-900"
            >
              Qui <span className="text-primary">sommes-nous ?</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-600 max-w-xl">
              CFIGE (Centre de Formation Informatique et de Gestion) accompagne
              étudiants, professionnels, entreprises et organisations dans le
              développement de compétences pratiques, numériques et managériales
              adaptées aux exigences du marché.
            </p>
          </div>

          <div className="relative h-[280px] sm:h-[340px] lg:h-[380px] w-full rounded-2xl overflow-hidden border border-gray-200 shadow-cfige-sm bg-gray-50">
            <Image
              src="/images/apropos/apropos.png"
              alt="CFIGE campus et apprenants"
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
