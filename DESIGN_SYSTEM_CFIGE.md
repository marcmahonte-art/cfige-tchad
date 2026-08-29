# DESIGN_SYSTEM_CFIGE.md

# CFIGE TCHAD --- DESIGN SYSTEM

> **Version : 1.0**\
> **Marque : CFIGE --- Centre de Formation Informatique et de Gestion**\
> **Usage : site web institutionnel, formations, services IT, conseil et
> communication digitale**

------------------------------------------------------------------------

## 1. OBJECTIF

Ce Design System définit les règles visuelles et UI du nouveau site
CFIGE.

Le site doit transmettre :

-   professionnalisme ;
-   confiance ;
-   modernité ;
-   expertise ;
-   proximité ;
-   innovation ;
-   simplicité.

Le design doit rester institutionnel et sérieux tout en étant
suffisamment moderne pour représenter les activités informatiques et
digitales du CFIGE.

------------------------------------------------------------------------

# 2. IDENTITÉ VISUELLE

## Nom

**LE CFIGE**

## Nom complet

**Centre de Formation Informatique et de Gestion**

## Signature

> Centre de Formation Informatique et de Gestion

## Logo

Le logo existant constitue la référence principale de l'identité.

Éléments visuels principaux :

-   rouge vif ;
-   gris ;
-   blanc ;
-   structure géométrique ;
-   typographie condensée et forte ;
-   symbole elliptique rouge.

### Règle

Ne pas modifier la structure du logo sans validation.

Prévoir les variantes :

1.  logo principal sur fond clair ;
2.  logo blanc / version claire sur fond sombre ;
3.  version monochrome ;
4.  favicon / icône.

------------------------------------------------------------------------

# 3. PRINCIPES DE DESIGN

## 3.1 Minimalisme professionnel

Utiliser beaucoup d'espace blanc.

Éviter :

-   surcharge graphique ;
-   trop nombreuses couleurs ;
-   effets 3D ;
-   ombres fortes ;
-   gradients omniprésents ;
-   animations excessives.

## 3.2 Hiérarchie forte

Chaque section doit avoir :

``` text
Badge
↓
Titre
↓
Description
↓
Contenu
↓
CTA
```

## 3.3 Design orienté conversion

Les actions importantes doivent être immédiatement identifiables :

-   Découvrir les formations ;
-   S'inscrire ;
-   Demander un devis ;
-   Nous contacter ;
-   WhatsApp.

------------------------------------------------------------------------

# 4. PALETTE DE COULEURS

## Couleur primaire --- Rouge CFIGE

``` text
Nom       : CFIGE Red
HEX       : #E30613
RGB       : 227, 6, 19
Usage     : CTA principaux, liens actifs, accents, états actifs
```

Le rouge est la couleur d'action principale.

À utiliser avec modération.

------------------------------------------------------------------------

## Rouge foncé

``` text
Nom       : CFIGE Red Dark
HEX       : #B80510
```

Usage :

-   hover ;
-   active ;
-   éléments importants ;
-   contrastes.

------------------------------------------------------------------------

## Rouge très clair

``` text
Nom       : CFIGE Red Light
HEX       : #FEE7E9
```

Usage :

-   fonds de badges ;
-   notifications ;
-   backgrounds légers ;
-   états sélectionnés.

------------------------------------------------------------------------

## Gris principal

``` text
Nom       : CFIGE Gray
HEX       : #4D4F52
```

Usage :

-   éléments secondaires ;
-   navigation secondaire ;
-   titres moins importants ;
-   icônes.

------------------------------------------------------------------------

## Gris moyen

``` text
Nom       : Gray 500
HEX       : #6B7280
```

------------------------------------------------------------------------

## Gris clair

``` text
Nom       : Gray 200
HEX       : #E5E7EB
```

Usage :

-   bordures ;
-   séparateurs ;
-   backgrounds d'inputs.

------------------------------------------------------------------------

## Gris très clair

``` text
Nom       : Gray 50
HEX       : #F9FAFB
```

Usage :

-   sections secondaires ;
-   cards ;
-   zones de contenu.

------------------------------------------------------------------------

## Blanc

``` text
HEX : #FFFFFF
```

Usage :

