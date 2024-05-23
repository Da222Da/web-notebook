<PageHeader content="类" />

## 空类

```ts
class Point {}
```

## 属性

```ts
class Point {
	x: number | undefined;
	y: number = 0;
}
```

## 方法

类的函数属性称为方法。

```ts
class Point {
	getDistance(p: Point) {
		return Math.sqrt(Math.pow(this.x - p.x, 2) + Math.pow(this.y - p.y, 2));
	}
}
```

## 构造函数 constructor

构造函数，就是初始化实例对象的地方。

```ts
class Point {
	x: number;
	y: number;
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
}
```

## 只读属性 readonly

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

## 静态属性 static

类本身的属性。

```ts
class Point {
	static origin = "(0, 0)";
}
console.log(Point.origin); // (0, 0)
```

## 访问器 getter/setter

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

## 继承 extends

```ts
class Point {
	x: number;
	y: number;
}

class ColorPoint extends Point {
	color: string;
}
```

### super 访问基类属性

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

## 属性可见度

### 公共属性 public

公共属性`默认`，可以在类的内部和外部访问。

```ts
class Greeter {
	public greet() {
		console.log("hi!");
	}
}
const g = new Greeter();
g.greet();
```

### 私有属性 private

私有属性，只能在类的内部访问。

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

### 受保护的属性 protected

受保护的属性，只能在类的内部和子类中访问。

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

## 接口约束 implements

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
