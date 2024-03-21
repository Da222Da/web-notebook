<PageHeader content="模板语法 && 指令" />

## 简介

模板语法是一种基于 HTML 的语法规则，它能够让开发者使用简洁和直观的`HTML 标记语法`，来描述组件实例与 UI 视图之间的关系。

所以说，模板语法可以帮助我们轻松地构建和管理应用程序的 UI 层。

## 文本插值

```vue
<!-- 使用双大括号 {{ }} 进行文本插值的基本语法 -->
<span>Message: {{ msg }}</span>
```

## 使用 JavaScript 表达式

```vue
<!-- 在模板中使用 JavaScript 表达式 -->
{{ number + 1 }}`，`{{ ok ? "YES" : "NO" }}
```

## 调用函数

```vue
<!-- 在绑定的表达式中使用组件方法 -->
<time :title="toTitleDate(date)" :datetime="date">
    {{ formatDate(date) }}
</time>
```

## 指令（Directives）

```md
- 指令是带有`v-`前缀的特殊 attribute，如`v-if`指令，例如`<p v-if="seen">Now you see me</p>`。
- 指令可以带有参数，如`<a v-bind:href="url">...</a>`或简写`<a :href="url">...</a>`。
- 动态参数使用 JavaScript 表达式，如`<a v-bind:[attributeName]="url">...</a>`。
```

::: warning 指令语法:

![directive](../images/directive.png)

:::

以下是 Vue.js 中各个指令的使用示例：

### `v-text` 显示纯文本

用于将元素的文本内容绑定到 Vue 实例的数据。不会处理 HTML 标签。

```html
<p v-text="message"></p>
```

### v-html 原始 HTML

```vue
<!-- 使用`v-html`指令来输出原始 HTML，而不是作为文本处理 -->
<p v-html="rawHtml"></p>
```

### `if else` 条件判断

```html
<!-- 条件性地渲染元素。如果表达式为`true`，则元素会被渲染；如果为`false`，则元素不会被渲染到 DOM 中。 -->
<div v-if="isVisible">我只有在isVisible为true时才会出现。</div>

<!-- 链式条件判断 -->
<div v-if="age > 18">你成年了。</div>
<div v-else-if="age > 13">你是青少年。</div>
<div v-else>你是儿童。</div>
```

### `v-show` 是否显示

```html
<!-- 与`v-if`类似，但`v-show`通过 CSS 的`display`属性来控制元素的显示和隐藏。 -->
<div v-show="isVisible">我可以通过改变isVisible的值来显示或隐藏。</div>
```

### `v-bind` 绑定一个或多个属性

用于动态地绑定一个或多个属性，或组件 prop 到表达式。简写为`:`。

```html
<img v-bind:src="imageSrc" alt="图片" />
<!-- 简写 -->
<img :src="imageSrc" alt="图片" />

<!-- 使用对象语法`v-bind`来动态绑定多个属性 -->
<div v-bind="objectOfAttrs"></div>
```

### `v-on` 事件监听

用于监听元素上的事件。简写为`@`。

```html
<button v-on:click="doSomething">点击我</button>
<!-- 简写 -->
<button @click="doSomething">点击我</button>

<!-- 修饰符以点开头的特殊后缀，表明指令需要以特殊方式绑定 -->
<form @submit.prevent="onSubmit">...</form>
```

### `v-model` 双向数据绑定

用于表单元素，实现双向数据绑定。在输入框的值变化时，绑定的数据也会更新，反之亦然。

```html
<input v-model="message" />
```

### `v-for` 列表渲染

用于基于数组或对象渲染一个列表。可以结合`v-bind:key`来提供列表项的唯一标识符。

```html
<ul>
  <li v-for="(item, index) in items" :key="index">{{ item }}</li>
</ul>
```

### `v-once` 只渲染一次

只渲染元素一次，之后不再更新。适用于展示不会改变的内容，可以提高性能。

```html
<div v-once>我只会渲染一次。</div>
```

### `v-memo` 缓存组件的渲染结果

用于缓存组件的渲染结果，直到其依赖发生变化。可以提高重复渲染的性能。

```html
<div v-memo="memoizedValue"></div>
```
