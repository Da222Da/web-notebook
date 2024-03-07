<PageHeader content="对象 Object" />

## #理解对象

对于现实世界而言，对象是对现实世界中物体的一种抽象表示，具有属性和方法。

对于 JavaScript 编程语言而言，对象是一种数据结构，用于存储键值对。像这样：

```js
// 对象的属性使用键值对来表示。
// 其中，键是字符串，例如 name、age；值可以是任何数据类型，例如"John"、30。
const person = {
  name: "John",
  age: 30,
  gender: "male",
  sayHello: function () {
    console.log("Hello!");
  },
};
```

总之，JavaScript 中的对象是一种灵活且强大的数据结构，常用于表示复杂的数据和实现面向对象编程。

## #对象属性类型

对象属性分两种：数据属性和访问器属性。

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

::: danger 特别说明: 什么是内部特性？

ECMA-262 使用一些内部特性来描述属性的特征。这些特性是由为 JavaScript 实现引擎的规范定义
的。因此，开发者不能在 JavaScript 中直接访问这些特性。为了将某个特性标识为内部特性，规范会用
两个中括号把特性的名称括起来，比如`[[Enumerable]]`。

:::

## #操作对象属性

### 1.增删改查

在 JavaScript 中，可以通过以下方式对对象属性进行增删改查：

```js
// 定义一个对象
const person = {
  name: "Alice",
  age: 30,
};

// 增加属性
person.city = "New York";

// 删除属性
delete person.age;

// 修改属性
person.name = "Bob";

// 查找属性
console.log(person.name); // 输出 'Bob'
console.log(person["city"]); // 输出 'New York'
```

### 2.对象解构

在 JavaScript 中，对象解构是一种方便的语法，用于从对象中提取属性值并将它们赋值给变量。这样可以简化代码并使代码更易读。

要使用对象解构，可以使用花括号 {} 来指定要提取的属性，并将其赋值给变量。像这样：

```js
// 定义一个对象
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

// 使用对象解构
const { name, age, city } = person;

// 使用别名进行对象解构
const { name: personName, age: personAge } = person;
```
