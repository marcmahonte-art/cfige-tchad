export const site = {
  name: "CFIGE",
  fullName: "Centre de Formation Informatique et de Gestion",
  city: "N'Djaména",
  country: "Tchad",
  description:
    "Centre de formation professionnelle, solutions numériques et accompagnement des entreprises à N'Djaména et partout au Tchad.",
  // Numéros confirmés (REFONTE_CFIGE.md / SPEC_HOME_PAGE.md)
  phones: ["+235 66 91 02 96", "+235 95 69 22 00"],
  email: "contact@cfige-tchad.com",
  address: "7e arrondissement, N'Djaména, Tchad",
  // Numéro WhatsApp confirmé par le client.
  whatsappNumber: "+235 66 91 02 96",
  social: {
    // Réseaux réels à confirmer avant activation. Laisser vide = non affiché.
    facebook: "",
    linkedin: "",
    instagram: "",
  },
  nav: [
    { label: "Accueil", href: "/" },
    { label: "Formations", href: "/formations" },
    { label: "Services", href: "/services" },
    { label: "À propos", href: "/#apropos" },
    { label: "Tarifs", href: "/tarifs-modalites" },
    { label: "Blog", href: "/#blog" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;
