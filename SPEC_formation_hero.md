# SPEC — HERO PAGE FORMATIONS

> Référence analysée : capture `formations.png` — 959 × 1640 px.
> Cette spec couvre UNIQUEMENT le Hero « NOS FORMATIONS » visible sous le header.
> Les dimensions sont des mesures/reconstructions visuelles de la capture raster, pas des valeurs CSS originales.

---

## 1. Périmètre

Le Hero comprend uniquement :

- le grand visuel photographique ;
- son overlay sombre ;
- le titre « NOS FORMATIONS » en blanc ;
- la composition rectangulaire du bloc ;
- ses marges et son positionnement par rapport au header.

Il n'inclut PAS :

- la barre de recherche/filtres située dessous ;
- les catégories ;
- les cartes de formations ;
- les sections suivantes ;
- le footer.

---

# 2. Dimensions de référence

## Screenshot

```txt
viewport référence : 959 × 1640 px
```

## Hero desktop de la capture

Mesures visuelles approximatives :

```txt
x       : 49 px
y       : 80 px
width   : 861 px
height  : 377 px
right   : 49 px
bottom  : 457 px
```

Le Hero est donc quasiment centré horizontalement :

```txt
margin-left  ≈ 49px
margin-right ≈ 49px
```

Largeur relative :

```txt
861 / 959 ≈ 89.8vw
```

CSS recommandé :

```css
.formation-hero {
  width: calc(100% - 96px);
  max-width: 1180px;
  height: 377px;
  margin-inline: auto;
}
```

À 959 px :

```css
width: 861px;
```

---

# 3. Position verticale

Le header occupe approximativement :

```txt
y = 0 → 64 px
```

Le Hero commence après un espace blanc très court :

```txt
header bottom → hero top ≈ 15 px
```

Donc :

```css
.site-header {
  height: 64px;
}

.formation-hero {
  margin-top: 15px;
}
```

Structure :

```txt
HEADER
  ↓ ~15px
HERO
  ↓ ~10px
FILTERS SECTION
```

Le Hero est donc un bloc indépendant sous le header et non un hero full-bleed.

---

# 4. Structure HTML / React

```tsx
<section
  className="formation-hero"
  aria-labelledby="formations-hero-title"
>
  <div className="formation-hero__media">
    <Image
      src="/images/formations-hero.webp"
      alt=""
      fill
      priority
      className="formation-hero__image"
    />

    <div
      className="formation-hero__overlay"
      aria-hidden="true"
    />

    <div className="formation-hero__content">
      <h1 id="formations-hero-title">
        NOS FORMATIONS
      </h1>
    </div>
  </div>
</section>
```

---

# 5. Container Hero

Le Hero est un rectangle horizontal avec coins légèrement arrondis.

Mesure visuelle du rayon :

```txt
radius ≈ 2–3 px
```

Ce n'est PAS un hero fortement arrondi.

CSS :

```css
.formation-hero {
  position: relative;
  overflow: hidden;
  border-radius: 3px;
}
```

Tailwind :

```txt
relative overflow-hidden rounded-[3px]
```

---

# 6. Image principale

## Dimensions

L'image remplit intégralement le Hero :

```css
position: absolute;
inset: 0;
width: 100%;
height: 100%;
```

## Object fit

```css
object-fit: cover;
```

## Position

Le cadrage de référence est centré avec une légère priorité au sujet central/droit.

```css
object-position: 50% 46%;
```

Tailwind :

```txt
object-cover object-[50%_46%]
```

---

# 7. Photo — composition à reproduire

La photo présente une salle de formation moderne.

Composition :

```txt
Gauche :
  femme noire assise
  ordinateur portable visible
  visage tourné vers le bas

Centre :
  homme noir au premier plan
  chemise bordeaux
  lunettes
  ordinateur/table en bas
  visage = point focal principal

Arrière-plan :
  autres apprenants
  écrans / salle de formation

Droite :
  femme noire avec ordinateur
```

Le personnage masculin central doit rester suffisamment visible pour que :

- sa tête ne soit pas coupée ;
- ses lunettes restent visibles ;
- la chemise bordeaux reste une masse visuelle importante ;
- le titre blanc se pose sur une zone relativement sombre.

---

# 8. Overlay sombre

La capture montre une image assombrie de manière uniforme afin de faire ressortir le titre blanc.

Overlay recommandé :

```css
background: rgba(0, 0, 0, 0.28);
```

Plage acceptable pour reproduction :

```txt
0.25 → 0.34
```

Valeur recommandée :

```txt
rgba(0,0,0,.30)
```

Tailwind :

```txt
bg-black/30
```

Important :

L'overlay doit être placé :

```txt
au-dessus de l'image
sous le contenu/titre
```

Z-index :

```txt
image   = 0
overlay = 1
content = 2
```

---

# 9. Titre

