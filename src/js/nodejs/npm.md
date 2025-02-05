# NPM 依赖管理工具

npm (Node Package Manager) 是 Node.js 的包管理工具，用于管理 JavaScript 项目的依赖。

## Graph 可视化图表

<ElMindmap :data="data" height="450" :router="router" />

<script setup>
import { onMounted, ref, computed } from "vue";
import { useRouter } from 'vitepress';
const router = useRouter();
const CurrentPath = router.route.path;
const data = ref({
	data: {
		text: "NPM",
	},
	children: [
		{ data: { text: "dependencies 和 peerDependencies 有什么区别？", hyperlink: `${CurrentPath}#dependencies 和 peerDependencies 有什么区别？`  }},
	],
})
</script>

## Details 图表详情

### dependencies 和 peerDependencies 有什么区别？

1.  dependencies:
    - 这些依赖会在安装你的包时自动被安装
    - 这些依赖会被打包到你的项目中
    - 适用于你的包直接依赖且必须使用的库
    - 这些依赖会被安装在你的包的 node_modules 目录下
2.  peerDependencies:
    - 这些依赖不会在安装你的包时自动安装
    - **适用于插件或组件库场景，避免核心库的重复安装**
    - 这些依赖应该存在于`主项目的 node_modules` 中
