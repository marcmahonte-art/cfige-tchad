import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";
import { team } from "@/data/about";

export function TeamSection() {
  return (
    <section
      className="cfige-section bg-[#192A37]"
      aria-labelledby="team-title"
    >
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-white">
            LES PERSONNES DERRIÈRE LE CFIGE
          </p>
          <h2
            id="team-title"
            className="mt-3 text-[27px] font-bold leading-[33px] text-center text-white"
          >
            Notre équipe
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((m) => (
            <article
              key={m.name}
              className="group relative rounded-[8px_8px_0_0] border border-[#EEF0F2] bg-white overflow-hidden"
            >
              <Image
                src={m.image}
                alt={m.name}
                fill
                className="object-cover object-top border-t border-[#EEF0F2] h-[155px]"
                sizes="100vw"
              />
              <div className="p-[12px_13px_14px] text-center text-sm">
                <span className="block font-bold text-[15px] text-[#17212B] mb-[5px]">
                  {m.name}
                </span>
                <span className="text-[13px] font-bold text-[#E10B1A] mb-[3px]">
                  {m.role}
                </span>
                <p className="text-[13px] leading-[16px] text-center text-[#4F5861]">
                  {m.bio}
                </p>
                <div className="mt-4 flex justify-center space-x-3">
                  <a
                    href={m.linkedin}
                    aria-label={`LinkedIn de ${m.name}`}
                    className="w-8 h-8 rounded-full bg-[#F5F6F7] flex items-center justify-center"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-gray-500" />
                  </a>
                  <a
                    href={`mailto:${m.email}`}
                    aria-label={`Email de ${m.name}`}
                    className="w-8 h-8 rounded-full bg-[#F5F6F7] flex items-center justify-center"
                  >
                    <Mail className="w-3.5 h-3.5 text-gray-500" />
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
