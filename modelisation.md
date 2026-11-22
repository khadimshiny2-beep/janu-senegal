# Modélisation — JANU Sénégal

> Brouillon de départ. Ce document sert à poser les bases avant de créer une base de données.
> Guide lié : `apprendre-bd/index.html` (bases + étapes).

## 1. Objectif

JANU est aujourd'hui un site vitrine statique. L'objectif est d'évoluer vers une **plateforme e-commerce** permettant de présenter le catalogue, gérer les clients, prendre des commandes et suivre les paiements/livraisons.

Ce document démarre la modélisation **avant** tout choix technique (SGBD, backend, framework). On réfléchit d'abord au métier et aux données.

## 2. Contexte actuel (observé dans le code)

- Site statique : `index.html`, `collection.html`, `atelier.html`, `contact.html`.
- Les produits sont codés en dur dans `collection.html` via des attributs `data-*`.
- Produits visibles actuellement :
  - Brocard léger — fibre : Brocard léger — prix affiché : "Série limitée"
  - Brocard léger & soie — fibre : Brocard léger et soie — prix affiché : "Série limitée"
  - Robe soie & brocard — fibre : Soie et brocard — prix affiché : "Série limitée"
  - Robe soie & coton — fibre : Soie et coton — prix affiché : "Série limitée"
- Chaque produit a plusieurs images.
- Contact/newsletter existent, mais pas de commande, panier, compte client, stock, ni paiement.

## 3. Périmètre de modélisation

On ne modélise pas tout d'un coup. On avance par versions.

| Version | Périmètre | Pourquoi |
|---|---|---|
| **V1 — Catalogue** | Catégorie, Produit, Média/Image, Matière/Tissu, (option) Variante | Remplacer le catalogue codé en dur par des données propres. |
| **V2 — Commande simple** | Client, Adresse, Panier/Commande, LigneCommande, Statut | Permettre une prise de commande structurée. |
| **V3 — E-commerce complet** | Paiement, Livraison, Stock mouvant, Code promo, Compte admin, Facture | Vendre et exploiter réellement la boutique. |

**Décision de départ :** commencer par la **V1 Catalogue**, en gardant en tête la V2 pour ne pas faire un modèle qui bloque.

## 4. Règles de gestion (à valider)

Ce sont des phrases simples qui décrivent le métier. Elles guideront le MCD.

### Catalogue
- [ ] Un produit a un nom, une description, un prix en FCFA, un statut (brouillon/actif/archivé).
- [ ] Un produit peut avoir plusieurs images ; une image appartient à un seul produit.
- [ ] Un produit peut être composé d'une ou plusieurs matières (ex. soie et coton).
- [ ] Un produit appartient à zéro ou une catégorie (à confirmer).
- [ ] Une catégorie peut contenir plusieurs produits.
- [ ] Un produit peut exister en plusieurs variantes (taille, couleur) — **à confirmer**.
- [ ] Le prix affiché peut être "sur demande" / "série limitée" ou un montant numérique — **à confirmer**.

### Clients & commandes (V2, à anticiper)
- [ ] Un client peut passer plusieurs commandes.
- [ ] Une commande appartient à un seul client.
- [ ] Une commande contient au moins une ligne de commande.
- [ ] Une ligne de commande concerne un seul produit/variante et porte une quantité et un prix unitaire au moment de l'achat.
- [ ] Le prix d'une ligne de commande doit être figé au moment de la commande (même si le prix du produit change après).

### Stock / paiement (V3, plus tard)
- [ ] Le stock ne peut pas être négatif.
- [ ] Un paiement est lié à une commande.
- [ ] Une commande peut avoir un statut : en attente, payée, préparée, expédiée, livrée, annulée.

> Les cases `[ ]` sont à valider/ajuster. Ce sont des hypothèses de départ, pas des vérités.

## 5. Dictionnaire de données (brouillon V1)

