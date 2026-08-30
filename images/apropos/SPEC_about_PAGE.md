# SPEC_about_PAGE.md

> **Page de référence : À propos — CFIGE**
>
> Référence raster analysée : **878 × 1790 px**.
>
> Cette spécification est une reconstruction visuelle destinée à reproduire la page avec **Next.js + Tailwind CSS + Shadcn/ui + Lucide React**. Les mesures sont calibrées à partir de la capture ; elles ne correspondent pas forcément au CSS source original.

---

# 1. Vue d’ensemble

La page suit le même design system que les pages CFIGE précédentes :

- fond blanc ;
- couleur primaire rouge CFIGE ;
- titres anthracite/noir bleuté ;
- cartes blanches à bordure gris très clair ;
- ombres presque invisibles ;
- petits labels uppercase rouges ;
- icônes linéaires rouges sur fond rouge pâle ;
- boutons rouges compacts ;
- footer bleu nuit ;
- grands espacements verticaux mais composants compacts.

Sections visibles :

1. Header
2. Hero « Qui sommes-nous ? »
3. Notre histoire + statistiques
4. Nos valeurs
5. Notre méthode
6. Notre équipe
7. Footer
8. Bouton WhatsApp flottant

---

# 2. Canvas de référence

```txt
Viewport : 878 × 1790 px
```

Container principal :

```txt
left margin  ≈ 43px
right margin ≈ 43px
content width ≈ 792px
```

CSS recommandé :

```css
.container-site {
  width: min(calc(100% - 86px), 1180px);
  margin-inline: auto;
}
```

À 878 px :

```txt
878 - 86 = 792 px
```

---

# 3. Tokens couleurs

```ts
export const colors = {
  brand: {
    red: "#E10B1A",
    redHover: "#C90A18",
    redSoft: "#FFF1F2",
    redSoft2: "#FDE9EB",
  },

  ink: {
    primary: "#17212B",
    secondary: "#303B45",
    muted: "#626A73",
  },

  surface: {
    page: "#FFFFFF",
    card: "#FFFFFF",
    subtle: "#FAFAFB",
  },

  border: {
    default: "#ECEEF0",
    soft: "#F1F2F4",
  },

  footer: {
    bg: "#192A37",
    bg2: "#14242F",
    text: "#FFFFFF",
    muted: "rgba(255,255,255,.78)",
    divider: "rgba(255,255,255,.11)",
  },

  whatsapp: "#25D366",
};
```

Shadcn CSS variables :

```css
:root {
  --background: 0 0% 100%;
  --foreground: 208 29% 13%;

  --card: 0 0% 100%;
  --card-foreground: 208 29% 13%;

  --primary: 356 91% 46%;
  --primary-foreground: 0 0% 100%;

  --secondary: 220 14% 96%;
  --secondary-foreground: 208 29% 13%;

  --muted: 220 14% 96%;
  --muted-foreground: 215 9% 43%;

  --accent: 355 100% 97%;
  --accent-foreground: 356 91% 46%;

  --border: 220 12% 92%;
  --input: 220 12% 92%;
  --ring: 356 91% 46%;

  --radius: 0.625rem;
}
```

---

# 4. Typographie

Police recommandée :

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

Échelle approximative :

| Élément | Taille | Line-height | Poids |
|---|---:|---:|---:|
| Nav | 10–11px | 16px | 600 |
| Kicker rouge | 10px | 14px | 700 |
| Hero H1 | 36px | 42px | 750 |
| Hero texte | 11px | 19px | 400 |
| H2 section | 25px | 31px | 700 |
| Body | 10.5–11px | 17–19px | 400 |
| Stat valeur | 28px | 32px | 750 |
| Stat label | 10px | 15px | 400 |
| Card title | 14px | 20px | 700 |
| Card body | 10.5px | 17px | 400 |
| Team name | 13px | 18px | 700 |
| Team role | 10px | 14px | 600 |

Tracking des titres :

```css
letter-spacing: -0.025em;
```

---

# 5. Header

Dimensions référence :

```txt
x: 0
y: 0
w: 878px
h: ~68px
```

Container header :

```txt
x ≈ 43px
w ≈ 792px
```

Logo :

```txt
x ≈ 47px
y ≈ 10px
w ≈ 102px
h ≈ 41px
```

