# 基础概念

## 什么是接口？

接口`interface`是一种抽象类型，用于来**约束对象**的行为。通过定义接口这一操作，我们可以**明确指定对象上应该具有哪些属性和方法**，并在编译时进行类型检查，以确保代码的正确性和一致性。🌹

下面是一个简单的接口定义示例：🚀💯

```ts
interface Person {
 name: string;
 age: number;
 sayHello(): void;
}

const person: Person = {
 name: "张三",
 age: 30,
 sayHello: function() {
   console.log(`Hello, my name is ${this.name}.`);
 },
};

person.sayHello(); // 输出 "Hello, my name is 张三."
```

## 什么是泛型？

泛型是 TypeScript 中的一个特性，它允许我们在编写代码时不指定类型，而是在运行时指定类型。这使得我们可以编写更通用的代码，并且可以减少代码中的类型错误。 

下面是一个简单的接口定义示例：

```ts
function sum<T>(a: T, b: T): T {
  return a + b;
}

sum(1, 2); // 3
sum('a', 'b'); // 'ab'
sum(true, false); // true
```