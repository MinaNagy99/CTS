import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationAR from './Resources/Language/AR.json';
import translationEN from './Resources/Language/EN.json';
const resources = {
    en: {
        translation: translationEN,
    },
    ar: {
        translation: translationAR,
    },
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'ar',

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
