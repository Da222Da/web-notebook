# ES 语法约定

ECMAScript 语法约定, 是 JavaScript 官方`W3C 国际组织`定义的语法。

如果你想了解更多信息的话，请移步 [MDN](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript)。

## 1.Graph 知识图表

<Mind :data="data" height="600" />
<script setup>
import { onMounted, ref } from "vue";
const data = ref({
			data: {
				text: "ES 语法",
			},
			children: [
				{ data: { text: "数据类型：原始数据 & 引用数据", hyperlink: "https://vitepress.dev/" } },
				{ data: { text: "变量：声明变量 & var 变量提升 & 变量作用域 & 闭包" } },
				{ data: { text: "运算符：算术 & 比较 & 逻辑 & 赋值 & 字符串" } },
				{ data: { text: "语句：If 条件判断 & Switch 分支 & For、While循环" } },
				{ data: { text: "函数：声明函数 & 箭头函数 & 立即执行函数" } },
				{ data: { text: "面向对象：声明类 & 构造器 & 实例化 & 继承 & 访问器" } },
				{ data: { text: "模块化：导入 & 导出" } },
			],
		})
</script>

## 2.Prompt 提问记录

### 2-1. 数据类型

对于 JavaScript 的数据类型，我们只需要记住 5 个原始数据类型和 2 个引用数据类型，即可！

```js
// 原始数据类型
const str = "Hello World!"; // 字符串
const num = 123; // 数字
const bool = true; // 布尔值
const und = undefined; // undefined
const null = null; // null

// 引用数据类型
const arr = [1, 2, 3]; // 数组，代表有序数据集合
const obj = { name: "John" }; // 对象，代表无序数据集合
```

### 2-2.变量

#### a. 声明变量

```js
var c = 30; // 早期 JS 变量声明方式，尽量少用
let a = 10;
const B = 20; // 使用 const 声明常量
```

#### b. var 变量提升

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

#### c. 变量作用域

```js
// 全局作用域
var a = 10; // 全局变量，在任何位置都可以使用
function test() {
	// 函数作用域
	var b = 20; // 局部变量，只能在函数内部使用
}
```

#### d. 闭包

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

### 2-3. 运算符

```js
// 算术运算符
const a = 1;
const b = 2;
const c = a + b; // 加法
const d = a - b; // 减法
const e = a * b; // 乘法
const f = a / b; // 除法
const g = a % b; // 取余

// 比较运算符
const h = a > b; // 大于
const i = a < b; // 小于
const j = a >= b; // 大于等于
const k = a == b; // 等于
const l = a === b; // 全等于
const m = a != b; // 不等于
const n = a !== b; // 不全等于

// 逻辑运算符
const o = a && b; // 与
const p = a || b; // 或
const q = !a; // 非

// 赋值运算符
let r = a; // 赋值
r += b; // 加法赋值
r -= b; // 减法赋值
r *= b; // 乘法赋值
r /= b; // 除法赋值

// 字符串运算符
const str1 = "Hello";
const str2 = "World";
const str3 = str1 + " " + str2; // 字符串拼接
const str4 = `${str1} ${str2}`; // 模板字符串
```

### 2-4. 语句

```js
// If 条件判断
if (a > b) {
	console.log("a大于b");
} else if (a < b) {
	console.log("a小于b");
} else {
	console.log("a等于b");
}

// Switch 分支语句
switch (a) {
	case 1:
		console.log("a等于1");
		break;
	case 2:
		console.log("a等于2");
		break;
	default:
		console.log("a不等于1和2");
}

// For 循环语句
for (let i = 0; i < 10; i++) {
	console.log(i);
}

// While 循环语句
let j = 0;
while (j < 10) {
	console.log(j);
	j++;
}
```

### 2-5. 函数

```js
// 函数声明
function add(a, b = 2) {
	return a + b;
}

// 函数调用
add(1);
add(1, 2);

// 箭头函数：函数的简写方式
const add = (a, b) => a + b;

// 立即执行函数：函数声明后直接调用
(function (a, b) {
	return a + b;
})(1, 2);
```

### 2-6. 面向对象

#### a. 声明一个猫狗类

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

#### b. Getter/Setter 访问器

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

### 2-7. 模块

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
