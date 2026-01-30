# Evelin Valcarce - Site Vitrine Psy
Site vitrine multilingue (FR/ES) 

## 🚀 Stack Technique

- **Framework** : [Astro](https://astro.build) v5+
- **Styling** : [Tailwind CSS](https://tailwindcss.com) v4
- **Internationalisation** : Custom i18n (FR/ES)
- **Content** : Astro Content Collections (Markdown)
- **Déploiement** : OVH

## 📁 Structure du Projet
```
src/
├── i18n/ # Configuration internationalisation
│ ├── config.ts # Locales, mappings
│ ├── translations/ # Fichiers JSON (fr.json, es.json)
│ ├── utils.ts # Helpers t(), getLocale()
│ ├── routing.ts # URLs localisées
│ └── index.ts # Export public
│
├── content/ # Content Collections
│ ├── config.ts # Schemas Zod
│ └── services/ # Services MD par langue
│ ├── fr/
│ └── es/
│
├── layouts/
│ ├── BaseLayout.astro # Layout principal + SEO
│ └── ServiceLayout.astro # Template services
│
├── components/
│ ├── common/ # Navbar, Footer, LanguagePicker
│ ├── sections/ # Hero, About, Services, Methodology
│ └── ui/ # BrandLogo, AppointmentModal
│
├── pages/
│ ├── index.astro # Homepage FR (default)
│ ├── tarifs.astro
│ ├── mentions-legales.astro  
│ ├── 404.astro # Page erreur
│ ├── services/[slug].astro # Services FR
│ └── es/
│   ├── menciones-legales.astro
│   └── tarifas.astro   
│ └── [lang]/
│   ├── index.astro # Homepage ES
│   └── services/[slug].astro # Services ES
│
└── assets/
├── images/hero/
└── logo.png
```

## 🛠️ Installation


# Clone
```
git clone https://github.com/username/site-vitrine-psy.git
cd evelin-valcarce
```
# Dépendances
npm install

# Développement
```
npm run dev
```
# Build production
```
npm run build
```
# Preview build
```
npm run preview
```
# 🌐 Routes
```
Route	Description
/	Homepage FR
/es	Homepage ES
/services/therapie-individuelle	Service FR
/es/services/terapia-individual	Service ES
```
# 🔧 Configuration
```

PUBLIC_SITE_URL=https://evelinvalcarce-psy.fr
PUBLIC_CONTACT_EMAIL=contact@evelinvalcarce-psy.fr
```
# Ajouter un service
```
Créer le fichier MD dans src/content/services/fr/ et src/content/services/es/
Ajouter le mapping des slugs dans src/i18n/config.ts
Mettre à jour les traductions si nécessaire
```

# 📊 SEO
```
✅ Meta tags complets (title, description, keywords)
✅ Open Graph / Twitter Cards
✅ Hreflang pour multilingue
✅ Schema.org LocalBusiness
✅ Canonical URLs
✅ Sitemap XML (avec @astrojs/sitemap)
```
# 📱 Responsive
```
Mobile-first design
Menu hamburger avec navigation accessible
Images optimisées (srcset, WebP)
```
# ♿ Accessibilité
```
Navigation clavier complète
Labels ARIA
Skip links (à ajouter)
Contraste couleurs WCAG AA
```
# 📦 Déploiement OVH
```
npm run build
```
# Deploy dist/ folder
📄 Licence
Propriétaire - © 2026 Evelin Valcarce

Développé avec ❤️ pour Evelin Valcarce