Navigation :

```txt
Accueil
Formations + chevron
Services + chevron
À propos
Blog
Contact
```

Lien actif « À propos » :

```css
color: #E10B1A;
font-weight: 600;
```

Underline :

```txt
width ≈ 42px
height: 2px
bottom ≈ 12px
```

CTA « S’inscrire » :

```txt
w ≈ 86px
h ≈ 30px
radius ≈ 5px
```

WhatsApp header :

```txt
diamètre ≈ 26px
```

Header recommandé :

```css
.site-header {
  height: 68px;
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255,255,255,.97);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #F0F1F3;
}
```

---

# 6. Hero « Qui sommes-nous ? »

## Zone globale

```txt
top ≈ 69px
bottom ≈ 354px
height ≈ 285px
```

Grille :

```txt
left content : ~43%
right image  : ~57%
gap          : ~34px
```

Implémentation :

```css
grid-template-columns: 0.92fr 1.25fr;
gap: 32px;
align-items: stretch;
```

---

## 6.1 Colonne texte Hero

Position :

```txt
x ≈ 49px
y ≈ 140px
w ≈ 335px
```

Kicker :

```txt
À PROPOS —
```

Style :

```css
font-size: 10px;
font-weight: 700;
text-transform: uppercase;
color: #E10B1A;
```

Trait rouge :

```txt
width ≈ 24px
height: 2px
```

H1 :

```txt
Qui sommes-nous ?
```

Disposition visuelle :

- « Qui » en anthracite ;
- « sommes-nous ? » en rouge.

CSS :

```css
font-size: 36px;
line-height: 1.12;
font-weight: 750;
letter-spacing: -0.035em;
```

Markup :

```tsx
<h1>
  Qui <span className="text-primary">sommes-nous ?</span>
</h1>
```

Paragraphe :

```txt
top gap après H1 ≈ 20px
max-width ≈ 335px
4 lignes
```

Style :

```css
font-size: 11px;
line-height: 1.8;
color: #303B45;
```

---

## 6.2 Image Hero

Position :

```txt
x ≈ 428px
y ≈ 68px
w ≈ 450px
h ≈ 286px
```

La photo touche presque le bord droit de la fenêtre.

Aspect :

```txt
ratio ≈ 1.57:1
```

CSS :

```css
.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
```

Rayon :

```txt
0–2 px
```

Pas de grosse bordure arrondie.

---

# 7. Section « Notre histoire »

## Zone

```txt
top ≈ 365px
bottom ≈ 540px
```

Grille desktop :

```txt
colonne texte : ~34%
stats          : ~66%
gap            : 30px
```

---

## 7.1 Bloc texte

Kicker :

```txt
NOTRE HISTOIRE —
```

H2 :

```txt
De la vision à la réalité
```

Style :

```css
font-size: 25px;
line-height: 31px;
font-weight: 700;
```

Body :

2 paragraphes avec environ `14–18px` entre eux.

```css
font-size: 10.5px;
line-height: 18px;
color: #434C55;
```

---

## 7.2 Statistiques

Grille 4 colonnes.

```txt
4 cards
gap ≈ 10px
```

Chaque card :

```txt
width ≈ 111px
height ≈ 154px
```

CSS :

```css
.stat-card {
  min-height: 154px;
  border: 1px solid #ECEEF0;
  border-radius: 9px;
  background: #fff;
  box-shadow:
    0 4px 16px rgba(17,30,42,.035),
    0 1px 2px rgba(17,30,42,.025);
}
```

Padding :

```txt
top: 17px
left/right: 13px
bottom: 14px
```

Icône :

```txt
container: 44×44px
radius: 999px
background: #FFF1F2
icon: ~23px
color: #E10B1A
```

Valeur :

```txt
200+
12+
5
95%
```

Style :

```css
font-size: 28px;
font-weight: 750;
line-height: 1;
```

Label :

```css
font-size: 10px;
line-height: 15px;
text-align: center;
```

---

# 8. Section « Nos valeurs »

## Zone

```txt
top ≈ 561px
bottom ≈ 963px
```

Titre centré :

```txt
CE QUI NOUS GUIDE —
Nos valeurs
```

H2 :

