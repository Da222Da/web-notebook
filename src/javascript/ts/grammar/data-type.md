<PageHeader content="Typescript 数据类型" />

```ts
// 原始数据类型
let b: boolean = false; // 布尔值类型
let num: number = 10; // 数字类型
let str: string = "bob"; // 字符串类型
let undefined: undefined = undefined; // undefined类型
let null: null = null; // null类型
let symbol: symbol = Symbol("symbol"); // symbol类型

// 数组类型: 将相同类型的元素放到一个集合中
let arr1: number[] = [1, 2, 3];
let arr2: string[] = ["1", "2", "3"];

// 元组类型：将不相同类型的元素放到一个集合中
let tuple: [string, number] = ["bob", 10];

// 枚举类型: 用于定义一组命名的常量
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
```
