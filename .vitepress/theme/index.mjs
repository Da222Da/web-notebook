import { defineClientComponent } from "vitepress";
import DefaultTheme from "vitepress/theme";

// import "./index.css";
// import "element-plus/dist/index.css";
// import PageHeader from "./components/PageHeader.vue";

// import Vue3Components from "zhangxianjue-vue3-components";
import "zhangxianjue-vue3-components/dist/style.css";

export default {
	...DefaultTheme,
	enhanceApp({ app }) {
		// app.component("PageHeader", PageHeader);

		// 注册仅浏览器访问的组件，放置服务端渲染报错
		// const Mind = defineClientComponent(() => {
		// 	return import("./components/Mind.vue");
		// });
		// app.component("Mind", Mind);

		const Vue3Components = defineClientComponent(() => {
			return import("zhangxianjue-vue3-components");
		});

		app.use(Vue3Components);
	},
};
