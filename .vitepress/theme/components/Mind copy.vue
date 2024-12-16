<template>
	<div id="jsmind_container" class="jsmind_container"></div>
</template>

<!-- <script setup>
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

	const jm = new jsMind(jsmind_options);
	jm.show({
		meta: {
			name: "jsMind remote",
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
</style> -->
