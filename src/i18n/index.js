import { createI18n } from "vue-i18n";
import messages from "./message";

const locale = localStorage.site_lang || "ja";
const i18n = createI18n({
  // default locale
  locale: locale,

  // translations
  messages: messages,
});

document.documentElement.setAttribute("lang", locale);

export default i18n;
