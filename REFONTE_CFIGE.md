# REFONTE_CFIGE.md

# CFIGE TCHAD — CAHIER DES CHARGES TECHNIQUE POUR REFONTE

> **Document destiné à OpenCode / Codex**
>
> Objectif : refondre entièrement le site CFIGE Tchad avec une interface moderne, professionnelle, rapide, responsive et orientée conversion, tout en conservant les informations et fonctionnalités utiles du site actuel.

---

# 1. RÈGLE PRINCIPALE

Tu dois considérer ce fichier comme le **cahier des charges principal du projet**.

Avant toute modification :

1. analyser le projet existant ;
2. identifier la stack technique ;
3. identifier toutes les routes existantes ;
4. identifier les composants existants ;
5. identifier les API ;
6. identifier les formulaires ;
7. identifier les données ;
8. identifier les dépendances ;
9. identifier les fonctionnalités à conserver ;
10. identifier les éventuelles régressions.

**NE PAS commencer directement à modifier les fichiers.**

Commencer par produire une analyse du projet.

---

# 2. OBJECTIF GLOBAL

Transformer le site actuel de CFIGE Tchad en un site institutionnel moderne présentant clairement trois pôles :

```text
                    CFIGE
                      │
          ┌───────────┼───────────┐
          │           │           │
      FORMATION    SOLUTIONS IT   CONSEIL
          │           │           │
      Compétences   Digital      Performance
```

Le nouveau site doit donner immédiatement l'impression :

- d'un centre professionnel ;
- moderne ;
- fiable ;
- sérieux ;
- technologique ;
- accessible ;
- localement implanté au Tchad ;
- capable de travailler avec des particuliers et des entreprises.

---

# 3. OBJECTIFS BUSINESS

Le site doit principalement permettre de :

### Objectif 1

Présenter les formations.

### Objectif 2

Générer des demandes d'inscription.

### Objectif 3

Présenter les services IT.

### Objectif 4

Générer des demandes de devis.

### Objectif 5

Présenter l'équipe et l'organisation.

### Objectif 6

Renforcer la crédibilité du CFIGE.

### Objectif 7

Améliorer la visibilité SEO.

### Objectif 8

Faciliter le contact via :

- téléphone ;
- WhatsApp ;
- email ;
- formulaire ;
- localisation.

---

# 4. AVANT DE CODER

Exécuter une phase d'audit.

Créer un fichier :

```text
AUDIT_CFIGE.md
```

Ce fichier doit contenir :

```text
STACK
ROUTES
COMPONENTS
DATABASE
API
AUTHENTICATION
FORMS
DEPENDENCIES
IMAGES
SEO
ANALYTICS
ENVIRONMENT VARIABLES
RISKS
```

---

# 5. RÈGLE DE NON-RÉGRESSION

La refonte ne doit pas supprimer une fonctionnalité existante sans justification.

Avant suppression d'un élément :

```text
1. identifier son rôle ;
2. vérifier s'il est utilisé ;
3. vérifier les dépendances ;
4. vérifier les routes ;
5. vérifier les formulaires ;
6. vérifier les API ;
7. vérifier le référencement ;
8. proposer une alternative ;
```

---

# 6. DESIGN SYSTEM

Créer un système visuel cohérent.

## Principes

Le design doit être :

- moderne ;
- professionnel ;
- respirant ;
- accessible ;
- responsive ;
- premium mais pas luxueux ;
- technologique sans être froid ;
- adapté au contexte africain/tchadien.

Éviter :

- les interfaces surchargées ;
- les gradients excessifs ;
- les animations permanentes ;
- les effets 3D inutiles ;
- les textes trop longs ;
- les cartes identiques partout ;
- les énormes titres sur mobile.

---

# 7. TYPOGRAPHIE

Utiliser une police moderne et lisible.

Préférence :

```text
Inter
ou
Manrope
ou
Plus Jakarta Sans
```

Hiérarchie recommandée :

```text
H1 : 52–68px desktop
H2 : 36–48px desktop
H3 : 24–30px
Body : 16–18px
Small : 13–14px
```

Mobile :

```text
H1 : 34–42px
H2 : 28–34px
H3 : 20–24px
Body : 15–17px
```

Ne jamais laisser les titres provoquer un débordement horizontal.

---

# 8. COULEURS

Créer les couleurs sous forme de variables CSS.

Exemple :

```css
:root {
  --color-primary: ...;
  --color-primary-dark: ...;
  --color-secondary: ...;
  --color-accent: ...;

  --color-background: ...;
  --color-surface: ...;
  --color-text: ...;
  --color-muted: ...;

  --color-success: ...;
  --color-warning: ...;
  --color-error: ...;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-xl: 28px;
}
```

IMPORTANT :

Avant de choisir définitivement les couleurs, inspecter le logo CFIGE existant.

Les couleurs du logo doivent servir de référence.

---

# 9. LAYOUT GLOBAL

Largeur maximale :

```text
1200px – 1280px
```

Structure :

```text
<body>
 ├── Header
 ├── Main
 │    ├── Hero
 │    ├── Sections
 │    └── CTA
 └── Footer
```

Container :

```css
.container {
  width: min(100% - 32px, 1240px);
  margin-inline: auto;
}
```

Desktop :

```text
padding horizontal : 24–32px
```

Mobile :

```text
padding horizontal : 16–20px
```

---

# 10. HEADER

Créer un header professionnel.

## Desktop

```text
LOGO

Accueil
Formations
Services
À propos
Blog
Contact

[ S'inscrire ]
```

## Mobile

