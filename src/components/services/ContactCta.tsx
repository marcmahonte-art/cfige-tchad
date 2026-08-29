import { GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactCta() {
  return (
    <section
      className="cfige-section bg-[#FDFDFE]"
      aria-labelledby="contact-cta-title"
    >
      <div className="cfige-container">
        <div className="relative overflow-hidden rounded-[9px] bg-[linear-gradient(105deg,#C90717_0%,#E20D20_45%,#C90818_100%)] px-6 py-8 md:px-10 md:py-10">
          <GraduationCap
            className="pointer-events-none absolute left-6 top-1/2 h-16 w-16 -translate-y-1/2 text-white opacity-[0.18]"
            aria-hidden="true"
          />
          <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-[560px] md:pl-16">
              <h2
                id="contact-cta-title"
                className="text-[18px] font-bold leading-6 text-white"
              >
                Un projet numérique ou de formation ?
              </h2>
              <p className="mt-2 text-[13px] leading-[18px] text-white/90">
                Notre équipe vous accompagne dans vos projets technologiques, de
                la conception au déploiement.
              </p>
            </div>
            <Button
              asChild
              className="shrink-0 bg-white text-primary hover:bg-white/90"
            >
              <a href="#contact">
                Nous contacter
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
