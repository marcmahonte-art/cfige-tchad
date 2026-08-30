# SPEC_CONTACT_PAGE.md

## 1. Dimensions globales

### Viewport de référence

- **Width:** 916px
- **Height:** 1717px

### Implémentation réelle

- **Container max-width:** 1180px
- **Desktop padding:** 48px
- **Tablet padding:** 32px
- **Mobile padding:** 18px

```css
.container {
  width: min(calc(100% - 96px), 1180px);
  margin-inline: auto;
}
```

---

## 2. Design system

### Couleurs

```css
--cfige-red:        #E30613;
--cfige-red-dark:   #C90816;
--cfige-red-soft:   #FFF1F2;

--cfige-ink:        #17212B;
--cfige-text:       #303A43;
--cfige-muted:      #69737D;

--cfige-border:     #E8ECEF;
--cfige-background: #FFFFFF;
--cfige-soft:       #FAFBFC;

--cfige-footer:     #182936;

--whatsapp:         #25D366;
```

### Typographie

**Police principale :** Inter

Fallback :

```css
font-family:
  Inter,
  ui-sans-serif,
  system-ui,
  sans-serif;
```

---

# 3. Header

Le header est blanc et comprend le logo CFIGE, la navigation, le bouton d'inscription et WhatsApp.

## Dimensions

```css
height: 70px;
```

### Logo

- **Width:** 112–125px
- **Height:** auto

### Navigation

- **Gap:** 28–34px
- **Font-size:** 12–13px
- **Font-weight:** 600

Navigation :

- Accueil
- Formations
- Services
- À propos
- Tarifs & Modalités
- Contact

### État actif

Contact est actif :

```css
color: #E30613;
```

Underline :

```css
width: 36px;
height: 2px;
margin-top: 8px;
```

### CTA

Texte :

**S'inscrire →**

```css
height: 40px;
padding-inline: 20px;
border-radius: 6px;
background: #E30613;
```

### Z-index

```css
header {
  z-index: 50;
}
```

---

# 4. Hero Contact

Le Hero est la première grande section sous le header.

## Structure

```text
┌─────────────────────────────────────────────┐
│                                             │
│  TEXTE                       IMAGE           │
│                                             │
│  CONTACTEZ-NOUS             photo CFIGE     │
│  Parlons de                                  │
│  vos objectifs                               │
│                                             │
└─────────────────────────────────────────────┘
```

### Dimensions

- **Hauteur:** ≈ 340px
- **Grid:** 48% / 52%
- **Gap:** 32–40px

```css
grid-template-columns: 48% 52%;
```

---

# 5. Hero — Partie texte

## Eyebrow

Texte :

**CONTACTEZ-NOUS**

Style :

```css
font-size: 11px;
font-weight: 700;
color: #E30613;
text-transform: uppercase;
```

Trait :

```css
width: 24px;
height: 2px;
```

## H1

Texte :

**Parlons de**  
**vos objectifs**

La deuxième ligne est rouge.

```css
font-size: 42px;
line-height: 1.08;
font-weight: 750–800;
```

Couleurs :

```text
Parlons de        #17212B
vos objectifs     #E30613
```

Mobile :

```css
font-size: 32px;
```

## Description

> Une question ? Un besoin de formation, de conseil ou de solution numérique ? Notre équipe est à votre écoute pour vous accompagner et vous proposer la meilleure solution adaptée à vos besoins.

```css
font-size: 13px;
line-height: 1.65;
max-width: 440–470px;
```

---

# 6. Hero Buttons

Deux boutons sont affichés.

## Bouton principal

**Nous écrire →**

```css
height: 42px;
padding-inline: 20px;
background: #E30613;
color: white;
border-radius: 6px;
```

## Bouton WhatsApp

**[WhatsApp] Discuter sur WhatsApp**

```css
background: white;
border: 1px solid #BFC6CC;
color: #17212B;
```

Icône :

```css
font-size: 18px;
color: #25D366;
```

Gap entre les boutons :

```css
gap: 14–16px;
```

---

# 7. Image Hero

Image de personnes dans un environnement professionnel CFIGE.

L'image est intégrée dans une **forme circulaire / arc rouge** caractéristique du design CFIGE.

### Dimensions

- **Width:** ≈ 440–480px
- **Height:** ≈ 340px

```css
object-fit: cover;
```

### Forme

Option avec pseudo-element :

```css
.hero-image::before {
  content: "";
  position: absolute;
  inset: 0;
  border: 8px solid #E30613;
  border-radius: 50% 0 0 50%;
}
```

Ou utiliser :

- `border-radius`
- `clip-path`
- `overflow: hidden`

### Z-index

