# SPEC_service_PAGE.md

> **Référence visuelle** : capture fournie, **1024 × 1536 px**.  
> **Statut des mesures** : reverse-engineering visuel à partir de la capture (pas de fichier Figma/DOM source).  
> Les valeurs marquées **[REF]** sont calibrées sur la capture 1024 px. Les valeurs CSS proposées sont pensées pour reproduire fidèlement le rendu, avec une tolérance de ±2 px sur les blocs et ±1 px sur les traits/icônes.

---

# 1. Direction visuelle

Page corporate/formation sobre, très claire, dominée par :

- fond principal blanc cassé très léger ;
- rouge CFIGE comme couleur d'accent/action ;
- texte anthracite / bleu nuit ;
- cartes blanches avec bordure gris très claire + ombre diffuse ;
- grands rayons sur les visuels ;
- iconographie linéaire rouge ;
- footer bleu nuit profond ;
- respiration verticale généreuse ;
- style général : **institutionnel, moderne, professionnel, africain/francophone, orienté formation & services**.

La composition est découpée en 8 zones :

1. Header / navigation.
2. Breadcrumb + Hero.
3. Bande de preuves / avantages rapides.
4. Cartes Services.
5. Bloc « Nos Atouts ».
6. Bloc « Vente de Matériels ».
7. CTA rouge.
8. Footer + bouton WhatsApp flottant.

---

# 2. Canvas de référence

## Viewport de la capture

```txt
width: 1024px
height: 1536px
device-pixel-ratio supposé: 1
```

## Grille principale desktop [REF]

```txt
content-max-width visuel: ~928px
left margin: 48px
right margin: 48px
usable content width: 928px
```

CSS recommandé :

```css
.page-container {
  width: min(100% - 96px, 1180px);
  margin-inline: auto;
}
```

Pour reproduire exactement le screenshot à 1024 px :

```css
@media (width: 1024px) {
  .page-container {
    width: 928px;
  }
}
```

Sur une vraie page desktop 1440 px, garder `max-width: 1180px` ou `1200px`.

---

# 3. Tokens Tailwind

## 3.1 Couleurs

Valeurs visuellement rapprochées de la capture.

```ts
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        cfige: {
          red: "#DF0B1C",
          "red-hover": "#C90A19",
          "red-soft": "#FFF2F3",
          "red-border": "#FFBFC5",

          ink: "#1A2733",
          "ink-2": "#273440",
          muted: "#5E6670",
          subtle: "#8A929A",

          surface: "#FFFFFF",
          canvas: "#FDFDFE",
          soft: "#F8F9FA",
          border: "#E9EBEE",
          "border-2": "#F0F1F3",

          footer: "#192A37",
          "footer-2": "#12222E",

          success: "#25D366",
        },
      },

      boxShadow: {
        "card":
          "0 5px 18px rgba(17, 30, 42, 0.045), 0 1px 3px rgba(17, 30, 42, 0.05)",
        "card-hover":
          "0 14px 34px rgba(17, 30, 42, 0.10), 0 2px 6px rgba(17, 30, 42, 0.06)",
        "header":
          "0 1px 0 rgba(17, 30, 42, 0.07)",
        "floating":
          "0 8px 24px rgba(0, 0, 0, 0.18)",
      },

      borderRadius: {
        "card": "12px",
        "hero": "48% 0 0 48%",
        "control": "5px",
        "cta": "9px",
      },

      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
      },

      maxWidth: {
        "site": "1180px",
      },
    },
  },
};
```

## 3.2 Variables CSS / Shadcn

```css
:root {
  --background: 240 20% 99%;
  --foreground: 207 32% 15%;

  --card: 0 0% 100%;
  --card-foreground: 207 32% 15%;

  --popover: 0 0% 100%;
  --popover-foreground: 207 32% 15%;

  --primary: 355 91% 46%;
  --primary-foreground: 0 0% 100%;

  --secondary: 220 14% 96%;
  --secondary-foreground: 207 32% 15%;

  --muted: 220 14% 96%;
  --muted-foreground: 215 10% 42%;

  --accent: 355 100% 97%;
  --accent-foreground: 355 91% 46%;

  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;

  --border: 220 12% 92%;
  --input: 220 12% 92%;
  --ring: 355 91% 46%;

  --radius: 0.625rem;

  --brand-red: #DF0B1C;
  --brand-red-hover: #C90A19;
  --brand-ink: #1A2733;
  --brand-footer: #192A37;
  --brand-whatsapp: #25D366;
}
```

