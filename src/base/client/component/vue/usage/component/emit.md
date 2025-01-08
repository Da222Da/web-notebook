<PageHeader content="emit 自定义事件" />

## 子组件向父组件进行通信

在 Vue 中，子组件向父组件进行通信主要通过 `自定义事件 emit` 实现。像这样：

::: code-group

```vue:line-numbers{9-11} [1.子组件 ChildComponent：]
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
```

```vue:line-numbers [2.父组件 App：]
<template>
  // 监听自定义事件 my-event
  <ChildComponent @my-event="handleMyEvevt" />
</template>

<script setup lang="ts">
import ChildComponent from "./components/ChildComponent.vue";

function handleMyEvevt(msg) {
  console.log(msg); // 触发了自定义事件
}
</script>
```

:::
