<template>
	<div id="map" :style="{ height: height + 'px' }"></div>
</template>

<script setup>
import { useRouter } from "vitepress";
import { onMounted, defineProps } from "vue";
import MindMap from "simple-mind-map";

const router = useRouter();
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
});

onMounted(() => {
	init();
});

function init() {
	const mindMap = new MindMap({
		el: document.getElementById("map"),
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
				router.go(url);
			}
		}
	});
}
</script>

<style>
#map {
	width: 100%;
}
</style>
