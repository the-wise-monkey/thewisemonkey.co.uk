import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from './locales/en/common.json';
import esCommon from './locales/es/common.json';

const supportedLanguages = ['en', 'es'] as const;
type SupportedLanguage = typeof supportedLanguages[number];

function getInitialLanguage(): SupportedLanguage {
  try {
    const fromStorage = localStorage.getItem('i18nextLng');
    if (fromStorage) {
      const normalized = fromStorage.toLowerCase().slice(0, 2) as SupportedLanguage;
      if (supportedLanguages.includes(normalized)) return normalized;
    }
  } catch {
    // ignore
  }

  const nav = typeof navigator !== 'undefined' ? navigator.language || '' : '';
  const normalized = (nav || 'en').toLowerCase().slice(0, 2) as SupportedLanguage;
  return supportedLanguages.includes(normalized) ? normalized : 'en';
}

const initialLanguage = getInitialLanguage();

void i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: enCommon },
      es: { common: esCommon },
    },
    fallbackLng: 'en',
    supportedLngs: supportedLanguages as unknown as string[],
    load: 'languageOnly',
    cleanCode: true,
    lowerCaseLng: true,
    nonExplicitSupportedLngs: true,
    lng: initialLanguage,
    ns: ['common'],
    defaultNS: 'common',
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
  try {
    localStorage.setItem('i18nextLng', lng);
  } catch {
    // ignore
  }
});

// Ensure initial <html lang> is correct on load
if (typeof document !== 'undefined') {
  document.documentElement.setAttribute('lang', i18n.resolvedLanguage || 'en');
}

export default i18n;


