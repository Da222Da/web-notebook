<PageHeader content="接口 Interface" />

## 约束 Object 对象

接口`Interface`是一种抽象类型，用于来对`Object 数据`进行类型检查。像这样：

```ts
interface Person {
	name: string;
	sayHello(): void;
}

const person: Person = {
	name: "张三",
	sayHello: function () {
		console.log(`Hello, my name is ${this.name}.`);
	},
};

person.sayHello(); // 输出 "Hello, my name is 张三."
```

通过定义接口这一操作，我们可以**明确指定对象上应该具有哪些属性和方法**，并在编译时检查代码是否正确，确保代码的正确性和一致性。🌹

### 可选属性 ?

在接口中，可以使用`?`来表示属性是可选的。

```ts
interface Person {
	name: string;
	age?: number;
}

const person: Person = {
	name: "张三",
};

console.log(person.name); // 输出 "张三"
console.log(person.age); // 输出 undefined
```

### 只读属性 readonly

在接口中，可以使用`readonly`关键字来表示属性是只读的`不允许属性发生变化`。

```ts
interface Person {
	readonly id: number;
	name: string;
}

const person: Person = {
	id: 1,
	name: "张三",
};

person.id = 2; // 错误，不能修改只读属性
```

### 索引签名

当对象中可能出现不确定的属性时，可以使用索引签名来表示对象的键值对。

```ts
interface Person {
	[key: string]: string;
}

const person: Person = {
	name: "张三",
	age: "20",
};

console.log(person.name); // 输出 "张三"
console.log(person.age); // 输出 "20"
```

## 约束 Function 函数

在接口中，可以使用`(……):void`来表示函数的类型。

```ts
interface SayHello {
	(name: string): void;
}

const sayHello: SayHello = (name) => {
	console.log(`Hello, ${name}!`);
};

sayHello("张三"); // 输出 "Hello, 张三!"
```

### 混合类型

在 TS 中，函数本身也是一种特殊的对象，它可以同时具有属性和方法。

```ts
interface SayHello {
	(name: string): void;
	age: number;
}

const sayHello: SayHello = (name) => {
	console.log(`Hello, ${name}!`);
};

sayHello.age = 12;

sayHello("张三"); // 输出 "Hello, 张三!"
```

## 约束 Class 类

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

## 继承 extends

在接口中，可以使用`extends`关键字来继承另一个接口。

```ts
interface Animal {
	name: string;
	sayHello(): void;
}

interface Dog extends Animal {
	bark(): void;
}

const dog: Dog = {
	name: "旺财",
	sayHello: function () {
		console.log(`Hello, my name is ${this.name}.`);
	},
	bark: function () {
		console.log(`Woof, woof!`);
	},
};

dog.sayHello(); // 输出 "Hello, my name is 旺财."
dog.bark(); // 输出 "Woof, woof!"
```
