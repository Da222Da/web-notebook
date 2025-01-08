<template>
	<div id="mindmap" :style="{ height: height + 'px' }"></div>
</template>

<script>
export default {
	name: "Wvc	Mindmap",
};
</script>

<script setup>
import { onMounted, defineProps } from "vue";
import MindMap from "simple-mind-map";

const props = defineProps({
	data: Object,
	height: {
		type: String,
		default: 500,
	},
	offsetLeft: {
		type: Number,
		default: 50,
	},
	router: {
		type: Object,
		default: {},
	},
});

onMounted(() => {
	init();
});

function init() {
	const mindMap = new MindMap({
		el: document.getElementById("mindmap"),
		data: props.data,
		initRootNodePosition: [Number(props.offsetLeft), "center"],
	});
	// 监听节点点击事件
	mindMap.on("node_click", function (...args) {
		const event = args[1];
		const target = event.target;
		const parentNode = target.parentNode;
		if (event.target.parentNode.tagName == "a") {
			event.preventDefault(); // 阻止默认行为，即不跳转链接
			const url = parentNode.href.baseVal;
			if (url.startsWith("http")) {
				window.open(url, "_blank"); // '_blank' 表示在新标签页中打开
			} else {
				const router = props.router || {};
				if (router.go) {
					router.go(url);
				} else {
					window.open(url, "_self"); // '_self' 表示在当前标签页中打开
				}
			}
		}
	});
}
</script>

<style scoped>
#mindmap {
	width: 100%;
}
</style>
