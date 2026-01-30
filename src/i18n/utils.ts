import { defaultLocale, locales, type Locale } from './config';
import frTranslations from './translations/fr.json';
import esTranslations from './translations/es.json';

const translations: Record<Locale, typeof frTranslations> = {
  fr: frTranslations,
  es: esTranslations,
};

// Navigue dans un objet : resolve(obj, ['nav', 'home']) → obj.nav.home
function resolve(obj: unknown, keys: string[]): unknown {
  for (const k of keys) {
    if (obj && typeof obj === 'object' && k in obj) {
      obj = (obj as Record<string, unknown>)[k];
    } else {
      return null;
    }
  }
  return obj;
}

export function isValidLocale(lang: string): lang is Locale {
  return locales.includes(lang as Locale);
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');         // [, lang] on ignore le premier élément '/' et on récupère le deuxième
  return isValidLocale(lang) ? lang : defaultLocale;
}

// site principalement destiné a public FR donc fallback vers langue par défaut
export function t(key: string, locale: Locale = defaultLocale): string {
  const keys = key.split('.');
  const result = resolve(translations[locale], keys) ?? resolve(translations[defaultLocale], keys);
  
  if (typeof result !== 'string') {
    console.warn(`Translation missing: ${key}`);
    return key;
  }
  return result;
}

export function tArray(key: string, locale: Locale = defaultLocale): string[] {
  const keys = key.split('.');
  const result = resolve(translations[locale], keys)
              ?? resolve(translations[defaultLocale], keys);
  
  return Array.isArray(result) ? result : [];
}