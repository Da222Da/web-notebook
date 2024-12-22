<PageHeader content="props 父子组件通信" />

在 Vue 中，父组件向子组件进行通信主要通过 props 实现。

而 props 是一种自定义属性，用于在组件之间传递数据。

## Props 声明

在使用 `<script setup>` 的单文件组件中，使用 `defineProps()` 函数来声明 props。像这样：

::: code-group

```js:line-numbers{7-9} [1.子组件 ChildComponent：]
<template>
  <div>{{ props.msg }}</div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  msg: String,  // 定义一个名为 msg 的 prop
});
</script>
```

```ts:line-numbers [2.父组件 App：]
<template>
  <ChildComponent msg="组件通信内容" />
</template>

<script setup lang="ts">
import ChildComponent from "./components/ChildComponent.vue";
</script>
```

:::

## 单向数据流 && 只读属性 props

1. 所有的 props 都遵循着**单向绑定**原则：每次父组件更新后，所有的子组件中的 props 都会被更新到最新值。但是，父组件传递给子组件的数据是**只读**的，子组件不能修改父组件传递的数据。

```js
const props = defineProps(["foo"]);

// ❌ 警告！prop 是只读的！
props.foo = "bar";
```

## 在子组件中，如何改变 Props 数据？

如果你想在子组件中改变 Props 数据的话，通常来源于以下两种场景：

1. 在子组件中，当我们改变 Props 数据的时候，父组件传递的数据不改变。

```js
const props = defineProps(["initialCounter"]);

// 在子组件中，将 `prop 传入初始值` 用 `ref()` 重新定义成一个局部数据属性
// 像下面这样做，就会使 prop 和后续更新无关了
const counter = ref(props.initialCounter);
```

2.  在子组件中，当我们改变 Props 数据的时候，父组件传递的数据也会被改变。

::: code-group

```ts [1.子组件 ChildComponent：]
<template>
  <div>
    <h1>{{ newMsg }}</h1>
    <input type="text" v-model="newMsg" @input="triggerEvent" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
  msg: string
}>()

// 先将 prop 数据变成局部属性
const newMsg = ref(props.msg)

// 然后定义一个事件，与父组件进行通信
const emit = defineEmits(['my-event'])
const triggerEvent = () => {
  emit('my-event', newMsg.value)
}
</script>
```

```ts:line-numbers [2.父组件 App：]
<template>
  <header>
    <div class="wrapper">
      <HelloWorld :msg="msg" @my-event="handleMyEvent" />
      {{ msg }}
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
const msg = ref('You did it!')

function handleMyEvent(value: any) {
  msg.value = value
}
</script>
```

:::

## 类型检查

在声明 props 时，可以使用 `type` 属性来指定 prop 的类型。

```js
defineProps({
	// 基础类型检查
	// （给出 `null` 和 `undefined` 值则会跳过任何类型检查）
	propA: Number,
	// 多种可能的类型
	propB: [String, Number],
	// 必传，且为 String 类型
	propC: {
		type: String,
		required: true,
	},
	// 必传但可为空的字符串
	propD: {
		type: [String, null],
		required: true,
	},
	// Number 类型的默认值
	propE: {
		type: Number,
		default: 100,
	},
	// 对象类型的默认值
	propF: {
		type: Object,
		// 对象或数组的默认值
		// 必须从一个工厂函数返回。
		// 该函数接收组件所接收到的原始 prop 作为参数。
		default(rawProps) {
			return { message: "hello" };
		},
	},
	// 自定义类型校验函数
	// 在 3.4+ 中完整的 props 作为第二个参数传入
	propG: {
		validator(value, props) {
			// The value must match one of these strings
			return ["success", "warning", "danger"].includes(value);
		},
	},
	// 函数类型的默认值
	propH: {
		type: Function,
		// 不像对象或数组的默认，这不是一个
		// 工厂函数。这会是一个用来作为默认值的函数
		default() {
			return "Default function";
		},
	},
});
```
