# SPEC_ABOUT_PAGE.md
# CFIGE — Page À propos — Spécifications détaillées

> Référence visuelle analysée : capture desktop 878 × 1790 px.
> Les mesures ci-dessous distinguent les dimensions observées dans la capture et les dimensions CSS recommandées pour reproduire le rendu dans une vraie page responsive.

---

## 0. Dimensions globales de référence

### Capture

```txt
Largeur  : 878 px
Hauteur  : 1790 px
Ratio    : 0.4905
```

### Zone utile

La capture montre une page centrée avec des marges latérales d'environ 40–50 px sur desktop.

```txt
Viewport référence : 878 px
Container visuel  : ~780–800 px
Marge extérieure  : ~48 px
```

### CSS recommandé

```css
.container {
  width: min(calc(100% - 96px), 1180px);
  margin-inline: auto;
}
```

À 1440 px :

```txt
container = 1180 px
marge gauche = 130 px
marge droite = 130 px
```

À 1280 px :

```txt
container = 1180 px
marge = 50 px
```

À 1024 px :

```txt
container = calc(100% - 64px)
≈ 960 px
```

À < 768 px :

```txt
container = calc(100% - 36px)
marge = 18 px
```

---

# 1. Design system

## Couleurs

```css
:root {
  --cfige-red: #E30613;
  --cfige-red-dark: #C90816;
  --cfige-red-soft: #FFF1F2;

  --cfige-ink: #17212B;
  --cfige-text: #303A43;
  --cfige-muted: #69737D;

  --cfige-border: #E9ECEF;
  --cfige-surface: #FFFFFF;
  --cfige-surface-soft: #FAFBFC;

  --cfige-footer: #182936;

  --white: #FFFFFF;
}
```

## Typographie

Police recommandée :

```txt
Inter
```

Fallback :

```css
font-family:
  Inter,
  ui-sans-serif,
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;
```

---

# 2. Hiérarchie typographique

## Desktop

```txt
H1             42 px
H2             28 px
H3             17 px
Body           13–14 px
Small          11–12 px
Eyebrow        10–11 px
Navigation     13 px
Button         12–13 px
Stat number    28–31 px
```

## Poids

```txt
H1              750–800
H2              700–750
H3              700
Body            400–500
Eyebrow         700
Navigation      600
Stat            750–800
```

## Letter spacing

```txt
H1 : -0.035em
H2 : -0.025em
H3 : -0.015em
Body : 0
```

---

# 3. Header

## Hauteur

Capture :

```txt
≈ 68 px
```

CSS recommandé :

```css
height: 70px;
```

## Structure

```txt
Logo | Navigation | CTA
```

Container :

```txt
1180 px max
```

Logo :

```txt
width: 116–125 px
height: auto
```

Navigation :

```txt
display: flex
gap: 32–36px
```

Item :

```txt
font-size: 13px
font-weight: 600
```

CTA :

```txt
height: 40px
padding-inline: 20px
border-radius: 6px
```

## Active item

```txt
color: #E30613
```

Underline :

```css
height: 2px;
width: 38–44px;
margin-top: 8px;
```

## Header z-index

```txt
z-index: 50
```

Position recommandée :

```css
position: sticky;
top: 0;
```

avec fond blanc.

---

# 4. Hero — « Qui sommes-nous ? »

## Position dans la capture

```txt
Y ≈ 70 → 350 px
hauteur ≈ 280 px
```

## Layout

```txt
2 colonnes

texte     48%
image     52%
```

CSS :

```css
grid-template-columns: 0.95fr 1.05fr;
gap: 42px;
align-items: center;
```

## Texte

Eyebrow :

```txt
À PROPOS
```

Taille :

```txt
10–11 px
```

Couleur :

```txt
#E30613
```

Trait horizontal :

```txt
width: 24 px
height: 2 px
margin-left: 8 px
```

H1 :

```txt
Qui sommes-nous ?
```

Dans la référence :

```txt
Qui = #17212B
sommes-nous ? = #E30613
```

H1 desktop :

```txt
42 px
line-height: 1.05
```

Description :

```txt
13–14 px
line-height: 1.65
max-width: 470 px
```

## Image Hero

Dimensions relatives observées :

```txt
largeur ≈ 390 px
hauteur ≈ 280 px
```

CSS :

```css
width: 100%;
height: 280px;
object-fit: cover;
```

Radius :

```txt
0–2 px
```

La photo est visuellement collée au côté droit de la zone hero.

---

# 5. Section Histoire + statistiques

## Position

```txt
Y ≈ 350 → 505 px
```

Layout desktop :

