# SPEC_tarifs_modalites_PAGE.md

## CFIGE — Page « Tarifs & Modalités »

Page conçue avec le même design system que les pages CFIGE Formations, Services et À propos.

### 1. Contenu officiel

La politique CFIGE indique que les tarifs sont des fourchettes d’investissement, ajustables selon le niveau, la durée, le format et les besoins spécifiques. fileciteturn0file1L6-L9

#### Formats

| Format | Durée | Investissement |
|---|---|---:|
| Express | 3 h à 4 semaines | 25 000 – 150 000 FCFA |
| Intensive | 4 à 8 semaines | 75 000 – 350 000 FCFA |
| Professional | 1 à 6 mois | 150 000 – 800 000 FCFA |
| Executive Certification | 6 à 12 mois | 400 000 – 2 000 000+ FCFA |

fileciteturn0file1L10-L15

#### Tarification par cible

**Étudiants & Jeunes Diplômés**
- Express : 25 000 – 75 000 FCFA
- Intensive : 50 000 – 150 000 FCFA
- Professional : 100 000 – 400 000 FCFA

**Professionnels & Salariés**
- Express : 50 000 – 150 000 FCFA
- Intensive : 100 000 – 300 000 FCFA
- Professional : 250 000 – 700 000 FCFA

**PME / ONG / Institutions**
- Intensive : 250 000 – 700 000 FCFA
- Professional : 400 000 – 1 200 000 FCFA
- Executive Certification : 800 000 – 3 000 000+ FCFA

fileciteturn0file1L16-L28

#### Remises

| Situation | Remise |
|---|---:|
| Étudiants | 10 % à 20 % selon programme |
| Groupe 3–5 | 5 % |
| Groupe 6–10 | 10 % |
| Groupe 11–20 | 15 % |
| Groupe +20 | Négociable |
| Partenaires institutionnels | 10 % à 30 % |

fileciteturn0file1L34-L44

#### Paiement

- 50 % à l’inscription
- Paiement échelonné possible pour les formations longues
- Tarification spéciale pour contrats annuels

fileciteturn0file1L45-L48

Le CFIGE peut accorder des conditions préférentielles selon le volume, le partenariat et l’impact stratégique du projet ; des offres personnalisées sont disponibles sur devis. fileciteturn0file1L49-L54

---

# 2. Architecture de page

1. Header
2. Hero « Tarifs & Modalités »
3. Introduction / politique d’investissement
4. « Nos formats de formation »
5. « Une tarification adaptée à chaque public »
6. « Nos remises »
7. « Des modalités de paiement flexibles »
8. CTA « Besoin d’une formation sur mesure ? »
9. FAQ
10. CTA final
11. Footer
12. WhatsApp flottant

---

# 3. Design system

## Couleurs

```css
--cfige-red: #E10B1A;
--cfige-red-dark: #C90A18;
--cfige-red-soft: #FFF1F2;
--ink: #17212B;
--text: #303B45;
--muted: #68717A;
--border: #ECEEF0;
--surface: #FFFFFF;
--footer: #192A37;
--whatsapp: #25D366;
```

## Typographie

```txt
Font : Inter / system-ui

H1 : 42px / 1.08 / 750
H2 : 27px / 1.15 / 750
H3 : 16px / 1.25 / 700
Body : 12–14px / 1.65
Small : 11px / 1.5
Label : 10px / 1.3 / 700
```

---

# 4. Container

Desktop :

```css
.container {
  width: min(calc(100% - 96px), 1180px);
  margin-inline: auto;
}
```

Mobile :

```css
.container {
  width: calc(100% - 36px);
}
```

---

# 5. Hero

Hauteur desktop : `300–330px`

Grid :

```css
grid-template-columns: 1fr .9fr;
gap: 50px;
```

Kicker :

```txt
NOS TARIFS
```

H1 :

```txt
Tarifs & Modalités
```

Sous-titre :

```txt
Des tarifs compétitifs et des modalités flexibles
pour rendre la formation professionnelle accessible à tous.
```

Boutons :

```txt
Voir les tarifs
Demander un devis
```

Illustration/photo :

- professionnel en situation de conseil ;
- ordinateur et documents ;
- environnement formation CFIGE ;
- dominante claire avec accents rouges.

---

# 6. Introduction

