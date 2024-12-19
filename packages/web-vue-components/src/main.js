import { createApp } from "vue";
import App from "./App.vue";
import TestPlugin from "./plugins/test.plugin.js";

const app = createApp(App);

app.use(TestPlugin);

app.mount("#app");
