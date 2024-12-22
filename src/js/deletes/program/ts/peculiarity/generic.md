<PageHeader content="什么是泛型 Generic？" />

泛型是 TypeScript 中的一个特性，它允许我们在编写代码时不指定类型，而是在运行时指定类型。这使得我们可以编写更通用的代码，并且可以减少代码中的类型错误。

下面是一个简单的泛型示例：

```ts
function sum<T>(a: T, b: T): T {
	return a + b;
}

sum(1, 2); // 3
sum("a", "b"); // 'ab'
sum(true, false); // true
```
