### 侦听 ref 属性的变化

```vue
<template>
	{{ count }}
	<button @click="count++">+1</button>
</template>

<script>
import { ref, watch } from "vue";
import Children from "./views/Children.vue";

export default {
	components: { Children },
	setup() {
		const count = ref(0);

		// 可以直接侦听一个 ref
		watch(count, (newValue, oldValue) => {
			console.log("newValue, oldValue::: ", newValue, oldValue);
		});

		return { count };
	},
};
</script>
```

### 侦听 reactive 属性的变化

> 注意，你不能直接侦听响应式对象的属性值，这里需要用一个返回该属性的 getter 函数。

```vue
<template>
	<div>
		{{ person.name }}
		<button @click="person.name = '李四'">改名</button>
	</div>
</template>

<script>
import { reactive, watch } from "vue";

export default {
	setup() {
		const person = reactive({ name: "张三" });

		watch(
			() => person.name,
			(newValue, oldValue) => {
				console.log("newValue, oldValue::: ", newValue, oldValue);
			}
		);

		return { person };
	},
};
</script>
```

### 同时侦听多个属性的变化

```vue
<template>
	<div>
		{{ count }}
		<button @click="count++">+1</button>
	</div>
	<div>
		{{ person.name }}
		<button @click="person.name = '李四'">改名</button>
	</div>
</template>

<script>
import { ref, reactive, watch } from "vue";

export default {
	components: { Children },
	setup() {
		const count = ref(0);
		const person = reactive({ name: "张三" });

		// 将多个 ref 或 reactive 转换成数组，然后侦听器会以相应的格式接收它们。
		watch([count, () => person.name], (newValue, oldValue) => {
			console.log("newValue, oldValue::: ", newValue, oldValue);
		});

		return { count, person };
	},
};
</script>
```

### 侦听 props 属性的变化

> 注意，你不能直接侦听 props 的属性值，这里需要用一个返回该属性的 getter 函数。

::: code-group

```vue [子组件 Children.vue]
<template>
	<div>{{ count }}</div>
</template>

<script>
import { defineComponent, watch } from "vue";

export default defineComponent({
	name: "Children",
	props: {
		count: Number,
	},
	setup(props) {
		watch(
			() => props.count,
			(newValue, oldValue) => {
				console.log("newValue, oldValue::: ", newValue, oldValue);
			}
		);
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
	components: { Children },
	setup() {
		const count = ref(0);

		return { count };
	},
};
</script>
```

:::
