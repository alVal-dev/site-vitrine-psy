// Export public unique pour i18n
export { defaultLocale, locales, localeLabels, localeFlags, serviceSlugMap } from './config';
export type { Locale } from './config';

export { 
  getLocaleFromUrl, 
  isValidLocale, 
  t, 
  tArray, 
} from './utils';

export { 
  getLocalizedPath, 
  getServicePath, 
  getAlternateUrl,
  getStaticPathsForLocales,
  getLocaleFromParams
} from './routing';