import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@/assets/css/main.scss";
import "@/assets/css/color.scss";

createApp(App).use(router).mount("#app");
