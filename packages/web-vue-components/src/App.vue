<template>
	<div id="app">
		<h1>{{ message }}</h1>
		<div>{{ test }}</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Test {
	name: string;
}
const test: Test = {
	name: "张三",
};
const message = ref("Hello Vue 3 with Rollup!");
</script>

<style scoped>
h1 {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	text-align: center;
	color: red;
	margin-top: 60px;
}
</style>
