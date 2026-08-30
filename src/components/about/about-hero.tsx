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

            <div className="flex justify-center items-center py-8">
              <Image
                src="/logo_cfige.png"
                alt="CFIGE logo"
                width={300}
                height={300}
                priority
                className="object-contain"
              />
            </div>
        </div>
      </div>
    </section>
  );
}
