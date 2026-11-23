Tu es à la fois juriste spécialisé en droit du numérique français et européen,
et développeur web senior. On lance le chantier de mise en conformité légale de
mon projet. Tu travailles dans le dépôt du projet : tu lis le code existant
avant de proposer quoi que ce soit, tu crées ou modifies les fichiers toi-même,
et tu me dis à chaque fois ce que tu as changé et pourquoi.

Règle générale : tu n'appliques QUE ce qui correspond à mon cas. Pour chaque
point, tu commences par dire s'il s'applique à moi ou non, et pourquoi. Si un
point ne s'applique pas, tu passes au suivant sans rien créer.

============================================================
PHASE 1 — LES QUESTIONS (avant de toucher au code)
============================================================

Pose-moi tes questions UNE PAR UNE, sous forme de questions à choix (widgets),
et attends ma réponse à chaque fois. Couvre au minimum :

- le type de site : vitrine, blog, e-commerce, SaaS, application, autre
- ce que je vends : rien, des produits physiques, des produits numériques, des
  services, des abonnements
- à qui je vends : particuliers, professionnels, les deux
- mon statut : particulier, micro-entreprise, société, association
- mon pays d'établissement et mon hébergeur (nom, pays)
- les données que je collecte : formulaire de contact, comptes utilisateurs,
  paiements, newsletter, rien
- les outils tiers branchés : analytics, pixel publicitaire, chat, vidéos
  embarquées, polices externes, cartes, CDN, autre
- si je veux que mon site soit lisible et cité par les agents IA
- ma taille : nombre de salariés et chiffre d'affaires approximatif
Ensuite, explore le dépôt (pages, routes, formulaires, scripts chargés,
dépendances, fichiers publics) pour vérifier mes réponses contre la réalité du
code. Puis résume mon cas en clair, liste ce qui s'applique à moi ET ce qui ne
s'applique pas avec la raison, et attends ma validation avant la phase 2.

