import { createApp } from "vue";
import App from "./App.vue";

import WebVueComponents from "web-vue-components";
import "web-vue-components/dist/style.css";

const app = createApp(App);

app.use(WebVueComponents);
app.mount("#app");
