import { createI18n } from "vue-i18n";
import messages from "./lang";
console.log(localStorage.site_lang);
const i18n = createI18n({
  // default locale
  locale: localStorage.site_lang || "en",

  // translations
  messages: messages,
});

export default i18n;
