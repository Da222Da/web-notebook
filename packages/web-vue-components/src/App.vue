<template>
	<div id="app">
		<h1>{{ message }}</h1>
	</div>
</template>

<script>
export default {
	data() {
		return {
			message: "Hello Vue 3 with Rollup!",
		};
	},
};
</script>

<style scoped>
h1 {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	text-align: center;
	color: red;
	margin-top: 60px;
}
</style>
