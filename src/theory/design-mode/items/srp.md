单一职责原则（SRP）是 JavaScript 中的一种设计原则，就是**每个类应该只有一个职责或任务**。

::: code-group

```js [1.没有遵循SRP的不良示例：]
// 没有遵循SRP的不良示例
class User {
	constructor(name, email) {
		this.name = name;
		this.email = email;
	}

	saveUser() {
		// 将用户保存到数据库
	}

	sendEmail() {
		// 发送电子邮件给用户
	}
}
```

```js [2.遵循SRP的良好示例：]
class User {
	constructor(name, email) {
		this.name = name;
		this.email = email;
	}

	saveUser() {
		// 将用户保存到数据库
	}
}

// 另一个类负责发送电子邮件
class EmailService {
	sendEmail(user) {
		// 发送电子邮件给用户
	}
}
```

:::

在不良示例中， User 类负责保存用户到数据库和发送电子邮件。这违反了 SRP，因为该类具有多个职责。

在良好示例中，职责被分成两个类 - User 用于管理用户数据， EmailService 用于发送电子邮件。这遵循了 SRP 原则，使代码更易于维护和灵活。
