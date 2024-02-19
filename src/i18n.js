import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import apiAxios from "./utils/apiAxios";

import enTranslation from "./lang/en.json";
import arTranslation from "./lang/ar.json";

const fetchTranslations = async () => {
  const languages = ["en", "ar"];
  const translations = {};

  for (const lang of languages) {
    try {
      const { data } = await apiAxios.get(`api/resources/language/${lang}`);
      translations[lang] = { translation: data.words };
    } catch (error) {
      console.log(`Failed to fetch translation for language ${lang}:`, error);
      // Handle error appropriately
    }
  }

  return translations;
};

fetchTranslations().then((translations) => {
  i18n.use(initReactI18next).init({
    resources: translations,
    lng: localStorage.getItem("lang") || "en", // Default language
    fallbackLng: localStorage.getItem("lang") || "en",
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });
});

export default i18n;
