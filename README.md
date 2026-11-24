# LDPL — Architecture intérieure & design d’espace

Site vitrine statique en HTML, CSS et JavaScript, composé des pages Accueil, À propos et Contact. La mise en page est responsive, pensée pour les écrans mobiles et ordinateurs, et publiable sur GitHub Pages.

## Fichiers

- `index.html`, `a-propos.html`, `contact.html` : pages du site.
- `style.css` : styles et adaptations responsive.
- `script.js` : menu accessible, année du pied de page et garde-fou du formulaire.
- Les photographies sont les fichiers JPG existants à la racine du dépôt (`accueil-hero.jpg`, `a-propos.jpg`, `contact.jpg` et les quatre images d’expertise).

## Formulaire de contact — configuration requise

Aucun service d’envoi n’est actuellement connecté. Le formulaire vérifie les champs et indique explicitement que la demande n’a pas été envoyée : il ne simule pas une réception réussie. Pour activer l’envoi, configurez un endpoint HTTPS de votre choix (par exemple Formspree ou un backend) puis raccordez-le au formulaire dans `contact.html` et ajoutez un envoi `fetch` avec gestion des réponses dans `script.js`. Ne mettez jamais de clé privée dans le JavaScript public. Testez la réception et les protections anti-spam avant la mise en production.

## Photographies

Les chemins des photos déjà présents dans le dépôt sont référencés directement dans les pages. L’accueil utilise `accueil-hero.jpg` sur grand écran et attend un visuel mobile distinct nommé `accueil-hero-mobile.jpg` à la racine. Ce nouveau fichier n’a pas été fourni : ajoutez-y une photographie mobile de composition adaptée avant publication pour éviter une image cassée sur téléphone. Les autres photos existantes sont conservées et utilisées séparément pour les expertises. Les polices Playfair Display et DM Sans sont chargées depuis Google Fonts, avec des polices de remplacement locales.

## GitHub Pages

Dans **Settings → Pages**, choisissez la branche `main` et le dossier `/ (root)`. Le site ne nécessite ni compilation ni dépendances.
