"use client";

import * as React from "react";
import { Car, Send, CheckCircle2, AlertCircle, MapPin, ExternalLink } from "lucide-react";
import { site } from "@/data/site";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactLocationAndForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
  });

  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setErrorMessage("Veuillez remplir tous les champs obligatoires (*).");
      setStatus("error");
      return;
    }
    if (!formData.consent) {
      setErrorMessage("Veuillez accepter le consentement pour l'utilisation de vos données de contact.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    // Simulation d'envoi immédiat avec validation
    setTimeout(() => {
      setStatus("success");
    }, 600);
  };

  return (
    <section className="cfige-section bg-white border-b border-gray-200" id="formulaire" aria-label="Localisation et formulaire de contact">
      <div className="cfige-container">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-12 items-start">
          {/* Colonne Gauche: Localisation & Carte */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
                Notre localisation
              </h2>
              <a
                href={site.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
              >
                <span>Ouvrir dans Google Maps</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Carte interactive / iframe N'Djaména */}
            <div className="relative h-[300px] sm:h-[340px] w-full rounded-t-2xl overflow-hidden border border-gray-200 shadow-cfige-sm bg-gray-100">
              <iframe
                title="Carte localisation CFIGE Tchad"
                src={`https://maps.google.com/maps?q=${site.coordinates.lat},${site.coordinates.lng}&hl=fr&z=15&output=embed`}
                className="h-full w-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>

            {/* Bloc Comment nous trouver ? */}
            <div className="flex items-start gap-4 p-5 rounded-b-2xl border-x border-b border-gray-200 bg-gray-50 shadow-cfige-sm">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                <Car className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <div>
                <h3 className="text-sm font-bold text-gray-900">
                  Comment nous trouver ?
                </h3>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-gray-600">
                  Nous sommes situés dans le 7e arrondissement de N&apos;Djaména, à proximité des grands axes et facilement accessibles en taxi ou véhicule personnel.
                </p>
              </div>
            </div>
          </div>

          {/* Colonne Droite: Formulaire de contact */}
          <div id="message-form" className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 lg:p-9 shadow-cfige-md">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 mb-2">
              Envoyez-nous un message
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mb-6">
              Remplissez ce formulaire et notre équipe vous recontactera sous 24 heures.
            </p>

            {status === "success" ? (
              <div className="rounded-2xl border border-green-200 bg-green-50/70 p-6 sm:p-8 text-center animate-cfige-fade-up">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                  <CheckCircle2 className="h-7 w-7" />
                </span>
                <h3 className="text-lg font-bold text-gray-900">
                  Message envoyé avec succès !
                </h3>
                <p className="mt-2 text-sm text-gray-600 max-w-md mx-auto">
                  Merci {formData.name}, votre demande a bien été transmise au secrétariat du CFIGE. Nous reviendrons vers vous très rapidement.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      subject: "",
                      message: "",
                      consent: false,
                    });
                  }}
                  className="mt-6 inline-flex h-10 items-center justify-center rounded-xl bg-primary px-6 text-xs font-bold text-white hover:bg-primary-dark"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {status === "error" && errorMessage && (
                  <div className="flex items-center gap-2.5 rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs sm:text-sm text-red-700">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Nom complet *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      placeholder="Ex: Mahamat Ali"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-11 rounded-xl border-gray-200 bg-gray-50/50 text-sm focus:border-primary focus:bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="exemple@domaine.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-11 rounded-xl border-gray-200 bg-gray-50/50 text-sm focus:border-primary focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Téléphone *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+235 66 .. .. .."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-11 rounded-xl border-gray-200 bg-gray-50/50 text-sm focus:border-primary focus:bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50/50 px-3.5 text-sm text-gray-900 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="Formation">Renseignement sur une formation</option>
                      <option value="Devis">Demande de devis</option>
                      <option value="Conseil">Conseil &amp; Accompagnement</option>
                      <option value="Solutions IT">Solutions informatiques &amp; Réseaux</option>
                      <option value="Partenariat">Partenariat institutionnel / Entreprise</option>
                      <option value="Autre">Autre demande</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Votre message *
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Décrivez-nous votre besoin, vos objectifs ou votre question..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="rounded-xl border-gray-200 bg-gray-50/50 text-sm focus:border-primary focus:bg-white resize-y min-h-[110px]"
                  />
                </div>

                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    id="consent"
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                  />
                  <label htmlFor="consent" className="text-xs text-gray-600 cursor-pointer select-none">
                    J&apos;accepte que mes coordonnées soient utilisées par le CFIGE pour me recontacter dans le cadre de ma demande.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm sm:text-base font-bold text-white shadow-cfige-sm transition-all duration-200 hover:bg-primary-dark hover:shadow-cfige-md disabled:opacity-50 active:translate-y-px"
                >
                  <span>{status === "submitting" ? "Envoi en cours..." : "Envoyer le message"}</span>
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
