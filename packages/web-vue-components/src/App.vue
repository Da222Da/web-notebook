<template>
	{{ $test() }}
	<HelloWorld />
</template>

<script setup>
import { onMounted, getCurrentInstance, inject } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

const msg = inject("msg");
onMounted(() => {
	getCurrentInstance().appContext.config.globalProperties.$test();
	console.log(msg, "test");
});
</script>
