<PageHeader content="数据类型" />

## 原始数据

原始数据类型包括：布尔值、数字、字符串、undefined、null、symbol。

```ts
// 原始数据类型
let b: boolean = false; // 布尔值类型
let num: number = 10; // 数字类型
let str: string = "bob"; // 字符串类型
let undefined: undefined = undefined; // undefined类型
let null: null = null; // null类型
let symbol: symbol = Symbol("symbol"); // symbol类型

```

## 数组 Array

```ts
// 数组类型: 将相同类型的元素放到一个集合中
let arr1: number[] = [1, 2, 3];
let arr2: string[] = ["1", "2", "3"];
let arr3: boolean[] = [true, false, true];
let arr4: any[] = [1, "2", true];
```

## 元组 Tuple

元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。

```ts
// 元组类型
let tuple: [number, string];
tuple = [1, "bob"];
```

## 对象 Object

```ts
// 对象类型
interface Person {
	name: string;
	age: number;
}

let person: Person = {
	name: "bob",
	age: 10,
};
```

## 枚举 enum

枚举就是一堆常量的集合。

```ts
enum Color {
	Red,
	Green,
	Blue,
}
let c: Color = Color.Green;
```

## 任意值 any

任意值（Any）用来表示允许赋值为任意类型。

```ts
// 任意值类型
let any: any = 10;
any = "bob";
any = true;
```
