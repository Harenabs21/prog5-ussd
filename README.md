# Projet prog-5-ussd : Simulation d'un client USSD

## Description du projet

Le projet **prog-5-ussd** consiste en la création d'une simulation d'un client USSD, similaire à celui de services populaires tels que Yas à Madagascar. Ce projet est une **application en ligne de commande (CLI)** développée en **TypeScript**, mettant un accent particulier sur les bonnes pratiques de développement logiciel.

## Objectifs

* Adopter des **conventions de développement** cohérentes.
* Configurer un linter adapté pour maintenir la qualité du code.
* Mettre en place une **pipeline d'intégration continue (CI)** pour automatiser les vérifications de style et de code.

---

## Fonctionnalités

* Simulation des interactions client-serveur via USSD.
* Gestion des requêtes et réponses dynamiques.
* Validation et tests des scénarios USSD.

---

## Conventions de développement

### Nommage

* **Variables et fonctions** : camelCase (ex. `userInput`, `handleRequest`)
* **Classes** : PascalCase (ex. `UssdClient`)
* **Fichiers** : kebab-case (ex. `ussd-client.ts`)
* **Constantes** : SCREAMING\_SNAKE\_CASE (ex. `MAX_RETRY_COUNT`)

### Documentation

Toutes les conventions de nommage adoptées sont documentées dans le fichier `CONVENTIONS.md` pour référence et standardisation au sein du projet.

---

## Configuration du Linter

* **Outil choisi** : ESLint
* **Installation** :

  ```bash
  npm install eslint --save-dev
  ```
* **Fichier de configuration** : `.eslintrc.json`

  ```json
  {
    "env": {
      "browser": true,
      "es2021": true
    },
    "extends": "eslint:recommended",
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaVersion": 12,
      "sourceType": "module"
    },
    "plugins": ["@typescript-eslint"],
    "rules": {
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "indent": ["error", 2]
    }
  }
  ```
* **Vérification des erreurs** :

  ```bash
  npx eslint .
  ```

---

## Intégration Continue (CI)

### Workflow GitHub Actions

Une pipeline d'intégration continue est mise en place pour exécuter automatiquement ESLint à chaque `push` ou `pull request`. Le job échoue si des erreurs de lint sont détectées, garantissant ainsi une qualité de code constante.

---

## Prérequis

* Node.js (v18 ou supérieur)
* npm

## Installation

1. Clonez le dépôt :

   ```bash
   git clone <URL_DU_DEPOT>
   ```
2. Installez les dépendances :

   ```bash
   npm install
   ```
3. Exécutez le linter :

   ```bash
   npx eslint .
   ```

---

## Licence

Ce projet est sous licence [MIT](LICENSE).

---

## Auteurs

* [Harenabs21](https://github.com/Harenabs21) - Développeur principal
