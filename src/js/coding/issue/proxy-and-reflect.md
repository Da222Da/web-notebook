<PageHeader content="代理 Proxy 与反射 Reflect之间的联系？" />

## 什么是代理 Proxy？

在 JavaScript 中，通过代理`内置代理对象 Proxy`，我们可以轻松地拦截目标对象的属性访问和操作，并对其施加额外处理。像这样：

```js
// 创建一个目标对象
let target = {
	message: "Hello, World!",
};

// 创建一个代理对象
let handler = {
	get: function (target, prop, receiver) {
		console.log(`Getting property "${prop}"`);
		return target[prop];
	},
	set: function (target, prop, value) {
		console.log(`Setting property "${prop}" to ${value}`);
		target[prop] = value;
	},
};

let proxy = new Proxy(target, handler);

// 通过代理对象访问属性
console.log(proxy.message); // 触发get拦截器

// 通过代理对象设置属性
proxy.message = "Hello, Proxy!"; // 触发set拦截器
```

## 什么是反射 Reflect？

JavaScript 专门提供了一个`内置反射对象 Reflect`，用于检查或修改对象上属性和方法。像这样：

```js
// 创建一个对象
let obj = {
	name: "Alice",
	age: 30,
};

// 使用Reflect.get方法获取属性值
console.log(Reflect.get(obj, "name")); // 输出: "Alice"

// 使用Reflect.set方法设置属性值
Reflect.set(obj, "age", 31);
console.log(obj.age); // 输出: 31

// 使用Reflect.has方法检查属性是否存在
console.log(Reflect.has(obj, "gender")); // 输出: false

// 使用Reflect.deleteProperty方法删除属性
Reflect.deleteProperty(obj, "age");
console.log(obj.age); // 输出: undefined
```

::: danger 注意！

与大多数全局对象不同 Reflect 并非一个构造函数，所以不能通过 new 运算符对其进行调用，或者将 Reflect 对象作为一个函数来调用。

并且， Reflect 对象上的方法与 proxy handler 方法的命名相同。所以，它们经常配合使用。像这样：

```js
const user = {
	name: "Jake",
};
const proxy = new Proxy(user, {
	get(target, property, receiver) {
		console.log(`Getting ${property}`);
		return Reflect.get(...arguments);
	},
});
proxy.name; // Getting name
```

:::