```text
LOGO                         ☰
```

Menu :

```text
Accueil

Formations
  ├── Informatique
  ├── Développement Web
  ├── Comptabilité
  ├── Gestion
  ├── Fiscalité
  ├── Management
  └── Autres

Services
  ├── Développement Web
  ├── Logiciels
  ├── Applications
  ├── Maintenance
  └── Conseil

À propos

Blog

Contact

[ S'inscrire ]
```

---

# 11. HEADER — COMPORTEMENT

Desktop :

- header sticky ;
- background clair ;
- léger border-bottom ;
- transition au scroll.

Au scroll :

```text
background légèrement opaque
backdrop-filter léger
ombre très subtile
```

Mobile :

- menu fullscreen ou drawer ;
- fermeture avec ESC ;
- fermeture après clic sur une route ;
- navigation accessible au clavier.

---

# 12. PAGE ACCUEIL

Route :

```text
/
```

Architecture :

```text
Header
↓
Hero
↓
Trust / chiffres
↓
Présentation CFIGE
↓
Formations
↓
Solutions IT
↓
Pourquoi CFIGE
↓
Méthode
↓
Entreprises
↓
Témoignages
↓
Actualités
↓
CTA final
↓
Footer
```

---

# 13. HERO

## Structure

Badge :

```text
CENTRE DE FORMATION & SOLUTIONS IT
```

Titre :

```text
Développez vos compétences.
Transformez votre avenir.
```

Sous-titre :

```text
Formations professionnelles, solutions numériques et
accompagnement des entreprises à N'Djaména et partout au Tchad.
```

CTA principal :

```text
Découvrir les formations
```

CTA secondaire :

```text
Nos solutions IT
```

---

# 14. HERO — DESIGN

Desktop :

```text
┌──────────────────────────────────────────────┐
│                                              │
│  BADGE                                       │
│                                              │
│  Développez vos compétences.                 │
│  Transformez votre avenir.                  │
│                                              │
│  Texte explicatif                            │
│                                              │
│  [ Formations ] [ Solutions IT ]             │
│                                              │
│                         VISUEL / IMAGE        │
│                                              │
└──────────────────────────────────────────────┘
```

Utiliser éventuellement :

- photo professionnelle d'apprenants ;
- photo de formation ;
- illustration digitale ;
- composition avec ordinateur ;
- éléments graphiques inspirés du Tchad.

Ne pas utiliser une image générique trop artificielle.

---

# 15. HERO MOBILE

Ordre :

```text
Badge
↓
Titre
↓
Description
↓
CTA
↓
Image
```

Le hero mobile ne doit pas être trop haut.

Éviter :

```css
min-height: 100vh;
```

sur mobile.

Objectif :

Le titre doit commencer environ 24–40px après le header.

---

# 16. SECTION CHIFFRES

Afficher :

```text
200+
Apprenants formés

12+
Formations

5
Années d'expérience

95%
Satisfaction
```

IMPORTANT :

Ces données doivent être facilement modifiables.

Créer un objet :

```ts
const stats = [
  {
    value: "200+",
    label: "Apprenants formés"
  },
  ...
]
```

Ne pas hardcoder les valeurs dans plusieurs composants.

---

# 17. SECTION PRÉSENTATION

Titre :

```text
Le CFIGE, un partenaire pour vos compétences et votre transformation digitale
```

Texte :

```text
Le CFIGE accompagne les étudiants, professionnels,
entreprises et organisations dans le développement
de compétences pratiques et dans l'adoption de solutions
numériques adaptées à leurs besoins.
```

CTA :

```text
Découvrir le CFIGE
```

---

# 18. SECTION — DEUX PÔLES

Créer deux grandes cartes.

## Carte 1

### FORMATION

```text
Développez des compétences directement
utilisables dans le monde professionnel.
```

CTA :

```text
Voir les formations
```

## Carte 2

### SOLUTIONS IT

```text
Digitalisez votre activité avec des solutions
adaptées à votre organisation.
```

CTA :

```text
Découvrir nos solutions
```

---

# 19. FORMATIONS

Route :

```text
/formations
```

Créer une page catalogue.

## Header

```text
Nos formations
```

Description :

```text
Développez les compétences dont vous avez besoin
pour évoluer dans votre carrière ou votre entreprise.
```

---

# 20. CATÉGORIES FORMATIONS

Créer :

```ts
const formationCategories = [
  "Informatique",
  "Développement Web",
  "Comptabilité & Finance",
  "Fiscalité",
  "Audit & Contrôle de gestion",
  "Gestion",
  "Management",
  "Marketing",
  "Ressources humaines",
  "Droit"
];
```

---

# 21. CARTE FORMATION

Chaque carte doit pouvoir afficher :

```text
Image
Catégorie

Nom formation

Courte description

Durée
Niveau
Mode

Prix

Prochaine session

[ Voir la formation ]
```

---

# 22. FILTRES FORMATIONS

Prévoir :

```text
Recherche
↓
Catégorie
↓
Niveau
↓
Mode
↓
Prix
```

Mobile :

Utiliser un bouton :

```text
Filtrer
```

ouvrant un drawer.

---

# 23. PAGE DÉTAIL FORMATION

Route recommandée :

```text
/formations/[slug]
```

Structure :

```text
Breadcrumb
↓
Hero formation
↓
Résumé
↓
Objectifs
↓
Programme
↓
Public cible
↓
Prérequis
↓
Durée
↓
Modalités
↓
Certification
↓
Formateur
↓
Prochaine session
↓
Prix
↓
FAQ
↓
CTA inscription
```

