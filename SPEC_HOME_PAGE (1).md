# SPEC_HOME_PAGE.md

# CFIGE TCHAD — SPECIFICATION UI/UX HOMEPAGE

**Version:** 1.0  
**Date:** 29 août 2026  
**Statut:** Spécification de référence pour implémentation  
**Design source:** maquette visuelle CFIGE fournie dans la conversation  
**Stack cible:** Next.js + TypeScript + Tailwind CSS v4 + shadcn/ui + Lucide React  
**Approche:** mobile-first, responsive, accessible WCAG AA

---

## 0. IMPORTANT — NATURE DES MESURES

La maquette fournie est une image raster de **864 × 1821 px**. Elle ne contient pas les contraintes CSS originales du design.

Les dimensions ci-dessous sont donc la **spécification d'implémentation exacte proposée à partir de la maquette**, et non une extraction des CSS internes du fichier image.

Objectif : reconstruire la maquette avec une grille, des dimensions, des espacements, des ratios et des comportements déterministes afin que le rendu du code soit visuellement cohérent avec la référence.

---

# 1. DIRECTION ARTISTIQUE

## 1.1 Positionnement

CFIGE doit être perçu comme :

- institutionnel ;
- professionnel ;
- moderne ;
- technologique ;
- accessible ;
- sérieux ;
- orienté formation ;
- orienté entreprises ;
- local et africain sans clichés visuels.

La page doit éviter l'apparence :

- d'un template SaaS ;
- d'une startup générique ;
- d'un site universitaire froid ;
- d'un site surchargé ;
- d'un site entièrement rouge.

## 1.2 Hiérarchie visuelle

Priorité :

1. H1 / proposition de valeur ;
2. CTA principal ;
3. image Hero ;
4. trois piliers CFIGE ;
5. formations ;
6. solutions IT ;
7. preuve / méthode / témoignages ;
8. actualités ;
9. conversion finale ;
10. contact.

## 1.3 Répartition visuelle des couleurs

Répartition cible :

- blanc : 70–80 % ;
- gris / texte : 15–25 % ;
- rouge CFIGE : 5–10 % ;
- couleurs d'état : uniquement contextuelles.

Le rouge `#E30613` ne doit jamais devenir le background dominant de la page.

---

# 2. TOKENS CFIGE

## 2.1 Couleurs

| Token | HEX | Usage |
|---|---|---|
| `primary` | `#E30613` | CTA, actif, accent |
| `primary-dark` | `#B80510` | hover / active |
| `primary-light` | `#FEE7E9` | badge / surface rouge |
| `secondary` | `#4D4F52` | secondaire |
| `white` | `#FFFFFF` | background |
| `gray-50` | `#F9FAFB` | surfaces |
| `gray-100` | `#F3F4F6` | surfaces secondaires |
| `gray-200` | `#E5E7EB` | bordures |
| `gray-300` | `#D1D5DB` | bordures inputs |
| `gray-400` | `#9CA3AF` | placeholder |
| `gray-500` | `#6B7280` | texte secondaire |
| `gray-600` | `#4B5563` | texte secondaire fort |
| `gray-700` | `#374151` | texte |
| `gray-800` | `#1F2937` | footer / headings |
| `gray-900` | `#111827` | texte principal |
| `success` | `#16A34A` | succès |
| `warning` | `#F59E0B` | alerte |
| `error` | `#DC2626` | erreur |
| `info` | `#2563EB` | information |

## 2.2 Typographie

Police principale :

```text
Inter, system-ui, sans-serif
```

### Échelle desktop

| Niveau | Taille | Line-height | Weight |
|---|---:|---:|---:|
| Display | 64px | 72px | 700 |
| H1 | 56px | 64px | 700 |
| H2 | 40px | 48px | 700 |
| H3 | 28px | 36px | 600 |
| H4 | 22px | 28px | 600 |
| Body Large | 18px | 28px | 400 |
| Body | 16px | 24px | 400 |
| Small | 14px | 20px | 400/500 |
| Caption | 12px | 16px | 500 |

### Mobile

| Niveau | Taille | Line-height |
|---|---:|---:|
| H1 | 36px | 44px |
| H2 | 30px | 38px |
| H3 | 22px | 28px |
| Body Large | 18px | 28px |
| Body | 16px | 24px |

