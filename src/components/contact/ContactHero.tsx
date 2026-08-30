import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { site } from "@/data/site";

export function ContactHero() {
  const digits = site.whatsappNumber.replace(/[^0-9]/g, "");
  const whatsappHref = `https://wa.me/${digits}?text=${encodeURIComponent(
    "Bonjour CFIGE, je souhaite obtenir des informations."
  )}`;

  return (
    <section
      className="relative bg-white pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 border-b border-gray-200 overflow-hidden"
      aria-labelledby="contact-hero-title"
    >
      <div className="cfige-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
                CONTACTEZ-NOUS
              </span>
              <span className="h-0.5 w-6 bg-primary" />
            </div>

            <h1
              id="contact-hero-title"
              className="mt-3 text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.1] tracking-tight text-gray-900"
            >
              Parlons de <br className="hidden sm:inline" />
              <span className="text-primary">vos objectifs</span>
            </h1>

            <p className="mt-5 text-base leading-relaxed text-gray-600 max-w-xl">
              Une question ? Un besoin de formation, de conseil ou de solution numérique ? Notre équipe est à votre écoute pour vous accompagner et vous proposer la meilleure solution adaptée à vos besoins.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#message-form"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-7 text-sm font-bold text-white shadow-cfige-sm transition-all duration-200 hover:bg-primary-dark hover:shadow-cfige-md active:translate-y-px"
              >
                <span>Nous écrire</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-xl border border-gray-300 bg-white px-6 text-sm font-bold text-gray-800 shadow-cfige-sm transition-all duration-200 hover:border-[#25D366] hover:bg-gray-50 hover:text-[#25D366] active:translate-y-px"
              >
                <MessageCircle className="h-5 w-5 text-[#25D366] fill-[#25D366]/10" />
                <span>Discuter sur WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            {/* Forme circulaire / arc signature CFIGE */}
            <div className="relative h-[280px] sm:h-[340px] lg:h-[380px] w-full max-w-[480px] rounded-l-[120px] rounded-r-3xl sm:rounded-l-[160px] sm:rounded-r-3xl overflow-hidden border-4 sm:border-[6px] border-primary shadow-cfige-lg bg-gray-50">
              <Image
                src="/images/contact/contact.png"
                alt="Équipe CFIGE à votre écoute"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
