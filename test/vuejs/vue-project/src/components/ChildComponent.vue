<template>
  <button @click="triggerEvent">触发自定义事件</button>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";

const emit = defineEmits(["my-event"]);
const triggerEvent = () => {
  emit("my-event", "触发了自定义事件");
};
</script>