```text
hero background : 0
hero decoration : 1
hero image      : 2
hero content    : 3
```

---

# 8. Contact Information Cards

Directement sous le Hero : **4 cartes horizontales**.

### Grid

```css
grid-template-columns: repeat(4, 1fr);
gap: 10–14px;
```

### Card

```css
height: 96px;
padding: 16px;
border-radius: 9px;
border: 1px solid #E9ECEF;
background: #FFFFFF;
box-shadow: 0 3px 14px rgba(17,30,42,.035);
```

## Card 01 — Téléphone

**Téléphone**

```text
+235 66 91 02 96
+235 95 69 22 00
```

Icône :

- `Phone`
- 48 × 48px
- Background : `#FFF1F2`
- Color : `#E30613`

## Card 02 — Email

**Email**

```text
contact@cfige-tchad.com
```

Icône :

- `Mail`

## Card 03 — Adresse

**Adresse**

```text
7e arrondissement,
N'Djaména, Tchad
```

Icône :

- `MapPin`

## Card 04 — Horaires

**Horaires d'ouverture**

```text
Lundi – Vendredi : 08h – 17h30
Samedi : 09h – 13h
```

Icône :

- `Clock`

---

# 9. Section Localisation + Formulaire

Cette section constitue le cœur fonctionnel de la page.

## Layout

```text
GAUCHE                    DROITE

Notre localisation        Envoyez-nous un message
MAP                       FORMULAIRE
```

### Dimensions

- **Colonnes:** 46% / 54%
- **Gap:** 28px

```css
grid-template-columns: 46% 54%;
gap: 28px;
```

---

# 10. Titre localisation

Texte :

**Notre localisation**

```css
font-size: 18–20px;
font-weight: 700;
color: #17212B;
margin-bottom: 14–16px;
```

---

# 11. Carte

La carte affiche N'Djaména avec un marqueur **CFIGE Tchad**.

### Dimensions

```css
width: 100%;
height: 265px;
border-radius: 8px 8px 0 0;
overflow: hidden;
```

### Marker

- Pin rouge
- Label : **CFIGE Tchad**

### Implémentation

Utiliser :

- Google Maps

ou

- OpenStreetMap + Leaflet

> Ne pas utiliser une simple image statique si une vraie carte interactive est nécessaire.

---

# 12. Bloc « Comment nous trouver ? »

Sous la carte.

```css
height: 82px;
padding: 14–16px;
```

Icône :

```text
48 × 48px
```

Titre :

**Comment nous trouver ?**

Description :

> Nous sommes situés dans le 7e arrondissement de N'Djaména, à proximité des grands axes et facilement accessibles.

---

# 13. Formulaire

## Titre

**Envoyez-nous un message**

## Card formulaire

```css
border: 1px solid #E9ECEF;
border-radius: 9px;
padding: 16–18px;
```

---

# 14. Champs du formulaire

## Disposition desktop

```text
Nom complet      Email *
Téléphone *      Sujet *
Votre message *
Checkbox
Button
```

### Grid

```css
grid-template-columns: 1fr 1fr;
gap: 16px;
```

## Input

```css
height: 46px;
padding-inline: 14px;
border: 1px solid #E2E6E9;
border-radius: 6px;
font-size: 12px;
```

Placeholder :

```css
color: #8A929A;
```

Focus :

```css
border-color: #E30613;
box-shadow: 0 0 0 3px rgba(227,6,19,.08);
```

---

# 15. Sujet

Utiliser un **Select Shadcn/ui**.

Label :

**Sujet \***

Placeholder :

**Sélectionnez un sujet**

Options :

1. Formation
2. Conseil
3. Solutions informatiques
4. Partenariat
5. Demande de devis
6. Autre

---

# 16. Message

Textarea :

```css
height: 120px;
resize: vertical;
```

Placeholder :

> Décrivez-nous votre besoin ou votre question...

---

# 17. Consentement

Checkbox :

> J'accepte que mes données soient utilisées pour me recontacter.

Dimensions :

```css
width: 16px;
height: 16px;
```

---

# 18. Submit

Bouton pleine largeur :

**Envoyer le message →**

```css
height: 42px;
width: 100%;
background: #E30613;
color: white;
border-radius: 6px;
font-weight: 700;
```

---

# 19. Section « Pourquoi nous contacter ? »

Eyebrow centré :

**POURQUOI NOUS CONTACTER ?**

H2 :

**Nous sommes là pour vous accompagner**

```css
font-size: 28px;
```

---

# 20. Les 4 avantages

### Grid

```css
grid-template-columns: repeat(4, 1fr);
gap: 12px;
```

### Cards

```css
height: 105px;
padding: 16px;
```

## 01 — Réponse rapide

