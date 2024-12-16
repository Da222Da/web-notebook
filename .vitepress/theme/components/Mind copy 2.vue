<template>
	<div style="width: 100%">
		<div id="myDiagramDiv" style="height: 540px; border: solid 1px black"></div>
	</div>
</template>

<script setup>
import { onMounted, defineProps, ref } from "vue";
import * as go from "gojs";

onMounted(() => {
	init();
});

function init() {
	var diagram = new go.Diagram("myDiagramDiv", {
		layout: new go.TreeLayout({ angle: 90, layerSpacing: 35 }),
	});
	diagram.nodeTemplate = new go.Node("Horizontal", { background: "#44CCFF" }).add(
		new go.TextBlock("Default Text", { margin: 12, stroke: "white", font: "bold 16px sans-serif" }).bind("text", "name")
	);
	// const datas = [{ key: "Hello" }, { key: "World" }];
	// const links = [{ from: "Hello", to: "World" }];
	// diagram.model = new go.GraphLinksModel(datas, links);

	diagram.model = new go.TreeModel([
		{ key: "1", name: "Don Meow", source: "cat1.png" },
		{ key: "2", parent: "1", name: "Demeter" },
		{ key: "3", parent: "1", name: "Copricat" },
		{ key: "4", parent: "3", name: "Jellylorum" },
		{ key: "5", parent: "3", name: "Alonzo" },
		{ key: "6", parent: "2", name: "Munkustrap" },
	]);
}
</script>

<style></style>