```css
font-size: 25px;
font-weight: 700;
text-align: center;
```

---

## 8.1 Grille valeurs

```txt
3 colonnes × 2 lignes
gap horizontal ≈ 13px
gap vertical ≈ 12px
```

Carte :

```txt
width ≈ 247px
height ≈ 161px
```

CSS :

```css
.value-card {
  border: 1px solid #ECEEF0;
  border-radius: 8px;
  background: #fff;
  padding: 16px 17px;
  box-shadow: 0 4px 14px rgba(17,30,42,.03);
}
```

Icon tile :

```txt
52×52px
background: #FFF1F2
border-radius: 999px
```

Icône :

```txt
24–26px
stroke: 1.8px
color: #E10B1A
```

Titre :

```css
font-size: 14px;
line-height: 20px;
font-weight: 700;
margin-top: 9px;
```

Body :

```css
font-size: 10.5px;
line-height: 17px;
color: #414A53;
```

Valeurs :

```txt
Excellence
Proximité
Innovation
Impact
Certification & diplômes
Réseau
```

Icônes Lucide :

```txt
Excellence                Target
Proximité                 Handshake
Innovation                Lightbulb
Impact                    Globe2
Certification & diplômes  ScrollText / BadgeCheck
Réseau                     Link2
```

---

# 9. Section « Notre méthode »

## Zone

```txt
top ≈ 975px
bottom ≈ 1182px
```

En-tête centré :

```txt
NOTRE MÉTHODE —
Comment nous travaillons
```

H2 :

```css
font-size: 25px;
line-height: 31px;
font-weight: 700;
```

---

## 9.1 Cards méthode

```txt
3 colonnes
gap ≈ 13px
```

Card :

```txt
height ≈ 124px
```

CSS :

```css
.method-card {
  position: relative;
  border: 1px solid #ECEEF0;
  border-radius: 9px;
  padding: 20px 16px 15px 84px;
  background: #fff;
}
```

Numéro flottant :

```txt
diameter ≈ 31px
top ≈ -13px
left ≈ 25px
```

Style :

```css
background: #E10B1A;
color: #fff;
font-size: 11px;
font-weight: 700;
border-radius: 999px;
```

Icon tile :

```txt
52×52px
position left-bottom-ish
background: #FFF1F2
```

Titre :

```css
font-size: 11px;
font-weight: 700;
```

Body :

```css
font-size: 9.5–10px;
line-height: 16px;
```

Connecteur rouge pointillé entre les cartes :

```css
border-top: 1px dashed rgba(225,11,26,.55);
```

z-index :

```txt
connector: 0
cards: 1
number badge: 2
```

Étapes :

```txt
01 Évaluation des besoins
02 Formation pratique
03 Certification & suivi
```

---

# 10. Section « Notre équipe »

## Zone

```txt
top ≈ 1194px
bottom ≈ 1536px
```

Header centré :

```txt
LES PERSONNES DERRIÈRE LE CFIGE
Notre équipe
```

Grille :

```txt
4 colonnes
gap ≈ 16px
```

Carte équipe :

```txt
width ≈ 174px
height ≈ 268px
```

---

## 10.1 Photo membre

```txt
height ≈ 121px
width 100%
```

Ratio :

```txt
~1.45:1
```

CSS :

```css
object-fit: cover;
object-position: top center;
border-radius: 8px 8px 0 0;
```

---

## 10.2 Contenu membre

```css
padding: 12px 13px 14px;
text-align: center;
```

Nom :

```css
font-size: 13px;
font-weight: 700;
```

Rôle :

```css
font-size: 10px;
font-weight: 600;
color: #E10B1A;
```

Bio :

```css
font-size: 9.5px;
line-height: 16px;
color: #4F5861;
```

Réseaux :

```txt
LinkedIn
Email
```

Boutons :

```txt
25×25px
radius: 999px
background: #F4F5F6
```

---

# 11. Footer

## Zone

```txt
top ≈ 1540px
bottom = 1790px
height ≈ 250px
```

Background :

```css
background:
  linear-gradient(180deg, #1A2B38 0%, #152530 100%);
```

Container :

```txt
x ≈ 43px
width ≈ 792px
```

Grid :

```css
grid-template-columns:
  1.25fr
  1fr
  1fr
  .85fr
  1.1fr;
gap: 30px;
```

