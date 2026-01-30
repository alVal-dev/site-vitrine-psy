export const defaultLocale = 'fr' as const;
export const locales = ['fr', 'es'] as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  fr: 'Français',
  es: 'Español',
};

export const localeFlags: Record<Locale, string> = {
  fr: '🇫🇷',
  es: '🇪🇸',
};

// Mapping des slugs entre langues pour les services
export const serviceSlugMap: Record<string, Record<Locale, string>> = {
  'therapie-individuelle': {
    fr: 'therapie-individuelle',
    es: 'terapia-individual',
  },
  'therapie-couple': {
    fr: 'therapie-couple',
    es: 'terapia-pareja',
  },
  'orientation': {
    fr: 'orientation',
    es: 'orientacion',
  },
    'espagnol': {
    fr: 'espagnol',
    es: 'espanol',
  },
  'terapia-individual': {
    fr: 'therapie-individuelle',
    es: 'terapia-individual',
  },
  'terapia-pareja': {
    fr: 'therapie-couple',
    es: 'terapia-pareja',
  },
  'orientacion': {
    fr: 'orientation',
    es: 'orientacion',
  },
  'espanol': {
    fr: 'espagnol',
    es: 'espanol',
  },
};