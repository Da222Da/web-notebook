<ElMindmap :data="data" height="450" :router="router" />

<script setup>
import { onMounted, ref, computed } from "vue";
import { useRouter } from 'vitepress';
const router = useRouter();
const CurrentPath = router.route.path;
const data = ref({
	data: {
		text: "Web 互联网",
	},
	children: [
		{ data: { text: "HTML 超文本标记语言" } },
		{ data: { text: "CSS 层叠样式表" } },
		{ 
			data: { text: "JavaScript 编程语言" },
			children: [
				{ data: { text: "语法约定", hyperlink: `${CurrentPath}js/grammar/es/` } },
				{ data: { text: "组件化", hyperlink: `${CurrentPath}js/component/vue/` } },
				{ data: { text: "工程化", hyperlink: `${CurrentPath}js/engineering/vite/` } },
				{ data: { text: "运行时环境", hyperlink: `${CurrentPath}js/env/nodejs/` } },
			]
		},
	],
})
</script>
