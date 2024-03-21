<PageHeader content="Vue.js: JS 组件化框架" />

## #简介

VueJS 是一个基于 JavaScript 的框架、用于构建**组件化**的用户界面。

如果想要查看更多信息的话，请移步 [Vue.js 官网@3](https://cn.vuejs.org/)。

::: warning # 什么是组件化？

组件化就是将复杂的界面分解为可重用、可维护的小部件，每个组件都有自己的视图和逻辑，这样可以提高开发效率，简化复杂应用的开发过程。

:::

## #基本使用

::: tip

- [如何配置 Vue 开发环境？](./usage/config-dev-env.md)
- 如何创建一个 Vue 应用？
- [模板语法 && 指令](./usage/template-syntax.md)
- **响应系统：**
- **组件：**
  - [单文件组件 SFC](./usage/sfc.md)

:::

###

### setup() 入口函数

> `setup() 函数` 提供了一个编写组件逻辑的新方式，它能够更好地组织和重用代码。

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

::: danger 如何使用 `<script setup>` 语法定义组件？

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

:::

### ref() 声明响应式数据

在`组合式 API` 中，推荐使用 ref() 函数来声明响应式状态：

```vue
<template>
  <!-- 
      在 Vue 模板中直接使用 ref 创建的响应式引用时，不需要使用 .value 访问其值。
      Vue 会自动处理这部分，使其在模板中直接可用。 
  -->
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

### props 父子组件通信

在 Vue 中，父组件向子组件进行通信主要通过 props 实现。像这样：

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

### emit 自定义事件

在 Vue 中，子组件向父组件进行通信主要通过 `自定义事件 emit` 实现。像这样：

::: code-group

```vue:line-numbers{9-11} [1.子组件 ChildComponent：]
<template>
  <button @click="triggerEvent">触发自定义事件</button>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";

const emit = defineEmits(["my-event"]);
const triggerEvent = () => {
  emit("my-event", "触发了自定义事件");
};
</script>
```

```vue:line-numbers [2.父组件 App：]
<template>
  // 监听自定义事件 my-event
  <ChildComponent @my-event="handleMyEvevt" />
</template>

<script setup lang="ts">
import ChildComponent from "./components/ChildComponent.vue";

function handleMyEvevt(msg) {
  console.log(msg); // 触发了自定义事件
}
</script>
```

:::

### `待处理` - 计算属性 computed

### `待处理` - 模板引用 ref attribute

## #应用场景

## #原理探索

### 1.为什么需要响应式？

> 响应式：就是指当数据发生变化的时候，能够自动更新到视图上。

::: code-group

```js:line-numbers [1.不引用响应式概念，手动地渲染视图：]
<div id="app"></div>
<script>
  let data = { name: "张三" };
  const render = () => document.getElementById("app").innerHTML = data.name;
  const init = () => render()

  // 初始化
  init();

  // 在 1s 之后，改变数据 data.name，并手动地重新渲染视图
  setTimeout(() => {
    data.name = "李四";
    render(); // [!code warning] // 手动更新视图
  }, 1000);
</scrip>
```

```ts:line-numbers {6-14} [2.引用响应式概念，自动地渲染视图：]
let data = { name: "张三" };
const render = () => (document.getElementById("app").innerHTML = data.name);
const init = () => render();

// 数据代理
const proxy = new Proxy(data, {
  get(target, key) {
    return target[key];
  },
  set(target, key, value) {
    target[key] = value;
    render();
  },
});

// 初始化
init();

// 在 1s 之后，改变数据 data.name，并触发代理对象 proxy 的 set 方法，自动更新视图
setTimeout(() => {
  proxy.name = "李四";
}, 1000);
```

:::
