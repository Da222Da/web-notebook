里氏替换原则（Liskov Substitution Principle，LSP）是面向对象设计中的一个原则，它指出子类对象可以替换父类对象，而程序的行为不会发生变化。换句话说，**子类应该能够替代父类而不影响程序的正确性。**

::: code-group

```js [1.没有遵循 LSP 的不良示例：]
// 不遵循里氏替换原则的示例
class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}

	setWidth(width) {
		this.width = width;
	}

	setHeight(height) {
		this.height = height;
	}

	getArea() {
		return this.width * this.height;
	}
}

class Square extends Rectangle {
	setWidth(width) {
		this.width = width;
		this.height = width;
	}

	setHeight(height) {
		this.width = height;
		this.height = height;
	}
}

function calculateArea(rectangle) {
	rectangle.setWidth(5);
	rectangle.setHeight(4);

	return rectangle.getArea();
}

const rectangle = new Rectangle(2, 3);
const square = new Square(2, 2);

console.log(calculateArea(rectangle)); // 输出：20
console.log(calculateArea(square)); // 输出：16 （预期：4）
```

```js [2.遵循 LSP 的良好示例：]
// 使用里氏替换原则
class Shape {
	calculateArea() {
		throw new Error("这个方法应该在子类中被重写");
	}
}

class Rectangle extends Shape {
	constructor(width, height) {
		super();
		this.width = width;
		this.height = height;
	}

	calculateArea() {
		return this.width * this.height;
	}
}

class Square extends Shape {
	constructor(side) {
		super();
		this.side = side;
	}

	calculateArea() {
		return this.side * this.side;
	}
}

function calculateArea(shape) {
	return shape.calculateArea();
}

const rectangle = new Rectangle(4, 5);
const square = new Square(4);

console.log(calculateArea(rectangle)); // 输出：20
console.log(calculateArea(square)); // 输出：16
```

:::

在不遵循 LSP 的示例中， 当我们将 Square 对象传递给 calculateArea 函数时，它的行为与 Rectangle 对象不同，违反了该原则。

而在遵循 LSP 的示例中，Rectangle 和 Square 类都继承自 Shape 类，并根据各自的形状重写了 calculateArea 方法。当我们将 Rectangle 和 Square 的实例传递给 calculateArea 函数时，行为是一致的，符合里氏替换原则。
