<PageHeader content="单文件组件 SFC？" />

### SFC 简介

单文件组件（Single-File Components，简称 SFC）。它是 Vue.js 提供的一种特殊的文件格式，允许开发者将模板`<template>`、逻辑`<script>`和样式`<style>`封装在单个文件中，使组件的编写、组织和管理更加方便、直观。像这样：

```vue
<script>
export default {
  data() {
    return {
      greeting: "Hello World!",
    };
  },
};
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>
```

### SFC 是如何工作的？

- Vue SFC 需要通过编译器（如`@vue/compiler-sfc`）编译为标准的 JavaScript 和 CSS。
- 编译后的 SFC 是一个标准的 JavaScript(ES)模块，可以像其他 ES 模块一样导入。
- 你可以在 [Vue SFC 演练场](https://play.vuejs.org/#eNp9kUFLwzAUx7/KM5cqzBXR0+gGKgP1oKKCl1xG99ZlpklIXuag9Lv7krK5w9it7//7v/SXthP3zo23EcVEVKH2yhEEpOhm0qjWWU/QgccV9LDytoWCq4U00tTWBII2NDBN/LJ4Qq0tfFuvlxfFlTRVORzHB/FA2Dq9IOQJoFrfzLouL/d9VfKUU2VcJNhet3aJeioFcymgZFiVR/tiJCjw61eqGW+CNWzepX0pats6pdG/OVKsJ8UEMklswXa/LzkjH3G0z+s11j8n8k3YpUyKd48B/RalODBa+AZpwPPPV9zx8wGyfdTcPgM/MFgdk+NQe4hmydpHvWz7nL+/Ms1XmO8ITdhfKommZp/7UvA/eTxz9X/d2/Fd3pOmF/0fEx+nNQ==) 中实际使用一下单文件组件，同时看到它们最终被编译后的样子。

::: danger @vue/compiler-sfc 是什么？
`@vue/compiler-sfc` 是 Vue.js 框架中的一个内部包，它的主要作用是编译单文件组件（Single-File Components，简称 SFC）。当你在 Vue 项目中使用 `.vue` 文件时，这个编译器负责将这些文件中的 `<template>`、`<script>` 和 `<style>` 块转换成标准的 JavaScript 模块。

具体来说，`@vue/compiler-sfc` 执行以下任务：

1. **解析模板**：将 `<template>` 块中的内容解析成一个渲染函数，这个函数可以在 Vue 组件中使用。

2. **处理脚本**：执行 `<script>` 块中的 JavaScript 代码，并将其导出的内容转换为组件的选项对象。

3. **处理样式**：将 `<style>` 块中的内容提取出来，并根据需要将其注入到最终的 HTML 页面中，或者将其转换为独立的 CSS 文件。

4. **处理资源导入**：处理 `<script>` 块中的 `import` 语句，确保所有的依赖都被正确解析和打包。

5. **提供编译时优化**：通过静态分析和预编译，`@vue/compiler-sfc` 可以进行一些优化，比如内联组件模板和静态提升等。

6. **支持 SFC 特性**：支持 Vue 特有的 SFC 特性，如 `<script setup>`，这是一个特殊的 `<script>` 块，它提供了一种更简洁的方式来编写组件逻辑。

`@vue/compiler-sfc` 是 Vue 工具链中的关键组件，它使得开发者能够以一种直观和高效的方式编写和组织 Vue 组件代码。在构建过程中，这个编译器与构建工具（如 Vite 或 Vue CLI）紧密协作，确保最终生成的代码既高效又兼容不同的运行环境。
:::