---

# 4. Typographie

La capture semble utiliser une sans-serif moderne proche de **Inter / Arial / Helvetica / Manrope**.

Recommandation :

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

## Échelle typographique [REF]

| Usage | Taille | Line-height | Poids |
|---|---:|---:|---:|
| Menu header | 11px | 16px | 600 |
| Breadcrumb | 11px | 16px | 400 |
| Kicker rouge « CFIGE — » | 29px | 34px | 500 |
| H1 | 47px | 52px | 700 |
| Hero subtitle | 19px | 28px | 500 |
| Hero paragraph | 12px | 19px | 400 |
| Trust item label | 10px | 14px | 500 |
| Card title | 18px | 24px | 700 |
| Card category rouge | 11px | 16px | 600 |
| Card body | 11px | 17px | 400 |
| Section eyebrow | 10px | 14px | 700 |
| H2 section | 27px | 33px | 700 |
| Feature title | 11px | 15px | 600 |
| Feature body | 10px | 15px | 400 |
| Product title | 10px | 14px | 600 |
| Product price | 10px | 14px | 400 |
| CTA title | 18px | 24px | 700 |
| CTA body | 11px | 16px | 400 |
| Footer title | 10px | 14px | 700 |
| Footer links | 10px | 19px | 400 |
| Copyright | 9px | 14px | 400 |

### H1 desktop CSS

```css
.hero-title {
  font-size: clamp(2.5rem, 4.6vw, 3.05rem);
  line-height: 1.08;
  letter-spacing: -0.035em;
  font-weight: 750;
}
```

---

# 5. Header

## Dimensions [REF]

```txt
x: 0
y: 0
w: 1024
h: 71px
```

### Container header

```txt
x: ~45px
w: ~934px
h: 71px
```

### Logo

```txt
x: ~43px
y: ~10px
w: ~137px
h: ~48px
```

Logo visuel réel (hors espace transparent) : environ `135 × 45 px`.

### Navigation

Début vers x `277px`.

Espacement visuel approximatif :

```txt
Accueil      → 65px zone
Formations   → 96px zone
Services     → 78px zone
À propos     → 73px zone
Blog         → 54px zone
Contact      → 67px zone
```

Le lien actif **Services** :

```css
color: var(--brand-red);
font-weight: 600;
```

avec underline rouge :

```txt
width: ~41px
height: 2px
distance under label: ~14px
```

### CTA « S’inscrire »

```txt
x: ~818px
y: ~20px
w: ~92px
h: 31px
radius: 5px
```

CSS :

```css
height: 31px;
padding-inline: 16px;
border-radius: 5px;
font-size: 10px;
font-weight: 600;
background: #DF0B1C;
color: #fff;
```

### WhatsApp header

```txt
center: ~934px, 35px
diameter: ~33px
```

Fond vert doux, icône verte.

### Header sticky recommandé

```css
position: sticky;
top: 0;
z-index: 50;
background: rgba(255,255,255,.96);
backdrop-filter: blur(12px);
border-bottom: 1px solid #EEF0F2;
```

---

# 6. Breadcrumb

```txt
section y: ~72–115px
breadcrumb baseline y: ~94px
x: ~49px
```

Hauteur visuelle : `44px`.

Composition :

```txt
home icon 12×12
gap 10px
"Accueil"
chevron
"Services & Produits" en semi-bold
```

CSS :

```css
font-size: 11px;
color: #69727B;
gap: 10px;
```

Shadcn conseillé : `Breadcrumb`, `BreadcrumbList`, `BreadcrumbItem`, `BreadcrumbSeparator`.

---

# 7. Hero

## Zone [REF]

```txt
top: ~116px
bottom: ~451px
height: ~335px
```

### Colonne texte

```txt
x: 48px
y: 126px
w: ~475px
```

### Kicker

```txt
"CFIGE —"
font-size: ~28px
color: #DF0B1C
```

### H1

```txt
top: ~164px
w: ~470px
2 lignes max possibles mais capture = 1 ligne visuelle longue
```

Texte :

```txt
Services & Produits
```

### Petit trait rouge sous H1

```txt
x: ~49px
y: ~220px
w: 38px
h: 3px
```

### Sous-titre

```txt
top: ~240px
font-size: 18–19px
```

### Paragraphe

```txt
top: ~273px
w: ~467px
4 lignes
line-height: ~19px
```

### Illustration principale hero