---

# 24. MODÈLE DE DONNÉES FORMATION

Créer une interface :

```ts
interface Formation {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  image?: string;

  duration?: string;
  level?: string;
  mode?: string;

  price?: number;
  currency?: string;

  nextSession?: string;

  objectives: string[];
  prerequisites: string[];
  audience: string[];

  program: {
    title: string;
    description?: string;
  }[];

  certification?: string;

  trainer?: {
    name: string;
    role?: string;
    image?: string;
  };

  faq?: {
    question: string;
    answer: string;
  }[];
}
```

---

# 25. INSCRIPTION

Route :

```text
/inscription
```

Formulaire :

```text
Nom
Prénom
Téléphone
WhatsApp
Email
Formation
Niveau d'études
Situation professionnelle
Mode souhaité
Session souhaitée
Message
Consentement
```

CTA :

```text
Envoyer ma demande
```

---

# 26. VALIDATION FORMULAIRE

Validation côté client ET côté serveur.

Vérifier :

- email ;
- téléphone ;
- champs obligatoires ;
- consentement.

Messages :

```text
Champ obligatoire
Adresse email invalide
Numéro de téléphone invalide
Veuillez sélectionner une formation
```

Succès :

```text
Votre demande d'inscription a bien été envoyée.
Notre équipe vous contactera prochainement.
```

Erreur :

```text
Une erreur est survenue.
Veuillez réessayer ou nous contacter directement.
```

---

# 27. SERVICES IT

Route :

```text
/services
```

Services :

```text
Développement Web
Logiciels sur mesure
Applications mobiles
Solutions e-commerce
Maintenance informatique
Réseaux
Transformation digitale
Conseil stratégique
```

---

# 28. PAGE SERVICE

Route :

```text
/services/[slug]
```

Structure :

```text
Hero
↓
Problème
↓
Solution CFIGE
↓
Prestations
↓
Processus
↓
Technologies
↓
Réalisations
↓
FAQ
↓
CTA
```

---

# 29. SERVICE — DÉVELOPPEMENT WEB

Contenu :

```text
Création de sites web professionnels
adaptés aux besoins des entreprises,
organisations et entrepreneurs.
```

Inclure :

- site vitrine ;
- e-commerce ;
- plateforme web ;
- espace client ;
- intégration API ;
- maintenance.

---

# 30. SERVICE — LOGICIELS

Présenter :

```text
Logiciels de gestion
Solutions métier
Applications internes
Automatisation
Bases de données
Tableaux de bord
```

---

# 31. SERVICE — MAINTENANCE

Présenter :

```text
Diagnostic
Maintenance préventive
Maintenance corrective
Installation
Configuration
Réseaux
Sécurité informatique
```

Ne pas faire de promesses de sécurité absolue.

---

# 32. SERVICE — TRANSFORMATION DIGITALE

Présenter :

```text
Audit
Analyse des processus
Digitalisation
Automatisation
Formation
Déploiement
Accompagnement
```

---

# 33. PAGE À PROPOS

Route :

```text
/a-propos
```

Structure :

```text
Hero
↓
Notre histoire
↓
Mission
↓
Vision
↓
Valeurs
↓
Chiffres
↓
Méthode
↓
Équipe
↓
CTA
```

---

# 34. MISSION

```text
Renforcer l'employabilité des jeunes,
accompagner les organisations dans leur
transformation digitale et contribuer au
développement des compétences professionnelles
au Tchad et en Afrique centrale.
```

---

# 35. VISION

```text
Devenir un centre de référence en formation
professionnelle et en transformation digitale
en Afrique centrale.
```

---

# 36. VALEURS

Créer 6 cartes :

```text
Excellence
Proximité
Innovation
Impact
Certification
Réseau
```

Chaque valeur :

```text
Icon
Titre
Description
```

---

# 37. ÉQUIPE

Créer une section équipe.

Données :

```ts
interface TeamMember {
  name: string;
  role: string;
  description: string;
  image?: string;
  linkedin?: string;
}
```

Membres actuels à vérifier :

```text
MBATALBAYE ABEL
Associé

Hassan Ngarmbassa Ngargouleye
Associé Gérant

TOKMA ONDJE
Responsable Administrative & Financière

ADORE ADJITEBAYE RAKIDJON
Responsable Pôle Informatique
```

Ne publier les informations personnelles qu'après validation.

---

# 38. BLOG

Route :

```text
/blog
```

Structure :

```text
Hero
↓
Article mis en avant
↓
Filtres catégories
↓
Grille articles
↓
Pagination
```

---

# 39. ARTICLE

Route :

```text
/blog/[slug]
```

Structure :

```text
Breadcrumb
↓
Catégorie
↓
Titre
↓
Date
↓
Auteur
↓
Image
↓
Contenu
↓
Articles similaires
↓
CTA
```

---

# 40. SEO BLOG

Chaque article doit générer :

```html
<title>
<meta name="description">
<link rel="canonical">
```

Ajouter :

```text
Open Graph
Twitter Card
Article Schema
Breadcrumb Schema
```

---

# 41. CONTACT

Route :

```text
/contact
```

Afficher :

```text
Téléphone
WhatsApp
Email
Adresse
Carte
Horaires
```

Contacts actuels à vérifier :

```text
+235 66 91 02 96
+235 95 69 22 00

contact@cfige-tchad.com

7e arrondissement,
N'Djaména, Tchad
```

---

# 42. CONTACT — CTA

Créer des boutons :

