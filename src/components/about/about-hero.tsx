import Image from "next/image";

export function AboutHero() {
  return (
    <section
      className="relative bg-white pt-8 pb-12 lg:pt-12 lg:pb-16 overflow-hidden border-b border-[#ECEEF0]"
      aria-labelledby="about-hero-title"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#E30613]">
                À PROPOS
              </span>
              <span className="h-[2px] w-6 bg-[#E30613]" />
            </div>
            <h1
              id="about-hero-title"
              className="mt-3 text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[#17212B]"
            >
              Qui <span className="text-[#E30613]">sommes-nous ?</span>
            </h1>
            <p className="mt-5 text-[13px] sm:text-[14px] leading-[1.7] text-[#303B45] max-w-[480px]">
              CFIGE (Centre de Formation Informatique et de Gestion) accompagne
              étudiants, professionnels, entreprises et organisations dans le
              développement de compétences pratiques, numériques et managériales
              adaptées aux exigences du marché.
            </p>
          </div>

          <div className="relative h-[260px] sm:h-[320px] lg:h-[340px] w-full rounded-lg overflow-hidden border border-[#ECEEF0] shadow-sm bg-[#FAFAFB]">
            <Image
              src="/images/apropos/apropos.png"
              alt="CFIGE campus et apprenants"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 580px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
