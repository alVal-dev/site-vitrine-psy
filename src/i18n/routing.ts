import { defaultLocale, locales, serviceSlugMap, type Locale } from './config';

// Pages statiques avec leurs slugs par langue
const staticPages = {
  'mentions-legales': { fr: 'mentions-legales', es: 'menciones-legales' },
  'tarifs': { fr: 'tarifs', es: 'tarifas' },
} as const;

type StaticPageKey = keyof typeof staticPages;

// Index inversé : slug → clé
const staticPagesBySlug = Object.entries(staticPages).reduce((acc, [key, mapping]) => {
  Object.values(mapping).forEach(slug => acc[slug] = key as StaticPageKey);
  return acc;
}, {} as Record<string, StaticPageKey>);

// Supprime le préfixe de locale d'un chemin
function stripLocale(path: string): string {
  for (const loc of locales) {
    if (path === `/${loc}`) return '/';
    if (path.startsWith(`/${loc}/`)) return path.slice(loc.length + 1);
  }
  return path.startsWith('/') ? path : `/${path}`;
}

// Ajoute le préfixe de locale (sauf pour FR)
function addLocale(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;
  return path === '/' ? `/${locale}` : `/${locale}${path}`;
}

export function getLocalizedPath(path: string, locale: Locale): string {
  return addLocale(stripLocale(path), locale);
}

export function getServicePath(baseSlug: string, locale: Locale): string {
  const slug = serviceSlugMap[baseSlug]?.[locale] || baseSlug;
  return addLocale(`/services/${slug}`, locale);
}

export function getAlternateUrl(currentPath: string, targetLocale: Locale): string {
  const clean = stripLocale(currentPath);
  const slug = clean.replace(/^\/|\/$/g, '');

  // Statique (mentions légales, tarifs...)
  const staticKey = staticPagesBySlug[slug];
  if (staticKey) {
    return addLocale(`/${staticPages[staticKey][targetLocale]}`, targetLocale);
  }

  // Service
  const serviceMatch = slug.match(/^services\/(.+)$/);
  if (serviceMatch) {
    const currentSlug = serviceMatch[1];
    const baseSlug = Object.entries(serviceSlugMap)
      .find(([, map]) => Object.values(map).includes(currentSlug))
      ?.[0] || currentSlug;
    return getServicePath(baseSlug, targetLocale);
  }

  return addLocale(clean, targetLocale);
}

export function getStaticPathsForLocales() {
  return locales.map(lang => ({ params: { lang } }));
}

export function getLocaleFromParams(params: { lang?: string }): Locale {
  const lang = params.lang;
  if (lang && locales.includes(lang as Locale)) {
    return lang as Locale;
  }
  return defaultLocale;
}