<ElMindmap :data="data" height="450" :router="router" offsetLeft="20"  />

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
		{ 
			data: { text: "HTML 超文本标记", hyperlink: "https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Structuring_content" },
			children: [
				{ data: { text: "文档对象模型（DOM）", hyperlink: "https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Introduction" } },
				{ data: { text: "Canvas 画布", hyperlink: "https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial" } },
				{ data: { text: "SVG：可缩放矢量图形", hyperlink: "https://developer.mozilla.org/zh-CN/docs/Web/SVG" } },
			]
	 },
		{ data: { text: "CSS 层叠样式表", hyperlink: "https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Styling_basics" } },
		{ 
			data: { text: "JavaScript 编程语言" },
			children: [
				{ data: { text: "语法约定", hyperlink: `${CurrentPath}js/es/` } },
				{ data: { text: "组件化", hyperlink: `${CurrentPath}js/vue/` } },
				{ data: { text: "工程化", hyperlink: `${CurrentPath}js/vite/` } },
			]
		},
	],
})
</script>
