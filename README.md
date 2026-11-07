# Janu — robes africaines, Dakar

Site vitrine statique en HTML / CSS / JavaScript, sans framework, sans build, sans dépendance.
Palette sombre (`#0e0c09`) avec accent or (`#d5b062`), textes en français.

## Lancer le site

```bash
cd site-janu-code
python3 -m http.server 8000
```

Puis ouvre <http://localhost:8000>.

Un petit serveur local vaut mieux qu'un double-clic sur `index.html` : la CSP, les chemins et le cache se comportent comme en production.

## Structure

```
index.html          Accueil : hero, 3 pièces, atelier, lookbook, newsletter
collection.html     Les 4 robes, prix en FCFA, fiche produit (dialog)
atelier.html        Histoire, principes, tissus, infos pratiques
lookbook.html       Galerie de 6 visuels
contact.html        Coordonnées + formulaire (ouvre la messagerie)
apprendre/          Mini-site pédagogique (React, Next.js, Tailwind, TypeScript, Convex)
css/style.css       Tout le design, animations et responsive
js/main.js          Menu mobile, apparitions au scroll, fiche produit, formulaires
assets/*.svg        Visuels provisoires dessinés en SVG + favicon
_headers            En-têtes de sécurité (Netlify / Cloudflare Pages)
```

Toutes les pages publiques partagent le même en-tête, le même pied de page et les mêmes feuilles de style.

## Personnaliser

| Quoi | Où |
|---|---|
| Couleurs, polices, espacements | variables `:root` en haut de `css/style.css` |
| Textes | directement dans les `.html` |
| Prix, noms, descriptions des robes | attributs `data-name`, `data-price`, `data-fibre`, `data-desc`, `data-img` des boutons `[data-piece]` |
| Photos des robes | remplacer `assets/robe-teranga.svg`, `robe-casamance.svg`, `robe-sahel.svg`, `robe-baobab.svg` (portrait 4:5 conseillé, 1200×1500 px) |
| Hero et lookbook | `assets/hero.svg`, `assets/lookbook.svg`, `assets/detail-*.svg` |
| Adresse, email, téléphone | chercher `bonjour@janu.sn`, `+221 77 000 00 00` et `221770000000` dans les `.html` et `js/main.js` |
| Newsletter | constante `SIGNUP_ENDPOINT` en bas de `js/main.js` |

> Les coordonnées actuelles sont des **placeholders de démonstration** : `bonjour@janu.sn`, `+221 77 000 00 00`, WhatsApp `221770000000`, Médina / Dakar. Remplace-les avant toute mise en ligne.

Quand tu branches la newsletter, autorise aussi le domaine du fournisseur dans `connect-src`, dans la balise CSP de `index.html` **et** dans `_headers`.

## Les pages d'apprentissage

`apprendre/` est un mini-site séparé, en `noindex`, qui explique les outils listés dans `.ideas` : TypeScript, React, Tailwind CSS, Next.js, Convex. Il ne fait pas partie du site public et ne charge aucun JavaScript.

Ordre conseillé, et c'est celui du sommaire :

1. **TypeScript** — des types pour éviter les bugs.
2. **React** — l'interface en composants réutilisables.
3. **Tailwind CSS** — styler avec des classes utilitaires.
4. **Next.js** — routes, rendu serveur, SEO, déploiement.
5. **Convex** — base de données et backend en TypeScript.

Chaque leçon donne le « à quoi ça sert », l'installation, un premier exemple, les notions à retenir et les liens vers la doc officielle. Commence par `apprendre/index.html`.

## Déployer (gratuit, HTTPS automatique)

1. **Netlify** ou **Cloudflare Pages** : glisser-déposer le dossier, c'est en ligne. Les deux lisent `_headers`.
2. **GitHub Pages** : pousser le repo, Settings → Pages → branche `main` / racine. GitHub Pages ignore `_headers`, donc les en-têtes de sécurité ne seront pas appliqués.
3. Nom de domaine : à acheter, puis à ajouter dans le dashboard de l'hébergeur.

## Ce qui est déjà sécurisé

- **CSP stricte** : seuls le site et Google Fonts sont autorisés, aucun script tiers ne peut s'exécuter.
- **Zéro dépendance JS** : rien à mettre à jour, pas de faille npm.
- **Pas de `innerHTML` avec des données** : le JS utilise `textContent`.
- **Formulaires validés côté client**, email borné à 254 caractères, message à 2 000.
- **Liens externes** en `rel="noopener noreferrer"`.
- **`_headers`** : `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, HSTS, `frame-ancestors`.

Limites à connaître :

- La CSP en `<meta>` ne gère pas `frame-ancestors` : c'est dans `_headers`, donc seulement chez un hébergeur qui lit ce fichier.
- Le formulaire de contact n'envoie rien à un serveur : il ouvre le logiciel de messagerie du visiteur (`mailto:`). Aucune donnée n'est stockée.
- Un site statique ne peut ni encaisser un paiement ni gérer un stock. Pour vendre : **Stripe Payment Links** ou **Shopify Buy Button**.
- Avant une vraie mise en ligne commerciale : mentions légales, CGV, politique de confidentialité, et de vraies photos.

## Pourquoi pas React / Next.js / Convex pour ce site ?

Pour une vitrine de cinq pages, ils ajoutent un build, des dépendances et de la surface d'attaque sans bénéfice. Le site actuel se charge vite, se déploie gratuitement et se modifie sans rien installer.

Passe à Next.js + Convex **quand** tu auras besoin de comptes clients, de commandes, de stock ou d'un back-office. Les pages `apprendre/` servent exactement à préparer ce moment.

## Étapes suivantes

1. Remplacer les visuels par de vraies photos.
2. Mettre le vrai email, le vrai numéro et la vraie adresse.
3. Brancher la newsletter (`SIGNUP_ENDPOINT` + `connect-src`).
4. Déployer et acheter le domaine.
5. Ajouter les pages légales.
6. Ouvrir une boutique (Stripe ou Shopify) et relier les boutons « Commander ».
