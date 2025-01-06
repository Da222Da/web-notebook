import { defineClientComponent } from "vitepress";
import DefaultTheme from "vitepress/theme";

import "web-vue-components/dist/style.css";

import "./index.css";
import "element-plus/dist/index.css";
import PageHeader from "./components/PageHeader.vue";

import WebVueComponents from "web-vue-components";
import "web-vue-components/dist/style.css";

export default {
	...DefaultTheme,
	enhanceApp({ app }) {
		app.component("PageHeader", PageHeader);

		// 注册仅浏览器访问的组件，放置服务端渲染报错
		const Mind = defineClientComponent(() => {
			return import("./components/Mind.vue");
		});
		app.component("Mind", Mind);

		app.use(WebVueComponents);
	},
};
