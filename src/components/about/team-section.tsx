import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";

const team = [
  {
    name: "Hassan",
    role: "Associé gérant",
    bio: "Fort de nombreuses années d'expérience dans la formation professionnelle au Tchad, Hassan pilote la stratégie globale du CFIGE.",
    image: "/images/apropos/equipe/associe_gerant_cfige_Hassan Ngarmbassa Ngargouleye.jpg",
  },
  {
    name: "Abel",
    role: "Fondateur",
    bio: "Abel a créé le CFIGE dans le but de proposer des formations de qualité accessible à tous les Tchadiens.",
    image: "/images/apropos/equipe/fondateur_cfige _MBATALBAYE ABEL.png",
  },
  {
    name: "Adore",
    role: "Directeur informatique",
    bio: "Adore supervise le développement des programmes numériques et s'assure de leur pertinence technologique.",
    image: "/images/apropos/equipe/informaticien_cfige_ADORE ADJITEBAYE RAKIDJON.png",
  },
  {
    name: "TOKMA",
    role: "Responsable des opérations",
    bio: "TOKMA assure le bon fonctionnement quotidien des formations et des partenariats industriels.",
    image: "/images/apropos/equipe/responsable_cfige_TOKMA ONDJE.jpg",
  },
];

export function TeamSection() {
  return (
    <section
      className="cfige-section bg-[#192A37]"
      aria-labelledby="team-title"
    >
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-white">LES PERSONNES DERRIÈRE LE CFIGE</p>
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
                className="object-cover object-top border-t border-[#EEF0F2] h-[121px]"
                sizes="100vw"
              />
              <div
                className="p-[12px_13px_14px] text-center text-sm"
              >
                <span
                  className="block font-bold text-[13px] text-[#17212B] mb-[5px]"
                >
                  {m.name}
                </span>
                <span
                  className="text-[10px] font-medium text-[#E10B1A] mb-[3px]"
                >
                  {m.role}
                </span>
                <p
                  className="text-[9.5px] leading-[16px] text-[#4F5861]"
                >
                  {m.bio}
                </p>
                <div className="mt-4 flex justify-center space-x-3">
                  <a
                    href="#"
                    className="w-6 h-6 rounded-full bg-[#F4F5F6] flex items-center justify-center"
                  >
                    <Linkedin className="w-4 h-4 text-gray-500" />
                  </a>
                  <a
                    href="#"
                    className="w-6 h-6 rounded-full bg-[#F4F5F6] flex items-center justify-center"
                  >
                    <Mail className="w-4 h-4 text-gray-500" />
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