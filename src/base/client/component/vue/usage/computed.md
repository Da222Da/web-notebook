<PageHeader content="计算属性 computed()" />

> 使用`计算属性 computed()`来简化"依赖于响应式状态"的复杂逻辑。

## 基础使用场景

::: code-group

```vue [不使用计算属性]
<template>
	<p>Has published books:</p>
	<!-- 难以维护的表示式 -->
	<span>{{ author.books.length > 0 ? "Yes" : "No" }}</span>
	<span>{{ author.books.length > 0 ? "Yes" : "No" }}</span>
	<span>{{ author.books.length > 0 ? "Yes" : "No" }}</span>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
	name: "App",
	setup() {
		const author = reactive({
			name: "John Doe",
			books: ["Vue 2 - Advanced Guide", "Vue 3 - Basic Guide", "Vue 4 - The Mystery"],
		});

		// 返回暴露给模板的数据
		return {
			author,
		};
	},
});
</script>
```

```vue [使用计算属性]
<template>
	<p>Has published books:</p>
	<div>{{ bookCount }}</div>
	<div>{{ bookCount }}</div>
	<div>{{ bookCount }}</div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
export default defineComponent({
	name: "App",
	setup() {
		const author = reactive({
			name: "John Doe",
			books: ["Vue 2 - Advanced Guide", "Vue 3 - Basic Guide", "Vue 4 - The Mystery"],
		});
		const bookCount = computed(() => (author.books.length > 0 ? "Yes" : "No"));

		// 返回暴露给模板的数据
		return {
			bookCount,
		};
	},
});
</script>
```

:::

## 计算属性的返回值 ComputedRefImpl

计算属性返回的是一个`ComputedRefImpl`对象。

和其他一般的 ref 类似，你可以通过 `.value` 访问计算结果。计算属性 ref 也会在模板中自动解包，因此在模板表达式中引用时无需添加 `.value`。

```vue
<template>
	<p>Has published books:</p>
	<div>{{ bookCount }}</div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
export default defineComponent({
	name: "App",
	setup() {
		const author = reactive({
			name: "John Doe",
			books: ["Vue 2 - Advanced Guide", "Vue 3 - Basic Guide", "Vue 4 - The Mystery"],
		});
		const bookCount = computed(() => (author.books.length > 0 ? "Yes" : "No"));
		console.log("bookCount value::: ", bookCount.value);

		// 返回暴露给模板的数据
		return {
			bookCount,
		};
	},
});
</script>
```

## 计算属性默认是 read-only

计算属性的默认返回值是`read-only`只读的，因此不能直接修改。

```vue
<template>
	<p>Has published books:</p>
	<div>{{ bookCount }}</div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
export default defineComponent({
	name: "App",
	setup() {
		const author = reactive({
			name: "John Doe",
			books: ["Vue 2 - Advanced Guide", "Vue 3 - Basic Guide", "Vue 4 - The Mystery"],
		});
		const bookCount = computed(() => (author.books.length > 0 ? "Yes" : "No"));
		bookCount.value = 1; // 错误: Cannot assign to 'value' because it is a read-only property.

		return {
			bookCount,
		};

		return {
			bookCount,
		};
	},
});
</script>
```

## 计算属性什么时候会发生改变？

当计算属性依赖的任何响应式属性或引用发生变化时，计算属性将被重新计算和更新。这些依赖项是计算属性所依赖的响应式属性或引用。当这些依赖项中的任何一个发生变化时，Vue 会自动重新计算计算属性，并在必要时更新 DOM。

```vue
<template>
	<div>
		<p>消息：{{ message }}</p>
		<p>消息长度：{{ messageLength }}</p>
		<button @click="updateMessage">更新消息</button>
	</div>
</template>

<script>
import { ref, computed } from "vue";

export default {
	setup() {
		const message = ref("你好，Vue 3");

		const messageLength = computed(() => {
			return message.value.length;
		});

		const updateMessage = () => {
			message.value = "你好，Vue 3 已更新";
		};

		return { message, messageLength, updateMessage };
	},
};
</script>
```

## `禁用：`可写计算属性

::: danger 请避免直接修改计算属性值！

从计算属性返回的值是派生状态。可以把它看作是一个“临时快照”，每当源状态发生变化时，就会创建一个新的快照。更改快照是没有意义的。

因此计算属性的返回值应该被视为只读的，并且永远不应该被更改——应该更新它所依赖的源状态以触发新的计算。

:::

计算属性默认是只读的。当你尝试修改一个计算属性时，你会收到一个运行时警告。只在某些特殊场景中你可能才需要用到“可写”的属性，你可以通过同时提供 getter 和 setter 来创建：

```vue
<script setup>
import { ref, computed } from "vue";

const firstName = ref("John");
const lastName = ref("Doe");

const fullName = computed({
	// getter
	get() {
		return firstName.value + " " + lastName.value;
	},
	// setter
	set(newValue) {
		// 注意：我们这里使用的是解构赋值语法
		[firstName.value, lastName.value] = newValue.split(" ");
	},
});

fullName.value = "John1 Doe1";
console.log(firstName.value, lastName.value); // 输出 "John1" 和 "Doe1"
</script>
```
