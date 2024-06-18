开放封闭原则（Open-Closed Principle，OCP）是 JavaScript 设计模式中的一个原则，它指出软件实体（类、模块、函数等）应该对扩展开放，对修改封闭。换句话说，应该**通过扩展现有代码来实现新功能，而不是直接修改已有代码。**

::: code-group

```js [1.没有遵循OCP的不良示例：]
// 不遵循OCP的示例
class Shape {
	constructor(type) {
		this.type = type;
	}

	calculateArea() {
		if (this.type === "circle") {
			// 计算圆形的面积
		} else if (this.type === "rectangle") {
			// 计算矩形的面积
		}
	}
}
```

```js [2.遵循OCP的良好示例：]
// 遵循OCP的示例
class Shape {
	constructor() {}

	calculateArea() {
		throw new Error("This method should be overridden in subclasses");
	}
}

class Circle extends Shape {
	constructor(radius) {
		super();
		this.radius = radius;
	}

	calculateArea() {
		// 计算圆形的面积
	}
}

class Rectangle extends Shape {
	constructor(width, height) {
		super();
		this.width = width;
		this.height = height;
	}

	calculateArea() {
		// 计算矩形的面积
	}
}
```

:::

在不遵循 OCP 的示例中， Shape 类的 calculateArea 方法包含了判断不同形状类型的逻辑，当需要添加新的形状时，需要修改 Shape 类的代码。

而在遵循 OCP 的示例中，通过创建子类（ Circle 和 Rectangle ）来扩展 Shape 类，实现了对现有代码的扩展而无需修改原有代码。这样符合开放封闭原则，使代码更加灵活和可维护。