```txt
2 colonnes

texte histoire      35%
stats               65%
```

Gap :

```txt
30–36 px
```

## Histoire

Eyebrow :

```txt
NOTRE HISTOIRE
```

H2 :

```txt
De la vision à la réalité
```

Taille :

```txt
28 px
```

Description :

```txt
13 px
line-height: 1.65
```

Largeur :

```txt
360–400 px
```

## Stats

4 cartes.

```txt
grid-template-columns: repeat(4, 1fr);
gap: 8–12px;
```

Carte :

```css
height: 138–145px;
padding: 16px;
border: 1px solid #E9ECEF;
border-radius: 9px;
background: white;
box-shadow: 0 3px 14px rgba(17,30,42,.035);
```

Icône circulaire :

```txt
48 × 48 px
```

Fond :

```txt
#FFF1F2
```

Icône :

```txt
20–23 px
#E30613
```

Valeur :

```txt
28–31 px
font-weight: 800
```

Libellé :

```txt
11–12 px
line-height: 1.4
text-align: center
```

Valeurs de la référence :

```txt
200+
12+
5
95%
```

Libellés :

```txt
Apprenants formés
Formations disponibles
Années d'expérience
Taux de satisfaction
```

---

# 6. Section Valeurs

## Position

```txt
Y ≈ 505 → 855 px
```

Titre centré.

Eyebrow :

```txt
CE QUI NOUS GUIDE
```

H2 :

```txt
Nos valeurs
```

## Grid

```txt
3 colonnes × 2 lignes
```

CSS :

```css
grid-template-columns: repeat(3, 1fr);
gap: 12px;
```

## Card

```css
min-height: 145px;
padding: 18px;
border: 1px solid #E9ECEF;
border-radius: 9px;
background: #FFFFFF;
box-shadow: 0 3px 14px rgba(17,30,42,.035);
```

## Icône

```txt
48 × 48 px
```

Circle :

```txt
background: #FFF1F2
```

Icon :

```txt
22 px
color: #E30613
stroke-width: 1.8–2
```

## Contenu

Titre :

```txt
15–16 px
font-weight: 700
```

Description :

```txt
12 px
line-height: 1.55
```

## Valeurs exactes

```txt
Excellence
Des formations de haut niveau adaptées
aux standards professionnels internationaux.

Proximité
Un accompagnement personnalisé pour
chaque apprenant tout au long de son parcours.

Innovation
Des méthodes pédagogiques modernes
intégrant les outils numériques actuels.

Impact
Des solutions concrètes pensées pour les
réalités économiques du Tchad et à l’international.

Certification & diplômes
Des attestations et diplôme reconnues qui
valorisent vos compétences sur le marché de l’emploi.

Réseau
Des partenariats avec des entreprises locales
et internationales pour faciliter l’insertion professionnelle.
```

---

# 7. Section Méthode

## Position

```txt
Y ≈ 855 → 1040 px
```

Eyebrow centré :

```txt
NOTRE MÉTHODE
```

H2 :

```txt
Comment nous travaillons
```

## Layout

3 cartes horizontales.

```css
grid-template-columns: repeat(3, 1fr);
gap: 12px;
```

## Carte

```css
height: 125–135px;
padding: 18px;
border: 1px solid #E9ECEF;
border-radius: 10px;
```

## Numéro

Position :

```txt
absolute
top: -15px
left: 20px
```

Circle :

```txt
32 × 32 px
```

Couleur :

```txt
background: #E30613
color: white
```

Texte :

```txt
01
02
03
```

## Icon

```txt
48 × 48 px
background: #FFF1F2
```

## Étapes

### 01

```txt
Évaluation des besoins

Nous analysons votre profil et vos objectifs
pour recommander la formation la plus adaptée.
```

### 02

```txt
Formation pratique

Nos cours privilégient la mise en pratique immédiate
sur des cas concrets du marché tchadien et d'ailleurs.
```

### 03

```txt
Certification & suivi

Vous repartez avec une attestation/diplôme certifié(e)
et un accompagnement pour votre insertion professionnelle.
```

## Connecteurs

Entre cartes :

```txt
ligne pointillée rouge
```

Desktop uniquement :

```css
border-top: 2px dashed #E30613;
opacity: .45;
```

---

# 8. Section Équipe

## Position

```txt
Y ≈ 1040 → 1355 px
```

Eyebrow :

```txt
LES PERSONNES DERRIÈRE LE CFIGE
```

H2 :

```txt
Notre équipe
```

## Grid

4 colonnes.

```css
grid-template-columns: repeat(4, 1fr);
gap: 16px;
```

