import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";
import { team } from "@/data/about";

export function TeamSection() {
  return (
    <section
      className="cfige-section bg-gray-50 border-b border-gray-200"
      aria-labelledby="team-title"
    >
      <div className="cfige-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
            LES PERSONNES DERRIÈRE LE CFIGE
          </p>
          <h2
            id="team-title"
            className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900"
          >
            Notre équipe
          </h2>
          <span className="mx-auto mt-3 block h-1 w-10 rounded-full bg-primary" />
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <article
              key={m.name}
              className="group flex flex-col rounded-2xl border border-gray-200 bg-white shadow-cfige-sm overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-cfige-lg hover:-translate-y-1"
            >
              {/* Photo */}
              <div className="relative h-[220px] w-full bg-gray-100 overflow-hidden border-b border-gray-200">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Contenu */}
              <div className="p-5 flex flex-col flex-grow text-center">
                <h3 className="text-base font-bold leading-snug text-gray-900">
                  {m.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-primary mt-1">
                  {m.role}
                </p>
                {m.subtitle && (
                  <p className="text-xs font-medium text-gray-500 mt-1 leading-snug">
                    {m.subtitle}
                  </p>
                )}
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-gray-600 flex-grow">
                  {m.bio}
                </p>

                {/* Social & Contact */}
                <div className="mt-5 pt-4 border-t border-gray-100 flex justify-center space-x-3">
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Profil LinkedIn de ${m.name}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-primary-light hover:text-primary"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${m.email}`}
                    aria-label={`Envoyer un email à ${m.name}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-primary-light hover:text-primary"
                  >
                    <Mail className="h-4 w-4" />
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
