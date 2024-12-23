# Rollup：针对于 JS 类库的打包工具

## 1.Graph 知识图表

<Mind :data="data" height="450" offsetLeft="20" />
<script setup>
import { onMounted, ref } from "vue";
const data = ref({
			data: {
				text: "Rollup",
			},
			children: [ 
				{data: { text: "input 入口" }}, 
				{
					data: { text: "output 出口" }, 
					children: [
						{data: { text: "file 输出文件" }},
						{data: { text: "format 输出格式，如 iife、esm、umd" }},
						{data: { text: "name 指定库名" }},
						{data: { text: "globals 指定外部依赖的变量名" }},
					]
				}, 
				{
					data: { text: "plugins 功能扩展" },
					children: [
						{data: { text: "rollup-plugin-vue 处理 .vue 文件" }},
						{data: { text: "rollup-plugin-css-only 处理 CSS" }},
					]
				}, 
				{data: { text: "external 指定不需要被打包的外部依赖" }}, 
			] 
		})
</script>

## 2. Prompt 问答记录

### 2-1. rollup 如何处理 .js 文件？

::: code-group

```js [1.配置文件 rollup.config.js]
export default {
	input: "./src/test.js",
	output: {
		file: "dist/bundle.js",
		format: "es",
	},
};
```

```js [2.目标文件 test.js]
console.log("Starting app");
```

```js [3.运行指令与依赖 package.json]
{
	"scripts": {
		"build": "rollup -c rollup.config.js"
	},
	"devDependencies": {
		"rollup": "^4.29.1"
	},
}

```

:::

### 2-2. rollup 如何处理 .vue 文件？

1. 安装依赖:
   - npm i vue -D
   - npm i rollup rollup-plugin-css-only rollup-plugin-vue -D

::: code-group

```js [1.配置文件 rollup.config.js]
// rollup.config.js
import { defineConfig } from "rollup";
import vue from "rollup-plugin-vue"; // 处理 Vue
import css from "rollup-plugin-css-only"; // 处理 CSS

export default defineConfig({
	input: "src/main.js", // 入口文件
	output: {
		format: "iife", // 输出格式
		name: "MyApp", // 全局变量名
		file: "dist/bundle.js", // 输出文件
		globals: {
			vue: "Vue", // 指定全局变量 Vue，相当于 var vue = window.Vue;
		},
	},
	external: ["vue"], // 指定外部依赖项，告诉 rollup不要将外部依赖项打包进输出文件
	plugins: [vue(), css({ output: "bundle.css" })],
});
```

```js [2.入口文件 main.js]
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");
```

```vue [3.入口组件 App.vue]
<template>
	<div id="app">
		<h1>{{ message }}</h1>
	</div>
</template>

<script>
export default {
	data() {
		return {
			message: "Hello Vue 3 with Rollup!",
		};
	},
};
</script>

<style scoped>
h1 {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	text-align: center;
	color: red;
	margin-top: 60px;
}
</style>
```

```html [4.使用文件 index.html]
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<link rel="stylesheet" href="./dist/bundle.css" />
	</head>
	<body>
		<div id="app"></div>
	</body>
	<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
	<script src="./dist/bundle.js"></script>
</html>
```

:::