## Card

```css
border: 1px solid #E9ECEF;
border-radius: 9px;
overflow: hidden;
background: white;
box-shadow: 0 3px 14px rgba(17,30,42,.035);
```

## Photo

Dans la capture :

```txt
largeur ≈ 165–180 px
hauteur ≈ 150–160 px
```

CSS recommandé :

```css
width: 100%;
height: 155px;
object-fit: cover;
```

Fond photo :

```txt
#F1F2F3
```

## Nom

```txt
15 px
font-weight: 750
text-align: center
```

## Fonction

```txt
11–12 px
font-weight: 700
color: #E30613
```

## Bio

```txt
11–12 px
line-height: 1.55
text-align: center
```

## Social icons

```txt
32 × 32 px
border-radius: 50%
background: #F5F6F7
```

Icône :

```txt
14–15 px
```

---

# 9. Données équipe de la référence

```txt
M. Mahamat Ali
Directeur Général
Expert en management et stratégie
de formation avec plus de 10 ans d'expérience.

Mme Amina Hassan
Responsable Pédagogique
Spécialiste en ingénierie de formation
et accompagnement des apprenants.

M. David Armand
Responsable Informatique
Expert en développement web
et solutions numériques innovantes.

Mme Fatimé Abdoulaye
Chargée des Partenariats
En charge des relations entreprises
et du développement des partenariats.
```

---

# 10. Footer

## Position

```txt
Y ≈ 1355 → 1790
```

Hauteur observée :

```txt
≈ 435 px
```

CSS recommandé :

```css
background: #182936;
color: white;
```

## Container

Même largeur que le contenu principal.

## Grid

```txt
5 colonnes
```

Répartition :

```txt
Logo / description : 1.4fr
Formations         : 1fr
Services           : 1fr
CFIGE              : 1fr
Contact            : 1.2fr
```

Gap :

```txt
32–45 px
```

## Logo

```txt
width: 110–120 px
```

## Description

```txt
12 px
line-height: 1.65
color: rgba(255,255,255,.78)
max-width: 180 px
```

## Titres footer

```txt
10–11 px
font-weight: 700
color: white
text-transform: uppercase
```

## Liens

```txt
11–12 px
line-height: 1.9
color: rgba(255,255,255,.82)
```

## Social

```txt
34 × 34 px
circle
```

---

# 11. Footer bottom

Séparateur :

```css
border-top: 1px solid rgba(255,255,255,.12);
```

Padding :

```txt
18–20px 0
```

Copyright :

```txt
11px
```

Liens :

```txt
Mentions légales
Politique de confidentialité
```

---

# 12. WhatsApp flottant

Position observée :

```txt
bottom: 18–22px
right: 18–22px
```

Desktop :

```txt
48–52 px
```

Mobile :

```txt
48 px
```

```css
position: fixed;
z-index: 60;
width: 52px;
height: 52px;
border-radius: 9999px;
background: #25D366;
```

Icône :

```txt
25–27px
color: white
```

Ombre :

```css
box-shadow: 0 6px 20px rgba(0,0,0,.15);
```

---

# 13. Espacements verticaux

Système recommandé :

```txt
4   px
8   px
12  px
16  px
20  px
24  px
32  px
40  px
48  px
56  px
64  px
```

Entre sections :

```txt
desktop : 48–64 px
tablet  : 40–48 px
mobile  : 36–44 px
```

Titre → contenu :

```txt
24 px
```

Eyebrow → H2 :

```txt
7–10 px
```

H2 → paragraphe :

```txt
14–18 px
```

---

# 14. Responsive

## ≥ 1200px

```txt
container 1180px
Hero 2 colonnes
Stats 4 colonnes
Valeurs 3 colonnes
Méthode 3 colonnes
Équipe 4 colonnes
Footer 5 colonnes
```

## 992–1199px

```txt
container calc(100% - 64px)
Hero 2 colonnes
Stats 4 colonnes
Valeurs 3 colonnes
Méthode 3 colonnes
Équipe 4 colonnes
```

Réduire :

```txt
H1 38px
H2 26px
```

## 768–991px

```txt
Hero 2 colonnes
Stats 2 × 2
Valeurs 2 × 3
Méthode 3 colonnes
Équipe 2 × 2
Footer 3 colonnes
```

## < 768px

Header :

```txt
70px
logo à gauche
menu hamburger à droite
CTA dans le menu mobile
```

Hero :

```txt
1 colonne
image sous le texte
```

H1 :

```txt
32px
line-height: 1.1
```

Hero image :

```txt
height: 230–250px
```

