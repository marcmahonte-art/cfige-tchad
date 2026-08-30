import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";
import { team } from "@/data/about";

export function TeamSection() {
  return (
    <section
      className="cfige-section bg-[#FAFAFB] py-14 lg:py-20 border-b border-[#ECEEF0]"
      aria-labelledby="team-title"
    >
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#E30613]">
            LES PERSONNES DERRIÈRE LE CFIGE
          </p>
          <h2
            id="team-title"
            className="mt-2 text-2xl sm:text-[28px] font-bold leading-[34px] tracking-[-0.025em] text-[#17212B]"
          >
            Notre équipe
          </h2>
          <span className="mx-auto mt-3 block h-0.5 w-8 rounded-full bg-[#E30613]" />
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {team.map((m) => (
            <article
              key={m.name}
              className="group flex flex-col rounded-xl border border-[#ECEEF0] bg-white shadow-[0_3px_14px_rgba(17,30,42,0.035)] overflow-hidden transition-all duration-300 hover:border-red-200 hover:shadow-[0_12px_28px_rgba(17,30,42,0.08)] hover:-translate-y-1"
            >
              {/* Photo */}
              <div className="relative h-[200px] w-full bg-[#F1F2F3] overflow-hidden border-b border-[#ECEEF0]">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Contenu */}
              <div className="p-4 sm:p-5 flex flex-col flex-grow text-center">
                <h3 className="text-[15px] font-bold leading-tight text-[#17212B]">
                  {m.name}
                </h3>
                <p className="text-[12px] font-bold text-[#E30613] mt-1">
                  {m.role}
                </p>
                {m.subtitle && (
                  <p className="text-[11px] font-semibold text-[#69737D] mt-1 leading-snug">
                    {m.subtitle}
                  </p>
                )}
                <p className="mt-3 text-[11.5px] leading-[1.6] text-[#414A53] flex-grow">
                  {m.bio}
                </p>

                {/* Social & Contact */}
                <div className="mt-4 pt-3 border-t border-[#F1F2F4] flex justify-center space-x-2">
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Profil LinkedIn de ${m.name}`}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5F6F7] text-[#626A73] transition-colors hover:bg-[#FFF1F2] hover:text-[#E30613]"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={`mailto:${m.email}`}
                    aria-label={`Envoyer un email à ${m.name}`}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5F6F7] text-[#626A73] transition-colors hover:bg-[#FFF1F2] hover:text-[#E30613]"
                  >
                    <Mail className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
