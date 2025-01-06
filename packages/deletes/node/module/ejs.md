<PageHeader content="ES Module 模块化规范" />

## 简介

在 Node.js 中，ES Module（ECMAScript Module）是另一种模块化规范，它是在 ECMAScript 6（ES6）中引入的。与 CommonJS 不同，ES Module 使用 `import` 和 `export` 关键字来导入和导出模块。

## 示例代码

```js
// math.mjs

// 定义一个函数
function add(a, b) {
  return a + b;
}

function sum () {}

// 导出函数
// export default { add, sum } 默认导出一个对象
export add;
export sum;
```

```js
// app.mjs

// 导入 math 模块
import { add } from "./math.mjs";

// 使用 math 模块中的函数
console.log(add(2, 3)); // 输出 5
```
