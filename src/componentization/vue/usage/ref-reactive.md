<PageHeader content="响应式数据" />

## ref() 创建响应式原始值

在 Vue 3 中， ref() 函数用于创建一个响应式的引用(reference)对象。通过 ref() 函数可以包装基本类型的数据，使其成为响应式数据，从而能够在模板中直接使用。

创建的引用对象具有一个 .value 属性，用于访问和修改引用对象的值。

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

## reactive() 创建响应式引用值

在 Vue 3 中， reactive() 函数用于创建一个对象的响应式代理。这意味着对对象属性的任何更改都将自动跟踪并触发响应性。

reactive() 函数通常用于使整个对象具有响应性，相比于 ref() ，它提供了更细粒度的响应性。它特别适用于在 Vue 3 组件中管理复杂的数据结构和对象。

```vue
<template>
	<div>
		<p>消息：{{ message.name }}</p>
		<p>消息内容：{{ message.content }}</p>
		<button @click="message.updateMessage">更新消息</button>
	</div>
</template>

<script>
import { reactive, computed } from "vue";

export default {
	setup() {
		const message = reactive({
			name: "Vue 3",
			content: "这是一条消息",
			updateMessage() {
				this.name = "Vue 3 已更新";
				this.content = "这是一条新的消息";
			},
		});

		return { message };
	},
};
</script>
```

## toRefs() 创建可解构响应式对象

如果我们直接对响应式对象进行解构，那么解构后的属性将不再具有响应式特性。

这时，就需要我们使用 toRefs() 函数将响应式对象的属性转换为普通的引用对象，这个普通对象的每个属性值都会单独地调用 `toRef()` 变成响应式的 ref 类型`ObjectRefImpl`。这样解构后的属性将具有响应式特性。

::: code-group

```vue [1.直接解构响应式对象，失去响应式]
<template>
	<div>
		<p>消息：{{ name }}</p>
		<p>消息内容：{{ content }}</p>
		<!-- 点击这个按钮，无法响应式地改变 name 和 content -->
		<button @click="updateMessage">更新消息</button>
	</div>
</template>

<script>
import { reactive, computed, toRefs } from "vue";

export default {
	setup() {
		const message = reactive({
			name: "Vue 3",
			content: "这是一条消息",
			updateMessage() {
				this.name = "Vue 3 已更新";
				this.content = "这是一条新的消息";
			},
		});

		return { ...message };
	},
};
</script>
```

```vue [2.toRefs() 创建可解构响应式对象]
<template>
	<div>
		<p>消息：{{ name }}</p>
		<p>消息内容：{{ content }}</p>
		<button @click="updateMessage">更新消息</button>
	</div>
</template>

<script>
import { reactive, computed, toRefs } from "vue";

export default {
	setup() {
		const message = reactive({
			name: "Vue 3",
			content: "这是一条消息",
			updateMessage() {
				this.name = "Vue 3 已更新";
				this.content = "这是一条新的消息";
			},
		});
		const msg = toRefs(message);

		return { ...msg };
	},
};
</script>
```

:::