```text
Appeler
WhatsApp
Envoyer un email
Voir la localisation
```

Sur mobile :

```html
<a href="tel:+235...">
```

WhatsApp :

```text
https://wa.me/235XXXXXXXX
```

Le numéro final doit être confirmé avant intégration.

---

# 43. FOOTER

Structure :

```text
┌────────────────────────────────────────────┐
│ LOGO                                       │
│ Description courte                         │
│                                            │
│ Formations     Services      CFIGE         │
│ ...              ...          ...          │
│                                            │
│ Contact                                    │
│ Téléphone                                  │
│ Email                                      │
│ Adresse                                    │
│                                            │
│ Réseaux sociaux                             │
│                                            │
│ ─────────────────────────────────────────  │
│ © CFIGE Tchad                              │
│ Mentions légales | Confidentialité         │
└────────────────────────────────────────────┘
```

---

# 44. RESPONSIVE DESIGN

Breakpoints recommandés :

```text
mobile      < 640px
tablet      640–1023px
desktop     >= 1024px
large       >= 1280px
```

---

# 45. RÈGLES MOBILE

IMPORTANT.

Le mobile doit être conçu séparément, pas simplement réduit depuis desktop.

### Éviter

```text
énormes titres
énormes boutons
espacements excessifs
sections de 100vh
cartes trop hautes
images gigantesques
```

### Priorité

```text
lisibilité
navigation
CTA
vitesse
contenu
```

---

# 46. MOBILE — ESPACEMENTS

Utiliser approximativement :

```text
section padding : 48–64px
container : 16–20px
gap : 16–24px
```

Ne jamais créer de grands espaces vides accidentels.

Vérifier :

```text
margin-top
margin-bottom
padding
min-height
height
gap
Spacer components
```

---

# 47. ACCESSIBILITÉ

Respecter au minimum :

```text
WCAG AA
```

Implémenter :

- contrastes suffisants ;
- focus visible ;
- navigation clavier ;
- labels formulaires ;
- alt images ;
- boutons accessibles ;
- aria-label lorsque nécessaire ;
- structure HTML sémantique.

---

# 48. IMAGES

Toutes les images doivent être optimisées.

Si Next.js :

```tsx
next/image
```

Utiliser :

```text
WebP
AVIF si pertinent
lazy loading
sizes
width
height
```

Ne pas charger une image 3000px pour afficher une miniature de 300px.

---

# 49. PERFORMANCE

Objectif :

```text
LCP < 2.5s
CLS < 0.1
INP < 200ms
```

Éviter :

- JavaScript inutile ;
- bibliothèques lourdes ;
- animations permanentes ;
- images non optimisées ;
- composants client inutiles.

---

# 50. ANIMATIONS

Les animations doivent être discrètes.

Utiliser éventuellement :

```text
fade
slide
scale léger
stagger
```

Durée :

```text
150–500ms
```

Respecter :

```css
prefers-reduced-motion
```

Si l'utilisateur préfère réduire les animations :

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

# 51. SEO GLOBAL

Chaque page doit avoir :

```text
title
description
canonical
Open Graph
Twitter metadata
```

Créer :

```text
sitemap.xml
robots.txt
```

---

# 52. STRUCTURED DATA

Ajouter lorsque pertinent :

```text
Organization
LocalBusiness
EducationalOrganization
Course
Article
BreadcrumbList
FAQPage
```

Ne pas ajouter de données structurées qui ne correspondent pas au contenu réellement visible.

---

# 53. SEO LOCAL

Optimiser autour de :

```text
CFIGE Tchad
CFIGE N'Djaména
formation N'Djaména
formation informatique Tchad
formation professionnelle Tchad
développement web Tchad
maintenance informatique N'Djaména
solutions IT Tchad
```

Ajouter les informations locales cohérentes :

```text
N'Djaména
Tchad
7e arrondissement
```

---

# 54. URLS

Utiliser des URLs propres :

```text
/formations
/formations/developpement-web
/formations/comptabilite-finance

/services
/services/developpement-web
/services/maintenance-informatique

/a-propos
/equipe
/blog
/blog/article-slug
/contact
/inscription
```

Pas de :

```text
/page?id=123
```

si une URL SEO-friendly est possible.

---

# 55. BREADCRUMBS

Ajouter sur les pages internes.

Exemple :

```text
Accueil
>
Formations
>
Développement Web
```

---

# 56. COMPOSANTS

Créer des composants réutilisables.

Structure recommandée :

```text
components/
│
├── layout/
│   ├── Header
│   ├── Footer
│   ├── MobileMenu
│   └── Container
│
├── ui/
│   ├── Button
│   ├── Badge
│   ├── Card
│   ├── Input
│   ├── Select
│   ├── Modal
│   └── Accordion
│
├── home/
│   ├── Hero
│   ├── Stats
│   ├── AboutPreview
│   ├── TrainingPreview
│   ├── ServicesPreview
│   ├── Testimonials
│   ├── BlogPreview
│   └── FinalCTA
│
├── formations/
│   ├── FormationCard
│   ├── FormationFilters
│   ├── FormationHero
│   ├── Program
│   └── FormationFAQ
│
├── services/
│   ├── ServiceCard
│   ├── ServiceHero
│   └── ServiceProcess
│
└── shared/
    ├── Breadcrumb
    ├── SectionHeading
    ├── CTA
    └── SocialLinks
```

---

# 57. DATA

Ne pas répéter les données dans les composants.

Créer par exemple :

```text
data/
├── formations.ts
├── services.ts
├── team.ts
├── testimonials.ts
├── blog.ts
└── site.ts
```