Stats :

```txt
2 colonnes
```

Valeurs :

```txt
1 colonne
```

Méthode :

```txt
1 colonne
```

Équipe :

```txt
1 colonne
```

Footer :

```txt
1 colonne
```

---

# 15. Mobile exact recommandé

```css
@media (max-width: 767px) {
  .container {
    width: calc(100% - 36px);
    margin-inline: auto;
  }

  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 25px;
  }

  .section {
    padding-block: 40px;
  }

  .hero {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .values,
  .method,
  .team {
    grid-template-columns: 1fr;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }
}
```

---

# 16. Animations

Le design de référence est sobre : utiliser des animations très légères.

## Reveal

```css
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(14px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

Durée :

```txt
450ms
```

Easing :

```txt
cubic-bezier(.22,1,.36,1)
```

## Cards

```css
transition:
  transform 180ms ease,
  box-shadow 180ms ease,
  border-color 180ms ease;
```

Hover :

```css
transform: translateY(-3px);
```

Ombre hover :

```css
box-shadow:
  0 12px 30px rgba(17,30,42,.07);
```

## Réduction mouvement

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

# 17. Z-index

```txt
Base                  0
Hero overlays          1
Hero content           2
Sticky header         50
Dropdown              40
Mobile navigation     55
WhatsApp              60
Dialog                70
Mobile drawer         80
Toast                100
```

---

# 18. Shadcn/ui

Composants recommandés :

```txt
Button
Card
CardHeader
CardContent
Badge
Separator
Sheet
NavigationMenu
```

Pour les sections :

```txt
StatCard
ValueCard
MethodCard
TeamCard
```

Les cartes peuvent être des wrappers autour de `Card`.

---

# 19. Lucide Icons

Valeurs :

```txt
Target
Handshake
Lightbulb
Globe2
BadgeCheck
Link2
```

Stats :

```txt
UsersRound
GraduationCap
CalendarDays
Star
```

Méthode :

```txt
UserRoundCheck
BookOpen
ShieldCheck
```

Contact :

```txt
Phone
Mail
MapPin
```

Navigation :

```txt
Menu
ChevronDown
ArrowRight
```

Dimensions :

```txt
24px grandes icônes
20px secondaires
16px navigation
```

Stroke :

```txt
1.8–2
```

---

# 20. Tokens Tailwind

```js
theme: {
  extend: {
    colors: {
      cfige: {
        red: "#E30613",
        dark: "#C90816",
        soft: "#FFF1F2",
        ink: "#17212B",
        text: "#303A43",
        muted: "#69737D",
        border: "#E9ECEF",
        footer: "#182936",
      },
    },

    maxWidth: {
      cfige: "1180px",
    },

    boxShadow: {
      card: "0 3px 14px rgba(17,30,42,.035)",
      cardHover: "0 12px 30px rgba(17,30,42,.07)",
    },

    borderRadius: {
      cfige: "9px",
    },
  },
}
```

---

# 21. Classes utilitaires recommandées

Container :

```txt
mx-auto w-[calc(100%-36px)] max-w-[1180px]
```

Desktop :

```txt
lg:w-[calc(100%-64px)]
```

Section :

```txt
py-12 lg:py-16
```

Eyebrow :

```txt
text-[10px] font-bold uppercase tracking-[.01em] text-cfige-red
```

H2 :

```txt
text-[25px] font-bold tracking-[-.025em]
lg:text-[28px]
```

Card :

```txt
rounded-cfige
border border-cfige-border
bg-white
shadow-card
```

---

# 22. Architecture React / Next.js

```txt
app/
└── a-propos/
    └── page.tsx

components/
└── about/
    ├── about-hero.tsx
    ├── about-history.tsx
    ├── about-stats.tsx
    ├── about-values.tsx
    ├── about-method.tsx
    ├── about-team.tsx
    └── about-cta.tsx

components/layout/
├── site-header.tsx
├── site-footer.tsx
└── whatsapp-button.tsx
```

---

# 23. Structure JSX

```tsx
<main>
  <AboutHero />

  <section>
    <AboutHistory />
    <AboutStats />
  </section>

  <AboutValues />

  <AboutMethod />

  <AboutTeam />

  <SiteFooter />
