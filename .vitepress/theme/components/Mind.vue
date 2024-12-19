<template>
	<div id="map" :style="{ height: height + 'px' }"></div>
</template>

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
});

onMounted(() => {
	init();
});

function init() {
	new MindMap({
		el: document.getElementById("map"),
		data: props.data,
		initRootNodePosition: [Number(props.offsetLeft), "center"],
	});
}
</script>

<style>
#map {
	width: 100%;
}
</style>