```txt
x: ~570px
y: ~71px
w: ~454px
h: ~374px
```

La forme est un masque asymétrique rouge :

- côté gauche : grande courbe / capsule arrondie ;
- haut commence à x ~639 ;
- courbe rouge visible de 8 à 14 px ;
- image collée au bord droit du viewport ;
- bas arrondi à gauche vers x ~600.

Implémentation recommandée :

```tsx
<div className="relative overflow-hidden">
  <div className="absolute inset-0 bg-[#DF0B1C] [clip-path:ellipse(...)]" />
  <img className="relative ..." />
</div>
```

ou plus simple :

```css
.hero-media {
  border-radius: 46% 0 0 46%;
  overflow: hidden;
  border-left: 10px solid #DF0B1C;
}
```

Pour obtenir un contour rouge plus fidèle, utiliser un wrapper rouge avec padding 8px puis un masque intérieur.

### Objet image

```css
object-fit: cover;
object-position: 48% 50%;
```

---

# 8. Rangée « preuves rapides »

Sous le texte hero, vers :

```txt
x: 48px
y: ~381px
h: 43px
w: ~470px
```

4 items en ligne.

Chaque item :

```txt
icon: ~25×25px
gap icon→text: 9px
label: 2 lignes max
```

Séparateurs verticaux :

```txt
height: ~30px
width: 1px
color: #E7E8EA
margin-inline: ~17px
```

Items :

- Formateurs Qualifiés
- Formations Certifiées
- Solutions Performantes
- Accompagnement Personnalisé

Icônes : Lucide ou Tabler en `stroke-width: 1.8`, rouge.

---

# 9. Bloc Services

## Wrapper [REF]

```txt
x: 49px
y: 450px
w: ~925px
h: ~348px
```

Le wrapper global forme un grand panneau très léger :

```css
border: 1px solid #F0F1F3;
border-radius: 10px;
padding: 16px 14px;
box-shadow: 0 2px 12px rgba(17,30,42,.025);
```

## Grille

```txt
3 colonnes
gap horizontal: ~24px
```

Largeur cartes :

```txt
Formation: ~282px
Conseil:   ~282px
Informatique: ~282px
```

### Dimensions carte

```txt
h: ~319px
radius: 10–11px
```

### Image carte

```txt
w: 100%
h: ~147px
radius top: 9px
```

Ratio proche `1.90:1`.

```css
aspect-ratio: 1.9 / 1;
object-fit: cover;
```

### Badge icône rouge

```txt
diameter: 49px
x relative: 7px
y relative: 3px
```

Position :

```css
position: absolute;
top: 4px;
left: 8px;
width: 48px;
height: 48px;
border-radius: 9999px;
background: #E3091C;
color: #fff;
z-index: 3;
```

### Contenu carte

```txt
padding-left/right: ~14px
padding-top: ~12px
```

Titre :

```txt
18px / 24px
margin-bottom: ~5px
```

Sous-titre rouge :

```txt
11px
margin-bottom: ~8px
```

Body :

```txt
11px / 17px
2–3 lignes
```

### Bouton « Voir le détail »

```txt
w: ~106px
h: ~29px
border: 1px solid #FF3141 / #DF0B1C
radius: 4px
margin-top: 13px
```

Contenu :

```txt
chevron-down / petit triangle
gap: 9px
text: 10px medium
```

Shadcn :

```tsx
<Button variant="outline" size="sm">
  <ChevronDown />
  Voir le détail
</Button>
```

### Hover carte

```css
transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
```

```css
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 34px rgba(17, 30, 42, 0.10);
  border-color: rgba(223, 11, 28, 0.18);
}
```

---

# 10. Section « Nos Atouts »

## Position [REF]

```txt
top: ~817px
bottom: ~995px
```

### Eyebrow centré

```txt
y: ~817px
font-size: 10px
uppercase
color: #DF0B1C
```

### H2

```txt
"Nos Atouts"
font-size: ~27px
center
top: ~836px
```

### underline

```txt
w: ~22px
h: 2px
red
```

### Cards

```txt
top: ~876px
x start: ~51px
4 colonnes
gap: ~17px
card width: ~219px
card height: ~116px
```

Card :

```css
border: 1px solid #EEF0F2;
border-radius: 9px;
box-shadow: 0 4px 14px rgba(17,30,42,.035);
padding: 19px 16px;
display: flex;
align-items: flex-start;
gap: 14px;
```

### Boîte icône

