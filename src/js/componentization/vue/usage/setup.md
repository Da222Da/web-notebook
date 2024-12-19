<PageHeader content="逻辑入口函数 setup()" />

在 Vue 3 中， `setup` 函数用于设置组件的状态、props 和任何其他响应式属性。它取代了 Vue 2 中使用的 `data` 、 `computed` 和 `methods` 选项。 `setup` 函数在组件创建之前运行，允许更灵活地组织和访问组件的逻辑和数据。

## 基本使用

在 setup 函数中，你可以使用 `组合式 API` 提供的各种功能，如 ref、reactive、computed、watch 等，来创建响应式的数据和逻辑。

setup 函数返回的任何内容都可以在组件的模板中直接使用。像这样：

```vue
<template>
	<button @click="count++">{{ count }}</button>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
	// setup 函数可以接收两个参数：props 和 context。
	// props 是一个对象，包含组件的 props 属性。
	// context 是一个对象，包含组件的上下文信息，例如 attrs、slots 等。
	setup(props, context) {
		const count = ref(0);

		// 返回值会暴露给模板和其他的选项式 API 钩子
		return {
			count,
		};
	},
});
</script>
```

## 使用 `<script setup>` 简化代码

`<script setup>` 中的所有顶级绑定（变量、函数等）都自动被视为 setup 函数的一部分，并且可以在模板中直接使用。

如果你使用了 `<script setup>` 语法的话，就不需要显式定义 setup 函数。

```vue
<template>
	<div>{{ count }}</div>
</template>

<script setup lang="ts" name="App">
import { ref } from "vue";
const count = ref(0);
</script>
```

## setup 函数的调用时机

setup 函数会在组件的 beforeCreate 和 created 生命周期钩子之前被调用，这意味着在这个阶段，组件的 props、slots 等都已经被解析，但组件实例还没有被创建。

```vue
<script lang="ts">
import { defineComponent, onMounted } from "vue";
export default defineComponent({
	name: "App",
	setup() {
		console.log("1");
		onMounted(() => console.log("3"));
		console.log("2");

		// 打印顺序：1 2 3
	},
});
</script>
```