Logo :

```txt
w ≈ 100px
```

Description :

```css
font-size: 9px;
line-height: 15px;
color: rgba(255,255,255,.82);
```

Footer headings :

```css
font-size: 9px;
font-weight: 700;
color: white;
```

Liens :

```css
font-size: 9px;
line-height: 18px;
color: rgba(255,255,255,.82);
```

Divider bas :

```css
height: 1px;
background: rgba(255,255,255,.10);
```

Copyright :

```css
font-size: 8.5px;
```

---

# 12. Bouton WhatsApp flottant

Position :

```txt
right ≈ 21px
bottom ≈ 18px
diameter ≈ 43px
```

CSS :

```css
.whatsapp-fab {
  position: fixed;
  right: 20px;
  bottom: 18px;
  width: 44px;
  height: 44px;
  z-index: 60;
  border-radius: 999px;
  background: #25D366;
  box-shadow: 0 8px 24px rgba(0,0,0,.18);
}
```

---

# 13. Espacements verticaux

Rythme recommandé :

```txt
header → hero              0–8px
hero → histoire            18px
histoire → valeurs         30px
titre valeurs → grid       17px
grid valeurs → méthode     26px
titre méthode → cards      18px
méthode → équipe           23px
titre équipe → cards       18px
équipe → footer            25px
```

---

# 14. Radius

```txt
header CTA          5px
hero image          0–2px
stat cards          9px
value cards         8px
method cards        9px
team cards          8px
team image          8px top
icon circles       999px
social circles     999px
WhatsApp           999px
```

---

# 15. Ombres

Cartes :

```css
box-shadow:
  0 4px 15px rgba(17,30,42,.035),
  0 1px 2px rgba(17,30,42,.025);
```

Hover :

```css
box-shadow:
  0 14px 32px rgba(17,30,42,.09),
  0 2px 5px rgba(17,30,42,.04);
```

Ne pas utiliser d’ombre forte.

---

# 16. Z-index

```ts
export const zIndex = {
  base: 0,
  methodConnector: 0,
  card: 1,
  badges: 2,
  dropdown: 40,
  header: 50,
  whatsapp: 60,
  drawerOverlay: 70,
  drawer: 80,
  toast: 100,
};
```

---

# 17. Breakpoints responsive

```ts
screens: {
  xs: "420px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
}
```

## ≥ 1024px

- Hero 2 colonnes
- Stats 4 colonnes
- Valeurs 3 × 2
- Méthode 3 colonnes
- Équipe 4 colonnes
- Footer 5 colonnes

## 768–1023px

Hero :

```txt
grid 45 / 55
H1 32px
```

Stats :

```txt
2×2
```

Valeurs :

```txt
2 colonnes × 3 lignes
```

Méthode :

```txt
3 colonnes possibles si largeur suffisante,
sinon 1 colonne
```

Équipe :

```txt
2×2
```

Footer :

```txt
3 colonnes + wrap
```

## < 768px

Hero :

```txt
1 colonne
texte au-dessus
image dessous
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
connecteurs verticaux optionnels
```

Équipe :

```txt
1 ou 2 colonnes
```

Footer :

```txt
2 colonnes
```

## < 640px

Container :

```css
width: calc(100% - 36px);
```

Hero H1 :

```css
font-size: 34px;
```

Stats :

```txt
2 colonnes
card min-height 135px
```

Équipe :

```txt
1 colonne à partir de ~420px
```

Footer :

```txt
1 colonne
```

---

# 18. Animations

La page doit rester institutionnelle et sobre.

## Reveal

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

```css
[data-reveal] {
  animation: fade-up 520ms cubic-bezier(.22,1,.36,1) both;
}
```

Staggers :

```txt
stats       +60ms/card
values      +50ms/card
methods     +80ms/card
team        +60ms/card
```

Hover cartes :

```css
transition:
  transform 180ms ease,
  box-shadow 180ms ease,
  border-color 180ms ease;
```

```css
.card:hover {
  transform: translateY(-3px);
  border-color: rgba(225,11,26,.16);
}
```