> Nous vous répondons dans les meilleurs délais.

Icône :

`Headphones`

## 02 — Conseils personnalisés

> Nous écoutons votre besoin et vous proposons la solution adaptée.

Icône :

`UsersRound`

## 03 — Experts qualifiés

> Une équipe compétente et expérimentée à votre service.

Icône :

`BadgeCheck`

## 04 — Accompagnement complet

> Avant, pendant et après votre formation ou projet.

Icône :

`Handshake`

---

# 21. FAQ

Titre centré :

**Questions fréquentes**

```css
font-size: 28px;
```

## Layout

```text
2 colonnes × 2 lignes
```

Questions :

1. Quels types de formations proposez-vous ?
2. Comment s'inscrire à une formation ?
3. Proposez-vous des formations en entreprise ?
4. Quels sont les modes de paiement acceptés ?

---

# 22. FAQ avec Shadcn/ui

Composant :

`Accordion`

Structure :

```tsx
<Accordion>
  <AccordionItem>
    <AccordionTrigger>
      Quels types de formations proposez-vous ?
    </AccordionTrigger>

    <AccordionContent>
      ...
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Card FAQ

```css
height: 48px; /* fermée */
border: 1px solid #E9ECEF;
border-radius: 7px;
```

---

# 23. CTA final

Grande bannière rouge.

## Style

```text
Fond rouge
Texte blanc
Boutons blancs / outline
```

### Dimensions

```css
height: 105px;
border-radius: 9px;
```

## Contenu

Titre :

**Prêt à démarrer votre projet avec CFIGE ?**

Description :

> Contactez-nous dès aujourd'hui et construisons ensemble votre réussite.

Actions :

- **Nous contacter →**
- **WhatsApp →**

---

# 24. Illustration CTA

Icône décorative à gauche :

`GraduationCap`

Dimensions :

```css
width: 55–65px;
height: 55–65px;
opacity: 10–15%;
```

Elle doit rester discrète.

---

# 25. Footer

Utiliser le même footer que les autres pages CFIGE.

### Fond

```css
background: #182936;
```

### Structure desktop

```text
CFIGE | FORMATIONS | SERVICES | CFIGE | CONTACT
```

```css
grid-template-columns:
  1.4fr
  1fr
  1fr
  1fr
  1.2fr;

gap: 32–45px;
```

---

# 26. Footer Contact

Informations :

```text
+235 66 91 02 96
+235 95 69 22 00

contact@cfige-tchad.com

7e arrondissement,
N'Djaména, Tchad
```

---

# 27. WhatsApp flottant

```css
position: fixed;
right: 20px;
bottom: 20px;

width: 52px;
height: 52px;

border-radius: 9999px;

background: #25D366;

z-index: 60;

box-shadow: 0 6px 20px rgba(0,0,0,.15);
```

Icône :

`MessageCircle`

Taille :

```text
26px
```

---

# 28. Z-index complet

```text
base                 0
hero decorations      1
hero image            2
hero content          3

dropdown             40
header               50
mobile menu          55
whatsapp             60
modal/dialog         70
toast               100
```

---

# 29. Responsive

## ≥ 1200px

```text
Container : 1180px

Hero : 2 colonnes
Info cards : 4
Map + form : 2 colonnes
Advantages : 4
FAQ : 2 colonnes
Footer : 5 colonnes
```

## 992–1199px

```text
Container : calc(100% - 64px)

Hero : 2 colonnes
Info : 4 colonnes
Map/form : 2 colonnes
Advantages : 2 × 2
FAQ : 2 colonnes
Footer : 3 colonnes
```

H1 :

```css
font-size: 38px;
```

## 768–991px

```text
Hero : 2 colonnes
Info : 2 × 2
Map/form : 1 colonne
Advantages : 2 × 2
FAQ : 1 colonne
Footer : 3 colonnes
```

## < 768px

### Header

```text
Height : 68px
Logo : ~105px
Hamburger : 44 × 44px
```

### Hero

```text
1 colonne
```

Ordre :

1. Texte
2. Boutons
3. Image

H1 :

```css
font-size: 32px;
```

Image :

```css
height: 240px;
```

### Contact cards

```text
1 colonne
```

Chaque card :

```css
min-height: 82px;
```

### Map + formulaire

```text
1 colonne
```

Carte :

```css
height: 250px;
```

Formulaire :

```text
1 colonne
```

### Avantages

```text
1 colonne
```

### FAQ

```text
1 colonne
```

### CTA

```text
1 colonne
height: auto
padding: 28px 20px
```

Boutons :

```css
width: 100%;
```

### Footer

```text
1 colonne
```

---

# 30. Animations

Le design CFIGE doit rester sobre.

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

Paramètres :

```text
Duration : 450ms
Delay par section : 50–100ms
Easing : cubic-bezier(.22,1,.36,1)
```

## Cards

```css
transition:
  transform 180ms ease,
  box-shadow 180ms ease;
