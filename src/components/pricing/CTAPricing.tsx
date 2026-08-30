import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";

export function CTAPricing() {
  const digits = site.whatsappNumber.replace(/[^0-9]/g, "");
  const whatsappHref = `https://wa.me/${digits}?text=${encodeURIComponent(
    "Bonjour CFIGE, je souhaite obtenir des informations sur les tarifs et modalités d'inscription."
  )}`;

  return (
    <section
      className="cfige-section relative overflow-hidden bg-primary text-white"
      aria-labelledby="cta-pricing-title"
    >
      {/* Background subtle decoration */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

      <div className="cfige-container relative z-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.08em] text-white/80 bg-white/10 px-3 py-1 rounded-full mb-3">
              COMMENCEZ DÈS AUJOURD&apos;HUI
            </span>
            <h2
              id="cta-pricing-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight"
            >
              Prêt à booster vos compétences ?
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/90 max-w-2xl">
              Contactez nos conseillers pédagogiques dès aujourd&apos;hui pour choisir la formation adaptée et bénéficier d&apos;un devis ou d&apos;un plan de paiement personnalisé.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 sm:gap-4 items-stretch sm:items-center lg:items-stretch shrink-0">
            {/* Bouton Nous contacter */}
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 text-sm sm:text-base font-bold text-primary shadow-cfige-md transition-all duration-200 hover:bg-gray-100 hover:shadow-cfige-lg active:translate-y-px"
            >
              <span>Nous contacter</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            {/* Bouton WhatsApp avec vert WhatsApp officiel et logo SVG haute fidélité */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-7 text-sm sm:text-base font-bold text-white shadow-cfige-md transition-all duration-200 hover:bg-[#20bd5a] hover:shadow-cfige-lg active:translate-y-px"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current shrink-0"
                aria-hidden="true"
              >
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.156 5.329 5.485 0 12.026 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.001 6.54-5.33 11.868-11.871 11.868a11.9 11.9 0 01-5.703-1.446L.057 24zm6.597-3.742l.478-.296a9.916 9.916 0 003.056 1.116 9.62 9.62 0 009.72-9.64 9.583 9.583 0 00-2.816-6.784A9.607 9.607 0 0012.026 2.56 9.62 9.62 0 002.385 12.2a9.78 9.78 0 001.045 4.43l-.3.481 1.527.789zM16.793 14.6c-.223-.112-1.327-.655-1.533-.729-.206-.075-.356-.112-.505.113-.15.224-.578.729-.708.878-.131.15-.261.168-.487.056-.225-.112-.953-.351-1.815-1.119-.671-.596-1.124-1.333-1.255-1.558-.131-.225.013-.347.098-.46.101-.101.225-.262.337-.393.113-.131.15-.225.225-.375.075-.15.038-.281-.019-.394-.056-.112-.505-1.218-.692-1.669-.182-.438-.368-.381-.505-.388l-.43-.007a.837.837 0 00-.6.281c-.206.225-.787.77-.787 1.877 0 1.108.809 2.178.92 2.328.112.15 1.582 2.417 3.833 3.389.536.231 1.003.369 1.347.473.566.171 1.082.147 1.489.089.454-.064 1.327-.542 1.513-1.066.187-.524.187-.973.131-1.066-.056-.094-.206-.15-.43-.262z" />
              </svg>
              <span>Échanger sur WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