---

# 3. GRILLE ET CONTAINER

## 3.1 Container principal

Desktop :

```css
width: min(100% - 80px, 1240px);
margin-inline: auto;
```

À 1440px :

```text
viewport = 1440px
container = 1240px
gauche = 100px
droite = 100px
```

Tablet :

```css
width: min(100% - 48px, 1240px);
```

Mobile :

```css
width: calc(100% - 32px);
margin-inline: 16px;
```

## 3.2 Grille desktop

```text
12 colonnes
gap: 24px
```

Pour un container de 1240px :

```text
12 × 79.33px
11 × 24px
```

## 3.3 Grille mobile

```text
4 colonnes conceptuelles
gap: 16px
```

Les layouts complexes peuvent passer en flex/stack plutôt qu'utiliser strictement 4 colonnes.

---

# 4. BREAKPOINTS

```text
xs: 0–639px
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

## Viewports obligatoires

### Mobile

```text
360 × 800
390 × 844
414 × 896
```

### Tablet

```text
768 × 1024
820 × 1180
```

### Desktop

```text
1024 × 768
1280 × 800
1440 × 900
1920 × 1080
```

---

# 5. Z-INDEX SYSTEM

Ne jamais utiliser des valeurs arbitraires.

```css
--z-base: 0;
--z-content: 1;
--z-decoration: 5;
--z-header: 40;
--z-dropdown: 50;
--z-sticky: 60;
--z-mobile-menu: 70;
--z-overlay: 80;
--z-modal: 90;
--z-toast: 100;
--z-whatsapp: 110;
```

## Règles

- décorations : `z-5` ;
- contenu : `z-10` ;
- header sticky : `z-40` ;
- dropdown : `z-50` ;
- menu mobile : `z-70` ;
- overlay : `z-80` ;
- modal : `z-90` ;
- toast : `z-100` ;
- bouton WhatsApp : `z-110`.

Le logo, les CTA et le contenu du Hero doivent rester au-dessus des formes décoratives.

---

# 6. HEADER

## Desktop

Hauteur :

```text
80px
```

Largeur :

```text
100%
```

Background :

```text
#FFFFFF
```

Border :

```text
1px solid #E5E7EB
```

Container :

```text
1240px
```

### Structure

```text
[LOGO] [NAVIGATION................] [CTA]
```

Logo :

```text
width: 110–125px
height: auto
```

Navigation :

```text
gap: 28px
font-size: 14px
font-weight: 500
```

CTA :

```text
height: 44px
padding: 0 20px
radius: 10px
```

## Header scroll

Après 12px de scroll :

```css
background: rgba(255,255,255,.94);
backdrop-filter: blur(10px);
border-bottom: 1px solid #E5E7EB;
box-shadow: 0 2px 12px rgba(17,24,39,.05);
```

Transition :

```text
200ms ease-out
```

## Mobile

Hauteur :

```text
64px
```

Structure :

```text
[LOGO]                         [MENU]
```

Logo :

```text
100–110px
```

Menu button :

```text
44 × 44px
```

---

# 7. HERO

## 7.1 Dimensions

Desktop :

```text
min-height: 500px
padding-top: 64px
padding-bottom: 64px
```

Le Hero ne doit pas utiliser `100vh`.

## 7.2 Layout

Desktop :

```text
12 colonnes
```

Gauche :

```text
5 colonnes
```

Droite :

```text
7 colonnes
```

Gap :

```text
48px
```

## 7.3 Colonne gauche

Badge :

```text
height: 28px
padding: 6px 10px
radius: 999px
font-size: 12px
font-weight: 600
background: #FEE7E9
color: #B80510
```

H1 :

```text
font-size: 56px
line-height: 64px
max-width: 560px
```

Le mot / bloc :

```text
Transformez votre avenir.
```

doit être en :

```text
#E30613
```

Description :

```text
font-size: 18px
line-height: 28px
max-width: 520px
margin-top: 24px
```

CTA :

```text
margin-top: 32px
display: flex
gap: 12px
```

Primary :

```text
height: 48px
padding: 0 24px
radius: 10px
```

Secondary :

```text
height: 48px
padding: 0 24px
border: 1px solid #E30613
color: #E30613
background: #FFFFFF
radius: 10px
```

Micro-label sous les CTA :

```text
Formation • Technologie • Conseil
```

margin-top :

```text
20px
```

## 7.4 Image Hero

Ratio recommandé :

```text
16 / 10
```

Dimensions desktop :

```text
width: 100%
max-width: 680px
aspect-ratio: 1.6 / 1
```

Radius :

```text
20px
```

Object fit :

```text
cover
```

Position :

```text
center
```

## 7.5 Illustration décorative

Utiliser uniquement des formes géométriques fines :

- rectangle rouge ;
- contour rouge ;
- grille de petits points ;
- lignes géométriques.

Opacité :

```text
0.12–0.35
```

z-index :

```text
5
```

Image :

```text
z-index: 10
```

Contenu :

```text
z-index: 20
```

---

# 8. STATS

## Dimensions

Padding :

```text
48px 0
```

Border top/bottom :

```text
1px solid #E5E7EB
```

Desktop :

```text
4 colonnes
```

Mobile :

```text
2 × 2
```

Chaque stat :

```text
min-height: 96px
```

Valeur :

```text
font-size: 32px
line-height: 40px
font-weight: 700
color: #111827
```

Label :

```text
14px / 20px
color: #6B7280
```

Icône :

```text
24px
color: #E30613
```

Séparateurs desktop :

```text
1px solid #E5E7EB
```

---

# 9. SECTION À PROPOS

## Dimensions

```text
padding: 80px 0
```

Grid :

```text
5 / 7
```

Gap :

```text
64px
```

Image :

```text
aspect-ratio: 4 / 3
radius: 16px
object-fit: cover
```

Texte :

Eyebrow :

```text
12px
font-weight: 700
color: #E30613
letter-spacing: .04em
```

H2 :

```text
40px / 48px
max-width: 560px
```

Body :

```text
16px / 24px
max-width: 560px
```

CTA :

```text
margin-top: 24px
```

Mobile :

```text
image
↓
texte
```

---

# 10. TROIS EXPERTISES

## Section

Background :

```text
#FFFFFF
```

Padding :

```text
80px 0
```

Heading centré.

Cards :

```text
3 colonnes
gap: 24px
```

Card :

```text
padding: 28px
border: 1px solid #E5E7EB
border-radius: 16px
background: #FFFFFF
```

Icône :

```text
48 × 48px
radius: 12px
background: #FEE7E9
```

Icon :

```text
24px
#E30613
```

Badge :

```text
12px
```

Titre :

```text
20px / 28px
font-weight: 600
```

Description :

```text
14px / 22px
```

CTA :

```text
14px
font-weight: 600
color: #E30613
```

Mobile :

```text
1 colonne
gap: 16px
```

---

# 11. SECTION FORMATIONS

## Layout

Desktop :

```text
heading + CTA
4 cards
```

La maquette montre un bloc éditorial à gauche et les cartes à droite.

Implémentation recommandée :

```text
4 colonnes
```

avec la première colonne pouvant servir de bloc introductif sur desktop.

## FormationCard

Hauteur cible :

```text
420–460px
```

Image :

```text
width: 100%
height: 180px
object-fit: cover
```

Badge :

```text
position: absolute
top: 12px
left: 12px
```

Contenu :

```text
padding: 20px
```

Titre :

```text
18px / 24px
font-weight: 600
```

Description :

```text
14px / 20px
```

Meta :

```text
12–14px
```

Prix :

```text
18px / 24px
font-weight: 700
```

CTA :

```text
14px
```

Card :

```text
border: 1px solid #E5E7EB
border-radius: 16px
overflow: hidden
background: #FFFFFF
```

Hover :

```text
translateY(-2px)
shadow-md
```

durée :

```text
200ms
```

---

# 12. SERVICES IT

## Layout desktop

La maquette utilise une bande de services horizontale.

Structure :

```text
Intro + 8 services
```

Services :

1. Développement Web
2. Logiciels sur mesure
3. Applications mobiles
4. E-commerce
5. Maintenance informatique
6. Réseaux
7. Transformation digitale
8. Conseil stratégique

Chaque item :

```text
min-height: 112px
padding: 20px
```

Icône :

```text
28px
```

Titre :

```text
14px
font-weight: 600
```

Description courte :

```text
12–13px
```

Mobile :

```text
2 colonnes
```

ou :

```text
1 colonne
```

si le contenu devient trop serré.

---

# 13. POURQUOI CFIGE

## Grid

Desktop :

```text
3 × 2
```

Tablet :

```text
2 × 3
```

Mobile :

```text
1 × 6
```

Item :

```text
min-height: 120px
```

Icône :

```text
28px
```

Titre :

```text
16px
font-weight: 600
```

Description :

```text
14px / 20px
```

Utiliser de petites lignes rouges verticales ou horizontales comme accents.

---

# 14. MÉTHODE

## Structure

```text
01 → 02 → 03
```

Desktop :

```text
3 colonnes
```

Mobile :

```text
1 colonne
```

Numéro :

```text
48 × 48px
border-radius: 999px
background: #E30613
color: #FFFFFF
font-weight: 700
```

Ligne :

```text
2px
#E5E7EB
```

Sur desktop :

```text
position: absolute
top: 24px
left: 50%
width: 100%
```

La ligne doit rester derrière les numéros.

z-index :

```text
line: 0
numbers/content: 10
```

---

# 15. TÉMOIGNAGES

## Desktop

```text
3 colonnes
gap: 24px
```

Card :

```text
padding: 28px
min-height: 240px
border: 1px solid #E5E7EB
border-radius: 16px
```

Citation :

```text
32px
color: #E30613
```

Texte :

```text
16px / 26px
```

Avatar :

```text
40 × 40px
border-radius: 999px
```

Nom :

```text
14px
font-weight: 600
```

Fonction :

```text
12px
color: #6B7280
```

Mobile :

```text
1 card visible
```

Un carousel n'est nécessaire que si le nombre de témoignages est important.

---

# 16. BLOG

## Desktop

```text
3 articles
```

Card :

```text
border: 1px solid #E5E7EB
border-radius: 16px
overflow: hidden
```

Image :

```text
height: 180px
aspect-ratio: 16 / 9
object-fit: cover
```

Content :

```text
padding: 20px
```

Badge :

```text
height: 26px
```

Date :

```text
12–13px
```

Titre :

```text
18px / 26px
font-weight: 600
```

Excerpt :

```text
14px / 21px
```

CTA :

```text
14px
color: #E30613
```

---

# 17. CTA ENTREPRISE / FINAL CTA

## Dimension

Desktop :

```text
min-height: 300px
padding: 64px
```

Radius :

```text
20px
```

Background recommandé :

```text
#F9FAFB
```

Accent rouge :

```text
#E30613
```

Titre :

```text
40px / 48px
```

CTA :

```text
48px
```

Ne pas transformer cette section en énorme bloc rouge.

---

# 18. CONTACT

## Desktop

```text
5 / 7 columns
gap: 48px
```

Informations :

```text
Téléphone
WhatsApp
Email
Adresse
```

Formulaire :

```text
2 colonnes
```

Fields :

```text
height: 48px
padding: 12px 14px
radius: 8px
border: 1px solid #D1D5DB
```

Textarea :

```text
min-height: 120px
resize: vertical
```

Focus :

```css
border-color: #E30613;
box-shadow: 0 0 0 3px rgba(227,6,19,.12);
```

---

# 19. FOOTER

## Background

```text
#1F2937
```

ou :

```text
#111827
```

Padding :

```text
64px 0 24px
```

Desktop :

```text
5 colonnes
```

Mobile :

```text
1 colonne
```

Logo clair :

```text
width: 120px
```

Titre des colonnes :

```text
12px
font-weight: 700
color: #FFFFFF
```

Liens :

```text
14px / 22px
color: #D1D5DB
```

Hover :

```text
color: #FFFFFF
```

Footer bottom :

```text
border-top: 1px solid rgba(255,255,255,.12)
margin-top: 48px
padding-top: 20px
```

---

# 20. WHATSAPP FLOATING BUTTON

Position desktop :

```text
right: 24px
bottom: 24px
```

Mobile :

```text
right: 16px
bottom: 16px
```

Dimensions :

```text
56 × 56px
```

Radius :

```text
999px
```

z-index :

```text
110
```

Important :

Ne jamais inventer le numéro WhatsApp.

---

# 21. ILLUSTRATIONS ET DÉCORATIONS

## 21.1 Principes

Les illustrations doivent être secondaires au contenu.

Style :

- géométrique ;
- linéaire ;
- institutionnel ;
- minimal ;
- rouge/gris ;
- inspiré subtilement du logo.

## 21.2 Éléments autorisés

- lignes ;
- points ;
- rectangles ;
- contours ;
- petits cercles ;
- motifs géométriques.

## 21.3 Opacité

```text
0.08
0.12
0.18
0.25
```

Ne pas dépasser environ :

```text
0.35
```

pour les décorations.

## 21.4 Z-index

```text
decoration = 5
image = 10
content = 20
```

Les décorations ne doivent jamais intercepter les clics :

```css
pointer-events: none;
```

---

# 22. ANIMATIONS

## 22.1 Durées

```text
fast: 150ms
normal: 200ms
medium: 300ms
slow: 400ms
```

## 22.2 Easing

```text
ease-out
cubic-bezier(0.16,1,0.3,1)
```

## 22.3 Hover Card

```css
transform: translateY(-2px);
box-shadow: 0 6px 16px rgba(17,24,39,.08);
```

200ms.

## 22.4 Button

```text
background-color
transform
box-shadow
```

200ms.

Active :

```text
translateY(1px)
```

## 22.5 Hero reveal

Ordre :

```text
badge
↓
H1
↓
description
↓
CTA
↓
image
```

Animation :

```text
opacity 0 → 1
translateY(12px) → 0
```

300–400ms.

Décalage :

```text
0ms
60ms
120ms
180ms
```

Ne pas faire une animation spectaculaire.

## 22.6 Scroll reveal

Utiliser uniquement sur les sections secondaires.

```text
opacity: 0 → 1
translateY: 16px → 0
```

Durée :

```text
400ms
```

Respecter `prefers-reduced-motion`.

---

# 23. REDUCED MOTION

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

# 24. RESPONSIVE DÉTAILLÉ

## 24.1 1440px

```text
container: 1240
header: 80
hero: ~500–560
section padding: 80
grid gap: 24
```

Hero :

```text
5 / 7
```

Formations :

```text
4 colonnes
```

Services :

```text
8 items
```

## 24.2 1280px

Container :

```text
1160–1200px
```

Hero :

```text
5 / 7
```

H1 :

```text
52–56px
```

## 24.3 1024px

Container :

```text
calc(100% - 48px)
```

Hero :

```text
5 / 7
```

H1 :

```text
48px
line-height: 56px
```

Formation cards :

```text
2 colonnes
```

Services :

```text
4 colonnes
```

## 24.4 820px

Header :

```text
mobile/tablet menu
```

Hero :

```text
1 colonne
```

Image :

```text
margin-top: 40px
```

Formations :

```text
2 colonnes
```

## 24.5 768px

Même logique que 820px.

## 24.6 414px

Container :

```text
382px
```

Padding horizontal :

```text
16px
```

H1 :

```text
36 / 44
```

H2 :

```text
30 / 38
```

Buttons :

```text
width: 100%
min-height: 48px
```

Hero image :

```text
margin-top: 32px
```

Stats :

```text
2 × 2
```

## 24.7 390px

Container :

```text
358px
```

H1 :

```text
36 / 44
```

CTA :

```text
stack
gap: 12px
```

Cards :

```text
1 colonne
```

## 24.8 360px

Container :

```text
328px
```

Réduire seulement :

```text
H1 → 34px
```

si nécessaire.

Ne jamais réduire les boutons sous :

```text
44px
```

---

# 25. COMPOSANTS SHADCN/UI

La homepage doit réutiliser les composants shadcn plutôt que recréer inutilement les primitives.

Composants recommandés :

```text
Button
Badge
Card
Input
Textarea
Label
Select
Accordion
Tabs
Avatar
Separator
Sheet
Dialog
Tooltip
Skeleton
Spinner
Carousel
```

shadcn/ui fournit les primitives sous forme de code que le projet peut directement personnaliser. Les composants doivent donc être adaptés aux tokens CFIGE plutôt que contournés avec une deuxième bibliothèque UI.

## Installation indicative

```bash
pnpm dlx shadcn@latest add button badge card input textarea label select accordion tabs avatar separator sheet dialog tooltip skeleton spinner carousel
```

Pour le bouton, conserver les variantes `default`, `outline`, `secondary`, `ghost`, `link` et adapter le rendu au rouge CFIGE.

---

# 26. MAPPING DES COMPOSANTS

| Composant CFIGE | Primitive |
|---|---|
| `CfigeButton` | Button |
| `CfigeBadge` | Badge |
| `FormationCard` | Card |
| `ServiceCard` | Card |
| `TestimonialCard` | Card |
| `BlogCard` | Card |
| `ContactInput` | Input |
| `ContactTextarea` | Textarea |
| `ContactSelect` | Select |
| `MobileMenu` | Sheet |
| `FAQ` | Accordion |
| `FormationTabs` | Tabs |
| `TeamAvatar` | Avatar |
| `Modal` | Dialog |
| `Toast` | Toast |
| `LoadingCard` | Skeleton |
| `HeroTooltip` | Tooltip |
| `FormationCarousel` | Carousel |

---

# 27. ARCHITECTURE DES COMPOSANTS

```text
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── badge.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── select.tsx
│   │   ├── accordion.tsx
│   │   ├── tabs.tsx
│   │   ├── sheet.tsx
│   │   └── ...
│   │
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppButton.tsx
│   │
│   └── home/
│       ├── Hero.tsx
│       ├── Stats.tsx
│       ├── AboutSection.tsx
│       ├── ExpertiseSection.tsx
│       ├── FormationSection.tsx
│       ├── ServicesSection.tsx
│       ├── WhyCfige.tsx
│       ├── MethodSection.tsx
│       ├── Testimonials.tsx
│       ├── BlogSection.tsx
│       ├── EnterpriseCTA.tsx
│       └── ContactSection.tsx
│
├── data/
│   ├── site.ts
│   ├── formations.ts
│   ├── services.ts
│   ├── testimonials.ts
│   └── blog.ts
│
└── lib/
    └── utils.ts
