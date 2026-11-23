Tu es mon expert en sécurité. Mon appli a été codée en partie avec l'IA. Je veux que tu vérifies les 7 portes qu'un attaquant ouvre en quelques minutes, puis que tu les fermes avec moi.
Les 7 portes : 1. ce que le navigateur montre, 2. la clé d'IA, 3. la sécurité ligne par ligne (RLS), 4. à qui appartient chaque donnée, 5. l'espace admin, 6. les limites à l'inscription, 7. le webhook de paiement.

CE QUE JE PENSE AVOIR FERMÉ
D'après moi, c'est fermé : 1. ce que le navigateur montre, 2. la clé d'IA, 3. la sécurité ligne par ligne (RLS), 4. à qui appartient chaque donnée, 5. l'espace admin, 6. les limites à l'inscription, 7. le webhook de paiement.
Ne me crois pas sur parole : vérifie les 7, même celles que je pense avoir fermées.

ÉTAPE 1. COMPRENDRE MON APPLI
Lis le projet avant de toucher à quoi que ce soit : le langage et le framework, où tourne le serveur, la base de données et son outil (Supabase, Firebase, Postgres…), l'authentification, le paiement, les appels à l'IA. Résume-moi tout ça en quelques lignes et pose-moi tes questions s'il manque quelque chose (adresse de l'appli en ligne, compte de test, fournisseur de paiement).

ÉTAPE 2. VÉRIFIER LES 7 PORTES, SANS RIEN MODIFIER
Pour chaque porte, donne un état (fermée, entrouverte, ouverte) avec la preuve : le fichier et la ligne, ou la requête qui montre le problème.

1. Ce que le navigateur montre (cochée, à vérifier quand même) : ouvre le code envoyé au navigateur (bundle, cartes de code source, réponses réseau) et liste tout secret, clé, adresse interne ou donnée d'un autre utilisateur qui y apparaît.
2. La clé d'IA (cochée, à vérifier quand même) : cherche toute clé d'API dans le code client, les variables publiques (NEXT_PUBLIC_, VITE_…) et l'historique Git ; déplace les appels à l'IA côté serveur ; si une clé a fuité, dis-moi de la révoquer et d'en créer une nouvelle.
3. La sécurité ligne par ligne (RLS) (cochée, à vérifier quand même) : pour chaque table, vérifie que la RLS (ou les règles de sécurité de ma base) est activée et que les règles limitent lecture et écriture au propriétaire ; teste avec un deuxième compte.
4. À qui appartient chaque donnée (cochée, à vérifier quand même) : pour chaque route qui reçoit un identifiant (facture, commande, profil, fichier), vérifie côté serveur que l'objet appartient à la personne connectée ; essaie l'identifiant d'un autre compte.
5. L'espace admin (cochée, à vérifier quand même) : vérifie que /admin et toutes les actions d'administration exigent une session et un rôle admin contrôlés côté serveur, y compris les routes d'API appelées par ces pages.
6. Les limites à l'inscription (cochée, à vérifier quand même) : vérifie les limites sur l'inscription, la connexion et l'envoi d'e-mails (par adresse IP et par minute), la vérification de l'e-mail avant tout crédit gratuit, et un plafond de dépense d'IA par compte.
7. Le webhook de paiement (cochée, à vérifier quand même) : vérifie que le webhook de paiement contrôle la signature avec le secret du fournisseur, refuse les événements non signés ou trop vieux, et ne traite pas deux fois le même événement.
N'attaque jamais une appli qui n'est pas la mienne. Pour les tests réels, utilise mon environnement de test ou mes comptes de test, jamais les données de vrais clients.

ÉTAPE 3. LE RAPPORT
Donne-moi un tableau : porte, état, risque concret pour moi (argent, données de clients, réputation), et correction proposée. Classe du plus grave au moins grave. Attends mon accord avant de corriger.

ÉTAPE 4. FERMER LES PORTES
Corrige une porte à la fois. Pour chacune : écris d'abord un test qui prouve que la porte est ouverte, corrige, puis relance le test pour prouver qu'elle est fermée. Si une clé a fuité, rappelle-moi de la révoquer chez le fournisseur : la supprimer du code ne suffit pas.

ÉTAPE 5. GARDER LES PORTES FERMÉES
Crée un fichier SECURITE.md avec l'état des 7 portes et les tests à relancer, et une commande simple pour tout relancer. Je relancerai ce prompt avant chaque mise en ligne et après chaque grosse modification faite par l'IA.

RÈGLES

- Aucune clé ni aucun mot de passe en clair dans le code, les prompts ou ce rapport.
- Ne supprime aucune donnée et ne touche pas à la production sans mon accord.
- Explique chaque problème simplement, sans jargon.
