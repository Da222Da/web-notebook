# TypeScript 语法标准

Typescript 是 ECMAScript 语法标准的另外一种实现，它向下兼容了 JavaScript，并且增加了类型系统`可以避免很多低级错误`和一些新的特性，例如：泛型。

如果想要查看更多内容的话，请移步 [TS 官网](https://www.typescriptlang.org/) & [https://basarat.gitbook.io/typescript/](https://basarat.gitbook.io/typescript/)。

<!-- ## 1.数据类型

```js
// 原始数据类型
const str:string = "Hello World!"; // 字符串
const num:number = 123; // 数字
const bool:boolean = true; // 布尔值
const und:undefined = undefined; // undefined
const nul:null = null; // null
const sym:sumbol = Symbol("symbol"); // symbol 唯一值

// 对象
interface Person {
	name: string;
	age: number;
}
let obj: Person = {
	name: "bob",
	age: 10,
};

// 数组类型
let arr: number[] = [1, 2, 3]; // 普通数组
let arr2: Array<number> = [1, 2, 3]; // 泛型数组

// 元组类型
let tuple: [string, number] = ["hello", 10];

// 函数类型
let add: (x: number, y: number) => number = (x, y) => x + y;

// 枚举类型
enum Direction {
	Up,
	Down,
	Left,
	Right,
}

// 任意类型
let any: any = "Hello World!"; // 任意类型

// 空值类型
let void: void = undefined; // 空值

// 未定义类型
let never: never = undefined; // 永不存在的值的类型

// 未知类型
let unknown: unknown = "Hello World!"; // 未知类型

```

## 2.变量

```js
// 声明变量
let a = 10;
const b = 20;
var c = 30;
```

## 3.运算符

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

## 4.语句

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

## 5.函数

函数，就是一段可以重复调用的代码块。像这样：

```ts
// 1.函数声明
function add(x: number, y: number): number {
	return x + y;
}

// 2.函数调用
let result = add(1, 2);

// 3.可选参数
function buildName(firstName: string, lastName?: string) {
	if (lastName) {
		return firstName + " " + lastName;
	} else {
		return firstName;
	}
}

// 4.默认参数
function buildName(firstName: string, lastName = "Smith") {
	return firstName + " " + lastName;
}

// 5.剩余参数
function buildName(firstName: string, ...restOfName: string[]) {
	return firstName + " " + restOfName.join(" ");
}

// 6. 重载
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
	if (typeof x === "number") {
		return Number(x.toString().split("").reverse().join(""));
	} else if (typeof x === "string") {
		return x.split("").reverse().join("");
	}
}

// 7.箭头函数
let myAdd = (x: number, y: number): number => {
	return x + y;
};

// 8.匿名函数
function (x: number, y: number): number {
	return x + y;
};

// 9.函数表达式
let myAdd = function (x: number, y: number): number {
	return x + y;
};

// 10.立即执行函数
(function (x: number, y: number): number {
	return x + y;
})(1, 2);
```

## 6.面向对象

### 6-1. 类声明 class

```js
// 空类
class Person {}
```

### 6-2. 类的成员：属性和方法

```ts
class Person {
	name: string = "张三";
	sayHello(): viod {
		console.log(`Hello, my name is ${this.name}`);
	}
}
```

### 6-3. 构造器 constructor

```ts
class Person {
	name: string;
	constructor(name) {
		this.name = name;
	}
}
new Person("张三");
```

### 6-4. 只读属性 readonly

只读属性。就是不允许修改的属性。

```ts
class Point {
	readonly x: number;
	readonly y: number;
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
}
const pt = new Point(0, 0);
pt.x = 1; // 报错：Cannot assign to 'x' because it is a read-only property.
```

### 6-5. 静态属性 static

类本身的属性。类本身的属性。

```ts
class Point {
	static origin = "(0, 0)";
}
console.log(Point.origin); // (0, 0)
```

### 6-6. 访问器 getter/setter

```ts
class Point {
	_x: number = 0;
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

### 6-7. 继承 extends

在派生类中，可以使用`super`关键字来访问基类的属性和方法。

```ts
class Base {
	greet() {
		console.log("Hello, world!");
	}
}

class Derived extends Base {
	greet(name?: string) {
		if (name === undefined) {
			super.greet(); // 调用基类的 greet 方法
		} else {
			console.log(`Hello, ${name.toUpperCase()}`);
		}
	}
}
```

### 6-8. 属性可见度 public | private | protected

1. 公共属性 public`默认`，可以在类的内部和外部访问。

```ts
class Greeter {
	public greet() {
		console.log("hi!");
	}
}
const g = new Greeter();
g.greet();
```

2. 私有属性 private，只能在类的内部访问。

```ts
class Base {
	private x = 0;
	getX() {
		return this.x; // 内部可以访问
	}
}

class Point extends Base {
	y: any;
	constructor() {
		super();
		this.y = this.x; // 子类不能访问
	}
}

const b = new Base();
console.log(b.x); // 外部访问报错：Property 'x' is private and only accessible within class 'Base'.
```

3. 受保护的属性 protected，只能在类的内部和子类中访问。

```ts
class Base {
	protected x = 0;
	getX() {
		return this.x; // 内部可以访问
	}
}

class Point extends Base {
	y: any;
	constructor() {
		super();
		this.y = this.x; // 子类可以访问
	}
}

const b = new Base();
console.log(b.x); // 外部访问报错：Property 'x' is private and only accessible within class 'Base'.
```

### 6-9. 抽象类 abstract

抽象类是提供其他类继承的基类，不能直接被实例化。

```ts
abstract class Animal {
	abstract makeSound(): void;
	move(): void {
		console.log("roaming the earth...");
	}
}

class Dog extends Animal {
	makeSound() {
		console.log("Woof!");
	}
}

const dog = new Dog();
dog.makeSound();
dog.move();
```

### 6-10. 接口约束 implements

使用`implements 关键词`来检查类是否满足特定的`interface 接口`. 如果类未能正确实现它，将会发出错误。

```ts
interface ClockInterface {
	currentTime: number;
	alert(): void;
}

interface GameInterface {
	play(): void;
}

class Clock implements ClockInterface {
	currentTime: number = 123;
	alert() {}
}

class Phone implements ClockInterface, GameInterface {
	currentTime: number = 123;
	alert() {}
	play() {}
}
```

## 7.模块

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
``` -->
