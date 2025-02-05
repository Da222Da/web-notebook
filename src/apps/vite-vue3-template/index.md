# Question：如何构建一个 Vue3 的项目模板？

> 这是一套基于 Vite 来构建 Vue3 项目模板的解决方案。
>
> 具体的代码实现，请参考：[https://github.com/Da222Da/vite-vue3-template](https://github.com/Da222Da/vite-vue3-template)

<ElMindmap :data="data" height="500" :router="router" offsetLeft="20" />

<script setup>
import { onMounted, ref, computed } from "vue";
import { useRouter } from 'vitepress';
const router = useRouter();
const CurrentPath = router.route.path;
const data = ref({
	data: {
		text: "Vue3 项目模板",
	},
	children: [
		{ 
			data: { text: "Vite 构建工具" },
			children: [
				{ data: { text: "配置文件夹别名 @ -> src" } },
			],
		},
		{ 
			data: { text: "Vue3 组件化框架" },
			children: [
				{ data: { text: "集成 Pinia 状态管理" } },
			],
		},
	],
})
</script>
