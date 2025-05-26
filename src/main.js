import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./components/Week8_2/router";
import { createPinia } from "pinia";

createApp(App).use(router).use(createPinia()).mount("#app");
