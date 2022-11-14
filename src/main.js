import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import i18n from "./i18n";
import VueAnimXyz from "@animxyz/vue3";
import "@animxyz/core";

import "./assets/css/main.scss";
import "./assets/css/color.scss";

createApp(App).use(router).use(i18n).use(VueAnimXyz).mount("#app");