---

# 58. SITE CONFIG

Créer :

```ts
export const siteConfig = {
  name: "CFIGE",
  fullName: "Centre de Formation Informatique et de Gestion",
  description: "...",
  url: "https://cfige-tchad.com",
  locale: "fr-TD",
  phone: "...",
  email: "contact@cfige-tchad.com",
  address: "...",
};
```

Les données doivent être centralisées.

---

# 59. FORMULAIRES

Tous les formulaires doivent utiliser une architecture cohérente.

Exemple :

```text
components/forms/
├── ContactForm
├── RegistrationForm
└── QuoteForm
```

Validation :

```text
Zod
```

si déjà présent dans le projet ou si compatible avec la stack.

---

# 60. ÉTATS DES FORMULAIRES

Prévoir :

```text
idle
loading
success
error
```

Le bouton doit devenir :

```text
Envoi en cours...
```

pendant la soumission.

Empêcher les doubles soumissions.

---

# 61. SÉCURITÉ

Ne jamais exposer :

```text
API keys privées
secrets
tokens
credentials
variables serveur
```

Les variables publiques doivent uniquement utiliser :

```text
NEXT_PUBLIC_
```

lorsqu'elles sont réellement destinées au navigateur.

---

# 62. ENVIRONMENT VARIABLES

Créer :

```text
.env.example
```

Ne jamais committer :

```text
.env
.env.local
```

---

# 63. ANALYTICS

Prévoir une architecture permettant éventuellement d'intégrer :

```text
Google Analytics
Google Tag Manager
Meta Pixel
```

Mais ne pas ajouter de tracking sans validation.

---

# 64. CONVERSION TRACKING

Prévoir des événements :

```text
click_phone
click_whatsapp
click_email
form_start
form_submit
formation_view
registration_start
registration_submit
quote_request
```

---

# 65. PAGE 404

Créer une page personnalisée.

Message :

```text
Cette page n'existe pas.
```

CTA :

```text
Retour à l'accueil
```

et :

```text
Voir les formations
```

---

# 66. LOADING STATES

Créer des skeletons pour :

```text
formations
articles
services
```

Ne pas afficher une page vide pendant le chargement.

---

# 67. ERROR STATES

Prévoir une interface pour :

```text
Erreur serveur
Erreur réseau
Données introuvables
Formulaire échoué
```

---

# 68. DARK MODE

Ne pas ajouter de dark mode automatiquement.

Si le site actuel ou la stratégie de marque le justifie :

```text
prévoir architecture compatible
```

mais priorité au design institutionnel clair.

---

# 69. INTERNATIONALISATION

Architecture compatible avec :

```text
fr
```

et éventuellement :

```text
en
```

à l'avenir.

Ne pas traduire automatiquement le site sans validation.

---

# 70. CONTENU À CONSERVER

Conserver et restructurer :

```text
Nom CFIGE
Présentation
Mission
Vision
Valeurs
Formations
Services
Équipe
Témoignages
Blog
Contact
Coordonnées
```

---

# 71. CONTENU À VÉRIFIER

Avant publication finale :

```text
[ ] chiffres
[ ] témoignages
[ ] certifications
[ ] diplômes
[ ] partenaires
[ ] prix
[ ] horaires
[ ] formations
[ ] dates
[ ] coordonnées
[ ] équipe
[ ] réseaux sociaux
[ ] adresse
```

---

# 72. INFORMATIONS À NE PAS INVENTER

Ne jamais inventer :

```text
partenaires
certifications
clients
statistiques
prix
témoignages
diplômes reconnus
accréditations
taux d'insertion
```

Si une information manque :

```text
TODO: À CONFIRMER
```

---

# 73. REDIRECTIONS

Avant migration :

faire la liste des anciennes URLs.

Créer :

```text
redirects
```

pour les URLs importantes.

Objectif :

```text
aucune perte SEO inutile
```

---

# 74. CANONICAL

Chaque page indexable doit avoir une URL canonique.

Exemple :

```text
https://cfige-tchad.com/formations
```

---

# 75. OPEN GRAPH

Chaque page importante doit avoir :

```text
og:title
og:description
og:image
og:url
og:type
```

Créer une image sociale CFIGE :

```text
1200 × 630
```

---

# 76. FAVICON

Prévoir :

```text
favicon.ico
icon.png
apple-touch-icon.png
```

Utiliser le logo officiel.

---

# 77. ROBOTS

Autoriser l'indexation des pages publiques.

Bloquer uniquement :

```text
admin
api privée
routes internes
```

si nécessaire.

---

# 78. SITEMAP

Inclure :

```text
/
 /formations
 /services
 /a-propos
 /blog
 /contact
```

ainsi que les pages dynamiques publiées.

---

# 79. DESIGN DES CARTES

Les cartes doivent éviter l'effet :

```text
┌──────────┐
│ image    │
│ titre    │
│ texte    │
│ bouton   │
└──────────┘
```

répété partout.

Varier la composition :

- cartes horizontales ;
- cartes avec grande image ;
- cartes minimalistes ;
- blocs avec icônes ;
- sections asymétriques.

---

# 80. ICONOGRAPHIE

Utiliser une seule bibliothèque d'icônes.

Par exemple :

```text
Lucide
```

Ne pas mélanger :

```text
Font Awesome
Lucide
Material Icons
SVG aléatoires
```

sans nécessité.

---

# 81. BOUTONS

Créer un composant :

```tsx
<Button variant="primary" />
<Button variant="secondary" />
<Button variant="outline" />
<Button variant="ghost" />
```

