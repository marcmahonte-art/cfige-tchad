export interface BlogPost {
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

// Articles éditoriaux de démonstration — contenus à rédiger/valider.
export const blogPosts: BlogPost[] = [
  {
    slug: "metiers-du-numerique-au-tchad",
    category: "Carrière",
    date: "À confirmer",
    title: "Les métiers du numérique qui recrutent au Tchad",
    excerpt:
      "Panorama des compétences les plus demandées par les entreprises et organisations tchadiennes en 2026.",
    image: "/images/dev-web.jpg",
  },
  {
    slug: "transformer-son-entreprise-sans-se-tromper",
    category: "Transformation digitale",
    date: "À confirmer",
    title: "Transformer son entreprise sans se tromper",
    excerpt:
      "Cinq étapes pour réussir sa digitalisation, de l'audit des processus au déploiement des outils.",
    image: "/images/dev-web-2.jpg",
  },
  {
    slug: "choisir-sa-formation-informatique",
    category: "Formation",
    date: "À confirmer",
    title: "Comment choisir sa formation informatique",
    excerpt:
      "Développement web, maintenance, comptabilité : nos conseils pour orienter votre parcours.",
    image: "/images/apps-1.jpg",
  },
];
