<PageHeader content="Class 类" />

## 定义类

- `class 关键词`： 定义一个类。
  - `constructor 函数`，就是构造函数。用于在创建对象时初始化实例对象。
- `new 关键词`： 实例化一个对象。

```js
class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	toString() {
		return "(" + this.x + ", " + this.y + ")";
	}
}

const p1 = new Point(1, 2);
```

## 继承

- `extends 关键词`： 继承父类。
- `super 关键词`： 调用父类的构造函数`constructor`。

```js
class ColorPoint extends Point {
	constructor(x, y, color) {
		super(x, y); // 调用父类的constructor(x, y)
		this.color = color;
	}

	toString() {
		return this.color + " " + super.toString(); // 调用父类的toString()
	}
}
```

## 静态方法

- `static 关键词`： 定义一个静态方法。

```js
class Foo {
	static classMethod() {
		return "hello";
	}
}

Foo.classMethod(); // 'hello'

var foo = new Foo();
foo.classMethod(); // 报错
```

## 存取器（setter/getter）

在 JavaScript 中，您可以使用 class 语法来定义类和对象。setter 和 getter 是 class 中的特殊方法，用于设置和获取对象的属性值，以实现封装和数据访问控制。

- Setter 方法用于设置对象的属性值。它们允许您在设置属性值时执行额外的逻辑或验证。在 setter 方法中，您可以检查传入的值，并决定是否接受或拒绝该值。

- Getter 方法用于获取对象的属性值。它们允许您在获取属性值时执行额外的逻辑或转换。Getter 方法允许您访问对象的属性，同时隐藏底层实现细节。

```js
class MyClass {
	constructor() {
		// ...
	}
	get prop() {
		return "getter";
	}
	set prop(value) {
		console.log("setter: " + value);
	}
}

let inst = new MyClass();

inst.prop = 123;
// setter: 123

inst.prop; // 'getter'
```
