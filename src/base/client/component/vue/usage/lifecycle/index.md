<PageHeader content="生命周期" />

## 生命周期钩子

### onMounted 初始化逻辑的钩子

`onMounted` 钩子注册一个回调函数，在组件挂载完成后执行。

```vue
<script setup>
import { onMounted } from "vue";

onMounted(() => {
	console.log(`the component is now mounted.`);
});
</script>
```

### onUpdated() 更新组件的钩子

注册一个回调函数，在组件因为响应式状态变更而更新其 DOM 树之后调用。

```vue
<script setup>
import { ref, onUpdated } from "vue";

const count = ref(0);

onUpdated(() => {
	// 文本内容应该与当前的 `count.value` 一致
	console.log(document.getElementById("count").textContent);
});
</script>

<template>
	<button id="count" @click="count++">{{ count }}</button>
</template>
```

## 生命周期图

<img src="./lifecycle.png" alt="lifecycle" />