```txt
~49×49px
fond rouge très pâle
radius: ~8px
```

### Texte

Titre : `11px / 15px`, 600  
Description : `10px / 15px`, gris.

---

# 11. Section « Vente de Matériels »

## Position [REF]

```txt
top: ~1018px
bottom: ~1192px
```

### Colonne d’introduction

```txt
x: ~51px
w: ~285px
```

Eyebrow :

```txt
"NOS PRODUITS"
10px uppercase red
```

H2 :

```txt
"Vente de Matériels"
22px / 28px
```

Paragraphe :

```txt
10.5–11px
line-height: 17px
max-width: ~270px
```

Bouton :

```txt
w: ~131px
h: 30px
background: red
radius: 4px
```

### Grille produits

Débute vers x `337px`.

4 cartes :

```txt
card width: ~157px
gap: ~8px
height: ~165px
```

Visuel produit :

```txt
height: ~100px
padding: 10px 12px 0
object-fit: contain
```

Texte :

```txt
padding: 8px 12px 11px
title: 10px 600
price: 9.5–10px
```

Cartes :

```css
background: #fff;
border: 1px solid #EEF0F2;
border-radius: 8px;
box-shadow: 0 3px 13px rgba(17,30,42,.035);
```

Produits vus :

1. Ordinateurs Portables — À partir de 250 000 FCFA
2. Ordinateurs de Bureau — À partir de 180 000 FCFA
3. Imprimantes — À partir de 75 000 FCFA
4. Équipements Réseaux — À partir de 45 000 FCFA

---

# 12. CTA rouge

## Zone [REF]

```txt
x: 50px
y: ~1207px
w: ~919px
h: ~84px
radius: 9px
```

Background conseillé :

```css
background: linear-gradient(105deg, #C90717 0%, #E20D20 45%, #C90818 100%);
```

### Décoration gauche

Icône chapeau académique en rouge clair transparent :

```txt
x: ~77px
y: ~1224px
w: ~62px
opacity: 0.18
```

### Texte

```txt
x: ~174px
title y: ~1231px
body y: ~1261px
```

Titre : `18px / 24px`, blanc, 700  
Body : `11px / 16px`, blanc, 400.

### Bouton blanc

```txt
x: ~775px
y: ~1237px
w: ~151px
h: 32px
```

```css
background: #fff;
color: #DF0B1C;
border-radius: 4px;
font-size: 10px;
font-weight: 600;
```

---

# 13. Footer

## Zone [REF]

```txt
y: ~1306px
h: ~230px
w: 1024px
```

Couleur :

```css
background:
  radial-gradient(circle at 50% 10%, rgba(255,255,255,.025), transparent 32%),
  linear-gradient(180deg, #1A2B38 0%, #172733 100%);
```

## Container footer

```txt
x: ~50px
w: ~920px
```

### Grille

Proportions recommandées :

```css
grid-template-columns: 1.35fr 1fr 1fr 1fr 1.05fr;
gap: 38px;
```

### Logo footer

```txt
w: ~112px
h: auto
```

### Description marque

```txt
max-width: 170px
font-size: 9.5px
line-height: 16px
color: rgba(255,255,255,.82)
```

### Réseaux sociaux

Boutons circulaires :

```txt
28×28px
gap: 8px
background: rgba(255,255,255,.10)
```

### Liens footer

Heading : `10px`, blanc, 700  
Liens : `9.5px`, `line-height 19px`, blanc 84%.

### Séparateur footer bas

```txt
y: ~1494px
height: 1px
color: rgba(255,255,255,.11)
```

### Bas de footer

```txt
copyright left
mentions légales / confidentialité right
```

---

# 14. Bouton WhatsApp flottant

## Desktop [REF]

```txt
center x: ~981px
center y: ~1487px
diameter: ~47px
right: ~18px
bottom: ~22px
```

CSS :

```css
position: fixed;
right: 18px;
bottom: 18px;
width: 48px;
height: 48px;
border-radius: 9999px;
background: #25D366;
box-shadow: 0 8px 24px rgba(0,0,0,.18);
z-index: 60;
```

Hover :

```css
transform: translateY(-2px) scale(1.03);
```

---

# 15. Z-index

```ts
export const z = {
  base: 0,
  sectionDecoration: 1,
  heroImage: 2,
  cardBadge: 10,
  dropdown: 40,
  stickyHeader: 50,
  whatsapp: 60,
  mobileDrawerOverlay: 70,
  mobileDrawer: 80,
  tooltip: 90,
  toast: 100,
};
```

