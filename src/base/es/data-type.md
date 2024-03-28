<PageHeader content="数据类型" />

## String 字符串

`String`是 JavaScript 中的一种数据类型，用于表示和储存文本数据，如字母、数字、符号、空格和特殊字符等。

```js
// 创建字符串变量
const str1 = "Hello, ";
const str2 = "World!";

// 字符串拼接
const greeting = str1 + str2;
console.log(greeting); // 输出: Hello, World!

// 获取字符串长度
const length = greeting.length;
console.log(length); // 输出: 13

// 字符串替换
const newGreeting = greeting.replace("World", "Universe");
console.log(newGreeting); // 输出: Hello, Universe!
```

## Number 数字

`Number`是 JavaScript 中的一种数据类型，用于表示和存储数字`包括整数和浮点数`。

```js
// 创建数值变量
const num1 = 42;
const num2 = 3.14;

// 数值计算
const sum = num1 + num2;
console.log(sum); // 输出: 45.14

// 数值比较
const isGreaterThan = num1 > num2;
console.log(isGreaterThan); // 输出: true

// 数值转换
const strNum = "10";
const parsedNum = parseInt(strNum);
console.log(parsedNum); // 输出: 10
```

## Boolean 逻辑值

Boolean 是 JavaScript 中的一种数据类型，用于表示逻辑值，即 true（真）或 false（假）。

```js
// 创建布尔变量
const isTrue = true;
const isFalse = false;

// 条件判断
if (isTrue) {
  console.log("It is true."); // 输出: It is true.
} else {
  console.log("It is false.");
}

// 逻辑运算
const result = isTrue && isFalse;
console.log(result); // 输出: false
```

## Null 空值

Null 是 JavaScript 中的一种特殊数据类型，表示空值或空对象。

```js
// 创建一个空值变量
let nullValue = null;

// 检查空值
if (nullValue === null) {
  console.log("The value is null."); // 输出: The value is null.
} else {
  console.log("The value is not null.");
}
```

## Undefined 未定义值

Undefined 是 JavaScript 中的一种特殊数据类型，表示未定义的值。

```js
// 创建一个未定义的变量
let undefinedValue; // 当变量声明但未初始化时，其默认值为undefined。

// 检查未定义值
if (undefinedValue === undefined) {
  console.log("The value is undefined."); // 输出: The value is undefined.
} else {
  console.log("The value is defined.");
}
```

## Symbol 唯一值

`Symbol`是一种基本数据类型，用于创建唯一且不可变的值。每个通过`Symbol()`函数创建的 Symbol 值都是唯一的，即使它们的描述相同也不相等。`Symbol`主要用于创建唯一的属性键，确保属性不会被意外覆盖。

```js
// 创建两个唯一的Symbol
const sym1 = Symbol("description");
const sym2 = Symbol("description");

// 使用Symbol作为对象的属性键，确保属性的唯一性
const obj = {
  [sym1]: "value1",
  [sym2]: "value2",
};

// 访问Symbol属性
console.log(obj[sym1]); // 输出: value1
console.log(obj[sym2]); // 输出: value2
```

## Object 对象

Object 是 JavaScript 中的一种数据类型，通过`键值对`的形式，将任意类型的数据组织到一起。

```js
// 创建一个对象
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

// 访问对象属性
console.log(person.name); // 输出: Alice
console.log(person.age); // 输出: 30
console.log(person.city); // 输出: New York

// 修改对象属性
person.age = 31;
console.log(person.age); // 输出: 31

// 添加新属性
person.gender = "female";
console.log(person.gender); // 输出: female

// 删除属性
delete person.city;
console.log(person.city); // 输出: undefined

// 使用对象解构
const { name, age, city } = person;
const { name: personName, age: personAge } = person; // 使用别名进行对象解构
```

::: danger 深入对象属性

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

## Array 数组

Array 是 JavaScript 中的一种数据类型，通过`有序集合`的形式，将任意类型的数据组织到一起。

```js
// 创建一个数组
const numbers = [1, 2, 3, 4, 5];

// 访问数组元素
console.log(numbers[0]); // 输出: 1
console.log(numbers[2]); // 输出: 3

// 修改数组元素
numbers[1] = 10;
console.log(numbers); // 输出: [1, 10, 3, 4, 5]

// 添加新元素
numbers.push(6);
console.log(numbers); // 输出: [1, 10, 3, 4, 5, 6]

// 删除元素
numbers.splice(2, 1);
console.log(numbers); // 输出: [1, 10, 4, 5, 6]
```
