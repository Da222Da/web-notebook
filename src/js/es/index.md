# ECMAScript 语法约定

ECMAScript 语法约定, 是 JavaScript 官方`W3C 国际组织`定义的语法。

如果你想了解更多信息的话，请移步 [MDN](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript)。

## Graph 可视化图表

<ElMindmap :data="data" height="750" :router="router" />

<script setup>
import { onMounted, ref, computed } from "vue";
import { useRouter } from 'vitepress';
const router = useRouter();
const CurrentPath = router.route.path;
const data = ref({
	data: {
		text: "ES 语法",
	},
	children: [
		{ 
			data: { text: "数据类型 & 变量" },
			children: [
				{ data: { text: "解构赋值", hyperlink: `${CurrentPath}#解构赋值`} },
				{ data: { text: "var 变量提升", hyperlink: `${CurrentPath}#var-变量提升`} },
				{ data: { text: "变量作用域", hyperlink: `${CurrentPath}#变量作用域`} },
				{ data: { text: "闭包", hyperlink: `${CurrentPath}#闭包`} },
				{ data: { text: "模板运算符", hyperlink: `${CurrentPath}#字符串运算符` } },
			]
		},
		{ 
			data: { text: "流程控制" },
			children: [
				{ data: { text: "分支语句", hyperlink: `${CurrentPath}#分支语句` } },
				{ data: { text: "循环语句", hyperlink: `${CurrentPath}#循环语句` } },
			]		
		},
		{ 
			data: { text: "函数", note: "声明函数 & 调用函数 & 参数 & 返回值 & 箭头函数 & 默认参数 & 函数表达式 & 函数递归 & 作用域 & 作用域链 & 立即执行函数" },
			children: [
				{ data: { text: "剩余参数", hyperlink: `${CurrentPath}#剩余参数` } },
				{ data: { text: "立即执行函数", hyperlink: `${CurrentPath}#立即执行函数` } },
				{ data: { text: "函数递归", hyperlink: `${CurrentPath}#函数递归` } },
			]
		},
		{ 
			data: { text: "面向对象", note: "声明类 & 构造器 & 实例化 & 继承 & 访问器 & 静态方法" },
			children: [
				{ data: { text: "继承", hyperlink: `${CurrentPath}#继承` } },
				{ data: { text: "访问器", hyperlink: `${CurrentPath}#访问器` } },
			]
		},
		{ 
			data: { text: "模块", note: "模块导入(导出) & Promise 对象 & async/await & Reflect 对象 & Set 对象 & Map 对象 & Weakset 对象 & Weakmap 对象 & Symbol 对象" },
			children: [
				{ data: { text: "模块导入(导出)", hyperlink: `${CurrentPath}#模块导入-导出` } },
				{ data: { text: "Promise 对象", hyperlink: `${CurrentPath}#promise-对象` } },
				{ data: { text: "async/await", hyperlink: `${CurrentPath}#async-await-语法糖` } },
				{ data: { text: "Proxy 对象", hyperlink: `${CurrentPath}#proxy-对象` } },
			]
		},
	],
})
</script>

## Details 图表详情

### 解构赋值

在 JavaScript 中，解构赋值（Destructuring Assignment）是一种方便的语法，允许你从数组或对象中提取数据，并将其赋值给变量。解构赋值可以让你更简洁地处理数据，特别是在处理数组或对象时。

```js
// 数组解构赋值
const arr = [1, 2, 3];
let [a, b, c] = arr; // a=1, b=2, c=3

// 对象解构赋值
const obj = { name: "张三", age: 20 };
let { name, age } = obj; // name="张三", age=20
```

### var 变量提升

```js
console.log(a); // undefined
var a = 10; // var 声明的变量存在变量提升，即变量可以在声明之前使用，但值为 undefined
console.log(a); // 10

// JS 引擎执行过程：预编译阶段 -> 执行阶段。
// 预编译阶段： JS 引擎在解析代码的时候，将 var 声明变量放在了作用域的头部。
// 预编译之后的代码，如下：
// var a = undefined;
// console.log(a);
// a = 10;
// console.log(a);
```

### 变量作用域

```js
// 全局作用域
var a = 10; // 全局变量，在任何位置都可以使用
function test() {
	// 函数作用域
	var b = 20; // 局部变量，只能在函数内部使用
}
```

### 闭包

```js
// 闭包的作用：如何让一个外部函数能够访问另一个函数中的变量？
function fn() {
	var a = 10;
	function outer() {
		console.log(a);
	}
	return outer;
}
var outerFunc = fn();
outerFunc(); // 输出 10
```

### 字符串运算符

```js
// 字符串运算符
const str1 = "Hello";
const str2 = "World";
const str3 = str1 + " " + str2; // 字符串拼接
const str4 = `${str1} ${str2}`; // 模板字符串
```

### 分支语句

```js
// If 条件判断
if (a > b) {
	console.log("a大于b");
} else if (a < b) {
	console.log("a小于b");
} else {
	console.log("a等于b");
}
```

```js
// Switch 分支语句
switch (fruit) {
	case "apple":
		console.log("苹果");
		break;
	case "banana":
		console.log("香蕉");
		break;
	case "orange":
		console.log("橙子");
		break;
	default:
		console.log("未知水果");
}
```

