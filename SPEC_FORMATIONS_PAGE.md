# SPEC_FORMATIONS_PAGE.md

## CFIGE — PAGE FORMATIONS (HORS HERO)
Version 1.0 — 29 août 2026

> Cette spécification couvre uniquement la partie située après le Hero : statistiques, recherche/filtres, catégories, grille des formations, pagination, avantages, prochaines sessions, contact et footer.

## 1. Structure

```text
Header
↓
Hero (exclu)
↓
Stats
↓
Formation Explorer
  ├─ Search / Filters
  ├─ Category tabs
  ├─ Formation grid
  └─ Pagination
↓
Pourquoi choisir nos formations ?
↓
Prochaines sessions
↓
Question / Contact CTA
↓
Footer
+ WhatsApp floating button
```

## 2. Tokens

```css
--color-primary:#E30613;
--color-primary-dark:#B80510;
--color-primary-light:#FEE7E9;
--color-secondary:#4D4F52;
--color-white:#FFFFFF;
--color-gray-50:#F9FAFB;
--color-gray-100:#F3F4F6;
--color-gray-200:#E5E7EB;
--color-gray-300:#D1D5DB;
--color-gray-400:#9CA3AF;
--color-gray-500:#6B7280;
--color-gray-600:#4B5563;
--color-gray-700:#374151;
--color-gray-800:#1F2937;
--color-gray-900:#111827;
--color-success:#16A34A;
--color-warning:#F59E0B;
--color-error:#DC2626;
--color-info:#2563EB;
```

Police : `Inter, system-ui, sans-serif`.

## 3. Container

Desktop : `max-width:1240px`, `width:calc(100% - 40px)`, centré.

À partir de 1280px : `width:min(1240px, calc(100% - 80px))`.

Mobile : `width:calc(100% - 32px)`.

Grille desktop : 12 colonnes, gap 24px.

## 4. Z-index

```text
contenu 0
cards 1
éléments sticky 20
dropdowns 50
mobile menu 100
modal 200
toast 300
WhatsApp 400
```

## 5. Stats

Position : `margin-top:24–32px`, `margin-bottom:28–32px`.

Card : fond blanc, bordure `1px #E5E7EB`, radius `12px`, shadow small.

Desktop : 4 colonnes, gap 24px, padding 24px.

Valeurs de maquette :
- `200+` — Apprenants formés
- `12+` — Formations disponibles
- `5` — Années d’expérience
- `95%` — Taux de satisfaction

Icon : 40×40px, fond `#FEE7E9`, cercle, icône Lucide 20–22px.

Mobile : grille 2×2, padding 16px.

> Les chiffres doivent être alimentés par les données officielles avant publication.

## 6. Recherche et filtres

Card blanche, border `1px solid #E5E7EB`, radius `12px`, padding desktop `20px`.

Desktop :
```text
Search | Catégorie | Niveau | Mode | Filtrer
```
Gap 16px. Hauteur des contrôles : 48px.

Search : largeur 260–300px, radius 8px, padding `12px 14px`, border `#D1D5DB`.

Focus : border `#E30613` + ring `0 0 0 3px rgba(227,6,19,.12)`.

Selects : labels 12–13px, contrôles 48px.

Bouton Filtrer : 48px, padding horizontal 18px, radius 10px, fond `#E30613`, texte blanc, font-weight 600. Hover `#B80510`.

Mobile : recherche pleine largeur puis bouton Filtrer. Ouvrir les filtres dans un `Sheet` Shadcn avec Catégorie/Niveau/Mode, Réinitialiser et Appliquer.

## 7. Catégories

Sous les filtres, `margin-top:16px`.

Desktop : ligne horizontale, gap 8–12px, hauteur 52–56px.

Catégorie active : fond blanc, border `#E30613`, texte `#E30613`, radius 8px, padding `10px 16px`.

Inactive : texte `#374151`, hover fond `#F9FAFB`.

Catégories de la maquette :
- Toutes les formations
- Informatique
- Développement Web
- Comptabilité & Finance
- Gestion & Management
- Réseaux & Systèmes

Mobile : `overflow-x:auto`, scrollbar masquée, pas de retour à la ligne.

Utiliser `Tabs` Shadcn si le comportement correspond au besoin.

## 8. Grille des formations

Desktop ≥1280px : 4 colonnes, gap 24px.

À 1024–1279px : 3 colonnes.

Tablette : 2 colonnes, gap 20px.

Mobile : 1 colonne, gap 16px.

Pour un container 1240px avec gap 24px : largeur card ≈ 292px.

## 9. FormationCard

```text
IMAGE 16:9
BADGE
TITRE
DESCRIPTION
METADONNÉES
PRIX
CTA
```

Card : fond blanc, border `#E5E7EB`, radius 16px, overflow hidden, shadow small.