| Donnée | Description | Type envisagé | Exemple | Contraintes / remarques |
|---|---|---|---|---|
| `id_produit` | Identifiant unique du produit | entier / UUID | `1` | PK, unique |
| `nom_produit` | Nom commercial | texte (100) | `Robe soie & coton` | obligatoire |
| `slug` | Identifiant URL lisible | texte (120) | `robe-soie-coton` | unique, utile pour le site |
| `description` | Description produit | texte long | `Robe en soie et coton...` | obligatoire |
| `prix_fcfa` | Prix en FCFA | entier | `45000` | >= 0 ; nullable si "sur demande" ? |
| `prix_affichage` | Texte affiché si pas de prix fixe | texte (50) | `Série limitée` | à éviter si possible ; à clarifier |
| `statut_produit` | État de publication | enum | `actif` | brouillon/actif/archivé |
| `id_categorie` | Référence catégorie | entier / UUID | `2` | FK, nullable ? |
| `nom_categorie` | Nom de la catégorie | texte (80) | `Robes` | unique |
| `id_matiere` | Identifiant matière | entier / UUID | `3` | PK |
| `nom_matiere` | Nom de la matière | texte (80) | `Soie` | unique |
| `id_media` | Identifiant image/média | entier / UUID | `10` | PK |
| `url_media` | Chemin/URL de l'image | texte (255) | `images/robe_soie_coton1.jpg` | obligatoire |
| `alt_media` | Texte alternatif | texte (150) | `Robe soie et coton, vue face` | accessibilité |
| `position_media` | Ordre d'affichage | entier | `1` | utile pour la galerie |
| `date_creation` | Date de création | datetime | `2026-11-22...` | audit |
| `date_maj` | Date de mise à jour | datetime | `2026-11-22...` | audit |

## 6. Premier brouillon d'entités (MCD texte)

> Ce n'est pas un MCD final, juste un brouillon pour réfléchir.

### Entités candidates

- **Produit** (`id_produit`, nom, slug, description, prix_fcfa, statut, date_creation, date_maj)
- **Categorie** (`id_categorie`, nom, slug)
- **Matiere** (`id_matiere`, nom)
- **Media** (`id_media`, url, alt, position, type)

### Associations candidates

- **Categorie — Produit** : une catégorie peut avoir 0..n produits ; un produit appartient à 0..1 catégorie. (1-N)
- **Produit — Media** : un produit peut avoir 0..n médias ; un média appartient à 1 produit. (1-N)
- **Produit — Matiere** : un produit peut avoir 1..n matières ; une matière peut concerner 0..n produits. (M-N) → table d'association `ProduitMatiere`.

### Schéma texte (brouillon)

```text
[Categorie] 1 --- 0..n [Produit] 1 --- 0..n [Media]
                         1..n
                           \
                            <composer>
                           /
                         0..n
                      [Matiere]
```

## 7. Premier brouillon MLD (tables)

```text
Categorie(id_categorie PK, nom, slug UNIQUE)
Matiere(id_matiere PK, nom UNIQUE)
Produit(
  id_produit PK,
  nom,
  slug UNIQUE,
  description,
  prix_fcfa,
  statut,
  id_categorie FK -> Categorie.id_categorie NULL,
  date_creation,
  date_maj
)
ProduitMatiere(
  id_produit FK -> Produit.id_produit,
  id_matiere FK -> Matiere.id_matiere,
  PRIMARY KEY (id_produit, id_matiere)
)
Media(
  id_media PK,
  id_produit FK -> Produit.id_produit NOT NULL,
  url,
  alt,
  position,
  type
)
```

> Attention : brouillon. Il faudra le valider avec les vraies règles métier (tailles, variantes, prix variable, stock, etc.).

## 8. Questions à trancher avant d'aller plus loin

1. **Prix** : un produit a toujours un prix en FCFA, ou parfois seulement "sur demande" / "série limitée" ?
2. **Variantes** : une robe existe-t-elle en plusieurs tailles/couleurs avec stock différent ?
3. **Stock** : faut-il gérer un stock par produit, par variante, ou juste une disponibilité ?
4. **Catégories** : une seule catégorie par produit suffit, ou plusieurs (ex. Robe + Mariage) ?
5. **Commande** : le client achète en ligne avec paiement, ou envoie une demande/WhatsApp ?
6. **Compte client** : obligatoire pour commander, ou commande invitée possible ?
7. **Livraison** : zones de livraison, frais, retrait atelier ?

## 9. Prochaines étapes

1. Valider les règles de gestion V1 (section 4).
2. Répondre aux questions de la section 8.
3. Affiner le dictionnaire de données.
4. Dessiner un vrai MCD (même simple, sur papier/drawio).
5. Dériver le MLD et vérifier la normalisation.
6. Seulement après : choisir le SGBD et écrire le MPD/SQL.

## 10. Notes

- Ne pas stocker de données calculées inutilement (ex. total commande stocké peut se justifier, mais doit être une décision consciente).
- Prévoir les champs d'audit (`date_creation`, `date_maj`) tôt.
- Garder le modèle simple au début ; ajouter les variantes/stock/paiement quand le besoin est clair.
