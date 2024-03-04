<template>
  <ChildComponent @my-event="handleMyEvevt" />
</template>

<script setup lang="ts">
import ChildComponent from "./components/ChildComponent.vue";

function handleMyEvevt(msg: String) {
  console.log(msg); // 触发了自定义事件
}
</script>

<style scoped></style>
