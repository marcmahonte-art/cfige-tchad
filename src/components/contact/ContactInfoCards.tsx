import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { site } from "@/data/site";

export function ContactInfoCards() {
  return (
    <section className="bg-gray-50/70 py-10 border-b border-gray-200" aria-label="Informations de contact direct">
      <div className="cfige-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Téléphone */}
          <div className="flex items-center gap-4 p-5 rounded-2xl border border-gray-200 bg-white shadow-cfige-sm transition-all duration-200 hover:border-primary hover:shadow-cfige-md">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
              <Phone className="h-6 w-6" strokeWidth={1.8} />
            </span>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Téléphone
              </h3>
              <div className="mt-1 space-y-0.5">
                <a
                  href={`tel:${site.phones[0].replace(/\s/g, "")}`}
                  className="block text-sm font-bold text-gray-900 transition-colors hover:text-primary"
                >
                  {site.phones[0]}
                </a>
                <a
                  href={`tel:${site.phones[1].replace(/\s/g, "")}`}
                  className="block text-sm font-bold text-gray-900 transition-colors hover:text-primary"
                >
                  {site.phones[1]}
                </a>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 p-5 rounded-2xl border border-gray-200 bg-white shadow-cfige-sm transition-all duration-200 hover:border-primary hover:shadow-cfige-md">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
              <Mail className="h-6 w-6" strokeWidth={1.8} />
            </span>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Email
              </h3>
              <a
                href={`mailto:${site.email}`}
                className="mt-1 block text-sm font-bold text-gray-900 transition-colors hover:text-primary break-all"
              >
                {site.email}
              </a>
            </div>
          </div>

          {/* Adresse */}
          <div className="flex items-center gap-4 p-5 rounded-2xl border border-gray-200 bg-white shadow-cfige-sm transition-all duration-200 hover:border-primary hover:shadow-cfige-md">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
              <MapPin className="h-6 w-6" strokeWidth={1.8} />
            </span>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Adresse
              </h3>
              <a
                href={site.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-sm font-bold text-gray-900 transition-colors hover:text-primary"
              >
                {site.address}
              </a>
            </div>
          </div>

          {/* Horaires */}
          <div className="flex items-center gap-4 p-5 rounded-2xl border border-gray-200 bg-white shadow-cfige-sm transition-all duration-200 hover:border-primary hover:shadow-cfige-md">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
              <Clock className="h-6 w-6" strokeWidth={1.8} />
            </span>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Horaires d&apos;ouverture
              </h3>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-gray-900">
                Lundi – Vendredi : 08h – 17h30
              </p>
              <p className="text-xs text-gray-600">
                Samedi : 09h – 13h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
