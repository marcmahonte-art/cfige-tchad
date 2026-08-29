"use client";

import * as React from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";

function whatsappHref(number: string) {
  if (number.startsWith("TODO")) return "#contact";
  return `https://wa.me/${number.replace(/[^0-9]/g, "")}`;
}

const MAP_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address}, ${site.country}`
)}`;

export function ContactSection() {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  function validate(form: FormData) {
    const e: Record<string, string> = {};
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const message = String(form.get("message") || "").trim();
    if (!name) e.name = "Champ obligatoire";
    if (!email) e.email = "Champ obligatoire";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
      e.email = "Adresse email invalide";
    if (!phone) e.phone = "Champ obligatoire";
    if (!message) e.message = "Champ obligatoire";
    return e;
  }

  function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = new FormData(ev.currentTarget);
    const e = validate(form);
    setErrors(e);
    if (Object.keys(e).length > 0) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    // Aucun backend configuré : simulation d'envoi (à brancher sur une API).
    window.setTimeout(() => setStatus("success"), 1200);
  }

  return (
    <section id="contact" className="cfige-section bg-gray-50" aria-labelledby="contact-title">
      <div className="cfige-container grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Coordonnées : 5 colonnes */}
        <div className="lg:col-span-5">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
            Contact
          </p>
          <h2
            id="contact-title"
            className="mt-3 text-[30px] font-bold leading-[38px] text-gray-900 md:text-[40px] md:leading-[48px]"
          >
            Parlons de votre projet
          </h2>
          <p className="mt-3 max-w-md text-base leading-6 text-gray-600">
            Une question, une inscription ou un devis ? Contactez l&apos;équipe du
            CFIGE à {site.city}.
          </p>

          <ul className="mt-8 space-y-4">
            <li>
              <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase text-gray-500">
                    Téléphone
                  </p>
                  <p className="text-sm font-medium text-gray-900">
                    {site.phones[0]} · {site.phones[1]}
                  </p>
                </div>
                <a
                  href={`tel:${site.phones[0].replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-primary hover:bg-primary-light"
                >
                  Appeler
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </li>

            <li>
              <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase text-gray-500">
                    WhatsApp
                  </p>
                  <p className="text-sm font-medium text-gray-900">
                    {site.whatsappNumber.startsWith("TODO")
                      ? "Numéro à confirmer"
                      : site.whatsappNumber}
                  </p>
                </div>
                <a
                  href={whatsappHref(site.whatsappNumber)}
                  className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-primary hover:bg-primary-light"
                >
                  WhatsApp
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </li>

            <li>
              <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase text-gray-500">
                    Email
                  </p>
                  <p className="text-sm font-medium text-gray-900">
                    {site.email}
                  </p>
                </div>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-primary hover:bg-primary-light"
                >
                  Email
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </li>

            <li>
              <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase text-gray-500">
                    Adresse
                  </p>
                  <p className="text-sm font-medium text-gray-900">
                    {site.address}
                  </p>
                </div>
                <a
                  href={MAP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-primary hover:bg-primary-light"
                >
                  Localisation
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Formulaire : 7 colonnes */}
        <div className="lg:col-span-7">
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Label htmlFor="name">Nom complet</Label>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  className={errors.name ? "border-error focus-visible:border-error" : ""}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-error">{errors.name}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  className={errors.email ? "border-error focus-visible:border-error" : ""}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-error">{errors.email}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  aria-invalid={!!errors.phone}
                  className={errors.phone ? "border-error focus-visible:border-error" : ""}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-error">{errors.phone}</p>
                )}
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="message">Votre message</Label>
                <Textarea
                  id="message"
                  name="message"
                  aria-invalid={!!errors.message}
                  className={errors.message ? "border-error focus-visible:border-error" : ""}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-error">{errors.message}</p>
                )}
              </div>
            </div>

            <div className="mt-6">
              <Button
                type="submit"
                size="lg"
                className="h-12 w-full sm:w-auto"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <Spinner /> Envoi en cours...
                  </>
                ) : (
                  "Envoyer le message"
                )}
              </Button>
            </div>

            {status === "success" && (
              <div className="mt-5 flex items-start gap-2 rounded-xl border border-[#bbf7d0] bg-[#f0fdf4] p-4 text-sm text-[#166534]">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                <span>
                  Votre message a bien été envoyé. Notre équipe vous contactera
                  prochainement.
                </span>
              </div>
            )}
            {status === "error" && Object.keys(errors).length === 0 && (
              <div className="mt-5 rounded-xl border border-[#fecaca] bg-[#fef2f2] p-4 text-sm text-[#991b1b]">
                Une erreur est survenue. Veuillez réessayer.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