-   background principal ;
-   cards ;
-   header ;
-   formulaires.

------------------------------------------------------------------------

## Texte principal

``` text
HEX : #111827
```

Usage :

-   H1 ;
-   H2 ;
-   H3 ;
-   paragraphes principaux.

------------------------------------------------------------------------

## Texte secondaire

``` text
HEX : #4B5563
```

Usage :

-   descriptions ;
-   métadonnées ;
-   textes secondaires.

------------------------------------------------------------------------

## Succès

``` text
HEX : #16A34A
```

------------------------------------------------------------------------

## Alerte

``` text
HEX : #F59E0B
```

------------------------------------------------------------------------

## Erreur

``` text
HEX : #DC2626
```

------------------------------------------------------------------------

## Information

``` text
HEX : #2563EB
```

------------------------------------------------------------------------

# 5. TOKENS CSS

Créer les variables globales suivantes :

``` css
:root {
  --color-primary: #E30613;
  --color-primary-dark: #B80510;
  --color-primary-light: #FEE7E9;

  --color-secondary: #4D4F52;

  --color-white: #FFFFFF;
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
}
```

------------------------------------------------------------------------

# 6. TYPOGRAPHIE

## Police principale

Utiliser :

**Inter**

Fallback :

``` text
Inter, system-ui, sans-serif
```

Si Inter n'est pas disponible, utiliser une police sans-serif moderne
équivalente.

------------------------------------------------------------------------

# 7. ÉCHELLE TYPOGRAPHIQUE

## H1

Desktop :

``` text
font-size: 56px
line-height: 64px
font-weight: 700
letter-spacing: -0.03em
```

Grand écran :

``` text
64px / 72px
```

Mobile :

``` text
36px / 44px
font-weight: 700
```

------------------------------------------------------------------------

## H2

Desktop :

``` text
40px / 48px
font-weight: 700
```

Mobile :

``` text
30px / 38px
```

------------------------------------------------------------------------

## H3

``` text
28px / 36px
font-weight: 600
```

Mobile :

``` text
22px / 28px
```

------------------------------------------------------------------------

## H4

``` text
22px / 28px
font-weight: 600
```

------------------------------------------------------------------------

## Body Large

``` text
18px / 28px
font-weight: 400
```

------------------------------------------------------------------------

## Body

``` text
16px / 24px
font-weight: 400
```

------------------------------------------------------------------------

## Small

``` text
14px / 20px
```

------------------------------------------------------------------------

## Caption

``` text
12px / 16px
```

------------------------------------------------------------------------

# 8. POIDS DE POLICE

``` text
400 — Regular
500 — Medium
600 — SemiBold
700 — Bold
800 — ExtraBold
```

Utiliser principalement :

``` text
400
500
600
700
```

------------------------------------------------------------------------

# 9. ESPACEMENTS

Le système utilise une grille basée sur 8px.

``` text
4px
8px
12px
16px
24px
32px
40px
48px
64px
80px
96px
120px
```

## Règle

Éviter les valeurs arbitraires répétées.

Préférer :

``` text
8
16
24
32
48
64
80
96
```

------------------------------------------------------------------------

# 10. ESPACEMENT DES SECTIONS

Desktop :

``` text
section padding :
80px 0
```

Grande section :

``` text
96px 0
```

Mobile :

``` text
56px 0
```

Petites sections :

``` text
40px 0
```

------------------------------------------------------------------------

# 11. CONTAINER

Largeur maximale :

``` text
1240px
```

CSS recommandé :

``` css
.container {
  width: min(100% - 40px, 1240px);
  margin-inline: auto;
}
```

Mobile :

``` css
.container {
  width: min(100% - 32px, 1240px);
}
```

------------------------------------------------------------------------

# 12. GRILLE

## Desktop

Utiliser :

``` text
12 colonnes
```

Gap :

``` text
24px
```

## Tablet

``` text
8 colonnes
```

## Mobile

``` text
4 colonnes
```

------------------------------------------------------------------------

# 13. BREAKPOINTS

``` text
sm  : 640px
md  : 768px
lg  : 1024px
xl  : 1280px
2xl : 1536px
```

Priorité :

``` text
mobile-first
```

------------------------------------------------------------------------

# 14. BORDER RADIUS

