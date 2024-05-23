<PageHeader content="Setup 入口函数" />

> `setup() 函数` 提供了一个编写组件逻辑的新方式，它能够更好地组织和重用代码。

## Setup 函数的调用时机

在 Vue3 的 `组合式 API` 中，setup 函数是一个新引入的组件选项，用于在组件创建之前执行代码。它为组件的逻辑和状态声明提供了一个统一的地方，是使用`组合式 API`构建组件的入口。

setup 函数会在组件的 beforeCreate 和 created 生命周期钩子之前被调用，这意味着在这个阶段，组件的 props、slots 等都已经被解析，但组件实例还没有被创建。setup 函数可以接收两个参数：props 和 context。

在 setup 函数中，你可以使用 `组合式 API` 提供的各种功能，如 ref、reactive、computed、watch 等，来创建响应式的数据和逻辑。setup 函数返回的任何内容都可以在组件的模板中直接使用。像这样：

```vue
<script>
import { ref } from "vue";

export default {
	setup(props, context) {
		const count = ref(0);

		// 返回值会暴露给模板和其他的选项式 API 钩子
		return {
			count,
		};
	},

	mounted() {
		console.log(this.count); // 0
	},
};
</script>

<template>
	<button @click="count++">{{ count }}</button>
</template>
```

## 使用 `<script setup>` 语法定义组件

通常情况下，我们会使用 `<script setup>` 语法在 Vue 3 中定义组件。

而在 `<script setup>` 中，你不需要显式定义 setup 函数。相反，`<script setup>` 中的所有顶级绑定（变量、函数等）都自动被视为 setup 函数的一部分，并且可以在模板中直接使用。

```vue
<script setup>
import { ref } from "vue";

// 使用 defineProps 定义并接收 props
const props = defineProps({
	title: String,
	count: Number,
});

// 使用 props
const title = ref(props.title);
</script>

<template>
	<div>
		<h1>{{ title }}</h1>
		<p>Count: {{ count }}</p>
	</div>
</template>
```
