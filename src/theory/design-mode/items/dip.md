依赖倒置原则（Dependency Inversion Principle，DIP）是 JavaScript 设计模式中的一个原则，它指出高层模块不应该依赖于低层模块，二者都应该依赖于抽象。**抽象不应该依赖于具体实现细节，具体实现细节应该依赖于抽象。**

::: code-group

```js [1.没有遵循 DIP 的不良示例：]
// 不遵循依赖倒置原则
class UserService {
	constructor() {
		this.userRepository = new UserRepository();
	}

	getUsers() {
		return this.userRepository.getUsers();
	}
}

class UserRepository {
	getUsers() {
		// Fetch users from database
	}
}
```

```js [2.遵循 DIP 的良好示例：]
// 遵循依赖倒置原则
class UserService {
	constructor(userRepository) {
		this.userRepository = userRepository;
	}

	getUsers() {
		return this.userRepository.getUsers();
	}
}

class UserRepository {
	getUsers() {
		// Fetch users from database
	}
}

// 在使用时注入依赖
const userRepository = new UserRepository();
const userService = new UserService(userRepository);
```

:::

在第一个示例中， UserService 类直接实例化了 UserRepository 类，违反了依赖倒置原则。

而在第二个示例中， UserService 类通过依赖注入的方式接收 UserRepository 类的实例，遵循了依赖倒置原则。这样做可以降低模块之间的耦合度，使系统更易于扩展和维护。
