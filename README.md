# KING BANNED

Bienvenue dans le dépôt `KING BANNED` - Un projet complet avec guide d'installation pour tous les environnements.

## 📋 Table des matières

- [Description](#description)
- [Prérequis](#prérequis)
- [Installation](#installation)
  - [Sur Termux (Android)](#sur-termux-android)
  - [Sur Linux/Debian](#sur-linuxdebian)
  - [Sur macOS](#sur-macos)
  - [Sur Windows](#sur-windows)
- [Utilisation](#utilisation)
- [Déploiement](#déploiement)
- [Licence](#licence)

## 📝 Description

Ce projet fournit une solution complète avec support multi-plateforme pour :
- Termux (Android)
- Linux (Debian/Ubuntu)
- macOS
- Windows

## ✅ Prérequis

### Commun à tous les systèmes
- Git
- Node.js (version 14+) ou Python 3.8+
- npm ou pip (gestionnaire de paquets)

## 🚀 Installation

### Sur Termux (Android)

#### Étape 1 : Mise à jour du système
```bash
pkg update && pkg upgrade
pkg install git nodejs python
```

#### Étape 2 : Cloner le dépôt
```bash
git clone https://github.com/kingstark821/KING-BANNED.git
cd KING-BANNED
```

#### Étape 3 : Installation des dépendances (Node.js)
```bash
npm install
```

Ou avec Python :
```bash
pip install -r requirements.txt
```

#### Étape 4 : Lancer le projet
```bash
npm start
# ou
python main.py
```

### Sur Linux/Debian

#### Étape 1 : Mise à jour du système
```bash
sudo apt update && sudo apt upgrade
sudo apt install git nodejs npm python3 python3-pip
```

#### Étape 2 : Cloner le dépôt
```bash
git clone https://github.com/kingstark821/KING-BANNED.git
cd KING-BANNED
```

#### Étape 3 : Installation des dépendances
```bash
npm install
# ou
pip3 install -r requirements.txt
```

#### Étape 4 : Lancer le projet
```bash
npm start
# ou
python3 main.py
```

### Sur macOS

#### Étape 1 : Installer Homebrew (si non installé)
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### Étape 2 : Installation des dépendances
```bash
brew install git node python3
```

#### Étape 3 : Cloner le dépôt
```bash
git clone https://github.com/kingstark821/KING-BANNED.git
cd KING-BANNED
```

#### Étape 4 : Installation des modules
```bash
npm install
# ou
pip3 install -r requirements.txt
```

#### Étape 5 : Lancer le projet
```bash
npm start
# ou
python3 main.py
```

### Sur Windows

#### Étape 1 : Installer les outils
- Télécharger Git : https://git-scm.com/download/win
- Télécharger Node.js : https://nodejs.org/
- Télécharger Python : https://www.python.org/

#### Étape 2 : Cloner le dépôt
```bash
git clone https://github.com/kingstark821/KING-BANNED.git
cd KING-BANNED
```

#### Étape 3 : Installation des dépendances
```bash
npm install
# ou
pip install -r requirements.txt
```

#### Étape 4 : Lancer le projet
```bash
npm start
# ou
python main.py
```

## 💻 Utilisation

### Commandes utiles

```bash
# Voir la version
npm version

# Mettre à jour les dépendances
npm update

# Nettoyer les fichiers temporaires
npm run clean

# Lancer en mode développement
npm run dev

# Lancer les tests
npm test
```

## 🌐 Déploiement

### Déploiement sur Heroku

```bash
npm install -g heroku
heroku login
heroku create your-app-name
git push heroku main
```

### Déploiement sur Vercel

```bash
npm install -g vercel
vercel login
vercel
```

### Déploiement sur Railway

```bash
npm install -g @railway/cli
railway login
railway init
railway up
```

### Déploiement sur VPS (Linux)

```bash
# Via SSH
ssh user@your-server.com

# Cloner le projet
git clone https://github.com/kingstark821/KING-BANNED.git
cd KING-BANNED

# Installation
npm install

# Lancer avec PM2 (pour la persistance)
npm install -g pm2
pm2 start npm --name "KING-BANNED" -- start
pm2 startup
pm2 save
```

## 📦 Structure du projet

```
KING-BANNED/
├── README.md           # Documentation
├── package.json        # Configuration Node.js
├── requirements.txt    # Dépendances Python
├── src/                # Code source
├── dist/               # Fichiers compilés
└── node_modules/       # Dépendances (généré)
```

## 🔧 Troubleshooting

### Problème : "Command not found: git"
**Solution :** Réinstallez Git avec `pkg install git` (Termux) ou `apt install git` (Linux)

### Problème : "npm ERR! code EACCES"
**Solution :** Changez les permissions : `sudo chown -R $USER ~/.npm`

### Problème : Port déjà utilisé
**Solution :** Changez le port dans les variables d'environnement : `PORT=3001 npm start`

## 📄 Licence

Ce projet est fourni sans licence définie pour l'instant. Ajoutez une licence si nécessaire selon votre usage.

## 📧 Contact

Pour toute question sur l'e-mail 
<support.kinggenerator@gmail.com>

---

**Date de création :** 11 Octobre 2026

DERNIER MISE À JOUR : pas encore 
