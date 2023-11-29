// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import arTranslate from './src/languages/resources/ar.json'
import enTranslate from './src/languages/resources/ar.json'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        greeting: 'Hello!',
        welcome: 'Welcome to our website.',
      },
    },
    es: {
      translation: enTranslate
    },
    ar: {
      translation: arTranslate
    },
  },
  lng: 'ar', // Set the default language
  fallbackLng: 'en', // Fallback language in case the requested language is not available
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});

export default i18n;