### 循环语句

```js
// For 循环语句
for (let i = 0; i < 10; i++) {
	console.log(i);
}
```

```js
// While 循环语句
let i = 0;
while (i < 10) {
	console.log(i);
	i++;
}	
```

### 剩余参数

在 JavaScript 中，剩余参数（Rest Parameters）允许你将一个不定数量的参数表示为一个数组。这在你不确定函数会接收多少个参数时非常有用。

剩余参数语法使用三个点（...）紧跟在参数名之前。

```js
function sum(...args) {
	return args.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 输出：15
```

### 立即执行函数

```js
// 立即执行函数：函数声明后直接调用
(function (a, b) {
	return a + b;
})(1, 2); // 输出：3
```

### 函数递归

```js
// 函数递归：一个函数在内部调用自身
// 用途：将大问题分解成小问题，直到解决为止
// 计算阶乘：5! = 1 * 2 * 3 * 4 * 5
// 计算阶乘：n! = 1 * 2 * 3 * ... * n
function factorial(n) {
	if (n === 0) return 1;
	return n * factorial(n - 1);
}
console.log(factorial(5)); // 输出：120
console.log(factorial(0)); // 输出: 1
console.log(factorial(1)); // 输出: 1
console.log(factorial(10)); // 输出: 3628800
```


### 继承

```js
// class 关键字 > 类声明
class Animal {
	// 构造器 constructor 是一个特殊的方法，每次实例化对象的时候，都会自动调用这个方法
	constructor(name) {
		this.name = name;
	}
}

// 狗类
// extends 关键字 > 继承
class Dog extends Animal {
	constructor(name) {
		super(name); // 相当于，调用 Animal 类的构造函数
	}
	say() {
		console.log(`${this.name}：汪汪汪`);
	}
}

const dog = new Dog("旺财"); // new 关键字 > 实例化对象
dog.sayHello(); // 输出：旺财：汪汪汪

// 猫类
class Cat extends Animal {
	constructor(name) {
		super(name); // 相当于，调用 Animal 类的构造函数
	}
	say() {
		console.log(`${this.name}：喵喵喵`);
	}
}
const cat = new Cat("咪咪");
cat.say(); // 输出：咪咪：喵喵喵
```

### 访问器

```js
// Getter/Setter 访问器
class Dog {
	name = "旺财";
	// Getter 访问器: 获取 name 属性值时，自动调用该方法
	get name() {
		return this._name;
	}
	// Setter 访问器: 设置 name 属性值时，自动调用该方法
	set name(value) {
		this._name = value;
	}
}
```

### 模块导入(导出)

```js
// export 导出
export function add(a, b) {
	return a + b;
}

// export 导入
import { add } from "./math.js";

// 重命名导入
import { add as sum } from "./math.js";

// export default 默认导出
export default function add(a, b) {
	return a + b;
}

// export default 导入
import add from "./math.js";

// 导出所有
export * from "./math.js";

// 导入所有
import * as math from "./math.js";
```

### Promise 对象

Promise 是 JavaScript 中用于处理异步操作的一种对象。它代表了一个异步操作的最终完成状态。

Promise 对象有三种状态：pending（等待中）、fulfilled（已成功）和 rejected（已失败）。
- 默认是 pending（等待中）状态。
- 当异步操作成功完成时，Promise 对象的状态会从 pending 变为 fulfilled，并将结果值传递给后续的 .then() 方法。
- 当异步操作失败时，Promise 对象的状态会从 pending 变为 rejected，并将错误原因传递给后续的 .catch() 方法。

```js
const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("成功");
	}, 1000);
});

promise
	.then((result) => {
		console.log(result); // 输出：成功
	})
	.catch((error) => {
		console.error(error);
	});
```

### async/await 语法糖

async/await 是 JavaScript 中用于处理异步操作的一种语法糖，它建立在 Promise 的基础上，提供了一种更加简洁和易读的方式来编写异步代码。

- 使用 async 关键字声明的函数称为 async 函数，async 函数会隐式地返回一个 Promise 对象。
- 使用 await 关键字可以暂停 async 函数的执行，等待 Promise 的解决（fulfilled）或拒绝（rejected），并返回结果。

```js
async function asyncFunction() {
	try {
		const result = await promise;
		console.log(result); // 输出：成功
	} catch (error) {
		console.error(error);
	}
}

asyncFunction();
```

### Proxy 对象
Proxy 对象用于创建一个对象的代理，可以拦截和自定义对象的基本操作，如属性访问、赋值、枚举、函数调用等。

```js
const handler = {
	get: function (target, prop, receiver) {
		console.log(`获取属性：${prop}`);
		return Reflect.get(target, prop, receiver);
	},
	set: function (target, prop, value, receiver) {
		console.log(`设置属性：${prop} = ${value}`);
		return Reflect.set(target, prop, value, receiver);
	},
};

const target = {
	name: "张三", age: 18,
};

const proxy = new Proxy(target, handler);

console.log(proxy.name); // 输出：获取属性：name
console.log(proxy.age); // 输出：获取属性：age

proxy.name = "李四"; // 输出：设置属性：name = 李四
proxy.age = 20; // 输出：设置属性：age = 20
```

