<PageHeader content="ECMAScript 语法标准" />

ECMAScript 是 JavaScript 脚本语言的语法标准，由 W3C 国际组织定义。

如果你想了解更多信息的话，请移步 [MDN](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript)。

## 1.数据类型

```js
// 原始数据类型
const str = "Hello World!"; // 字符串
const num = 123; // 数字
const bool = true; // 布尔值
const und = undefined; // undefined
const nul = null; // null
const sym = Symbol("symbol"); // symbol 唯一值

// 引用数据类型
const obj = { name: "John" }; // 对象
const arr = [1, 2, 3]; // 数组
const func = function () {}; // 函数
const map = new Map(); // Map
const weakMap = new WeakMap(); // WeakMap
const set = new Set(); // Set
const weakSet = new WeakSet(); // WeakSet
const date = new Date(); // 日期
const regexp = /\d+/; // 正则表达式
const error = new Error("Error message"); // 错误
const iter = new Iterator(); // 迭代器
const gen = new Generator(); // 生成器
const async = async function () {}; // 异步函数
const proxy = new Proxy({}, {}); // 代理
const reflect = new Reflect(); // 反射
```

## 2.变量

### 2-1.变量声明

```js
// 声明变量
let a = 10;
const b = 20;
var c = 30;
```

### 2-2.变量运算

```js
// 算术运算符
const a = 10;
const b = 3;
const c = a + b; // 加法
const d = a - b; // 减法
const e = a * b; // 乘法
const f = a / b; // 除法
const g = a % b; // 取模
const h = a ** b; // 幂运算

// 比较运算符
const i = a > b; // 大于
const j = a < b; // 小于
const k = a >= b; // 大于等于
const l = a <= b; // 小于等于
const m = a == b; // 等于
const n = a != b; // 不等于
const o = a === b; // 严格相等
const p = a !== b; // 严格不相等

// 逻辑运算符
const q = a && b; // 逻辑与
const r = a || b; // 逻辑或
const s = !a; // 逻辑非

// 赋值运算符
const t = (a += b); // 加法赋值
const u = (a -= b); // 减法赋值
const v = (a *= b); // 乘法赋值
const w = (a /= b); // 除法赋值
const x = (a %= b); // 取模赋值
const y = (a **= b); // 幂运算赋值

// 条件运算符
const z = a > b ? a : b; // 三元运算符

// 字符串运算符
const str1 = "Hello";
const str2 = "World";
const str3 = str1 + " " + str2; // 字符串拼接
const str4 = `${str1} ${str2}`; // 模板字符串

// 运算符优先级
const result = a + b * c; // 乘法运算优先级高于加法运算
const result2 = (a + b) * c; // 括号可以改变运算顺序
```

## 3.逻辑语句

> 语句：指示计算机执行特定操作的指令

```js
// 条件语句
if (a > b) {
  console.log("a大于b");
} else if (a < b) {
  console.log("a小于b");
} else {
  console.log("a等于b");
}

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

// 循环语句
for (let i = 0; i < 10; i++) {
  console.log(i);
}

let j = 0;
while (j < 10) {
  console.log(j);
  j++;
}

let k = 0;
do {
  console.log(k);
  k++;
} while (k < 10);

// 跳转语句
break; // 跳出循环
continue; // 跳过本次循环
return; // 返回函数
throw; // 抛出异常
yield; // 生成器
```

## 4.函数

```js
// 函数声明
function add(a, b) {
	return a + b;
}

// 函数调用
add(1, 2);
add(1);

// 函数表达式
const add = function (a, b) {
	return a + b;
};

// 箭头函数
const add = (a, b) => a + b;

// 匿名函数
const add = function (a, b)

// 函数参数
function add(a, b) {
	return a + b;
}

// 默认参数
function add(a = 1, b = 2) {
	return a + b;
}

// 剩余参数
function add(a, ...args) {
  console.log(args); //  2, 3, 4, 5
}

add(1, 2, 3, 4, 5);

// 立即执行函数
(function (x, y) {
	return x + y;
})(1, 2);

```

## 5.类

### 5-1. 类声明

```js
// 空类
class Person {}
```

### 5-2. 类的成员

```js
// 动态特征：属性和方法
class Person {
	name = "张三";
	sayHello() {
		console.log(`Hello, my name is ${this.name}`);
	}
}

// 构造器 constructor
class Person {
	constructor(name) {
		this.name = name;
	}
	sayHello() {
		console.log(`Hello, my name is ${this.name}`);
	}
}
new Person("张三");
```

### 5-3. 静态特征 static

```js
// 静态属性
class Person {
	static age = 18;
}

console.log(Person.age); // 18

// 静态方法
class Person {
	static sayHello() {
		console.log("Hello");
	}
}

Person.sayHello(); // Hello
```

### 5-4. 访问器 getter/setter

```js
class Point {
	_x = 0;
	get x() {
		return this._x;
	}
	set x(value) {
		if (value < 0) {
			throw new Error("Invalid value");
		}
		this._x = value;
	}
}
```

### 5-5. 继承 extends

```js
class Animal {
	constructor(name) {
		this.name = name;
	}
	sayHello() {
		console.log(`Hello, my name is ${this.name}`);
	}
}

class Dog extends Animal {
	constructor(name) {
		super(name); // 相当于，调用 Animal 类的构造函数
	}
}

const dog = new Dog("Dog");
dog.sayHello(); // Hello, my name is Dog
```

## 6.模块

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