``` text
4px   — petits éléments
8px   — inputs
12px  — boutons / petites cards
16px  — cards
20px  — grandes cards
24px  — sections visuelles
```

Éviter de rendre tous les composants excessivement arrondis.

Le style CFIGE doit rester professionnel.

------------------------------------------------------------------------

# 15. OMBRES

## Shadow Small

``` css
box-shadow:
0 1px 2px rgba(17, 24, 39, 0.05);
```

## Shadow Medium

``` css
box-shadow:
0 6px 16px rgba(17, 24, 39, 0.08);
```

## Shadow Large

``` css
box-shadow:
0 12px 30px rgba(17, 24, 39, 0.12);
```

Les ombres doivent rester discrètes.

------------------------------------------------------------------------

# 16. BORDURES

Bordure standard :

``` text
1px solid #E5E7EB
```

Bordure active :

``` text
1px solid #E30613
```

------------------------------------------------------------------------

# 17. BOUTONS

Créer un composant global :

``` text
Button
```

Variantes :

``` text
primary
secondary
outline
ghost
link
```

------------------------------------------------------------------------

# 18. BOUTON PRIMARY

``` text
Background : #E30613
Text       : #FFFFFF
Radius     : 10–12px
Height     : 48px
Padding    : 16px 24px
Font       : 15–16px
Weight     : 600
```

Hover :

``` text
Background : #B80510
```

Active :

``` text
transform: translateY(1px)
```

------------------------------------------------------------------------

# 19. BOUTON SECONDARY

``` text
Background : #4D4F52
Text       : #FFFFFF
```

Hover :

``` text
background plus sombre
```

------------------------------------------------------------------------

# 20. BOUTON OUTLINE

``` text
Background : transparent
Border     : #E30613
Text       : #E30613
```

Hover :

``` text
Background : #FEE7E9
```

------------------------------------------------------------------------

# 21. BOUTON GHOST

``` text
Background : transparent
Text       : #111827
```

Hover :

``` text
Background : #F3F4F6
```

------------------------------------------------------------------------

# 22. TAILLES DES BOUTONS

``` text
Small  : 36px
Medium : 44–48px
Large  : 52px
```

Sur mobile :

``` text
min-height: 48px
```

Pour les CTA importants, utiliser une largeur suffisante pour être
facilement cliquable.

------------------------------------------------------------------------

# 23. ÉTATS BOUTONS

Prévoir :

``` text
default
hover
focus
active
disabled
loading
```

Loading :

``` text
spinner + texte
```

Exemple :

``` text
Envoi en cours...
```

------------------------------------------------------------------------

# 24. LIENS

Lien standard :

``` text
color: #E30613
```

Hover :

``` text
color: #B80510
```

Éviter le soulignement permanent sauf lorsque nécessaire pour
l'accessibilité.

------------------------------------------------------------------------

# 25. ICÔNES

Bibliothèque recommandée :

**Lucide Icons**

Style :

``` text
outline
2px
angles légèrement arrondis
```

Taille :

``` text
16px — inline
20px — boutons
24px — cards
32px — feature
40px — illustration
```

Ne pas mélanger plusieurs bibliothèques d'icônes.

------------------------------------------------------------------------

# 26. ICONOGRAPHIE CFIGE

Les icônes peuvent représenter :

-   formation ;
-   ordinateur ;
-   code ;
-   comptabilité ;
-   finance ;
-   gestion ;
-   réseau ;
-   maintenance ;
-   conseil ;
-   entreprise ;
-   certification ;
-   calendrier ;
-   téléphone ;
-   email ;
-   localisation.

------------------------------------------------------------------------

# 27. BADGES

Style :

``` text
height: 28px
padding: 6px 10px
border-radius: 999px
font-size: 12–13px
font-weight: 600
```

Exemples :

``` text
Formation
Service IT
Nouveau
Populaire
En ligne
À venir
```

------------------------------------------------------------------------

# 28. BADGE FORMATION

``` text
Background : #FEE7E9
Text       : #B80510
```

------------------------------------------------------------------------

# 29. BADGE SERVICE IT

``` text
Background : #F3F4F6
Text       : #374151
```

------------------------------------------------------------------------

