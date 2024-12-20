<template>
	{{ $test() }}
	<hello-world />
</template>

<script setup>
import { onMounted, getCurrentInstance, inject } from "vue";

const msg = inject("msg");
onMounted(() => {
	getCurrentInstance().appContext.config.globalProperties.$test();
	console.log(msg, "test");
});
</script>
