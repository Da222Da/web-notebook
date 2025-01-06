<PageHeader content="CommonJS 模块化规范" />

## 简介

在 Node.js 中，CommonJS 是一种模块化规范，用于组织和管理 JavaScript 代码。

根据 CommonJS 规范，每个文件都被视为一个模块，模块内部的变量和函数默认是私有的。但可以通过 `module.exports` 将它们暴露给外部。而外部文件则通过 `require()` 函数来引用这些变量或函数。

## 示例代码

```js
// math.js

// 定义一个函数
function add(a, b) {
  return a + b;
}

// 将函数暴露给外部
module.exports = {
  add: add,
};
```

```js
// app.js

// 导入 math 模块
const math = require("./math");

// 使用 math 模块中的函数
console.log(math.add(2, 3)); // 输出 5
```