Tailwind :

```txt
z-0      base
z-[1]    décors
z-[2]    hero image
z-10     badge carte
z-40     dropdown/menu
z-50     header
z-[60]   WhatsApp
z-[70]   overlay mobile
z-[80]   drawer
z-[90]   tooltip
z-[100]  toast
```

---

# 16. Breakpoints responsive

## Breakpoints Tailwind recommandés

```ts
screens: {
  xs: "420px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
}
```

## ≥ 1280px

- container `max-width: 1180px`;
- hero deux colonnes `55 / 45`;
- services 3 colonnes ;
- atouts 4 colonnes ;
- produits intro + 4 cartes ;
- footer 5 colonnes.

## 1024–1279px

Correspond à la référence.

```txt
container horizontal margin: 48px
header nav visible
hero illustration touches/right viewport possible
```

## 768–1023px

- container : `padding-inline: 32px`;
- header navigation compacte ;
- cacher éventuellement « Blog » ou réduire gaps ;
- hero : grille `52% / 48%`;
- H1 : `40px`;
- services : 2 colonnes + 1 carte pleine ou centrée ;
- atouts : 2×2 ;
- produits : intro pleine largeur puis 2×2 ;
- footer : 3 colonnes / wrap.

## 640–767px

- navbar desktop → menu hamburger ;
- hero en 1 colonne ;
- image hero dessous du texte ;
- supprimer forme collée bord droit ;
- image :
  `border-radius: 24px`,
  `border-left: 0`,
  wrapper rouge de 6px ;
- preuves rapides → grille 2×2 ;
- services → 1 colonne ;
- atouts → 1 ou 2 colonnes ;
- produits → 2 colonnes ;
- CTA → stack vertical ;
- footer → 2 colonnes.

## < 640px

### Container

```css
padding-inline: 18px;
```

### Header

```txt
height: 64px
logo: ~118px
hamburger: 40px
```

### Hero

```txt
breadcrumb top margin: 14px
kicker: 22px
H1: 36px / 40px
subtitle: 17px / 24px
paragraph: 14px / 21px
```

### Services

```txt
1 column
gap: 16px
card image: aspect-ratio 16/9
```

### Atouts

```txt
1 column
card min-height: 98px
```

### Produits

```txt
2 columns down to 390px
1 column below 390px if title wraps badly
```

### CTA

```txt
padding: 24px
button width: 100%
```

### Footer

```txt
1 column
text-align: left
gap: 28px
```

### WhatsApp flottant mobile

```txt
44×44px
right: 14px
bottom: calc(14px + env(safe-area-inset-bottom))
```

---

# 17. Animations

L’original est statique, donc les animations proposées doivent rester discrètes.

## 17.1 Apparition sections

```css
@keyframes fade-up {
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

Usage :

```css
[data-reveal] {
  animation: fade-up 520ms cubic-bezier(.22, 1, .36, 1) both;
}
```

Décalage :

```txt
hero text       0ms
hero media      80ms
proof row       140ms
service cards   80ms incrémental
atouts cards    60ms incrémental
products        60ms incrémental
```

## 17.2 Boutons

```css
transition:
  background-color 160ms ease,
  border-color 160ms ease,
  color 160ms ease,
  transform 160ms ease,
  box-shadow 160ms ease;
