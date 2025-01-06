<template>
	<button class="button" :class="typeClass"><slot></slot></button>
</template>

<script setup name="WvcButton">
import { computed } from "vue";
const props = defineProps({
	type: {
		type: String,
		default: "default",
	},
});
const typeClass = computed(() => `button-${props.type}`);
</script>

<style scoped>
.button {
	border-radius: 4px;
	padding: 8px 16px;
	font-size: 16px;
	cursor: pointer;
}
.button.button-default {
	background-color: #eee;
	color: #333;
}

.button.button-primary {
	background-color: #007bff;
	color: #fff;
}
</style>

<script>
export default {
	name: "WvcButton", // 在这里设置组件名称
};
</script>