```

Hover :

```css
transform: translateY(-3px);
```

---

# 31. Shadcn/ui

Utiliser les composants suivants :

```text
Button
Card
Input
Textarea
Label
Checkbox
Select
Accordion
Separator
Sheet
NavigationMenu
```

### Composants spécifiques

```text
ContactHero
ContactInfoCard
LocationCard
ContactForm
ContactBenefits
ContactFAQ
ContactCTA
```

---

# 32. Lucide React

Icônes :

```text
Phone
Mail
MapPin
Clock
MessageCircle
Headphones
UsersRound
BadgeCheck
Handshake
GraduationCap
Send
ChevronDown
Menu
ArrowRight
```

### Tailles

```text
Hero icons       : 22–24px
Card icons       : 22px
Navigation       : 16px
Buttons          : 16px
WhatsApp         : 26px
```

---

# 33. Tokens Tailwind

```ts
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
    }
  },

  maxWidth: {
    cfige: "1180px",
  },

  boxShadow: {
    card: "0 3px 14px rgba(17,30,42,.035)",
    hover: "0 12px 30px rgba(17,30,42,.07)",
  },

  borderRadius: {
    cfige: "9px",
  }
}
```

---

# 34. Architecture React

```text
app/
└── contact/
    └── page.tsx

components/
└── contact/
    ├── contact-hero.tsx
    ├── contact-info.tsx
    ├── contact-location.tsx
    ├── contact-form.tsx
    ├── contact-benefits.tsx
    ├── contact-faq.tsx
    └── contact-cta.tsx

components/layout/
├── site-header.tsx
├── site-footer.tsx
└── whatsapp-button.tsx
```

---

# 35. Structure finale

```text
HEADER
│
├── Logo
├── Accueil
├── Formations
├── Services
├── À propos
├── Tarifs & Modalités
├── Contact [ACTIVE]
├── S'inscrire
└── WhatsApp
│
HERO
├── CONTACTEZ-NOUS
├── Parlons de
├── vos objectifs
├── Description
├── Nous écrire
├── WhatsApp
└── Image CFIGE
│
CONTACT INFO
├── Téléphone
├── Email
├── Adresse
└── Horaires
│
LOCALISATION + FORMULAIRE
├── Notre localisation
│   ├── Map
│   └── Comment nous trouver ?
│
└── Envoyez-nous un message
    ├── Nom
    ├── Email
    ├── Téléphone
    ├── Sujet
    ├── Message
    ├── Consentement
    └── Envoyer
│
POURQUOI NOUS CONTACTER ?
├── Réponse rapide
├── Conseils personnalisés
├── Experts qualifiés
└── Accompagnement complet
│
FAQ
├── Question 1
├── Question 2
├── Question 3
└── Question 4
│
CTA
└── Prêt à démarrer votre projet avec CFIGE ?
│
FOOTER
│
WHATSAPP FLOATING
```

---

# 36. Dimensions clés à retenir

| Élément | Dimension |
|---|---:|
| Header | **70px** |
| Container | **1180px max** |
| Hero | **≈ 340px** |
| Hero image | **≈ 440–480 × 340px** |
| H1 | **42px** |
| Info cards | **4 colonnes** |
| Info card | **≈ 96px** |
| Map | **≈ 265px** |
| Inputs | **46px** |
| Textarea | **≈ 120px** |
| Benefits | **4 colonnes** |
| FAQ | **2 colonnes** |
| CTA | **≈ 105px** |
| WhatsApp | **52 × 52px** |
| Card radius | **9px** |
| Container mobile | **calc(100% - 36px)** |
| H1 mobile | **32px** |

---

# 37. Notes d'implémentation

- Respecter strictement la palette CFIGE définie dans le design system.
- Utiliser **Inter** comme police principale.
- Utiliser **Lucide React** pour toutes les icônes.
- Utiliser **Shadcn/ui** pour les composants interactifs du formulaire et de la FAQ.
- La carte doit être interactive si possible.
- Le bouton WhatsApp doit rester visible en permanence sur desktop et mobile.
- Le design doit rester sobre, professionnel et institutionnel.
- Les animations doivent être discrètes et ne pas nuire aux performances.
- Prévoir les états `hover`, `focus`, `active`, `disabled`, `loading` et `error` pour les éléments interactifs.
- Le formulaire doit être entièrement responsive.
- Prévoir une validation côté client et côté serveur avant l'envoi.
- Prévoir un retour utilisateur clair après soumission : succès ou erreur.
