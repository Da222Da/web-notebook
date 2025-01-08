# Webpack：针对于 SPA 单页应用的打包工具

## 1.Graph 知识图表

<Mind :data="data" height="450" offsetLeft="10" />
<script setup>
import { onMounted, ref } from "vue";
const data = ref({
			data: {
				text: "Webpack",
			},
			children: [ 
				{data: { text: "Enter 入口设置" }}, 
				{data: { text: "Output 出口设置" }}, 
				{data: { text: "Loader 处理静态资源" }}, 
				{
					data: { text: "Plugins 扩展插件" },
					children: [
						{data: { text: "webpack-dev-server 本地开发环境" }}
					]
				}, 
			]
		})
</script>