```

---

# 28. TAILWIND CSS V4 — TOKENS

Tailwind CSS v4 doit utiliser les theme variables pour exposer les tokens de design directement comme utilitaires.

Exemple :

```css
@import "tailwindcss";

@theme {
  --font-sans: Inter, system-ui, sans-serif;

  --color-primary: #E30613;
  --color-primary-dark: #B80510;
  --color-primary-light: #FEE7E9;

  --color-secondary: #4D4F52;

  --color-gray-50: #F9FAFB;
  --color-gray-100: #F3F4F6;
  --color-gray-200: #E5E7EB;
  --color-gray-300: #D1D5DB;
  --color-gray-400: #9CA3AF;
  --color-gray-500: #6B7280;
  --color-gray-600: #4B5563;
  --color-gray-700: #374151;
  --color-gray-800: #1F2937;
  --color-gray-900: #111827;

  --color-success: #16A34A;
  --color-warning: #F59E0B;
  --color-error: #DC2626;
  --color-info: #2563EB;

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 20px;
  --radius-3xl: 24px;

  --shadow-cfige-sm: 0 1px 2px rgba(17,24,39,.05);
  --shadow-cfige-md: 0 6px 16px rgba(17,24,39,.08);
  --shadow-cfige-lg: 0 12px 30px rgba(17,24,39,.12);

  --animate-cfige-fade-up: cfige-fade-up 400ms cubic-bezier(.16,1,.3,1);

  @keyframes cfige-fade-up {
    from {
      opacity: 0;
      transform: translateY(16px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
```

---

# 29. SPACING TOKENS

Le système utilise une base de 4px avec priorité aux multiples de 8.

```text
4
8
12
16
20
24
28
32
40
48
56
64
72
80
96
120
```

Usage recommandé :

```text
4  → micro-gap
8  → icon/text
12 → button internal
16 → card
24 → card sections
32 → content blocks
48 → component groups
64 → large content separation
80 → section
96 → hero/major section
120 → exceptional editorial spacing
```

---

# 30. CLASSES TAILWIND RECOMMANDÉES

Container :

```text
mx-auto w-[calc(100%-32px)] max-w-[1240px]
```

Desktop :

```text
xl:w-[calc(100%-80px)]
```

Section :

```text
py-14 md:py-20
```

Large section :

```text
py-20 md:py-24
```

Grid :

```text
grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
```

Card :

```text
rounded-2xl border border-gray-200 bg-white
```

Primary button :

```text
bg-primary text-white hover:bg-primary-dark
```

Outline :

```text
border-primary text-primary hover:bg-primary-light
```

---

# 31. ACCESSIBILITÉ

Objectif :

```text
WCAG AA
```

## Contraste

Le rouge doit être utilisé avec du texte blanc uniquement dans les situations où le contraste est suffisant.

## Focus

Tous les éléments interactifs :

```css
outline: none;
box-shadow: 0 0 0 3px rgba(227,6,19,.12);
```

ou équivalent accessible via `focus-visible`.

## Touch target

Minimum :

```text
44 × 44px
```

Préféré mobile :

```text
48 × 48px
```

## Images

Chaque image doit avoir :

```text
alt
```

Les images décoratives :

```text
alt=""
```

## Navigation

Respecter :

```text
1 × H1
H2 sections
H3 sous-sections
```

---

# 32. PERFORMANCE IMAGE

Formats prioritaires :

```text
AVIF
WebP
```

Hero :

```text
priority / eager
```

Images secondaires :

```text
lazy
```

Ratios obligatoires :

```text
Hero: 16/10
About: 4/3
Formation: 16/10
Blog: 16/9
Avatar: 1/1
```

Ne pas laisser les images sans dimensions explicites afin d'éviter le CLS.

---

# 33. MICRO-INTERACTIONS

## Navigation

Hover :

```text
color #E30613
```

Active :

```text
font-weight: 600
```

Option :

```text
border-bottom: 2px solid #E30613
```

## Cards

Hover uniquement sur desktop.

```text
translateY(-2px)
shadow-md
```

## CTA

Hover :

```text
background #B80510
```

Active :

```text
translateY(1px)
```

## Liens

Arrow :

```text
→
```

Animation :

```text
translateX(3px)
```

---

# 34. MOBILE MENU

Primitive :

```text
Sheet
```

Largeur :

```text
100%
```

ou :

```text
min(360px, 100vw)
```

Overlay :

```text
rgba(17,24,39,.50)
```

z-index :

```text
70
```

Fonctionnement :

- verrouiller le scroll ;
- fermeture ESC ;
- fermeture après navigation ;
- focus management ;
- bouton 44×44 minimum.

---

# 35. ÉTATS UI

Tous les composants interactifs doivent prévoir :

```text
default
hover
focus
focus-visible
active
disabled
loading
error
success
```

Bouton loading :

```text
Spinner + texte
```

Exemple :

```text
Envoi en cours...
```

---

# 36. DONNÉES À CENTRALISER

Ne pas coder directement les contenus commerciaux dans les composants.

Exemple :

```ts
export const site = {
  name: "CFIGE",
  fullName: "Centre de Formation Informatique et de Gestion",
  city: "N'Djaména",
  country: "Tchad",
};
```

Formations :

```ts
export const formations = [
  {
    title: "...",
    category: "...",
    description: "...",
    duration: "...",
    level: "...",
    price: "...",
    image: "...",
  },
];
```

Les données non confirmées doivent être :

```text
TODO: À CONFIRMER
```

---

# 37. CONTENU DE LA HOMEPAGE

Ordre exact recommandé :

```text
1. Header
2. Hero
3. Stats
4. À propos
5. Trois expertises
6. Formations
7. Solutions IT
8. Pourquoi CFIGE
9. Méthode
10. Témoignages
11. Actualités / Blog
12. CTA entreprise / final CTA
13. Contact
14. Footer
15. WhatsApp floating button
```

---

# 38. RESPONSIVE — COMPORTEMENT DES SECTIONS

| Section | Desktop | Tablet | Mobile |
|---|---|---|---|
| Header | full nav | compact | menu |
| Hero | 5/7 | stack | stack |
| Stats | 4 | 4/2 | 2×2 |
| About | 5/7 | 1 col | 1 col |
| Expertise | 3 | 2 | 1 |
| Formations | 4 | 2 | 1 |
| Services | 8 | 4 | 2/1 |
| Why CFIGE | 3×2 | 2×3 | 1×6 |
| Method | 3 | 3 | 1 |
| Testimonials | 3 | 2 | 1 |
| Blog | 3 | 2 | 1 |
| Contact | 5/7 | 1 | 1 |
| Footer | 5 cols | 2–3 | 1 |

---

# 39. DIMENSIONS GLOBALES DE RÉFÉRENCE

## Desktop 1440

```text
Viewport: 1440
Container: 1240
Header: 80
Horizontal margin: 100
Section padding: 80
Grid gap: 24
Button: 48
Input: 48
Card radius: 16
Large radius: 20
```

## Desktop 1280

```text
Container: 1200
Horizontal margin: 40
Header: 80
```

## Tablet 820

```text
Container: 772
Horizontal margin: 24
Header: 72
Section padding: 64
```

## Mobile 390

```text
Container: 358
Horizontal margin: 16
Header: 64
Section padding: 56
Button: 48
Input: 48
Card radius: 16
```

## Mobile 360

```text
Container: 328
Horizontal margin: 16
```

---

# 40. CHECKLIST VISUELLE

```text
[ ] Header 80px desktop
[ ] Header 64px mobile
[ ] Container max 1240px
[ ] Grid 12 colonnes desktop
[ ] Gap 24px
[ ] Inter
[ ] Rouge #E30613
[ ] Rouge dark #B80510
[ ] Rouge light #FEE7E9
[ ] Texte #111827
[ ] Border #E5E7EB
[ ] Cards radius 16px
[ ] Buttons radius 10–12px
[ ] Inputs 48px
[ ] Touch target >= 44px
[ ] Hero 2 colonnes desktop
[ ] Hero stack mobile
[ ] Stats 4 desktop / 2×2 mobile
[ ] Formation 4/2/1
[ ] Services responsive
[ ] Footer sombre
[ ] WhatsApp z-110
[ ] Header z-40
[ ] Mobile menu z-70
[ ] Modal z-90
[ ] Toast z-100
[ ] Animations 150–400ms
[ ] Reduced motion
[ ] Aucun overflow horizontal
[ ] Images avec ratios fixes
[ ] Lazy loading hors Hero
[ ] Alt text
[ ] Focus visible
[ ] H1 unique
[ ] Données centralisées
[ ] Aucun contenu commercial inventé
```

---

# 41. DEFINITION OF DONE

La homepage est terminée uniquement si :

```text
✓ Le rendu respecte la maquette
✓ Les tokens CFIGE sont centralisés
✓ Tailwind v4 expose les tokens
✓ Les primitives shadcn sont réutilisées
✓ Les composants spécifiques sont composés autour des primitives
✓ Desktop 1440 validé
✓ Desktop 1280 validé
✓ Tablet 820 validé
✓ Mobile 390 validé
✓ Mobile 360 validé
✓ Aucun overflow horizontal
✓ Aucun CLS important
✓ Focus clavier visible
✓ Navigation mobile accessible
✓ Reduced motion supporté
✓ Images optimisées
✓ Animations discrètes
✓ Données commerciales centralisées
✓ Aucun numéro/email/prix inventé
✓ Aucun composant dupliqué inutilement
```

---

# 42. RÈGLE FINALE POUR OPENCODE / CODEX

```text
Utilise SPEC_HOME_PAGE.md comme spécification d'implémentation.

Ne modifie pas les tokens CFIGE sans justification.

Ne crée pas une nouvelle palette.

Ne remplace pas Inter.

Ne transforme pas toutes les sections en cards.

Réutilise les composants shadcn/ui existants.

Crée les composants métier uniquement lorsqu'ils apportent une structure
spécifique à CFIGE.

Respecte les dimensions, espacements, ratios et z-index définis ici.

Mobile-first obligatoire.

Aucun overflow horizontal.

Toutes les données commerciales doivent être centralisées.

Toute donnée non confirmée doit être marquée:
TODO: À CONFIRMER

Avant de considérer la homepage terminée, tester:
360 × 800
390 × 844
414 × 896
768 × 1024
820 × 1180
1024 × 768
1280 × 800
1440 × 900
1920 × 1080
```

---

# 43. SOURCES TECHNIQUES DE RÉFÉRENCE

Cette spécification reprend les pratiques actuelles de shadcn/ui et Tailwind CSS v4 concernant les primitives, les composants composables et les theme variables.

Références utilisées :

- shadcn/ui — Components
- shadcn/ui — Button
- shadcn/ui — Card
- shadcn/ui — Input
- shadcn/ui — Tabs
- shadcn/ui — Accordion
- Tailwind CSS — Theme variables

