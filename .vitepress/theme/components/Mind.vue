<template>
	<div id="map"></div>
</template>

<script setup>
import { onMounted, defineProps } from "vue";
import MindMap from "simple-mind-map";

const props = defineProps({
	data: Object,
});

onMounted(() => {
	init();
});

function init() {
	new MindMap({
		el: document.getElementById("map"),
		data: props.data,
		initRootNodePosition: [50, "center"],
	});
}
</script>

<style>
#map {
	height: 500px;
	width: 100%;
}
</style>