États :

```text
default
hover
active
focus
disabled
loading
```

---

# 82. MOBILE NAVIGATION

Le menu mobile doit :

- être accessible ;
- empêcher le scroll du body lorsqu'il est ouvert ;
- se fermer avec ESC ;
- avoir un focus correct ;
- être navigable au clavier ;
- fermer après navigation.

---

# 83. PERFORMANCE MOBILE

Tester particulièrement :

```text
3G
4G
Android moyen
iPhone
```

Le site doit rester utilisable avec une connexion lente.

---

# 84. TESTS

Après chaque grosse modification :

```bash
npm run lint
npm run build
```

si ces scripts existent.

Puis tester :

```text
Accueil
Formations
Formation détail
Services
Service détail
À propos
Blog
Article
Contact
Inscription
404
```

---

# 85. TEST RESPONSIVE

Tester au minimum :

```text
360 × 800
390 × 844
414 × 896
768 × 1024
1024 × 768
1280 × 800
1440 × 900
1920 × 1080
```

---

# 86. TEST NAVIGATION

Tester :

```text
Header
Mobile menu
Footer
Breadcrumb
CTA
Back browser
Forward browser
Liens internes
Liens externes
```

---

# 87. TEST FORMULAIRES

Tester :

```text
soumission valide
champ vide
email invalide
téléphone invalide
double clic
erreur serveur
réseau coupé
succès
```

---

# 88. TEST SEO

Vérifier :

```text
title
description
canonical
robots
sitemap
OpenGraph
structured data
headings
alt
URLs
```

---

# 89. TEST ACCESSIBILITÉ

Vérifier :

```text
keyboard navigation
focus
contraste
labels
alt
aria
headings
```

---

# 90. ARCHITECTURE TECHNIQUE CIBLE

Si le projet utilise déjà Next.js :

```text
Next.js App Router
React
TypeScript
Tailwind CSS
```

conserver autant que possible la stack existante.

Ne pas réécrire inutilement le projet avec une autre technologie.

---

# 91. SERVER VS CLIENT

Préférer les Server Components.

Utiliser `"use client"` uniquement lorsqu'il est nécessaire pour :

- interaction ;
- state ;
- animation interactive ;
- formulaire ;
- browser APIs.

Ne pas transformer toute l'application en Client Components.

---

# 92. TAILWIND

Si Tailwind est utilisé :

- utiliser les classes utilitaires ;
- centraliser les tokens ;
- éviter les valeurs arbitraires répétées ;
- créer des composants lorsque les patterns sont récurrents.

---

# 93. ANIMATIONS FRAMER MOTION

Si Framer Motion existe déjà :

l'utiliser uniquement pour les animations réellement utiles.

Exemples :

```text
Hero reveal
Section reveal
Card hover
Mobile menu
Accordion
```

Ne pas animer tous les éléments.

---

# 94. ARCHITECTURE DES ROUTES

Architecture cible :

```text
app/
│
├── page.tsx
│
├── formations/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
│
├── services/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
│
├── a-propos/
│   └── page.tsx
│
├── blog/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
│
├── contact/
│   └── page.tsx
│
├── inscription/
│   └── page.tsx
│
├── mentions-legales/
│   └── page.tsx
│
├── confidentialite/
│   └── page.tsx
│
├── not-found.tsx
│
├── robots.ts
└── sitemap.ts
```

Adapter cette architecture à l'existant plutôt que supprimer brutalement les routes existantes.

---

# 95. CMS / BASE DE DONNÉES

Avant d'installer un CMS :

analyser si le projet possède déjà :

```text
Supabase
PostgreSQL
API
CMS
MDX
JSON
```

Si une base existe déjà, la réutiliser lorsque cela est pertinent.

---

# 96. CONTENU DYNAMIQUE

Les éléments susceptibles d'être modifiés régulièrement doivent être séparés du code :

```text
formations
prix
sessions
articles
témoignages
équipe
services
```

---

# 97. ADMINISTRATION

Si une interface admin existe déjà :

ne pas la casser.

Si aucune interface admin n'existe :

ne pas en créer une complète sans nécessité.

Préparer néanmoins une architecture permettant de l'ajouter plus tard.

---

# 98. MIGRATION DU CONTENU

Créer un mapping :

```text
ANCIEN CONTENU
↓
NOUVELLE SECTION
```

Exemple :

```text
Ancienne page accueil
→ Nouvelle homepage

Ancienne page formations
→ /formations

Ancienne page services
→ /services

Ancienne page à propos
→ /a-propos

Ancien blog
→ /blog
```

---

# 99. RÈGLE POUR LES IMAGES

Ne pas supprimer les anciennes images avant d'avoir vérifié :

```text
utilisation
référencement
liens
composants
articles
```

Créer si nécessaire :

```text
public/images/
├── brand/
├── team/
├── formations/
├── services/
├── blog/
└── general/
```

---

# 100. QUALITÉ DU CODE

Le code doit être :

- lisible ;
- typé ;
- modulaire ;
- maintenable ;
- réutilisable ;
- documenté uniquement lorsque nécessaire.

Éviter :

```text
any
duplicate code
magic numbers
huge components
deep nesting
```

---

# 101. COMPONENT SIZE

Éviter des fichiers de :

```text
500+
lignes
```

Si un composant devient trop gros :

le découper.

---

# 102. TYPESCRIPT

Éviter :

```ts
any
```

Préférer :

```ts
interface
type
generics
unknown
```

avec validation appropriée.

---

# 103. ERROR HANDLING