Réduction mouvement :

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
  }
}
```

---

# 19. Composants Shadcn recommandés

Header :

```txt
NavigationMenu
DropdownMenu
Button
Sheet (mobile)
```

Cards :

```txt
Card
CardContent
```

Team :

```txt
Card
Avatar éventuellement
Button variant ghost pour réseaux
Tooltip
```

Footer :

HTML sémantique custom.

Pas besoin de :

```txt
Carousel
Tabs
Accordion
```

pour la version desktop de référence.

---

# 20. Icônes Lucide

Mapping :

```txt
200+ apprenants          UsersRound
12+ formations           GraduationCap
5 années                 CalendarDays
95% satisfaction         Star

Excellence               Target
Proximité                Handshake
Innovation               Lightbulb
Impact                    Globe2
Certification            ScrollText / BadgeCheck
Réseau                    Link2

Étape 01                 UserRoundCheck
Étape 02                 BookOpen
Étape 03                 ShieldCheck

Téléphone                Phone
Email                    Mail
Adresse                  MapPin
LinkedIn                 icône de marque
```

Stroke :

```txt
1.7–1.9px
```

---

# 21. Structure React / Next.js

```txt
app/
└── a-propos/
    └── page.tsx

components/
└── about/
    ├── about-hero.tsx
    ├── history-section.tsx
    ├── stat-card.tsx
    ├── values-section.tsx
    ├── value-card.tsx
    ├── method-section.tsx
    ├── method-card.tsx
    ├── team-section.tsx
    └── team-card.tsx