Hover : `translateY(-2px)`, shadow medium, transition 200ms ease.

Image : ratio 16:9, `object-fit:cover`, `next/image`, WebP/AVIF lorsque possible.

Badge : hauteur 28px, padding `6px 10px`, radius 999px, font 12px/600. Formation : `#FEE7E9/#B80510`.

Badge populaire : `#DCFCE7/#166534`.

Titre : 17–18px / 24px, weight 600, max 2 lignes.

Description : 13–14px / 20px, `#4B5563`, max 3 lignes.

Métadonnées : grille 2 colonnes, icônes Lucide 16px, texte 12–13px, gap vertical 10–12px.

Prix : 16px, weight 700, `#111827`.

CTA : `Voir la formation →`, 14px/600, `#E30613`; hover `#B80510`.

Hauteur recommandée : min 400–430px ; `display:flex; flex-direction:column`; CTA en bas via `margin-top:auto`.

## 10. Pagination

Centrée, `margin-top:24px`.

Boutons 36×36px, gap 6–8px, radius 8px.

Actif : fond `#E30613`, texte blanc.

Inactif : fond blanc, border `#E5E7EB`.

Structure : `< 1 2 3 … 10 >`.

## 11. Empty / Loading

Empty state : icône, « Aucune formation trouvée », explication et bouton « Réinitialiser les filtres ». Padding 48×24px.

Loading : 4 `Skeleton` cards desktop, avec skeleton image, badge, titre, description, metadata et CTA.

Ne pas dépendre d’un spinner seul pour un chargement long.

## 12. Pourquoi choisir nos formations ?

Margin-top desktop 64px, mobile 48px.

Section : fond très légèrement rosé, radius 16px, padding 40px desktop.

Desktop : 2 colonnes. Gauche = eyebrow + H2 + description + CTA. Droite = grille 3×2.

Eyebrow : 12px/700 uppercase `#E30613`.

H2 : 32/40, weight 700 ; mobile 28/36.

Description : 16/24 `#4B5563`, largeur max 420–460px.

CTA : bouton primary 44–48px.

6 avantages :
- Approche pratique
- Formateurs experts
- Équipements modernes
- Accompagnement
- Certification reconnue
- Insertion professionnelle

Feature card : blanc, border `#E5E7EB`, radius 10–12px, padding 16px. Icon 32px. Titre 14px/600. Description 12–13px.

## 13. Prochaines sessions

Margin-top 24–32px.

Card horizontale : blanc, border `#E5E7EB`, radius 12px, padding 20px.

Desktop : 3 zones `1fr 1.5fr auto`.

Bloc calendrier : icon 40×40px, fond `#FEE7E9`.

Exemple de contenu visuel :
`Prochaines sessions` / `Ne manquez pas nos prochaines sessions de formation`.

Session : nom de formation + statut `Inscriptions ouvertes` + date.

CTA : `Voir toutes les sessions →`, 44–48px, primary.

> Date, disponibilité et prix doivent provenir des données réelles. Ne pas inventer.

Mobile : empiler les blocs et placer le CTA en pleine largeur.

## 14. Contact CTA

Juste avant le footer. Fond `#F9FAFB`, hauteur desktop 96–112px environ.

Structure :
```text
[Icon] Une question sur nos formations ?
       Notre équipe est là pour vous accompagner.
                         [Appeler] [WhatsApp]
```

Deux boutons outline, hauteur 44–48px, border `#E30613`, texte rouge.

Le numéro WhatsApp/téléphone doit provenir de `data/site.ts`; aucun numéro fictif.

## 15. Footer

Fond recommandé `#1F2937` ou `#111827`. Padding desktop `56px 0 24px`.

5 colonnes :
1. Logo clair + description
2. Formations
3. Services
4. CFIGE
5. Contact

Gap 40–56px.

Titres : 12–14px/700 uppercase blanc.

Liens : 14px, `#D1D5DB`, gap 10–12px ; hover blanc.

Logo clair : largeur 110–130px.

Description : max-width 250px, 13/20.

Footer bottom : border `rgba(255,255,255,.12)`, padding-top 20px. Desktop copyright à gauche et liens légaux à droite. Mobile empilé.

## 16. WhatsApp flottant

Desktop : right 24px, bottom 24px.

Mobile : right 16px, bottom 16px.

Taille : 56×56px desktop, 52×52px mobile. Radius 999px. Shadow large. Z-index 400.

`aria-label="Contacter CFIGE sur WhatsApp"`.

## 17. Composants Shadcn/ui

Réutiliser :
```text
Button
Card
Input
Select
Badge
Tabs
Sheet
Separator
Skeleton
Tooltip
DropdownMenu
```

`Sheet` pour filtres mobiles ; `Skeleton` pour chargement ; `Tabs` pour catégories ; `Button/Card/Input/Select/Badge` pour les éléments standards.

