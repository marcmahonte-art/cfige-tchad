export const site = {
  name: "CFIGE",
  fullName: "Centre de Formation Informatique et de Gestion",
  city: "N'Djaména",
  country: "Tchad",
  description:
    "Centre de formation professionnelle, solutions numériques et accompagnement des entreprises à N'Djaména et partout au Tchad.",
  // Numéros confirmés
  phones: ["+235 66 91 02 96", "+235 95 69 22 00"],
  email: "contact@cfige-tchad.com",
  address: "7e arrondissement, N'Djaména, Tchad",
  mapUrl: "https://www.google.com/maps?q=12.108425,15.107058",
  coordinates: {
    lat: 12.108425,
    lng: 15.107058,
  },
  // Numéro WhatsApp confirmé par le client.
  whatsappNumber: "+235 66 91 02 96",
  whatsappUrl: "https://api.whatsapp.com/send/?phone=23566910296&text&type=phone_number&app_absent=0",
  hours: {
    weekdays: "Lundi – Vendredi : 08h – 17h30",
    saturday: "Samedi : 09h – 13h",
  },
  social: {
    facebook: "",
    linkedin: "https://linkedin.com/company/cfige-tchad",
    instagram: "",
  },
  nav: [
    { label: "Accueil", href: "/" },
    { label: "Formations", href: "/formations" },
    { label: "Services", href: "/services" },
    { label: "À propos", href: "/a-propos" },
    { label: "Tarifs & Modalités", href: "/tarifs-modalites" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