components/
├── site-header.tsx
├── site-footer.tsx
└── whatsapp-fab.tsx
```

---

# 22. Données

```ts
export const stats = [
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
export const values = [
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
      "Des solutions concrètes pensées pour les réalités économiques du Tchad et à l'international.",
    icon: Globe2,
  },
  {
    title: "Certification & diplômes",
    description:
      "Des attestations et diplômes reconnus qui valorisent vos compétences sur le marché de l'emploi.",
    icon: ScrollText,
  },
  {
    title: "Réseau",
    description:
      "Des partenariats avec des entreprises locales et internationales pour faciliter l'insertion professionnelle.",
    icon: Link2,
  },
];
```

```ts
export const methods = [
  {
    number: "01",
    title: "Évaluation des besoins",
    description:
      "Nous analysons votre profil et vos objectifs pour recommander la formation la plus adaptée.",
  },
  {
    number: "02",
    title: "Formation pratique",
    description:
      "Nos cours privilégient la mise en pratique immédiate sur des cas concrets du marché tchadien et d'ailleurs.",
  },
  {
    number: "03",
    title: "Certification & suivi",
    description:
      "Vous repartez avec une attestation ou un diplôme certifié et un accompagnement pour votre insertion professionnelle.",
  },
];
```

---

# 23. Exemple ValueCard

```tsx
<Card
  className="
    rounded-[8px]
    border-[#ECEEF0]
    bg-white
    p-0
    shadow-[0_4px_14px_rgba(17,30,42,.03)]
    transition-all duration-200
    hover:-translate-y-[3px]
    hover:border-red-200
    hover:shadow-[0_14px_32px_rgba(17,30,42,.09)]
  "
>
  <CardContent className="p-[17px]">
    <div
      className="
        grid size-[52px]
        place-items-center
        rounded-full
        bg-[#FFF1F2]
        text-[#E10B1A]
      "
    >
      <Icon className="size-[25px] stroke-[1.8]" />
    </div>

    <h3
      className="
        mt-[9px]
        text-[14px]
        font-bold
        leading-5
        tracking-[-0.02em]
        text-[#17212B]
      "
    >
      {title}
    </h3>

    <p
      className="
        mt-[5px]
        text-[10.5px]
        leading-[17px]
        text-[#414A53]
      "
    >
      {description}
    </p>
  </CardContent>
</Card>
```

---

# 24. Exemple StatCard

```tsx
<Card
  className="
    flex min-h-[154px]
    flex-col items-center
    rounded-[9px]
    border-[#ECEEF0]
    bg-white
    px-[13px]
    py-[17px]
    text-center
    shadow-[0_4px_16px_rgba(17,30,42,.035)]
  "
>
  <div
    className="
      grid size-11 place-items-center
      rounded-full
      bg-[#FFF1F2]
      text-[#E10B1A]
    "
  >
    <Icon className="size-[23px] stroke-[1.8]" />
  </div>

  <strong
    className="
      mt-[9px]
      text-[28px]
      font-[750]
      leading-none
      tracking-[-0.03em]
    "
  >
    {value}
  </strong>

  <span
    className="
      mt-[10px]
      text-[10px]
      leading-[15px]
      text-[#4C555E]
    "
  >
    {label}
  </span>
</Card>
```

---

# 25. Layout Tailwind des sections

Hero :

```txt
grid
lg:grid-cols-[.92fr_1.25fr]
lg:gap-8
```

Histoire :

```txt
grid
lg:grid-cols-[.72fr_1.28fr]
gap-7
```

Stats :

```txt
grid grid-cols-2
lg:grid-cols-4
gap-2.5
```

Valeurs :

```txt
grid grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-3
```

Méthode :

```txt
grid grid-cols-1
lg:grid-cols-3
gap-3
```

Équipe :

```txt
grid grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-4
```

Footer :

```txt
grid grid-cols-1
sm:grid-cols-2
lg:grid-cols-[1.25fr_1fr_1fr_.85fr_1.1fr]
gap-7
```

---

# 26. Dimensions verticales globales [REF]

```txt
Header                 0 → ~68
Hero                  ~68 → ~354
Histoire              ~365 → ~540
Valeurs               ~561 → ~963
Méthode               ~975 → ~1182
Équipe                ~1194 → ~1536
Footer                ~1540 → 1790
```

Tolérance recommandée :

```txt
± 4 px sections
± 2 px cards
± 1 px borders/icons
```

---

# 27. Accessibilité

```txt
1 seul H1
headings hiérarchisés H2/H3
alt="" sur les portraits purement décoratifs uniquement si nom adjacent
sinon alt="Portrait de …"
focus-visible sur tous les liens
touch target mobile ≥44px
aria-label WhatsApp
aria-label LinkedIn / email
contraste texte ≥4.5:1
```

Le rouge peut être légèrement assombri pour les micro-textes :

```txt
#C90A18
```

---

# 28. Performance

Hero :

```txt
priority
AVIF/WebP
dimensions définies
```

Photos équipe :

```txt
lazy-loading
AVIF/WebP
sizes correct
```

Icônes :

```txt
SVG/Lucide
pas de PNG
```

Images sources :

```txt
Hero idéal : 1600 × 1000 minimum
Team : 500 × 420 minimum
```

---

# 29. Détails visuels importants

Pour conserver exactement le design system :

1. Ne pas sur-arrondir les composants.
2. Garder les ombres très faibles.
3. Utiliser le rouge surtout pour les accents, pas comme grande surface.
4. Garder beaucoup de blanc.
5. Les titres doivent avoir un tracking négatif subtil.
6. Les sections « valeurs », « méthode » et « équipe » ont leurs titres centrés.
7. La section « histoire » reste asymétrique : texte à gauche, stats à droite.
8. Les icônes sont rouges dans des pastilles rose très pâle.
9. Les cartes équipe sont très verticales et sobres.
10. Le footer doit rester dense et bleu nuit.
11. Les boutons et CTA doivent rester compacts.
12. Le Hero n’a pas de gros overlay ni de forme rouge : il repose sur un layout texte + photo.

---

# 30. Checklist finale

```txt
[ ] viewport de réf. 878×1790
[ ] container ≈792px
[ ] header ≈68px
[ ] Hero 2 colonnes
[ ] H1 « Qui sommes-nous ? »
[ ] partie « sommes-nous ? » rouge
[ ] Hero image collée visuellement à droite
[ ] histoire en 2 colonnes
[ ] 4 stats compactes
[ ] 6 valeurs en 3×2
[ ] pastilles icônes 52px
[ ] méthode en 3 étapes
[ ] badges numéro rouges
[ ] connecteurs pointillés
[ ] équipe en 4 colonnes
[ ] portraits + rôle rouge
[ ] footer 5 colonnes
[ ] WhatsApp z-[60]
[ ] responsive mobile/tablette
[ ] animations discrètes
[ ] prefers-reduced-motion
[ ] Next/Image
[ ] Lucide React
[ ] Shadcn Card/Button/NavigationMenu/Sheet
```
