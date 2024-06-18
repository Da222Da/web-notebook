策略模式（Strategy Pattern）是一种行为设计模式，它定义了一系列算法，将每个算法封装在独立的类中，并使它们可以互相替换。这种模式允许算法的选择独立于客户端，客户端可以在运行时动态选择所需的算法。

```js
class PaymentStrategy {
	pay(amount) {
		// 抽象方法，由具体策略类实现
	}
}

class CreditCardPayment extends PaymentStrategy {
	pay(amount) {
		console.log(`使用信用卡支付 ${amount} 元`);
	}
}

class PayPalPayment extends PaymentStrategy {
	pay(amount) {
		console.log(`使用PayPal支付 ${amount} 元`);
	}
}

class PaymentContext {
	constructor(strategy) {
		this.strategy = strategy;
	}

	setStrategy(strategy) {
		this.strategy = strategy;
	}

	makePayment(amount) {
		this.strategy.pay(amount);
	}
}

// 使用策略模式
const creditCardPayment = new CreditCardPayment();
const payPalPayment = new PayPalPayment();

const paymentContext = new PaymentContext(creditCardPayment);
paymentContext.makePayment(100);

paymentContext.setStrategy(payPalPayment);
paymentContext.makePayment(50);
```

通过策略模式，可以使代码更具灵活性和可维护性，同时将算法的实现与客户端代码解耦，使得系统更易于扩展和修改。