## 18. Composants CFIGE

```text
FormationStats
FormationFilters
FormationCategoryTabs
FormationGrid
FormationCard
FormationPagination
FormationEmptyState
FormationSkeleton
WhyChooseCFIGE
TrainingBenefits
UpcomingSessions
TrainingContactCTA
Footer
WhatsAppButton
```

## 19. Données

```text
data/
├── formations.ts
├── categories.ts
├── sessions.ts
└── site.ts
```

Exemple de props :
```ts
interface FormationCardProps {
  id: string
  title: string
  description: string
  image: string
  category: string
  duration: string
  level: string
  mode: string
  price?: number
  currency?: string
  popular?: boolean
  href: string
}
```

Aucune donnée commerciale directement codée dans le composant.

## 20. Filtres et URL

Filtres combinables : recherche + catégorie + niveau + mode.

Recommandation :
```text
/formations?q=web&category=developpement-web&level=intermediaire&mode=presentiel
```

Synchroniser avec l’URL pour partage, retour navigateur et conservation des filtres.

## 21. Architecture

```text
app/
└── formations/
    └── page.tsx

components/
├── ui/
├── formations/
│   ├── FormationStats.tsx
│   ├── FormationFilters.tsx
│   ├── FormationCategoryTabs.tsx
│   ├── FormationGrid.tsx
│   ├── FormationCard.tsx
│   ├── FormationPagination.tsx
│   ├── FormationEmptyState.tsx
│   ├── FormationSkeleton.tsx
│   ├── WhyChooseCFIGE.tsx
│   ├── UpcomingSessions.tsx
│   └── TrainingContactCTA.tsx
└── layout/
    ├── Header.tsx
    └── Footer.tsx
```

## 22. Responsive

Breakpoints : `sm 640`, `md 768`, `lg 1024`, `xl 1280`, `2xl 1536`.

360×800 : padding 16px, 1 card, filtres Sheet, catégories scroll horizontal, stats 2×2, footer colonne, WhatsApp 52px.

390×844 : même structure, card 100%, image 16:9.

414×896 : même structure, gap 16px.

768×1024 : 2 cards, stats 2×2, Why CFIGE 2 colonnes.

820×1180 : idem avec respiration légèrement supérieure.

1024×768 : 3 cards.

1280×800 : 4 cards, container 1240px.

1440×900 : 4 cards, gap 24px.

1920×1080 : contenu toujours limité à 1240px.

Aucun overflow horizontal accepté.

## 23. Motion

Card hover : 200ms, translateY(-2px).

Interactions : 150–200ms.

Sheet : 200–300ms.

Accordion éventuel : 200–300ms.

Éviter bounce, rotation, parallaxe et animations permanentes.

Respecter :
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## 24. Accessibilité

Objectif WCAG AA.

- focus visible ;
- navigation clavier ;
- labels ;
- alt images ;
- contraste AA ;
- touch target ≥44×44px ;
- aria-label sur icônes seules ;
- boutons `<button>` et liens `<a>` corrects ;
- ne pas transmettre un statut uniquement par la couleur.

## 25. Performance

Utiliser `next/image`, dimensions et `sizes`. Images WebP/AVIF. Lazy loading pour les images non critiques. Éviter le CLS.

## 26. Checklist

```text
[ ] Container 1240px
[ ] Stats 4 colonnes desktop / 2×2 mobile
[ ] Recherche fonctionnelle
[ ] Filtres combinables
[ ] Sheet mobile
[ ] Catégories scrollables mobile
[ ] 4 cards desktop / 2 tablet / 1 mobile
[ ] Image 16:9
[ ] Loading Skeleton
[ ] Empty state
[ ] Pagination
[ ] Why CFIGE responsive
[ ] Sessions dynamiques
[ ] Contact CTA
[ ] Footer responsive
[ ] WhatsApp réel
[ ] 360×800 OK
[ ] 390×844 OK
[ ] 414×896 OK
[ ] 768×1024 OK
[ ] 820×1180 OK
[ ] 1024×768 OK
[ ] 1280×800 OK
[ ] 1440×900 OK
[ ] 1920×1080 OK
[ ] Aucun overflow
[ ] WCAG AA
[ ] Reduced motion
[ ] Tokens Tailwind
[ ] Composants Shadcn réutilisés
[ ] Aucune donnée commerciale inventée
```

## 27. Definition of Done

✓ Design System CFIGE respecté
✓ Responsive mobile-first
✓ Accessible
✓ États hover/focus/active/disabled/loading gérés
✓ Données centralisées
✓ Filtres et recherche fonctionnels
✓ Pas de duplication inutile
✓ Pas de couleurs arbitraires répétées
✓ Aucun overflow horizontal
✓ Mobile et desktop validés
