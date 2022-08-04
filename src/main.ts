import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./assets/css/main.css";
import i18n from "@/lang";

const app = createApp(App);
app.use(createPinia());
app.use(i18n);
app.use(router);
app.mount("#app");
