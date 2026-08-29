import Image from "next/image";
import { site } from "@/data/site";

const formationsLinks = [
  "Toutes les formations",
  "Informatique",
  "Développement Web",
  "Comptabilité",
  "Gestion",
];
const servicesLinks = [
  "Développement Web",
  "Logiciels",
  "Applications",
  "Maintenance",
  "Transformation digitale",
  "Conseil",
];
const cfigeLinks = [
  { label: "À propos", href: "/#apropos" },
  { label: "Équipe", href: "/#apropos" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="cfige-container py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* CFIGE */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo-white.png"
              alt={`${site.name} — ${site.fullName}`}
              width={120}
              height={36}
              className="h-9 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
              {site.fullName}. Formations professionnelles, solutions numériques
              et conseil à {site.city}, {site.country}.
            </p>
          </div>

          {/* FORMATIONS */}
          <nav aria-label="Formations">
            <h2 className="text-xs font-bold uppercase tracking-wide text-white">
              Formations
            </h2>
            <ul className="mt-4 space-y-2.5">
              {formationsLinks.map((label) => (
                <li key={label}>
                  <a
                    href="/formations"
                    className="text-sm leading-6 text-gray-400 transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* SERVICES */}
          <nav aria-label="Services">
            <h2 className="text-xs font-bold uppercase tracking-wide text-white">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5">
              {servicesLinks.map((label) => (
                <li key={label}>
                  <a
                    href="/services"
                    className="text-sm leading-6 text-gray-400 transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CFIGE */}
          <nav aria-label="CFIGE">
            <h2 className="text-xs font-bold uppercase tracking-wide text-white">
              CFIGE
            </h2>
            <ul className="mt-4 space-y-2.5">
              {cfigeLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm leading-6 text-gray-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CONTACT */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wide text-white">
              Contact
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm leading-6 text-gray-400">
              <li>
                <a href={`tel:${site.phones[0].replace(/\s/g, "")}`} className="hover:text-white">
                  {site.phones[0]}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phones[1].replace(/\s/g, "")}`} className="hover:text-white">
                  {site.phones[1]}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li>{site.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-5">
          <div className="flex flex-col items-start justify-between gap-3 text-xs text-gray-400 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} CFIGE Tchad. Tous droits réservés.</p>
            <div className="flex gap-5">
              <a href="#" className="hover:text-white">
                Mentions légales
              </a>
              <a href="#" className="hover:text-white">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