Texte exact :

```txt
NOS FOMATIONS
```

> **Attention :** la capture fournie affiche visuellement « NOS FOMATIONS » (sans deuxième « R » dans « FORMATIONS »). Si le texte métier attendu est correct, utiliser **« NOS FORMATIONS »**.

## Position

Le titre est placé dans la partie gauche du Hero.

Mesure visuelle :

```txt
x ≈ 100 px
y ≈ 327 px
```

Relativement au Hero :

```txt
left ≈ 51 px
top ≈ 246 px
```

Le titre est donc dans la zone basse/médiane du visuel.

## Alignement

```txt
text-align: left;
```

## Largeur

```txt
max-width ≈ 500px;
```

---

# 10. Typographie du titre

Aspect :

- sans-serif ;
- blanc ;
- uppercase ;
- très gros ;
- poids régulier/semi-bold ;
- légèrement arrondi visuellement.

Valeurs recommandées :

```css
font-size: 48px;
line-height: 1.05;
font-weight: 500;
letter-spacing: -0.025em;
color: #FFFFFF;
```

Plage acceptable :

```txt
font-size : 46–50px
weight    : 500–600
```

Tailwind :

```txt
text-[48px]
leading-[1.05]
font-medium
tracking-[-0.025em]
text-white
```

Sur une largeur de 959 px, le texte occupe environ :

```txt
width ≈ 420px
height ≈ 52px
```

---

# 11. Positionnement recommandé

Méthode robuste :

```css
.formation-hero__content {
  position: absolute;
  inset: 0;
  z-index: 2;

  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  padding-left: 51px;
  padding-bottom: 72px;
}
```

Cela place la ligne de base du titre dans la zone observée de la capture.

Alternative si le design doit rester parfaitement proportionnel :

```css
padding-inline: 5.9%;
padding-bottom: 19%;
```

---

# 12. CSS complet du Hero

```css
.formation-hero {
  position: relative;
  width: calc(100% - 96px);
  max-width: 1180px;
  height: 377px;
  margin: 15px auto 0;
  overflow: hidden;
  border-radius: 3px;
}

.formation-hero__media {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.formation-hero__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 46%;
}

.formation-hero__overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.30);
}

.formation-hero__content {
  position: absolute;
  inset: 0;
  z-index: 2;

  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  padding-left: 51px;
  padding-bottom: 72px;
}

.formation-hero__content h1 {
  margin: 0;
  color: #fff;
  font-size: 48px;
  line-height: 1.05;
  font-weight: 500;
  letter-spacing: -0.025em;
}
```

---

# 13. Version Tailwind

```tsx
<section
  className="
    relative mx-auto mt-[15px]
    h-[377px]
    w-[calc(100%-96px)]
    max-w-[1180px]
    overflow-hidden rounded-[3px]
  "
  aria-labelledby="formations-hero-title"
>
  <Image
    src="/images/formations-hero.webp"
    alt=""
    fill
    priority
    sizes="
      (max-width: 639px) calc(100vw - 36px),
      (max-width: 1023px) calc(100vw - 64px),
      calc(100vw - 96px)
    "
    className="
      object-cover
      object-[50%_46%]
    "
  />

  <div
    aria-hidden="true"
    className="
      absolute inset-0 z-[1]
      bg-black/30
    "
  />

  <div
    className="
      absolute inset-0 z-[2]
      flex items-end
      justify-start
      pb-[72px] pl-[51px]
    "
  >
    <h1
      id="formations-hero-title"
      className="
        m-0 text-[48px]
        font-medium leading-[1.05]
        tracking-[-0.025em]
        text-white
      "
    >
      NOS FORMATIONS
    </h1>
  </div>
</section>
```

---

# 14. Responsive

## Desktop ≥ 1024px

```txt
height: 377px
width: calc(100% - 96px)
max-width: 1180px
title: 48px
left padding: 51px
bottom padding: 72px
```

À 1024 px :

```txt
Hero width ≈ 928 px
Hero height ≈ 377 px
```

## Tablet 768–1023px

```css
.formation-hero {
  width: calc(100% - 64px);
  height: 350px;
}

.formation-hero__content {
  padding-left: 38px;
  padding-bottom: 58px;
}

.formation-hero h1 {
  font-size: 42px;
}
```

## Mobile 640–767px

```css
.formation-hero {
  width: calc(100% - 40px);
  height: 270px;
  margin-top: 12px;
}

.formation-hero__content {
  padding-left: 28px;
  padding-bottom: 42px;
}

.formation-hero h1 {
  font-size: 34px;
  line-height: 1.05;
}
```

## Mobile < 640px

```css
.formation-hero {
  width: calc(100% - 36px);
  height: 230px;
  margin-top: 10px;
  border-radius: 3px;
}

.formation-hero__image {
  object-position: 52% 45%;
}

.formation-hero__content {
  padding-left: 22px;
  padding-bottom: 34px;
}

.formation-hero h1 {
  max-width: 90%;
  font-size: 30px;
  line-height: 1.05;
  letter-spacing: -0.02em;
}
```