Label :

```txt
POLITIQUE D’INVESTISSEMENT
```

Titre :

```txt
Des tarifs transparents et adaptés
```

Texte :

```txt
Le CFIGE adopte une politique tarifaire compétitive visant
à rendre les formations professionnelles accessibles tout
en garantissant une qualité d’exécution élevée.
```

Ajouter une note dans une petite carte rouge pâle :

```txt
Les coûts indiqués constituent des fourchettes d’investissement
et peuvent être ajustés selon le niveau, la durée, le format
et les besoins spécifiques du client.
```

---

# 7. Formats de formation

Titre :

```txt
Nos formats de formation
```

Sous-titre :

```txt
Choisissez le format correspondant à votre objectif.
```

Grille desktop : `4 colonnes`, gap `14px`.

Chaque Card :

```css
min-height: 285px;
border: 1px solid #ECEEF0;
border-radius: 10px;
padding: 22px;
background: #fff;
box-shadow: 0 4px 16px rgba(17,30,42,.035);
```

Carte Professional : bordure rouge et badge `FORMAT RECOMMANDÉ`.

Icônes :

```txt
Express                 Zap
Intensive               Gauge
Professional            BriefcaseBusiness
Executive Certification Award
```

Prix :

```css
font-size: 22px;
font-weight: 750;
color: #E10B1A;
```

---

# 8. Tarification par cible

Titre :

```txt
Une tarification adaptée à chaque public
```

3 cartes desktop.

### Étudiants & Jeunes Diplômés

```txt
Express       25 000 – 75 000 FCFA
Intensive     50 000 – 150 000 FCFA
Professional  100 000 – 400 000 FCFA
```

### Professionnels & Salariés

```txt
Express       50 000 – 150 000 FCFA
Intensive     100 000 – 300 000 FCFA
Professional  250 000 – 700 000 FCFA
```

### PME / ONG / Institutions

```txt
Intensive              250 000 – 700 000 FCFA
Professional            400 000 – 1 200 000 FCFA
Executive Certification 800 000 – 3 000 000+ FCFA
```

UI : chaque ligne comporte le format à gauche et le prix rouge à droite.

---

# 9. Remises

Titre :

```txt
Nos remises
```

Sous-titre :

```txt
Des conditions avantageuses selon votre situation et votre volume.
```

Desktop : tableau.

Header :

```css
background: #FFF1F2;
color: #C90A18;
height: 50px;
```

Lignes :

```txt
height: 56px;
border-bottom: 1px solid #ECEEF0;
```

Remise en Badge rouge pâle.

Mobile : transformer le tableau en cartes verticales.

---

# 10. Modalités de paiement

Titre :

```txt
Des modalités de paiement flexibles
```

3 cartes :

### 01 — Inscription

```txt
50 %
à l’inscription
```

### 02 — Paiement échelonné

```txt
Formations longues
```

### 03 — Contrats annuels

```txt
Tarification spéciale
```

Icônes :

```txt
CreditCard
CalendarClock
FileCheck2
```

---

# 11. CTA devis personnalisé

Grande bannière rouge :

```txt
BESOIN D’UNE FORMATION SUR MESURE ?

Le CFIGE peut adapter ses conditions selon le volume,
le partenariat et l’impact stratégique du projet.

[ Demander un devis → ]
```

Style :

```css
background: #E10B1A;
border-radius: 10px;
padding: 32px 36px;
```

Titre :

```txt
22px / 750 / white
```

Bouton :

```css
background: white;
color: #E10B1A;
height: 44px;
border-radius: 6px;
```

---

# 12. Clause commerciale

Petit bloc sous le CTA :

```txt
Conditions préférentielles

Le CFIGE peut accorder des conditions préférentielles selon :

• le volume ;
• le partenariat ;
• l’impact stratégique du projet.

Des offres personnalisées sont disponibles sur devis.
```

---

# 13. FAQ

Utiliser Shadcn `Accordion`.

Questions :

```txt
Les tarifs sont-ils fixes ?
Puis-je payer en plusieurs fois ?
Existe-t-il des réductions pour les groupes ?
Les entreprises peuvent-elles demander un devis personnalisé ?
```

Style Accordion :

```txt
border-bottom: 1px solid #ECEEF0
padding: 18px 0
```

Trigger :

