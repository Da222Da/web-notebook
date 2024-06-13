### 监听 ref 属性的变化

```vue
<template>
	<div>{{ count }}</div>
	<button @click="count++">Increment</button>
	<button @click="count--">Decrement</button>
</template>

<script>
import { ref, watchEffect } from "vue";

export default {
	setup() {
		const count = ref(0);

		watchEffect(() => {
			// 只要将使用到的 ref 属性放到 watchEffect 的回调函数中，
			// 就能在 count 发生变化时自动触发 watchEffect 的回调函数
			console.log("watchEffect:", count.value);
		});

		return { count };
	},
};
</script>
```

### 监听 props 属性的变化

::: code-group

```vue [子组件 Children.vue]
<template>
	<div>{{ count }}</div>
</template>

<script>
import { defineComponent, watchEffect } from "vue";

export default defineComponent({
	name: "Children",
	props: {
		count: Number,
	},
	setup(porps) {
		watchEffect(() => {
			// 只要将使用到的 props 属性放到 watchEffect 的回调函数中，
			// 就能在 count 发生变化时自动触发 watchEffect 的回调函数
			console.log("count changed:", porps.count);
		});
	},
});
</script>
```

```vue [父组件 App.vue]
<template>
	<Children :count="count" />
	<button @click="count++">+1</button>
</template>

<script>
import { ref } from "vue";
import Children from "./views/Children.vue";

export default {
	components: { HomeView },
	setup() {
		const count = ref(0);

		return { count };
	},
};
</script>
```

:::

### watchEffect 依赖收集的时机

> watchEffect 的依赖收集会在 onMounted 之前完成。

```vue
<script>
import { ref, onMounted, watchEffect } from "vue";

export default {
	setup() {
		const count = ref(0);

		watchEffect(() => {
			// watchEffect 的依赖收集会在 onMounted 之前完成
			console.log("before", count.value);
		});

		onMounted(() => {
			console.log("after");
		});

		return { count };
	},
};
</script>
```

### 手动销毁 watchEffect

```vue
<template>
	{{ count }}
	<button @click="count++">+1</button>
</template>

<script>
import { ref, watchEffect } from "vue";
import Children from "./views/Children.vue";

export default {
	components: { Children },
	setup() {
		const count = ref(0);

		const unwatch = watchEffect(() => {
			console.log("收集依赖 count", count.value);
		});

		setTimeout(() => {
			// 手动销毁 watchEffect 侦听器之后，便不再执行副作用回调函数
			unwatch();
		}, 3000);

		return { count };
	},
};
</script>
```
