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
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
