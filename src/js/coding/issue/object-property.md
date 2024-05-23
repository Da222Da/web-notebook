<PageHeader content="Object 的数据属性和访问器属性的区别？" />

::: warning 特别说明: 什么是内部特性？

ECMA-262 使用一些内部特性来描述属性的特征。这些特性是由为 JavaScript 实现引擎的规范定义的。因此，开发者不能在 JavaScript 中直接访问这些特性。为了将某个特性标识为内部特性，规范会用两个中括号把特性的名称括起来，如下：

- `[[Value]]` 存储属性值
- `[[Writable]]` 属性是否可写
- `[[Enumerable]]` 属性是否可枚举
- `[[Configurable]]` 属性是否可配置
- `[[Get]]` 获取属性值的函数
- `[[Set]]` 设置属性值的函数

:::

::: danger 数据属性和访问器属性的区别？

对象属性的类型可以分为两种：存储值的`数据属性` && 获取和设置属性值`访问器属性`。

- 数据属性: `[[Value]]` `[[Writable]]` `[[Enumerable]]` `[[Configurable]]`
- 访问器属性: `[[Get]]` `[[Set]]` `[[Enumerable]]` `[[Configurable]]`

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
