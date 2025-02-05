# Javascript 工程化

Vite 是一个基于原生 ES 模块导入现代前端构建工具，构建速度会比 webpack 快一些。

想要查看更多关于 Vite 的信息，请访问 [Vite 官方文档](https://vitejs.dev/)。

## Graph 可视化图表

<ElMindmap :data="data" height="500" :router="router" offsetLeft="50" />

<script setup>
import { onMounted, ref, computed } from "vue";
import { useRouter } from 'vitepress';
const router = useRouter();
const CurrentPath = router.route.path;
const data = ref({
	data: {
		text: "Vite",
	},
	children: [
		{ 
			data: { text: "基础使用" },
			children: [
				{ data: { text: "如何给项目文件夹配置别名?", hyperlink: `${CurrentPath}#如何给项目文件夹配置别名?` } },
			]
		},
		{ data: { text: "构建开发环境", } },
	],
})
</script>

## Details 图表详情

### 如何给项目文件夹配置别名?

在使用 Vite 构建项目时，配置文件夹别名可以简化模块导入路径，提高代码的可读性和可维护性。

```js
// vite.config.js 或 vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"; // 如果你使用的是 Vue

export default defineConfig({
	plugins: [vue()], // 如果你使用的是 Vue，需要添加这个插件
	resolve: {
		alias: {
			"@": "/src", // 将 '@' 别名映射到 'src' 目录
			"@components": "/src/components", // 将 '@components' 别名映射到 'src/components' 目录
			// 你可以根据需要添加更多的别名配置
		},
	},
});
```