# 30. BADGE NOUVEAU

``` text
Background : #DCFCE7
Text       : #166534
```

------------------------------------------------------------------------

# 31. BADGE POPULAIRE

``` text
Background : #FEF3C7
Text       : #92400E
```

------------------------------------------------------------------------

# 32. BADGE EN LIGNE

``` text
Background : #DBEAFE
Text       : #1D4ED8
```

------------------------------------------------------------------------

# 33. CARDS

Les cards doivent avoir :

``` text
background : #FFFFFF
border     : #E5E7EB
radius     : 16px
```

Shadow uniquement lorsqu'elle améliore la hiérarchie.

------------------------------------------------------------------------

# 34. CARTE FORMATION

Structure :

``` text
┌───────────────────────────┐
│ IMAGE                     │
│                           │
├───────────────────────────┤
│ BADGE                     │
│                           │
│ Nom de la formation       │
│                           │
│ Description courte        │
│                           │
│ Durée · Niveau            │
│                           │
│ Prix                      │
│                           │
│ Voir la formation →       │
└───────────────────────────┘
```

------------------------------------------------------------------------

# 35. CARTE SERVICE

Structure :

``` text
┌───────────────────────────┐
│ IMAGE / ICÔNE             │
│                           │
│ Développement Web         │
│                           │
│ Description               │
│                           │
│ En savoir plus →          │
└───────────────────────────┘
```

------------------------------------------------------------------------

# 36. CARTE ÉQUIPE

Afficher :

``` text
Photo
Nom
Fonction
Description
LinkedIn éventuellement
```

La photo doit avoir un ratio cohérent.

------------------------------------------------------------------------

# 37. CARTE TÉMOIGNAGE

Structure :

``` text
┌───────────────────────────┐
│ “                         │
│                           │
│ Témoignage                │
│                           │
│ Photo Nom                 │
│ Fonction / Formation      │
└───────────────────────────┘
```

Ne publier que des témoignages validés.

------------------------------------------------------------------------

# 38. INPUTS

Style :

``` text
height      : 48px
border      : 1px solid #D1D5DB
radius      : 8px
padding     : 12px 14px
font-size   : 16px
background  : #FFFFFF
```

------------------------------------------------------------------------

# 39. INPUT FOCUS

``` text
border-color: #E30613
```

Ajouter un focus ring visible.

Exemple :

``` css
box-shadow: 0 0 0 3px rgba(227, 6, 19, 0.12);
```

------------------------------------------------------------------------

# 40. INPUT ERROR

``` text
border-color: #DC2626
```

Afficher un message sous le champ.

------------------------------------------------------------------------

# 41. INPUT DISABLED

``` text
background: #F3F4F6
color: #9CA3AF
cursor: not-allowed
```

------------------------------------------------------------------------

# 42. SELECT

Même système que les inputs.

Prévoir :

-   état normal ;
-   focus ;
-   erreur ;
-   disabled.

------------------------------------------------------------------------

# 43. CHECKBOX

Taille :

``` text
18 × 18px
```

État sélectionné :

``` text
background: #E30613
```

------------------------------------------------------------------------

# 44. RADIO

Taille :

``` text
20 × 20px
```

État actif :

``` text
border: #E30613
```

------------------------------------------------------------------------

# 45. TEXTAREA

Minimum :

``` text
min-height: 120px
```

Resize :

``` text
vertical
```

------------------------------------------------------------------------

# 46. ALERTES

## Success

``` text
Background : #F0FDF4
Border     : #BBF7D0
Text       : #166534
```

## Warning

``` text
Background : #FFFBEB
Border     : #FDE68A
Text       : #92400E
```

## Error

``` text
Background : #FEF2F2
Border     : #FECACA
Text       : #991B1B
```

## Info

``` text
Background : #EFF6FF
Border     : #BFDBFE
Text       : #1E40AF
```

------------------------------------------------------------------------

# 47. HEADER

## Desktop

Structure :

``` text
┌─────────────────────────────────────────────────────┐
│ LOGO   Accueil Formations Services À propos Blog   │
│                                      Contact       │
│                                      [S'inscrire]  │
└─────────────────────────────────────────────────────┘
```

Header :

