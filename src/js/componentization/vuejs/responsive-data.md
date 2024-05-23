<PageHeader content="响应式数据" />

## ref() 声明响应式数据

在`组合式 API` 中，推荐使用 ref() 函数来声明响应式状态：

```vue
<template>
	<div>{{ count }}</div>
</template>

<script setup>
import { ref } from "vue";

// 创建一个响应式的引用，初始值为0
const count = ref(0);

// 访问引用的值
console.log(count.value); // 输出: 0

// 修改引用的值
count.value = 1;
console.log(count.value); // 输出: 1
</script>
```
