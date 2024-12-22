# Rollup：针对于 JS 类库的打包工具

## 1.Graph 知识图表

<Mind :data="data" height="450" />
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
				{data: { text: "plugins 功能扩展" }}, 
				{data: { text: "external 不需要打包的外部依赖" }}, 
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