``` text
height: 72–80px
background: #FFFFFF
border-bottom: 1px solid #E5E7EB
```

------------------------------------------------------------------------

# 48. HEADER AU SCROLL

Après scroll :

``` text
background: rgba(255,255,255,.94)
backdrop-filter: blur(10px)
```

Ajouter une ombre très légère.

------------------------------------------------------------------------

# 49. NAVIGATION ACTIVE

État actif :

``` text
color: #E30613
font-weight: 600
```

Éventuellement une petite ligne rouge sous le lien.

------------------------------------------------------------------------

# 50. MENU MOBILE

Header :

``` text
Logo                         Menu
```

Le menu doit :

-   couvrir correctement l'écran ;
-   bloquer le scroll derrière ;
-   être accessible ;
-   fermer avec ESC ;
-   fermer après navigation.

------------------------------------------------------------------------

# 51. HERO

Le Hero doit être la section la plus forte visuellement.

Structure :

``` text
Badge

Développez vos compétences.
Transformez votre avenir.

Formations professionnelles, solutions numériques
et accompagnement des entreprises au Tchad.

[Découvrir les formations]
[Nos solutions IT]

                 IMAGE / VISUEL
```

------------------------------------------------------------------------

# 52. HERO --- DESIGN

Background recommandé :

``` text
#FFFFFF
```

Utiliser éventuellement :

-   formes géométriques très discrètes ;
-   grille légère ;
-   éléments rouges ;
-   photographie réelle ;
-   illustration digitale.

Ne pas utiliser un background visuellement chargé.

------------------------------------------------------------------------

# 53. HERO MOBILE

Ordre :

``` text
Badge
Titre
Description
CTA principal
CTA secondaire
Image
```

Le Hero ne doit pas utiliser :

``` css
min-height: 100vh;
```

sur mobile.

------------------------------------------------------------------------

# 54. SECTION TITLES

Créer un composant :

``` text
SectionHeading
```

Structure :

``` text
Eyebrow
H2
Description
```

Exemple :

``` text
NOS FORMATIONS

Développez les compétences qui comptent

Des formations pratiques conçues pour répondre
aux besoins du monde professionnel.
```

------------------------------------------------------------------------

# 55. STATS

Style :

``` text
200+
Apprenants formés

12+
Formations

5
Années d'expérience

95%
Satisfaction
```

Les chiffres doivent être facilement modifiables.

------------------------------------------------------------------------

# 56. SECTION FORMATIONS

Disposition desktop :

``` text
4 cards
```

Tablet :

``` text
2 cards
```

Mobile :

``` text
1 card
```

------------------------------------------------------------------------

# 57. SECTION SERVICES IT

Utiliser une grille :

``` text
2 × 4
```

ou une composition asymétrique.

Les services principaux :

1.  Développement Web
2.  Logiciels sur mesure
3.  Applications mobiles
4.  E-commerce
5.  Maintenance informatique
6.  Réseaux
7.  Transformation digitale
8.  Conseil stratégique

------------------------------------------------------------------------

# 58. SECTION POURQUOI CFIGE

Créer six avantages :

``` text
Formateurs qualifiés
Formation pratique
Certification
Accompagnement
Solutions adaptées
Proximité
```

------------------------------------------------------------------------

# 59. SECTION MÉTHODE

Présenter en 3 étapes :

``` text
01
Évaluation des besoins

02
Formation / accompagnement

03
Certification / mise en œuvre
```

Style :

-   numéros rouges ;
-   ligne de progression ;
-   contenu clair.

------------------------------------------------------------------------

# 60. SECTION ENTREPRISE

Cette section doit avoir un traitement plus premium.

Message :

> Votre entreprise mérite des outils adaptés à ses ambitions.

CTA :

``` text
Demander un devis
```

Utiliser éventuellement une photo professionnelle d'équipe ou de
collaborateurs.

------------------------------------------------------------------------

# 61. SECTION TÉMOIGNAGES

Desktop :

``` text
3 cards visibles
```

Mobile :

``` text
1 card
```

Un carousel peut être utilisé uniquement si le nombre de témoignages le
justifie.

------------------------------------------------------------------------

# 62. BLOG

Cards :

``` text
Image
Catégorie
Date
Titre
Résumé
Lire l'article →
```