```txt
font-size: 14px
font-weight: 700
```

Chevron Lucide :

```txt
ChevronDown
```

---

# 14. CTA final

```txt
Vous avez un projet de formation ?

Notre équipe vous accompagne pour identifier le format
et la solution les mieux adaptés à vos objectifs.

[ Demander un devis ] [ Nous contacter ]
```

---

# 15. Z-index

```txt
hero image       0
hero overlay     1
hero content     2
dropdown        40
header          50
WhatsApp        60
dialog overlay  70
drawer          80
toast          100
```

---

# 16. Responsive

## ≥1024px

```txt
Formats       4 colonnes
Cibles        3 colonnes
Remises       tableau
Paiement      3 colonnes
CTA           horizontal
```

## 768–1023px

```txt
Formats       2 × 2
Cibles        2 colonnes
Remises       tableau compact
Paiement      3 colonnes
```

## <768px

```txt
Formats       1 colonne
Cibles        1 colonne
Remises       cards
Paiement      1 colonne
CTA           vertical
```

Mobile :

```css
.container {
  width: calc(100% - 36px);
}

button {
  min-height: 44px;
}
```

---

# 17. Animations

Reveal :

```css
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

Cards :

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

Respecter `prefers-reduced-motion`.

---

# 18. Shadcn/ui

```txt
Button
Card
CardHeader
CardTitle
CardContent
Badge
Accordion
Separator
NavigationMenu
Sheet
DropdownMenu
```

Pas de composants complexes inutiles.

---

# 19. Lucide

```txt
Hero                  BadgeDollarSign
Express               Zap
Intensive             Gauge
Professional          BriefcaseBusiness
Executive             Award
Étudiants             GraduationCap
Professionnels        UserRound
PME / ONG             Building2
Remises               Percent
Groupes               UsersRound
Partenaires           Handshake
Paiement              CreditCard
Échelonnement         CalendarClock
Contrat annuel        FileCheck2
Devis                 FileText
Contact               Phone
```

Taille : `20–24px`, stroke `1.8`.

---

# 20. Architecture Next.js

```txt
app/
└── tarifs-modalites/
    └── page.tsx

components/
└── pricing/
    ├── pricing-hero.tsx
    ├── pricing-intro.tsx
    ├── format-price-card.tsx
    ├── audience-price-card.tsx
    ├── discounts-section.tsx
    ├── payment-section.tsx
    ├── custom-quote-cta.tsx
    ├── pricing-faq.tsx
    └── pricing-final-cta.tsx
```

---

# 21. Tokens Tailwind

```js
colors: {
  cfige: {
    red: "#E10B1A",
    dark: "#C90A18",
    soft: "#FFF1F2",
    ink: "#17212B",
    text: "#303B45",
    muted: "#68717A",
    border: "#ECEEF0",
    footer: "#192A37",
  },
},
boxShadow: {
  card: "0 4px 16px rgba(17,30,42,.035)",
  cardHover: "0 14px 32px rgba(17,30,42,.08)",
},
```

---

# 22. Footer institutionnel

```txt
Centre de Formation, Conseil et Solutions Numériques (CFIGE SARL)
7ème Arrondissement, N’Djamena – Tchad
RCCM : TD-NDJ-01-2026-B13-00098
NIF : 9062616U
BP : 7527
+235 66 91 02 96 / +235 95 69 22 00
contact@cfige-tchad.com
www.cfige-tchad.com
```

fileciteturn0file1L2-L5

---

# 23. SEO

```txt
Title:
Tarifs & Modalités de formation | CFIGE

Meta:
Découvrez les tarifs des formations CFIGE, les formats disponibles,
les remises, les conditions de paiement et les offres personnalisées
à N'Djamena.

H1:
Tarifs & Modalités
```

---

# 24. Checklist

```txt
[ ] même Header CFIGE
[ ] même Footer CFIGE
[ ] rouge #E10B1A
[ ] 4 formats
[ ] 3 profils tarifaires
[ ] tableau des remises
[ ] modalités de paiement
[ ] CTA devis
[ ] FAQ Accordion
[ ] WhatsApp flottant
[ ] responsive
[ ] animations discrètes
[ ] reduced motion
[ ] SEO
[ ] prix affichés en FCFA
[ ] aucune valeur inventée
```