Toutes les opérations réseau doivent gérer :

```text
loading
success
error
empty
```

---

# 104. EMPTY STATES

Exemple formations :

```text
Aucune formation ne correspond à votre recherche.
```

CTA :

```text
Réinitialiser les filtres
```

---

# 105. CONTACT FLOTTANT

Sur mobile, prévoir éventuellement un bouton flottant :

```text
WhatsApp
```

ou :

```text
Contact
```

Mais éviter qu'il masque le contenu ou les CTA.

---

# 106. CTA STRATÉGIQUES

Les CTA principaux sont :

```text
Découvrir les formations
S'inscrire
Demander un devis
Nous contacter
Parler à un conseiller
WhatsApp
```

---

# 107. HIÉRARCHIE CTA

Priorité :

```text
PRIMARY
→ S'inscrire

SECONDARY
→ Découvrir les formations

TERTIARY
→ Nous contacter
```

Pour les entreprises :

```text
Demander un devis
```

---

# 108. CONVERSION FORMATION

Chaque page formation doit avoir plusieurs CTA.

Exemple :

```text
Hero
→ S'inscrire

Après programme
→ Je veux m'inscrire

Bas de page
→ Réserver ma place
```

---

# 109. CONVERSION ENTREPRISE

Chaque page service doit avoir :

```text
Demander un devis
```

ou :

```text
Parler à un conseiller
```

---

# 110. PAGE CONTACT — DESIGN

Desktop :

```text
┌─────────────────────┬─────────────────────┐
│ Informations        │ Formulaire          │
│                     │                     │
│ Téléphone           │ Nom                 │
│ WhatsApp            │ Email               │
│ Email               │ Téléphone            │
│ Adresse             │ Message             │
│                     │ [Envoyer]           │
└─────────────────────┴─────────────────────┘
```

Mobile :

```text
Informations
↓
Formulaire
↓
Carte
```

---

# 111. GOOGLE MAPS

Ne pas charger une iframe lourde immédiatement si ce n'est pas nécessaire.

Préférer :

```text
bouton → Google Maps
```

ou chargement différé.

---

# 112. DONNÉES DE CONTACT CENTRALISÉES

Ne jamais répéter manuellement les coordonnées dans 10 fichiers.

Créer :

```ts
siteConfig.contact
```

---

# 113. BRAND VOICE

Le ton du site doit être :

```text
professionnel
humain
clair
confiant
accessible
orienté résultats
```

Éviter :

```text
langage trop administratif
phrases trop longues
jargon technique inutile
promesses exagérées
```

---

# 114. COPYWRITING

Priorité :

```text
problème
↓
solution
↓
bénéfice
↓
preuve
↓
CTA
```

Exemple :

```text
Vous souhaitez développer une compétence professionnelle ?

Suivez une formation pratique adaptée aux exigences
du marché et bénéficiez d'un accompagnement.

[ Découvrir les formations ]
```

---

# 115. PREUVES DE CONFIANCE

Prévoir :

```text
chiffres
témoignages
équipe
photos réelles
certifications validées
partenaires validés
projets réalisés
```

Ne rien inventer.

---

# 116. PHOTO DIRECTION

Privilégier :

- vraies photos du CFIGE ;
- apprenants ;
- formateurs ;
- salles ;
- ordinateurs ;
- formations ;
- entreprises ;
- projets.

Éviter les banques d'images trop génériques si des photos réelles sont disponibles.

---

# 117. PAGE ABOUT — STORYTELLING

Présenter :

```text
Pourquoi CFIGE existe
↓
Ce que CFIGE fait
↓
Pour qui
↓
Comment
↓
Impact
↓
Équipe
↓
Vision
```

---

# 118. FOOTER SEO

Le footer peut contenir :

```text
CFIGE Tchad
Formation professionnelle à N'Djaména
Solutions IT
Développement Web
Comptabilité
Gestion
Contact
```

Ne pas bourrer le footer de mots-clés.

---

# 119. RGPD / CONFIDENTIALITÉ

Les formulaires doivent indiquer clairement :

```text
Pourquoi les données sont collectées
```

et prévoir un lien vers :

```text
Politique de confidentialité
```

---

# 120. CHECKLIST AVANT PRODUCTION

```text
[ ] Build OK
[ ] Lint OK
[ ] Aucun TypeScript error
[ ] Aucun console.error
[ ] Aucun lien cassé
[ ] Mobile OK
[ ] Tablet OK
[ ] Desktop OK
[ ] Header OK
[ ] Footer OK
[ ] Formulaires OK
[ ] WhatsApp OK
[ ] Téléphone OK
[ ] Email OK
[ ] SEO OK
[ ] Sitemap OK
[ ] Robots OK
[ ] OpenGraph OK
[ ] Images optimisées
[ ] Accessibility OK
[ ] 404 OK
[ ] Redirects OK
[ ] Production env OK
```

---

# 121. PROCESSUS D'IMPLÉMENTATION POUR OPENCODE

NE PAS tout coder en une seule opération.

Procéder par phases.

## PHASE 1 — AUDIT

Analyser le projet.

Créer :

```text
AUDIT_CFIGE.md
```

Ne modifier aucun fichier sauf si nécessaire pour les outils d'audit.

---

## PHASE 2 — ARCHITECTURE

Définir :

```text
routes
components
data
styles
types
SEO
```

---

## PHASE 3 — DESIGN SYSTEM

Créer :

```text
colors
typography
spacing
buttons
cards
forms
containers
```

---

## PHASE 4 — LAYOUT