------------------------------------------------------------------------

# 63. BREADCRUMB

Style :

``` text
Accueil
>
Formations
>
Développement Web
```

Le dernier élément doit être plus sombre.

------------------------------------------------------------------------

# 64. TABS

Style :

``` text
Description
Programme
Avis
FAQ
```

Tab actif :

``` text
color: #E30613
border-bottom: 2px solid #E30613
```

------------------------------------------------------------------------

# 65. ACCORDÉON FAQ

Utiliser :

``` text
Question
+
```

Au clic :

``` text
Question
-
Réponse
```

Animation courte.

------------------------------------------------------------------------

# 66. PAGINATION

Style simple :

``` text
<  1  2  3  ...  10  >
```

Page active :

``` text
background: #E30613
color: #FFFFFF
```

------------------------------------------------------------------------

# 67. MODALES

Modal :

``` text
background: #FFFFFF
radius: 20px
shadow: large
max-width: 560–720px
```

Overlay :

``` text
rgba(17,24,39,.5)
```

------------------------------------------------------------------------

# 68. TOASTS

Position :

``` text
bottom-right
```

Mobile :

``` text
bottom: 16px
left: 16px
right: 16px
```

Durée :

``` text
3–5 secondes
```

Ne pas dépendre uniquement de la couleur pour indiquer le statut.

------------------------------------------------------------------------

# 69. FOOTER

Le footer doit être plus sombre que le reste du site.

Structure :

``` text
Logo
Description

Formations
Services
CFIGE

Contact

Téléphone
WhatsApp
Email
Adresse

Réseaux sociaux

Mentions légales
Confidentialité
© CFIGE
```

Le logo clair doit être utilisé sur fond sombre.

------------------------------------------------------------------------

# 70. MOBILE FOOTER

Empiler les colonnes.

Utiliser éventuellement des accordéons pour :

-   Formations ;
-   Services ;
-   Informations.

------------------------------------------------------------------------

# 71. ICONES SOCIALES

Utiliser uniquement les réseaux réellement utilisés par CFIGE.

Ne pas afficher de faux comptes ou liens.

------------------------------------------------------------------------

# 72. IMAGES

Priorité :

1.  vraies photos CFIGE ;
2.  photos des apprenants ;
3.  photos des formations ;
4.  photos de l'équipe ;
5.  photos des projets ;
6.  illustrations professionnelles.

Éviter les images stock trop génériques.

------------------------------------------------------------------------

# 73. TRAITEMENT DES IMAGES

Toutes les images doivent :

-   avoir un ratio défini ;
-   être optimisées ;
-   utiliser WebP ou AVIF lorsque possible ;
-   avoir un texte alternatif ;
-   utiliser lazy loading sauf images critiques.

------------------------------------------------------------------------

# 74. ACCESSIBILITÉ

Objectif :

**WCAG AA**

Respecter :

-   contraste ;
-   navigation clavier ;
-   focus visible ;
-   labels ;
-   alt ;
-   structure des titres ;
-   boutons accessibles ;
-   tailles de zones tactiles.

------------------------------------------------------------------------

# 75. ZONE TACTILE

Sur mobile :

``` text
minimum recommandé : 44 × 44px
```

Les icônes seules doivent disposer d'une zone cliquable suffisante.

------------------------------------------------------------------------

# 76. MOTION DESIGN

Les animations doivent être discrètes.

Durées :

``` text
150ms
200ms
300ms
400ms
```

Animations recommandées :

-   fade-in ;
-   slide léger ;
-   scale léger ;
-   hover ;
-   menu mobile ;
-   accordion.

Éviter :

-   bounce permanent ;
-   rotations inutiles ;
-   parallaxe excessive ;
-   animations automatiques longues.

------------------------------------------------------------------------

# 77. REDUCED MOTION

Respecter :