```

Hover :

```css
transform: translateY(-1px);
```

Active :

```css
transform: translateY(0) scale(.985);
```

## 17.3 Hero image

Option :

```css
animation: hero-in 700ms cubic-bezier(.2,.8,.2,1) both;
```

```css
@keyframes hero-in {
  from {
    opacity: 0;
    transform: translateX(18px) scale(.985);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
```

## 17.4 Accessibilité motion

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

# 18. Composants Shadcn recommandés

## Header

- `NavigationMenu`
- `Button`
- `Sheet` pour le menu mobile
- `DropdownMenu` pour « Formations » / « Services »

## Breadcrumb

- `Breadcrumb`
- `BreadcrumbList`
- `BreadcrumbItem`
- `BreadcrumbLink`
- `BreadcrumbSeparator`

## Cartes Services / Atouts / Produits

- `Card`
- `CardHeader`
- `CardContent`
- `CardFooter`
- `Button`

## CTA

- `Card` custom ou simple `<section>`
- `Button`

## Footer

Pas besoin d’un composant Shadcn spécial. Utiliser HTML sémantique.

## Feedback / interactions

- `Tooltip`
- `Sonner` / `Toast`
- `Dialog` si une fiche service s’ouvre en modal
- `Accordion` si « Voir le détail » déplie du contenu en mobile

---

# 19. Arborescence de composants React / Next.js

```txt
app/
└── services/
    └── page.tsx

components/
├── site-header.tsx
├── desktop-nav.tsx
├── mobile-nav.tsx
├── breadcrumb-trail.tsx
├── services-hero.tsx
├── proof-strip.tsx
├── service-grid.tsx
├── service-card.tsx
├── advantages-section.tsx
├── advantage-card.tsx
├── products-section.tsx
├── product-card.tsx
├── contact-cta.tsx
├── site-footer.tsx
└── whatsapp-fab.tsx
```

---

# 20. Données des composants

```ts
type Service = {
  title: string;
  category: string;
  description: string;
  image: string;
  icon: LucideIcon;
  href: string;
};

type Advantage = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type Product = {
  title: string;
  priceLabel: string;
  image: string;
  href?: string;
};
```

---

# 21. Exemple ServiceCard

```tsx
<Card className="
  group overflow-hidden rounded-[10px]
  border-[#ECEEF0] bg-white
  shadow-[0_4px_16px_rgba(17,30,42,.04)]
  transition-all duration-200
  hover:-translate-y-1
  hover:shadow-[0_14px_34px_rgba(17,30,42,.10)]
">
  <div className="relative">
    <img
      src={service.image}
      alt=""
      className="aspect-[1.9/1] w-full object-cover"
    />

    <div className="
      absolute left-2 top-1 z-10
      grid size-12 place-items-center rounded-full
      bg-[#DF0B1C] text-white
    ">
      <service.icon className="size-6 stroke-[1.8]" />
    </div>
  </div>

  <CardContent className="px-[14px] pb-[14px] pt-3">
    <h3 className="
      text-[18px] font-bold leading-6 tracking-[-0.02em]
      text-[#1A2733]
    ">
      {service.title}
    </h3>

    <p className="
      mt-1 text-[11px] font-semibold leading-4
      text-[#DF0B1C]
    ">
      {service.category}
    </p>

    <p className="
      mt-2 text-[11px] leading-[17px]
      text-[#4F5963]
    ">
      {service.description}
    </p>

    <Button
      variant="outline"
      size="sm"
      className="
        mt-3 h-[29px] rounded-[4px]
        border-[#DF0B1C] px-3
        text-[10px] font-medium text-[#DF0B1C]
        hover:bg-[#FFF2F3]
      "
    >
      <ChevronDown className="mr-1.5 size-3" />
      Voir le détail
    </Button>
  </CardContent>
</Card>
```

---

# 22. Icônes

Style recommandé :

```txt
library: lucide-react
stroke width: 1.7–1.9
caps/joins: round
```

Mapping :

```txt
Accueil breadcrumb         Home
Formation                  GraduationCap
Conseil                    UserRound / Handshake
Informatique               Monitor
Formateurs qualifiés       Presentation
Formations certifiées      Award
Solutions performantes     ChartNoAxesCombined
Accompagnement             Headphones
Atout pédagogie            BookOpen
Certification              BadgeCheck / Medal
Solutions modernes         Laptop
Téléphone                  Phone
Email                      Mail
Adresse                    MapPin
CTA                        GraduationCap
WhatsApp                   icône de marque dédiée
```

---

# 23. Images / illustrations

## Hero

- photo d’équipe de 3 personnes devant le bâtiment CFIGE ;
- cadrage horizontal ;
- sujet principal à droite de la colonne texte ;
- tons naturels, bâtiment gris, accents rouges ;
- conserver le logo CFIGE du bâtiment lisible si juridiquement autorisé.

## Service Formation

- salle de classe ;
- femme au premier plan en train d’écrire ;
- autres apprenants en arrière-plan ;
- profondeur de champ légère.

## Service Conseil

- table de travail ;
- mains, documents, graphiques, stylo ;
- ambiance business.

## Service Informatique

- développeur/technicien face à un écran de code ;
- plan 3/4 arrière ;
- bureau clair.

## Produits

- fond blanc ou transparent ;
- ombre produit extrêmement légère ;
- `object-fit: contain`;
- cohérence de perspective entre les 4 images.

---

# 24. Dimensions verticales globales [REF]

Les limites suivantes permettent de reproduire très précisément le rythme du screenshot :

```txt
Header                          0 → 71
Breadcrumb                     71 → 116
Hero                           116 → 449
Services panel                 449 → 799
Atouts intro + cards           807 → 995
Produits                      1019 → 1191
CTA                           1207 → 1292
Gap before footer             1292 → 1306
Footer                        1306 → 1536
```

---

# 25. Espacement vertical recommandé

```txt
breadcrumb → hero kicker:       14px
kicker → H1:                     6px
H1 → underline:                 12px
underline → subtitle:           16px
subtitle → body:                 8px
body → proof row:               30px

hero → services:                20–24px
services → atouts eyebrow:      19px
atouts title → cards:           16px
atouts → products:              28px
products → CTA:                 20px
CTA → footer:                   14px
```

---

# 26. États interactifs

## Navigation

```txt
default: #111820
hover: #DF0B1C
active: #DF0B1C + underline
focus-visible: ring 2px red / offset 3px
```

## Bouton primaire

```txt
default: #DF0B1C
hover: #C90A19
active: #B70917
disabled: opacity .45
```

## Bouton outline rouge

```txt
default:
  border #DF0B1C
  text #DF0B1C
  bg transparent

hover:
  bg #FFF2F3

active:
  bg #FFE8EB
```

## Liens footer

```txt
default: rgba(255,255,255,.82)
hover: #fff
```

---

# 27. Accessibilité

Minimum recommandé :

```txt
body text contrast ≥ 4.5:1
button text contrast ≥ 4.5:1
focus-visible apparent
tap target mobile ≥ 44×44px
alt text utile sur images informatives
images décoratives alt=""
nav avec aria-label
footer avec landmarks
CTA WhatsApp avec aria-label explicite
```

Le rouge #DF0B1C sur blanc passe généralement pour du texte moyen/grand, mais pour les micro-textes de 10–11 px, préférer un rouge légèrement plus sombre (`#C90A19`) si l’audit WCAG l’exige.

---

# 28. SEO / sémantique

Structure :

```html
<header>
  <nav />
</header>

<main>
  <nav aria-label="Fil d'Ariane" />
  <section aria-labelledby="hero-title" />
  <section aria-labelledby="services-title" />
  <section aria-labelledby="advantages-title" />
  <section aria-labelledby="products-title" />
  <section aria-labelledby="contact-cta-title" />
</main>

<footer />
```

Un seul `<h1>` : `Services & Produits`.

---

# 29. Performance

- images hero/services en WebP ou AVIF ;
- hero prioritaire (`priority` avec Next/Image) ;
- autres images lazy-loaded ;
- `sizes` responsive ;
- réserver la taille de toutes les images pour éviter CLS ;
- SVG pour icônes ;
- pas d’ombre lourde bitmap ;
- éviter animation JS permanente ;
- preload uniquement de la police réellement utilisée.

Exemple Next/Image :

```tsx
<Image
  src={src}
  alt={alt}
  fill
  sizes="(max-width: 767px) 100vw, (max-width: 1199px) 45vw, 540px"
  className="object-cover"
/>
```

---

# 30. Tailwind — classes de layout principales

## Page

```txt
min-h-screen bg-[#FDFDFE] text-[#1A2733]
```

## Container

```txt
mx-auto w-[calc(100%-36px)]
sm:w-[calc(100%-48px)]
md:w-[calc(100%-64px)]
lg:w-[928px]
xl:w-full xl:max-w-[1180px]
```

## Services grid

```txt
grid grid-cols-1 gap-4
md:grid-cols-2
lg:grid-cols-3 lg:gap-6
```

## Atouts grid

```txt
grid grid-cols-1 gap-4
sm:grid-cols-2
lg:grid-cols-4
```

## Produits

```txt
grid gap-5
lg:grid-cols-[285px_1fr]
```

Sous-grille :

```txt
grid grid-cols-2 gap-2
md:grid-cols-4
```

## Footer

```txt
grid grid-cols-1 gap-7
sm:grid-cols-2
lg:grid-cols-[1.35fr_1fr_1fr_1fr_1.05fr] lg:gap-9
```

---

# 31. Tokens de radius

```txt
Header CTA            5px
Hero photo            custom / 46% left capsule
Service outer panel  10px
Service card         10px
Service image        9px top
Service badge        999px
Outline button        4px
Atout card            9px
Atout icon tile       8px
Product card          8px
CTA                    9px
CTA white button       4px
Social button        999px
WhatsApp             999px
```

---

# 32. Ombres

```css
/* Service / Atout / Produit */
--shadow-card:
  0 4px 16px rgba(17, 30, 42, 0.04),
  0 1px 2px rgba(17, 30, 42, 0.025);

/* hover */
--shadow-card-hover:
  0 14px 34px rgba(17, 30, 42, 0.10),
  0 2px 6px rgba(17, 30, 42, 0.05);

/* WhatsApp */
--shadow-floating:
  0 8px 24px rgba(0, 0, 0, 0.18);
```

---

# 33. Bordures

```txt
global subtle:  #EEF0F2
cards:          #EBEDF0
panel services: #F0F1F3
red control:    #DF0B1C
footer divider: rgba(255,255,255,.10)
```

---

# 34. Détails de fidélité visuelle

Pour éviter un rendu « template générique » :

1. Garder le H1 très dense avec tracking négatif.
2. Ne pas sur-arrondir les cartes : 8–12 px, pas 20–24 px.
3. Les ombres doivent être presque invisibles.
4. Utiliser beaucoup de blanc, mais des séparations fines.
5. Les icônes rouges doivent être fines, jamais remplies sauf badges.
6. Le hero doit toucher visuellement le bord droit.
7. Le footer doit être compact et dense.
8. Le CTA rouge ne doit pas dépasser ~85 px de hauteur sur desktop.
9. Les cartes produits sont plus petites et plus serrées que les cartes services.
10. Le bouton WhatsApp flotte au-dessus du footer et reste visible.

---

# 35. Variante de container CSS fidèle à 1024 px

```css
:root {
  --site-padding: 48px;
  --site-max: 1180px;
}

.container-site {
  width: min(
    calc(100% - (var(--site-padding) * 2)),
    var(--site-max)
  );
  margin-inline: auto;
}

@media (max-width: 1023px) {
  :root {
    --site-padding: 32px;
  }
}

@media (max-width: 639px) {
  :root {
    --site-padding: 18px;
  }
}
```

---

# 36. Checklist d’intégration

```txt
[ ] Header hauteur 71px desktop
[ ] Logo ~137×48px à 1024px
[ ] Container 928px à 1024px
[ ] H1 ~47px
[ ] Hero media ~454×374px
[ ] Trait rouge sous H1
[ ] Proof strip 4 items
[ ] 3 services en desktop
[ ] Badge rond rouge 48px
[ ] Cards services ~319px de haut
[ ] Section atouts 4 cartes
[ ] Produits : intro + 4 cartes compactes
[ ] CTA rouge ~84px de haut
[ ] Footer démarre vers y=1306 sur capture 1536px
[ ] WhatsApp FAB 48px
[ ] Header z-50 / WhatsApp z-[60]
[ ] prefers-reduced-motion géré
[ ] menu mobile en Sheet
[ ] focus visible accessible
[ ] images optimisées AVIF/WebP
```

---

# 37. Résumé des mesures clés [REF]

| Élément | Mesure |
|---|---|
| Capture | 1024 × 1536 px |
| Container principal | ~928 px |
| Marges desktop réf. | 48 px |
| Header | 71 px |
| Logo header | ~137 × 48 px |
| CTA header | ~92 × 31 px |
| Hero | ~335 px de haut |
| Hero image | ~454 × 374 px |
| H1 | ~47 / 52 px |
| Services outer panel | ~925 × 348 px |
| Service card | ~282 × 319 px |
| Service image | ~282 × 147 px |
| Badge service | ~48 px |
| Bouton détail | ~106 × 29 px |
| Atout card | ~219 × 116 px |
| Product card | ~157 × 165 px |
| CTA principal | ~919 × 84 px |
| Footer | ~230 px |
| WhatsApp FAB | ~48 px |

---

# 38. Note sur la précision

Cette spécification est reconstruite à partir d’une **capture raster 1024 × 1536**.  
Elle peut donc reproduire la page au pixel près visuellement, mais elle ne prétend pas connaître :

- les dimensions CSS originales exactes ;
- le font-family original exact ;
- les fichiers SVG/icon packs originaux ;
- les règles responsive originales ;
- le code source ;
- les vrais tokens du design system.

Pour une fidélité réellement **1:1 au code d’origine**, il faudrait le Figma, le site en ligne, le DOM/CSS ou les assets sources. Les valeurs ci-dessus constituent une base de production très proche et directement exploitable avec **Next.js + Tailwind + Shadcn/ui**.
