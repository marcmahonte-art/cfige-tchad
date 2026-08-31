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
                ACCÉLÉRATEUR DE PERFORMANCE &amp; DE TRANSFORMATION
              </span>
              <span className="h-0.5 w-6 bg-primary" />
            </div>
            <h1
              id="about-hero-title"
              className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-gray-900"
            >
              Former les talents. <br />
              <span className="text-primary">Transformer les organisations.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-600 max-w-xl">
              Au croisement des enjeux académiques et des réalités professionnelles, <span className="font-semibold text-gray-900">LE CFIGE</span> accompagne les ambitions des étudiants, des PME, des ONG et des administrations au Tchad et en Afrique centrale.
            </p>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-600 max-w-xl">
              Nous combinons rigueur fiscale, excellence managériale et solutions technologiques innovantes afin de transformer vos défis quotidiens en véritables leviers de croissance.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary-light px-3.5 py-1.5 text-xs font-bold text-primary">
              <span>CONSEIL</span>
              <span>•</span>
              <span>FORMATION</span>
              <span>•</span>
              <span>DIGITAL</span>
              <span>•</span>
              <span>EXTERNALISATION</span>
            </div>
          </div>

            <div className="flex justify-center items-center py-4 lg:py-0">
              <div className="relative w-full max-w-[360px] sm:max-w-[420px] flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Logo officiel CFIGE"
                  width={450}
                  height={350}
                  priority
                  className="w-full h-auto max-h-[320px] object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