``` css
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

------------------------------------------------------------------------

# 78. RESPONSIVE --- MOBILE

Dimensions à tester :

``` text
360 × 800
390 × 844
414 × 896
```

Règles :

-   titres réduits ;
-   sections plus compactes ;
-   boutons accessibles ;
-   aucune largeur fixe problématique ;
-   pas de débordement horizontal ;
-   images adaptées ;
-   navigation simplifiée.

------------------------------------------------------------------------

# 79. RESPONSIVE --- TABLET

Tester :

``` text
768 × 1024
820 × 1180
```

Éviter que les layouts desktop restent forcés sur tablette.

------------------------------------------------------------------------

# 80. RESPONSIVE --- DESKTOP

Tester :

``` text
1024 × 768
1280 × 800
1440 × 900
1920 × 1080
```

Le contenu doit rester centré et ne pas devenir excessivement large.

------------------------------------------------------------------------

# 81. DARK MODE

Le dark mode n'est pas obligatoire.

Si activé ultérieurement :

-   conserver le rouge CFIGE ;
-   augmenter les contrastes ;
-   éviter le noir pur partout ;
-   utiliser des surfaces gris foncé.

------------------------------------------------------------------------

# 82. DESIGN DES PAGES DE FORMATION

Chaque page formation doit avoir :

``` text
Breadcrumb
Hero
Badge
Titre
Description
Informations clés
CTA

Objectifs
Programme
Public cible
Prérequis
Durée
Modalités
Certification
Formateur
FAQ

CTA final
```

------------------------------------------------------------------------

# 83. INFORMATIONS CLÉS FORMATION

Afficher sous forme de petits blocs :

``` text
Durée
Niveau
Mode
Prix
Prochaine session
```

Exemple :

``` text
12 semaines
Intermédiaire
Présentiel
150 000 FCFA
15 septembre
```

Les valeurs doivent venir des données réelles.

------------------------------------------------------------------------

# 84. PAGE SERVICE

Structure :

``` text
Hero
Problème
Solution
Prestations
Processus
Technologies
Réalisations
FAQ
CTA
```

------------------------------------------------------------------------

# 85. DESIGN PAGE CONTACT

Desktop :

``` text
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

``` text
Informations
↓
Formulaire
↓
Localisation
```

------------------------------------------------------------------------

# 86. WHATSAPP

Le bouton WhatsApp doit être clairement identifiable.

Position possible :

``` text
floating button
```

sur mobile.

Ne pas afficher un numéro inventé.

------------------------------------------------------------------------

# 87. FORMULAIRE D'INSCRIPTION

Champs :

``` text
Nom
Prénom
Téléphone
WhatsApp
Email
Formation
Niveau
Situation professionnelle
Mode
Session
Message
Consentement
```

CTA :

> Envoyer ma demande

------------------------------------------------------------------------

# 88. ÉTATS DU FORMULAIRE

``` text
Idle
↓
Loading
↓
Success
```

ou :

``` text
Idle
↓
Loading
↓
Error
```

------------------------------------------------------------------------

# 89. SEO VISUEL

La hiérarchie doit respecter :

``` text
1 H1 par page
H2 pour les sections
H3 pour les sous-sections
```

Ne pas utiliser les balises H uniquement pour obtenir une taille
visuelle.

------------------------------------------------------------------------

# 90. COMPOSANTS UI À CRÉER

``` text
Button
Badge
Card
Input
Textarea
Select
Checkbox
Radio
Alert
Toast
Modal
Accordion
Tabs
Breadcrumb
Pagination
Avatar
Skeleton
Spinner
```

------------------------------------------------------------------------

# 91. COMPOSANTS CFIGE

``` text
Header
MobileMenu
Footer
Hero
SectionHeading
Stats
FormationCard
ServiceCard
TeamCard
TestimonialCard
BlogCard
FormationFilters
FormationHero
ServiceHero
CTASection
ContactInfo
RegistrationForm
QuoteForm
```

------------------------------------------------------------------------

# 92. TOKENS TAILWIND

Si Tailwind est utilisé, exposer les tokens du Design System dans la
configuration/theme appropriée.

Ne pas multiplier les valeurs arbitraires.

Exemple :

``` text
primary
primary-dark
primary-light
gray-50
gray-100
gray-200
gray-500
gray-700
gray-900
success
warning
error
info
```

------------------------------------------------------------------------

# 93. STRUCTURE RECOMMANDÉE

``` text
components/
├── ui/
├── layout/
├── home/
├── formations/
├── services/
├── about/
├── blog/
└── forms/

data/
├── site.ts
├── formations.ts
├── services.ts
├── team.ts
├── testimonials.ts
└── blog.ts
```

