<PageHeader content="数据属性和访问器属性的区别？" />

::: tip 数据属性和访问器属性的区别？

对象属性的类型可以分为两种：`数据属性`和`访问器属性`。

- 数据属性`Data Properties`:
  - 数据属性包含一个存储值的位置。这个值可以是任何 JavaScript 数据类型，如字符串、数字、布尔值等。
  - 数据属性具有四个特性： `[[Value]]` （存储属性值）、 `[[Writable]]` （属性是否可写）、 `[[Enumerable]]` （属性是否可枚举）和 `[[Configurable]]` （属性是否可配置）。
  - 默认情况下，数据属性的 `[[Writable]]` 、 `[[Enumerable]]` 和 `[[Configurable]]` 特性都为 true， `[[Value]]` 默认值为 undefined。
- 访问器属性`Accessor Properties`:
  - 访问器属性不包含一个值，而是包含一对 getter 和 setter 函数，用于获取和设置属性的值。
  - 访问器属性具有四个特性： `[[Get]]` （获取属性值的函数）和 `[[Set]]` （设置属性值的函数）、 `[[Enumerable]]` （属性是否可枚举）和 `[[Configurable]]` （属性是否可配置）。
  - 访问器属性没有 `[[Value]]` 和 `[[Writable]]` 特性，因为它们不直接存储属性值。

```js
// 定义一个空对象
const person = {};

// 定义数据属性
Object.defineProperty(person, "name", {
  value: "Alice", // 属性值为 'Alice'
  writable: true, // 属性可写
  enumerable: true, // 属性可枚举
  configurable: true, // 属性可配置
});

// 定义访问器属性
let _age = 30; // 私有变量，用于存储年龄

Object.defineProperty(person, "age", {
  get: function () {
    return _age; // 获取年龄值
  },
  set: function (newAge) {
    if (newAge >= 0 && newAge <= 120) {
      _age = newAge; // 设置年龄值，限制在0到120之间
    } else {
      console.log("Invalid age value");
    }
  },
  enumerable: true, // 属性可枚举
  configurable: true, // 属性可配置
});

// 访问数据属性
console.log(person.name); // 输出 'Alice'

// 使用访问器属性
console.log(person.age); // 输出 30
person.age = 35; // 设置年龄为35
console.log(person.age); // 输出 35
person.age = -5; // 尝试设置无效年龄值，将输出 'Invalid age value'
console.log(person.age); // 输出 35，年龄未改变
```

:::

::: warning 特别说明: 什么是内部特性？

ECMA-262 使用一些内部特性来描述属性的特征。这些特性是由为 JavaScript 实现引擎的规范定义
的。因此，开发者不能在 JavaScript 中直接访问这些特性。为了将某个特性标识为内部特性，规范会用
两个中括号把特性的名称括起来，比如`[[Enumerable]]`。

:::
