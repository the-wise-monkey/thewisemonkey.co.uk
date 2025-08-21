import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from './locales/en/common.json';
import esCommon from './locales/es/common.json';

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: enCommon },
      es: { common: esCommon },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'es'],
    load: 'languageOnly',
    cleanCode: true,
    lowerCaseLng: true,
    nonExplicitSupportedLngs: true,
    ns: ['common'],
    defaultNS: 'common',
    detection: {
      // Prefer explicit user choice; fall back to browser language
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

// Keep the <html lang> attribute in sync for accessibility and SEO
i18n.on('languageChanged', (lng) => {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('lang', lng);
  }
});

// Ensure initial <html lang> is correct on load
if (typeof document !== 'undefined') {
  document.documentElement.setAttribute('lang', i18n.resolvedLanguage || 'en');
}

export default i18n;


