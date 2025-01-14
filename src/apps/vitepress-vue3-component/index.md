# vitepress-vue3-components

> 这是一个为 Vitepress 在线文档开发的 Vue3 的组件库。

## 安装依赖

```bash
npm install vitepress-vue3-components # 安装依赖
```

## 全部加载

```js
import DefaultTheme from "vitepress/theme";

export default {
	...DefaultTheme,
	async enhanceApp({ app }) {
		if (!import.meta.env.SSR) {
			await import("vitepress-vue3-components/dist/style.css");
			const plugin = await import("vitepress-vue3-components"); // 引入组件库
			app.use(plugin.default);
		}
	},
};
```

## 按需加载

```js
import DefaultTheme from "vitepress/theme";

export default {
	...DefaultTheme,
	async enhanceApp({ app }) {
		if (!import.meta.env.SSR) {
			await import("vitepress-vue3-components/dist/style.css");
			const { ElMindmap } = await import("vitepress-vue3-components");
			app.component("ElMindmap", ElMindmap); // 注册组件
		}
	},
};
```