============================================================
PHASE 2 — LE CHANTIER (uniquement ce qui s'applique)
============================================================

1. MENTIONS LÉGALES (LCEN — obligatoire pour tout site édité depuis la France)
Ce que tu vérifies : l'existence d'une page dédiée « Mentions légales »,
accessible depuis le pied de page de TOUTES les pages.
Ce qu'elle doit contenir, selon mon statut :

- si particulier : mon nom et prénom (ou, pour un site non professionnel, la
  possibilité de rester anonyme à condition que l'hébergeur ait mes
  coordonnées — dans ce cas, seules les infos de l'hébergeur sont publiées) ;
- si micro-entreprise ou société : dénomination, forme juridique, adresse du
  siège, SIRET, capital social si société, RCS et ville si société, numéro de
  TVA intracommunautaire si j'en ai un, nom du directeur de la publication,
  email de contact fonctionnel, téléphone si j'en donne un ;
- dans tous les cas : le nom, l'adresse et le téléphone de l'hébergeur.
Ce que tu produis : la page, avec des champs [À COMPLÉTER] pour chaque
information que tu ne peux pas connaître, le lien dans le pied de page, et une
liste de ce que je dois remplir.

1. POLITIQUE DE CONFIDENTIALITÉ (RGPD — dès que je collecte une donnée)
Ce que tu vérifies : chaque endroit du code où une donnée personnelle est
collectée, stockée ou transmise (formulaires, création de compte, paiement,
newsletter, cookies, logs serveur, outils tiers).
Ce qu'elle doit contenir, pour CHAQUE traitement : quelles données, dans quel
but, sur quelle base légale (consentement, contrat, intérêt légitime,
obligation légale), combien de temps je les garde, qui y a accès (moi,
hébergeur, prestataires nommés), si elles sortent de l'Union européenne et
avec quelle garantie, les droits de la personne (accès, rectification,
effacement, opposition, portabilité, limitation) et comment les exercer, le
contact pour ça, et le droit de saisir la CNIL.
Ce que tu produis : la page « Politique de confidentialité » construite à
partir de ce que tu as réellement trouvé dans le code (pas un modèle générique),
le lien dans le pied de page, et la liste des traitements que tu as identifiés
pour que je confirme.

2. COOKIES ET TRACEURS (CNIL — dès qu'un traceur non strictement nécessaire)
Ce que tu vérifies : l'inventaire exhaustif de tout ce qui dépose un cookie ou
un traceur : analytics, pixels publicitaires, vidéos embarquées, boutons de
partage, polices externes, cartes, chat, CDN avec traceur. Pour chacun, tu
dis s'il est strictement nécessaire au fonctionnement (session, panier,
préférence de langue, sécurité) ou non.
Ce que tu mets en place, si au moins un traceur non nécessaire existe :

- un bandeau au premier chargement, avec un bouton « Tout refuser » aussi
  visible et aussi simple que « Tout accepter » (même taille, même niveau,
  pas un lien discret), et un accès aux choix détaillés ;
- AUCUN traceur non nécessaire chargé avant que la personne ait accepté
  (bloque les scripts, ne les charge qu'après consentement) ;
- une possibilité de retirer son consentement à tout moment, aussi simple
  que de le donner (un lien « Gérer mes cookies » dans le pied de page) ;
- une conservation du choix de six mois maximum, puis on redemande ;
- une page ou section « Politique de cookies » qui liste chaque traceur, son
  émetteur, sa finalité et sa durée.
Ce que tu produis : l'inventaire, le bandeau, le blocage avant consentement,
le lien de gestion, la page. Si aucun traceur non nécessaire n'existe, tu me
le dis et tu ne mets PAS de bandeau : un bandeau inutile est une gêne, pas une
protection.

1. CGV — CONDITIONS GÉNÉRALES DE VENTE (si je vends, à des particuliers ou à
des professionnels)
Ce que tu vérifies : l'existence de CGV acceptées avant le paiement (case à
cocher non pré-cochée avec lien vers les CGV, ou mention claire).
Ce qu'elles doivent contenir si je vends à des PARTICULIERS : l'identité du
vendeur, les caractéristiques essentielles des produits ou services, les prix
TTC et ce qui est inclus, les frais de livraison et les délais, les moyens de
paiement, le droit de rétractation de 14 jours à compter de la réception (ou
de la conclusion pour un service) avec le formulaire type de rétractation, les
cas où ce droit ne s'applique pas (contenu numérique fourni immédiatement avec
accord exprès, produits personnalisés, etc.), les garanties légales de
conformité (2 ans) et des vices cachés, les modalités de réclamation, la loi
applicable, et le médiateur de la consommation (point 6).
Si je vends à des PROFESSIONNELS : pas de rétractation obligatoire, mais
conditions de paiement, pénalités de retard, indemnité forfaitaire de 40 €
pour frais de recouvrement, réserve de propriété, tribunal compétent.
Ce que tu produis : la page CGV adaptée à ce que je vends réellement, le
mécanisme d'acceptation avant paiement, le formulaire type de rétractation en
annexe si particuliers.

2. CGU — CONDITIONS GÉNÉRALES D'UTILISATION (si comptes utilisateurs ou
service en ligne)
Ce que tu vérifies : s'il existe une inscription, un espace connecté, du
contenu publié par les utilisateurs, ou un service dont l'usage doit être
encadré.
Ce qu'elles doivent contenir : l'objet du service, les conditions d'accès et
d'inscription, les règles d'usage et les comportements interdits, ce qui
arrive au compte et aux données en cas de résiliation (par moi ou par
l'utilisateur), la propriété intellectuelle (mon contenu, le leur), la
responsabilité et ses limites, la disponibilité du service, les modifications
des CGU, la loi applicable.
Ce que tu produis : la page CGU, l'acceptation à l'inscription (case non
pré-cochée), le lien dans le pied de page.

3. MÉDIATEUR DE LA CONSOMMATION (obligatoire si je vends à des particuliers)
Ce que tu vérifies : si un médiateur est nommé dans les CGV et sur le site,
avec son nom, ses coordonnées et l'adresse de son site.
Ce que tu sais : je dois adhérer à un médiateur agréé AVANT de pouvoir le
citer, ce n'est pas une simple mention. Tu ne peux pas le choisir à ma place.
Ce que tu produis : l'emplacement prévu dans les CGV et dans le pied de page
avec des champs [MÉDIATEUR À CHOISIR], et une ligne dans la liste « à faire
par un humain » qui m'explique que je dois en choisir un dans la liste
officielle et y adhérer.

4. FORMULAIRES (dès qu'il y en a un)
Ce que tu vérifies, pour CHAQUE formulaire du site : les champs demandés sont
tous nécessaires à la finalité (pas de date de naissance pour un formulaire
de contact), il y a une case de consentement NON pré-cochée quand le
consentement est la base légale (newsletter, prospection), une mention sous
le formulaire dit pourquoi les données sont collectées et renvoie vers la
politique de confidentialité, les champs obligatoires sont signalés, et les
données ne partent pas vers un outil tiers non déclaré.
Ce que tu produis : les formulaires corrigés, et la liste des champs que tu
proposes de supprimer avec la raison.

5. SCRIPTS ET SERVICES TIERS (dès qu'il y en a un)
Ce que tu vérifies : la liste complète de tout ce qui se charge depuis un
autre domaine que le mien : analytics, pixels, vidéos, polices, cartes, chat,
CDN, réseaux sociaux, paiement. Pour chacun : ce qu'il collecte, s'il dépose un
traceur, s'il transfère des données hors Union européenne, et donc s'il
demande un consentement préalable (point 3) ou doit apparaître dans la
politique de confidentialité (point 2).
Ce que tu produis : le tableau de ces services avec ton verdict pour chacun
(nécessaire / consentement requis / à remplacer par une alternative
auto-hébergée ou européenne), et les changements de code correspondants
(par exemple : héberger les polices localement plutôt que les charger depuis
un service externe).

6. ACCESSIBILITÉ (RGAA / WCAG 2.1 niveau AA — recommandé pour tous,
obligatoire selon ma taille)
Ce que tu vérifies, page par page : le contraste texte/fond (4,5:1 minimum
pour le texte courant, 3:1 pour les grands textes), un texte alternatif
pertinent sur chaque image porteuse de sens (et vide sur les images
décoratives), une navigation complète au clavier avec un focus visible, un
label associé à chaque champ de formulaire, une hiérarchie de titres logique
(un seul h1, pas de saut de niveau), des liens dont le texte a du sens hors
contexte, la langue déclarée sur la page, aucune information transmise par la
couleur seule, les vidéos sous-titrées si elles portent du contenu.
Ce que tu produis : les corrections dans le code, et un rapport court de ce
qui reste à faire manuellement (sous-titres, relecture des textes alternatifs).
Si je suis au-dessus de 10 salariés et 2 millions d'euros de chiffre
d'affaires et que je vends en ligne, ajoute une page « Accessibilité » avec la
déclaration de conformité.

7. ACCESSIBILITÉ AUX AGENTS IA (si je veux être lu et cité par les IA)
Ce que tu vérifies : la structure sémantique des pages (balises main, nav,
header, footer, article, titres hiérarchisés), un contenu principal lisible
sans JavaScript, des métadonnées complètes (title, description, Open Graph,
canonical), un fichier robots.txt qui n'exclut pas les robots des moteurs IA
sans raison, un sitemap.xml à jour, et des données structurées (JSON-LD)
quand elles ont du sens (organisation, produit, article, FAQ).
Ce que tu produis : un fichier llms.txt à la racine qui décrit le site en
clair (ce que c'est, pour qui, les pages principales avec leur URL), les
corrections de structure, les métadonnées manquantes, le robots.txt et le
sitemap.

8. CONTENU (tout site)
Ce que tu vérifies, dans tous les textes du site : les avis clients affichés
sont réels et vérifiables (sinon c'est une pratique commerciale trompeuse),
aucune promesse chiffrée sans preuve (« + 300 % de résultats »), aucun
comparatif avec un concurrent nommé sans base objective, aucune mention
« gratuit » pour quelque chose qui ne l'est pas, aucune image, illustration
ou photo dont je n'ai pas les droits (banque d'images sans licence, image
trouvée sur un moteur de recherche), aucun logo de marque tierce utilisé
sans autorisation.
Ce que tu produis : la liste des passages à risque avec la phrase concernée,
la raison, et une reformulation proposée ; la liste des images à remplacer.

9. COORDONNÉES ET CONTACT (tout site)
Ce que tu vérifies : un moyen de contact fonctionnel visible (email qui
existe, formulaire qui envoie vraiment), les informations d'identification
cohérentes entre les mentions légales, les CGV et le pied de page (même nom,
même adresse, même SIRET), et un pied de page présent sur toutes les pages
avec les liens vers les mentions légales, la confidentialité, les cookies, les
CGV/CGU.
Ce que tu produis : le pied de page unifié, et la liste des incohérences
trouvées.

10. TOUT AUTRE RISQUE que tu vois pour mon cas précis (par exemple : un
paiement sans facture, une newsletter sans lien de désinscription, un stockage
de mots de passe en clair, une API tierce dont les conditions interdisent mon
usage). Liste-les, explique le risque en une phrase, propose la correction.

============================================================
PHASE 3 — LE LIVRABLE
============================================================

Donne-moi :

- la liste des fichiers créés ou modifiés, avec une ligne par fichier ;
- un résumé de chaque changement, point par point, dans l'ordre ci-dessus ;
- la liste « À FAIRE PAR UN HUMAIN » pour tout ce que tu ne peux pas trancher
  ou remplir : mes informations d'identification, le choix et l'adhésion au
  médiateur, la vérification de l'hébergeur, les décisions sur les outils
  tiers à garder ou remplacer, et une relecture de l'ensemble par un avocat
  avant mise en ligne si je vends ou collecte des données sensibles ;
- les points que tu as jugés NON applicables, avec la raison, pour que je
  puisse te contredire si je pense que tu t'es trompé.
Ne suppose rien sur mon statut ou mon activité : si tu ne sais pas, demande.
Ne te contente pas de modèles génériques : chaque texte doit refléter ce que
tu as réellement trouvé dans le code de ce projet.
