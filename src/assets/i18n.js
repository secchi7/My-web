import i18n from "i18next";
import I18nextLanguageDetector from "i18next-browser-languagedetector/cjs";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n.use(I18nextLanguageDetector).use(initReactI18next).use(Backend).init({
  debug: true,
  fallbackLng: "es",
  // lng: "es",
  returnObjects: true,
  backend: {
    overrideMimeType: 'application/json', 
    loadPath: './locales/{{lng}}/{{ns}}.json'
  }
});