</main>
```

---

# 24. Données

```ts
const stats = [
  {
    value: "200+",
    label: "Apprenants formés",
    icon: UsersRound,
  },
  {
    value: "12+",
    label: "Formations disponibles",
    icon: GraduationCap,
  },
  {
    value: "5",
    label: "Années d'expérience",
    icon: CalendarDays,
  },
  {
    value: "95%",
    label: "Taux de satisfaction",
    icon: Star,
  },
];
```

```ts
const values = [
  {
    title: "Excellence",
    description:
      "Des formations de haut niveau adaptées aux standards professionnels internationaux.",
    icon: Target,
  },
  {
    title: "Proximité",
    description:
      "Un accompagnement personnalisé pour chaque apprenant tout au long de son parcours.",
    icon: Handshake,
  },
  {
    title: "Innovation",
    description:
      "Des méthodes pédagogiques modernes intégrant les outils numériques actuels.",
    icon: Lightbulb,
  },
  {
    title: "Impact",
    description:
      "Des solutions concrètes pensées pour les réalités économiques du Tchad et à l’international.",
    icon: Globe2,
  },
  {
    title: "Certification & diplômes",
    description:
      "Des attestations et diplôme reconnues qui valorisent vos compétences sur le marché de l’emploi.",
    icon: BadgeCheck,
  },
  {
    title: "Réseau",
    description:
      "Des partenariats avec des entreprises locales et internationales pour faciliter l’insertion professionnelle.",
    icon: Link2,
  },
];
```

---

# 25. Performance images

Hero :

```txt
format recommandé : WebP / AVIF
object-fit: cover
loading: eager
fetchPriority: high
```

Team :

```txt
WebP / AVIF
loading: lazy
```

Dimensions sources recommandées :

```txt
Hero :
1600 × 900 minimum

Team :
600 × 600 minimum
```

Ne pas étirer les portraits.

---

# 26. Accessibilité

```txt
H1 unique
H2 hiérarchisés
alt text sur toutes les images
boutons ≥ 44px de hauteur sur mobile
contraste texte suffisant
focus-visible visible
navigation clavier
prefers-reduced-motion respecté
```

Image hero :

```html
alt="Bâtiment du CFIGE à N'Djaména"
```

---

# 27. SEO

Title :

```txt
À propos du CFIGE | Formation, Conseil & Solutions Numériques
```

Meta :

```txt
Découvrez le CFIGE, son histoire, ses valeurs, sa méthode
et son équipe à N'Djaména.
```

URL :

```txt
/a-propos
```

---

# 28. Résumé des dimensions clés

| Élément | Desktop recommandé |
|---|---:|
| Header | 70 px |
| Container max | 1180 px |
| Hero | 280–300 px |
| Hero image | 280 px |
| H1 | 42 px |
| H2 | 28 px |
| Body | 13–14 px |
| Stat card | 138–145 px |
| Stat icon | 48 px |
| Value card | 145 px min |
| Value icon | 48 px |
| Method card | 125–135 px |
| Number badge | 32 px |
| Team image | 155 px |
| Team card | ~285–300 px |
| Footer | ~400–435 px |
| WhatsApp | 52 px |
| Section gap | 48–64 px |
| Card radius | 9–10 px |
| Card gap | 12–16 px |

---

# 29. Ordre visuel exact de la référence

```txt
HEADER
│
├── Logo CFIGE
├── Accueil
├── Formations
├── Services
├── À propos [ACTIVE]
├── Blog
├── Contact
└── S'inscrire
│
HERO
├── Eyebrow À PROPOS
├── Qui sommes-nous ?
├── Description
└── Photo bâtiment CFIGE
│
HISTOIRE + STATS
├── Notre histoire
├── De la vision à la réalité
└── 200+ / 12+ / 5 / 95%
│
VALEURS
├── Excellence
├── Proximité
├── Innovation
├── Impact
├── Certification & diplômes
└── Réseau
│
MÉTHODE
├── 01 Évaluation des besoins
├── 02 Formation pratique
└── 03 Certification & suivi
│
ÉQUIPE
├── Mahamat Ali
├── Amina Hassan
├── David Armand
└── Fatimé Abdoulaye
│
FOOTER
├── Logo + description
├── Formations
├── Services
├── CFIGE
├── Contact
└── Copyright / mentions
│
WHATSAPP FLOATING
```

---

# 30. Point important pour la reproduction

Les **878 × 1790 px** sont les dimensions de la capture, pas nécessairement celles du site source. Les valeurs CSS ci-dessus sont donc les dimensions de reproduction recommandées, recalées pour un viewport desktop moderne et conservant les proportions, alignements, densité, espaces et hiérarchie visibles sur la référence.

Ne pas reproduire la page en donnant à chaque élément une taille fixe en pixels : utiliser le `max-width: 1180px`, les grilles CSS, les gaps et les breakpoints pour conserver le même rendu à 1024, 1280, 1440 et mobile.