Construire :

```text
Header
Footer
Mobile Menu
Container
```

---

## PHASE 5 — HOMEPAGE

Construire :

```text
Hero
Stats
About
Formations
Services
Why CFIGE
Testimonials
Blog
CTA
```

---

## PHASE 6 — FORMATIONS

Construire :

```text
/formations
/formations/[slug]
```

---

## PHASE 7 — SERVICES

Construire :

```text
/services
/services/[slug]
```

---

## PHASE 8 — ABOUT

Construire :

```text
/a-propos
```

---

## PHASE 9 — BLOG

Construire :

```text
/blog
/blog/[slug]
```

---

## PHASE 10 — CONTACT

Construire :

```text
/contact
/inscription
```

---

## PHASE 11 — SEO

Implémenter :

```text
metadata
sitemap
robots
canonical
OpenGraph
Schema.org
```

---

## PHASE 12 — RESPONSIVE

Tester :

```text
360
390
414
768
1024
1280
1440
1920
```

---

## PHASE 13 — PERFORMANCE

Analyser :

```text
bundle
images
fonts
JavaScript
CSS
network
```

---

## PHASE 14 — QA

Tester toutes les routes et interactions.

---

# 122. RÈGLE IMPORTANTE POUR OPENCODE

À chaque phase :

1. analyser ;
2. modifier ;
3. tester ;
4. corriger ;
5. vérifier ;
6. passer à la phase suivante.

Ne pas effectuer 100 modifications non testées.

---

# 123. RAPPORT APRÈS CHAQUE PHASE

Après chaque phase, produire un résumé :

```text
PHASE :
FICHIERS MODIFIÉS :
FONCTIONNALITÉS AJOUTÉES :
FONCTIONNALITÉS MODIFIÉES :
TESTS :
ERREURS :
TODO :
```

---

# 124. RÈGLE ABSOLUE

Si une information nécessaire n'existe pas dans le projet :

```text
TODO: INFORMATION À FOURNIR
```

Ne jamais inventer.

---

# 125. CRITÈRES DE RÉUSSITE

La refonte est considérée comme réussie si :

### Design

```text
moderne
cohérent
professionnel
responsive
```

### UX

```text
navigation claire
CTA visibles
inscription simple
contact facile
```

### Performance

```text
rapide
images optimisées
JS limité
```

### SEO

```text
URLs propres
metadata
sitemap
schema
SEO local
```

### Technique

```text
TypeScript propre
composants réutilisables
pas de régression
build OK
```

### Business

```text
plus de visibilité
plus de demandes d'inscription
plus de demandes de devis
meilleure crédibilité
```

---

# 126. ORDRE FINAL DES PRIORITÉS

Si plusieurs problèmes existent simultanément, respecter cet ordre :

```text
1. Fonctionnalités existantes
2. Sécurité
3. Responsive
4. UX
5. Performance
6. SEO
7. Design
8. Animations
```

Ne jamais sacrifier une fonctionnalité importante pour une animation ou un effet visuel.

---

# 127. PROMPT INITIAL POUR OPENCODE

Utiliser ce prompt au lancement du projet :

> Tu travailles sur la refonte du site CFIGE Tchad.
>
> Le fichier `REFONTE_CFIGE.md` constitue le cahier des charges principal.
>
> **NE MODIFIE PAS immédiatement le code.**
>
> Commence par analyser intégralement le projet existant :
>
> - stack ;
> - architecture ;
> - routes ;
> - composants ;
> - données ;
> - API ;
> - formulaires ;
> - authentification ;
> - dépendances ;
> - variables d'environnement ;
> - SEO ;
> - images ;
> - responsive ;
> - fonctionnalités existantes.
>
> Ensuite crée `AUDIT_CFIGE.md`.
>
> Identifie explicitement :
>
> 1. ce qui doit être conservé ;
> 2. ce qui doit être amélioré ;
> 3. ce qui doit être supprimé ;
> 4. ce qui doit être créé ;
> 5. les risques de régression ;
> 6. les informations manquantes.
>
> Ne supprime aucune fonctionnalité existante sans justification.
>
> Ne crée aucune information commerciale fictive.
>
> Pour les informations manquantes, utiliser `TODO: À CONFIRMER`.
>
> Après l'audit, propose le plan d'implémentation par phases.
>
> Attends la validation avant de commencer la phase de développement si le projet contient des fonctionnalités existantes importantes.
>
> Toutes les décisions d'architecture doivent respecter `REFONTE_CFIGE.md`.

---

# 128. DEFINITION OF DONE

Le projet est terminé uniquement lorsque :

```text
✓ Toutes les pages principales sont créées
✓ Toutes les routes importantes fonctionnent
✓ Navigation desktop fonctionnelle
✓ Navigation mobile fonctionnelle
✓ Formulaires fonctionnels
✓ Responsive complet
✓ SEO configuré
✓ Sitemap configuré
✓ Robots configuré
✓ OpenGraph configuré
✓ Images optimisées
✓ Accessibilité vérifiée
✓ Build production réussi
✓ Aucun lien cassé
✓ Aucun secret exposé
✓ Aucun contenu inventé
✓ Aucun problème TypeScript
✓ Aucun problème ESLint bloquant
✓ Tests manuels terminés
```

---

# FIN DU CAHIER DES CHARGES

**Projet : CFIGE Tchad**

**Objectif :** créer une présence web moderne, professionnelle et performante pour les activités de formation, de solutions IT et de conseil du CFIGE.

**Principe directeur :**

> Former. Digitaliser. Accompagner.