------------------------------------------------------------------------

# 94. RÈGLE DE CENTRALISATION

Ne pas répéter :

-   couleurs ;
-   coordonnées ;
-   CTA ;
-   formations ;
-   services ;
-   informations de l'entreprise.

Centraliser les données.

------------------------------------------------------------------------

# 95. DESIGN TOKENS --- RÉSUMÉ

``` text
PRIMARY
#E30613

PRIMARY DARK
#B80510

PRIMARY LIGHT
#FEE7E9

SECONDARY
#4D4F52

TEXT
#111827

TEXT SECONDARY
#4B5563

BORDER
#E5E7EB

BACKGROUND
#FFFFFF

SURFACE
#F9FAFB

SUCCESS
#16A34A

WARNING
#F59E0B

ERROR
#DC2626

INFO
#2563EB
```

------------------------------------------------------------------------

# 96. DESIGN PRINCIPLE FINAL

Le site doit donner cette impression :

``` text
                 CFIGE
                   │
        ┌──────────┼──────────┐
        │          │          │
    FORMATION   SOLUTIONS    CONSEIL
        │          │          │
   Compétences   Digital    Performance
```

La couleur rouge représente :

> action, énergie, ambition.

Le gris représente :

> sérieux, stabilité, expertise.

Le blanc représente :

> clarté, accessibilité, simplicité.

------------------------------------------------------------------------

# 97. CHECKLIST DESIGN

Avant livraison :

``` text
[ ] Logo correct
[ ] Couleurs cohérentes
[ ] Typographie cohérente
[ ] H1/H2/H3 cohérents
[ ] Boutons cohérents
[ ] Cards cohérentes
[ ] Inputs cohérents
[ ] Icônes cohérentes
[ ] Spacing cohérent
[ ] Border radius cohérent
[ ] Ombres cohérentes
[ ] Header responsive
[ ] Menu mobile fonctionnel
[ ] Footer responsive
[ ] Mobile 360px OK
[ ] Mobile 390px OK
[ ] Mobile 414px OK
[ ] Tablet OK
[ ] Desktop OK
[ ] Aucun overflow horizontal
[ ] Focus clavier visible
[ ] Contraste suffisant
[ ] Animations discrètes
[ ] Reduced motion respecté
```

------------------------------------------------------------------------

# 98. INSTRUCTION POUR OPENCODE / CODEX

> Utilise `DESIGN_SYSTEM_CFIGE.md` comme référence visuelle principale
> pour toute nouvelle interface CFIGE.
>
> Avant de créer un composant, vérifie si un composant UI existant peut
> être réutilisé.
>
> Ne crée pas plusieurs variantes visuelles pour le même besoin sans
> justification.
>
> Respecte les tokens de couleurs, typographie, espacements, rayons et
> ombres.
>
> Le rouge `#E30613` est la couleur primaire CFIGE et doit être utilisé
> principalement pour les CTA, états actifs, accents et éléments
> importants.
>
> Le site doit rester majoritairement blanc, gris et rouge.
>
> Ne transforme pas chaque section en carte.
>
> Ne surcharge pas les pages avec des animations.
>
> Mobile-first obligatoire.
>
> Aucun débordement horizontal ne doit être accepté.
>
> Les informations commerciales non confirmées doivent être marquées
> `TODO: À CONFIRMER` et ne doivent jamais être inventées.
>
> Toute modification importante doit être testée sur mobile, tablette et
> desktop.
>
> Si un composant existant respecte déjà le Design System, le réutiliser
> plutôt que le remplacer.

------------------------------------------------------------------------

# 99. DEFINITION OF DONE

Un composant est considéré terminé lorsque :

``` text
✓ Design System respecté
✓ Responsive
✓ Accessible
✓ États hover/focus/active/disabled gérés
✓ TypeScript correct
✓ Pas de duplication inutile
✓ Pas de valeur de couleur incohérente
✓ Pas de débordement
✓ Mobile testé
✓ Desktop testé
```

------------------------------------------------------------------------

# 100. VERSION

``` text
DESIGN SYSTEM CFIGE
Version 1.0
Date : 29 août 2026
```
