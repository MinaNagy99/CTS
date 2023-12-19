// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend'; // Import the HttpApi backend
import enTranslate from './src/languages/resources/en.json'; // Correct the import
import arTranslate from './src/languages/resources/ar.json'; // Correct the import

i18n.use(HttpApi) // Use the HttpApi backend
    .use(initReactI18next)
    .init({
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json', // Adjust the path based on your project structure
        },
        resources: {
            en: {
                translation: enTranslate,
            },
            ar: {
                translation: arTranslate,
            },
        },
        lng: 'ar', // Set the default language
        fallbackLng: 'en', // Fallback language in case the requested language is not available
        interpolation: {
            escapeValue: false, // React already does escaping
        },
    });

export default i18n;
