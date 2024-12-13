<template>
	<div id="jsmind_container" class="jsmind_container" style=""></div>
</template>

<script setup>
import { onMounted, defineProps } from "vue";
import jsMind from "jsmind"; // 参考文档：https://github.com/hizzgdev/jsmind-samples/tree/main/jsmind-vue
import "jsmind/draggable-node";
import "jsmind/style/jsmind.css";

const props = defineProps({
	mindData: {},
});

onMounted(() => {
	initJsMind();
});

function initJsMind() {
	const jsmind_options = {
		container: "jsmind_container",
		theme: "success",
		editable: true,
		shortcut: {
			enable: true,
			handles: {},
			mapping: {},
		},
	};

	var mind = {
		meta: {
			name: "jsMind remote",
			author: "hizzgdev@163.com",
			version: "0.2",
		},
		format: "node_tree",
		data: {
			id: "root",
			topic: "jsMind",
			children: [
				{
					id: "easy",
					topic: "Easy",
					direction: "left",
					children: [
						{ id: "easy1", topic: "Easy to show" },
						{ id: "easy2", topic: "Easy to edit" },
						{ id: "easy3", topic: "Easy to store" },
						{ id: "easy4", topic: "Easy to embed" },
					],
				},
				{
					id: "open",
					topic: "Open Source",
					direction: "right",
					children: [
						{ id: "open1", topic: "on GitHub" },
						{ id: "open2", topic: "BSD License" },
					],
				},
				{
					id: "powerful",
					topic: "Powerful",
					direction: "right",
					children: [
						{ id: "powerful1", topic: "Base on Javascript" },
						{ id: "powerful2", topic: "Base on HTML5" },
						{ id: "powerful3", topic: "Depends on you" },
					],
				},
				{
					id: "other",
					topic: "test node",
					direction: "left",
					children: [
						{ id: "other1", topic: "I'm from local variable" },
						{ id: "other2", topic: "I can do everything" },
					],
				},
			],
		},
	};

	const jm = new jsMind(jsmind_options);
	jm.show({
		meta: {
			name: "jsMind remote",
			author: "hizzgdev@163.com",
			version: "0.2",
		},
		format: "node_tree",
		data: props.mindData,
	});
}
</script>

<style>
.jsmind_container {
	border: 1px solid #ccc;
	width: 100%;
	height: 500px;
}

/* 滚动条样式 */
*::-webkit-scrollbar {
	width: 4px; /*  设置纵轴（y轴）轴滚动条 */
	height: 4px; /*  设置横轴（x轴）轴滚动条 */
}
/* 滚动条滑块（里面小方块） */
*::-webkit-scrollbar-thumb {
	border-radius: 10px;
	background: #ccc;
}
/* 滚动条轨道 */
*::-webkit-scrollbar-track {
	border-radius: 0;
	background: #fff;
}
</style>
