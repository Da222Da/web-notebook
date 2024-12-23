# Vue.js: 一种基于 Javascript 组件化方案

VueJS 是一个基于 JavaScript 的框架、用于构建**组件化**的用户界面。

如果想要查看更多信息的话，请移步 [Vue.js 官网@3](https://cn.vuejs.org/)。

## 1.Graph 知识图表

<Mind :data="data" height="500" />
<script setup>
import { onMounted, ref } from "vue";
const data = ref({
			data: {
				text: "VueJS",
			},
			children: [
				{ 
					data: { text: "响应系统" }, 
					children: [
						{ data: { text: "ref" } }, 
					] 
				},
				{ 
					data: { text: "渲染系统" }, 
					children: [] 
				},
				{ 
					data: { text: "组件系统" }, 
					children: [
						{ data: { text: "props 父组件向子组件传递数据" } }, 
						{ data: { text: "emit 自定义事件" } }, 
						{ data: { text: "provide/inject 跨组件传递数据" } }
					] 
				},
				{ data: { text: "插件系统" }, children: [{ data: { text: "注册全局方法/属性" } }, { data: { text: "注册全局组件" } }, { data: { text: "注册全局 provide 数据" } }] },
			],
		})
</script>

## 2.Prompt 提问记录

### 2.3 组件系统

#### a. props 数据传递

在 Vue.js 框架中，props（属性）是一种在父组件与子组件之间传递数据的方式。它允许父组件向子组件发送数据，子组件则可以通过 props 接收并使用这些数据。

::: code-group

```vue [子组件]
<template>
	<div>{{ message }}</div>
</template>

<script setup>
import { defineProps } from "vue";

// 使用 defineProps 定义 props
const props = defineProps({
	message: {
		type: String,
		required: true,
	},
});
</script>
```

```vue [父组件]
<template>
	<div>
		<ChildComponent message="Hello from Parent!" />
	</div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";

export default {
	components: {
		ChildComponent,
	},
};
</script>
```

:::

#### b. emit 自定义事件

在 Vue.js 中，emit 方法用于触发当前组件的自定义事件，从而允许子组件与父组件进行通信。

::: code-group

```vue [子组件]
<template>
	<button @click="notifyParent">Notify Parent</button>
</template>

<script setup>
import { defineEmits } from "vue";

// 定义可以触发的自定义事件
const emit = defineEmits(["notify"]);

// 定义一个方法，当按钮被点击时调用
function notifyParent() {
	// 触发 'notify' 事件，并传递一些数据给父组件
	emit("notify", { message: "Hello from Child Component!" });
}
</script>
```

```vue [父组件]
<template>
	<div>
		<h1>Parent Component</h1>
		<ChildComponent @notify="handleNotify" />
	</div>
</template>

<script setup>
import ChildComponent from "./ChildComponent.vue";

// 定义一个方法来处理子组件触发的 'notify' 事件
function handleNotify(payload) {
	console.log("Received message from Child Component:", payload.message);
	// 可以在这里添加更多的处理逻辑
}
</script>
```

:::

#### c. provide/inject 数据传递

在 Vue.js 中，provide 和 inject 是两个配套的 API，用于在祖先组件中提供数据，然后在后代组件中注入这些数据。这种机制允许您在不通过 props 逐级传递的情况下，实现跨组件的数据共享。

- `provide 函数`用于定义一个或多个可以被后代组件通过 inject 访问的数据或方法。
- `inject 函数`用于在后代组件中获取由祖先组件通过 provide 提供的数据或方法。

::: code-group

```vue [provide 提供数据]
<template>
	<div>
		<ChildComponent />
	</div>
</template>

<script setup>
import { provide, ref } from "vue";
import ChildComponent from "./ChildComponent.vue";

const sharedData = ref("Hello from Provider!");

// 使用 provide 提供 sharedData
provide("sharedData", sharedData);
</script>
```

```vue [inject 获取数据]
<template>
	<div>{{ sharedData }}</div>
</template>

<script setup>
import { inject } from "vue";

// 使用 inject 获取名为 'sharedData' 的数据
const sharedData = inject("sharedData");
</script>
```

:::

### 2.4 插件系统

#### a. 注册全局方法/属性

::: code-group

```js [1.定义插件 test.plugin.js]
const plugins = {
	install(app) {
		// 注册全局方法 $test
		app.config.globalProperties.$test = () => {
			console.log("this is a test plugin");
		};
	},
};

export default plugins;
```

```js [2.注册插件 main.js]
import { createApp } from "vue";
import App from "./App.vue";
import TestPlugin from "./plugins/test.plugin.js";

const app = createApp(App);

app.use(TestPlugin);

app.mount("#app");
```

```vue [3.使用插件 App.vue]
<template>
	<!-- 在 template 模板中使用 -->
	{{ $test() }}
</template>

<script setup>
import { onMounted, getCurrentInstance } from "vue";

onMounted(() => {
	// 在 setup 脚本中使用
	getCurrentInstance().appContext.config.globalProperties.$test();
});
</script>
```

:::

#### b. 注册全局组件

::: code-group

```js [1.定义插件 test.plugin.js]
import HelloWorld from "@/components/HelloWorld.vue";

const plugins = {
	install(app) {
		// 注册全局方法 $test
		app.component("hello-world", HelloWorld);
	},
};

export default plugins;
```

```js [2.注册插件 main.js]
import { createApp } from "vue";
import App from "./App.vue";
import TestPlugin from "./plugins/test.plugin.js";

const app = createApp(App);

app.use(TestPlugin);

app.mount("#app");
```

```vue [3.使用插件 App.vue]
<template>
	<hello-world />
</template>
```

:::

#### c. 注册全局 provide 数据

::: code-group

```js [1.定义插件 test.plugin.js]
const plugins = {
	install(app) {
		app.provide("msg", { msg: "from plugin" });
	},
};

export default plugins;
```

```js [2.注册插件 main.js]
import { createApp } from "vue";
import App from "./App.vue";
import TestPlugin from "./plugins/test.plugin.js";

const app = createApp(App);

app.use(TestPlugin);

app.mount("#app");
```

```vue [3.使用插件 App.vue]
<script setup>
import { onMounted, inject } from "vue";

const msg = inject("msg");
onMounted(() => {
	console.log(msg, "test");
});
</script>
```

:::