---

# 15. Breakpoints Tailwind

```ts
screens: {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
}
```

Classes synthétiques :

```txt
base:
  h-[230px]
  w-[calc(100%-36px)]
  mt-[10px]

sm:
  h-[270px]
  w-[calc(100%-40px)]

md:
  h-[350px]
  w-[calc(100%-64px)]

lg:
  h-[377px]
  w-[calc(100%-96px)]
  mt-[15px]
```

---

# 16. Z-index

Le Hero n'a besoin que de 3 niveaux :

```txt
z-0  image
z-1  overlay
z-2  title/content
```

Si le header est sticky :

```txt
header       z-50
hero image   z-0
overlay      z-1
hero content z-2
```

Ne pas mettre le Hero lui-même en `z-50`.

---

# 17. Animations

La référence n'affiche pas d'animation visible.

Pour une implémentation moderne, animation minimale recommandée :

```css
@keyframes formation-hero-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.formation-hero__content {
  animation:
    formation-hero-in
    500ms
    cubic-bezier(.22, 1, .36, 1)
    both;
}
```

Image :

```css
.formation-hero__image {
  animation:
    formation-hero-image-in
    700ms
    cubic-bezier(.22, 1, .36, 1)
    both;
}

@keyframes formation-hero-image-in {
  from {
    opacity: 0;
    transform: scale(1.025);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

Mais si l'objectif est **strictement pixel-perfect au chargement**, supprimer les animations.

---

# 18. Shadcn/ui

Aucun composant Shadcn complexe n'est nécessaire dans le Hero.

Recommandation :

```txt
Pas de Card
Pas de Button
Pas de Dialog
Pas de Carousel
```

Le Hero est un composant de layout custom.

Éventuellement :

```txt
cn() — pour fusionner les classes
```

Architecture :

```txt
components/
└── formations/
    └── formations-hero.tsx
```

---

# 19. Image Next.js

```tsx
<Image
  src="/images/formations-hero.webp"
  alt=""
  fill
  priority
  quality={88}
  sizes="
    (max-width: 639px) calc(100vw - 36px),
    (max-width: 767px) calc(100vw - 40px),
    (max-width: 1023px) calc(100vw - 64px),
    calc(100vw - 96px)
  "
  className="object-cover object-[50%_46%]"
/>
```

Format recommandé :

```txt
AVIF
ou
WebP
```

Résolution source recommandée :

```txt
minimum : 1600 × 700 px
idéal   : 1920 × 840 px
```

Le fichier source doit avoir suffisamment de résolution pour le breakpoint XL.

---

# 20. Tokens spécifiques Hero

```css
:root {
  --formation-hero-height: 377px;
  --formation-hero-radius: 3px;
  --formation-hero-overlay: rgba(0, 0, 0, .30);

  --formation-hero-title-size: 48px;
  --formation-hero-title-weight: 500;
  --formation-hero-title-line: 1.05;
  --formation-hero-title-spacing: -0.025em;

  --formation-hero-content-left: 51px;
  --formation-hero-content-bottom: 72px;
}
```

---

# 21. Mesures clés condensées

| Élément | Référence |
|---|---:|
| Screenshot | 959 × 1640 px |
| Hero X | ~49 px |
| Hero Y | ~80 px |
| Hero width | ~861 px |
| Hero height | ~377 px |
| Marges latérales | ~49 px |
| Gap header → Hero | ~15 px |
| Border radius | ~3 px |
| Overlay | rgba(0,0,0,.30) |
| Titre X | ~100 px |
| Titre taille | ~48 px |
| Titre poids | 500 |
| Titre couleur | #FFFFFF |
| Content left | ~51 px |
| Content bottom | ~72 px |
| Image fit | cover |
| Image position | 50% 46% |
| Image z-index | 0 |
| Overlay z-index | 1 |
| Content z-index | 2 |

---

# 22. Checklist d'intégration

```txt
[ ] Hero indépendant sous le header
[ ] largeur 861px à 959px de viewport
[ ] hauteur 377px
[ ] marge horizontale 49px
[ ] marge top ~15px
[ ] photo full-bleed
[ ] object-fit: cover
[ ] overlay noir ~30%
[ ] titre blanc uppercase
[ ] taille titre ~48px
[ ] poids ~500
[ ] titre aligné à gauche
[ ] titre proche du bas du visuel
[ ] radius ~3px
[ ] image z-0
[ ] overlay z-1
[ ] titre z-2
[ ] mobile en hauteur réduite
[ ] aucun composant Shadcn lourd
[ ] animation optionnelle uniquement
[ ] prefers-reduced-motion respecté
```
