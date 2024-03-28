<PageHeader content="Typescript 数据类型" />

## 枚举 enum

枚举（Enum）是 TypeScript 中的一种数据类型，用于定义一组命名的常量。从而提高代码的可读性和可维护性。像这样：

```ts
// 定义一个枚举(自动生成初始化值)
enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

// 定义一个枚举(自定义初始化值)
enum Type {
  月报表 = 1,
  季报表 = 2,
  年报表 = 3,
  自定义报表 = 99,
}

// 访问枚举值
console.log(Direction.Up); // 0
console.log(Direction[0]); // Up
```

```js
// 原生 JS 模拟实现枚举变量
var Direction;
(function (Direction) {
  Direction[(Direction["Up"] = 0)] = "Up";
  Direction[(Direction["Down"] = 1)] = "Down";
  Direction[(Direction["Left"] = 2)] = "Left";
  Direction[(Direction["Right"] = 3)] = "Right";
})(Direction || (Direction = {}));
```
