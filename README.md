# LDPL — Architecture intérieure & design d’espace

Site statique en HTML, CSS et JavaScript, composé des pages Accueil, À propos et Contact. La mise en page conserve la structure du site et s’adapte aux écrans mobiles et ordinateurs. Le site est compatible avec GitHub Pages et ne nécessite ni compilation ni dépendances.

## Fichiers

- `index.html`, `a-propos.html`, `contact.html` : les trois pages et leurs navigations.
- `style.css` : identité visuelle et règles responsive.
- `script.js` : menu, année du pied de page et intégration du formulaire par endpoint.
- Les photos existantes sont conservées à la racine du dépôt : `accueil-hero.jpg`, `a-propos.jpg`, `contact.jpg`, `architecture-interieur.jpg`, `merchandising.jpg`, `scenographie.jpg` et `amenagement-exterieur.jpg`. Chaque expertise utilise son propre fichier.

## Formulaire — configuration avant réception

Aucun service de réception n’est encore configuré. Le formulaire ne fait pas semblant d’envoyer : après validation, il signale que la demande n’a pas été transmise. Pour l’activer, configurez un endpoint HTTPS de réception de formulaires, placez son URL dans l’attribut `data-endpoint` du formulaire dans `contact.html`, puis testez l’envoi, les réponses d’erreur et la réception. Le JavaScript envoie les champs avec `fetch` et n’affiche une confirmation de transmission qu’après une réponse HTTP réussie. Ne placez aucune clé secrète dans les fichiers publics.

## Images et affichage mobile

Les chemins des photos existantes correspondent aux fichiers du dépôt. Le lien vers `accueil-hero-mobile.jpg` a été retiré : ce fichier n’existait pas, et aucun visuel mobile n’a été ajouté ou inventé. L’image réelle `accueil-hero.jpg` est utilisée sur toutes les largeurs, avec `object-fit: cover` et un cadrage CSS mobile dédié ; le fichier source n’est pas étiré. Les autres images restent inchangées.

## GitHub Pages

Dans **Settings → Pages**, choisissez la branche `main` et le dossier `/ (root)`.
