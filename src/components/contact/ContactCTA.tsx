import { GraduationCap, ArrowRight, MessageCircle } from "lucide-react";
import { site } from "@/data/site";

export function ContactCTA() {
  const digits = site.whatsappNumber.replace(/[^0-9]/g, "");
  const whatsappHref = `https://wa.me/${digits}?text=${encodeURIComponent(
    "Bonjour CFIGE, je souhaite démarrer un projet / une formation."
  )}`;

  return (
    <section className="py-12 bg-white" aria-labelledby="contact-cta-title">
      <div className="cfige-container">
        <div className="relative overflow-hidden rounded-3xl bg-primary text-white p-8 sm:p-10 lg:p-12 shadow-cfige-lg">
          {/* Subtle watermark illustration */}
          <div className="pointer-events-none absolute -right-6 -bottom-6 text-white/10">
            <GraduationCap className="h-44 w-44 sm:h-56 sm:w-56" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h2
                id="contact-cta-title"
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight"
              >
                Prêt à démarrer votre projet avec CFIGE ?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/90 max-w-xl leading-relaxed">
                Contactez-nous dès aujourd&apos;hui et construisons ensemble votre réussite professionnelle.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center shrink-0">
              <a
                href="#message-form"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 text-sm sm:text-base font-bold text-primary shadow-cfige-md transition-all duration-200 hover:bg-gray-100 hover:shadow-cfige-lg active:translate-y-px"
              >
                <span>Nous contacter</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-7 text-sm sm:text-base font-bold text-white shadow-cfige-md transition-all duration-200 hover:bg-[#20bd5a] hover:shadow-cfige-lg active:translate-y-px"
              >
                <MessageCircle className="h-5 w-5 fill-current" />
                <span>WhatsApp</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
