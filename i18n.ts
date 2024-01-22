import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import axios from 'axios';

i18n.use(initReactI18next).init({
    resources: {},
    lng: 'ar', 
    fallbackLng: 'en', 
    interpolation: {
        escapeValue: false, 
    },
});

const fetchTranslations = async (language:string) => {
    try {
        const response = await axios.get(`https://cts.onrender.com/lang/${language}`);
        return { [language]: { translation: response.data } };
    } catch (error) {
        console.error('Error fetching translations:', error);
        return null;
    }
};

const loadTranslations = async () => {
    const enTranslations = await fetchTranslations('en');
    const arTranslations = await fetchTranslations('ar');

    if (enTranslations) {
        i18n.addResourceBundle('en', 'translation', enTranslations.en.translation);
    }

    if (arTranslations) {
        i18n.addResourceBundle('ar', 'translation', arTranslations.ar.translation);
    }

    i18n.changeLanguage('ar');
};

loadTranslations();

export default i18n;
