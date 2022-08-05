import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/main.css";
import "./styles/global.less";
import "./styles/reset.less";
import i18n from "@/lang";
import {setupStore} from "@/stores";

const app = createApp(App);
setupStore(app)
app.use(i18n);
app.use(router);
app.mount("#app");
