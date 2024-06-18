接口隔离原则（Interface Segregation Principle，ISP）是 JavaScript 设计模式中的一个原则，它指出一个类不应该强制实现它不需要的接口。换句话说，**应该将接口细分为更小的部分，使接口的实现类只需要实现自己需要的方法。**

::: code-group

```js [1.没有遵循 ISP 的不良示例：]
// 不遵循接口隔离原则的示例
class Worker {
	work() {
		// Perform work tasks
	}

	eat() {
		// Worker can eat during break
	}

	sleep() {
		// Worker can sleep after work
	}
}
```

```js [2.遵循 ISP 的良好示例：]
/// 遵循接口隔离原则的示例
class Worker {
	work() {
		// Perform work tasks
	}
}

class Eater {
	eat() {
		// Worker can eat during break
	}
}

class Sleeper {
	sleep() {
		// Worker can sleep after work
	}
}
```

:::

在上述示例中，第一个示例中的 Worker 类违反了接口隔离原则，因为它强制实现了 eat() 和 sleep() 方法，而不是所有工作者都需要这些方法。

而在第二个示例中， Worker 类被拆分为 Worker 、 Eater 和 Sleeper 三个接口，每个接口只包含相关的方法，符合接口隔离原则。
