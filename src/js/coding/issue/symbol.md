<PageHeader content="Symbol 数据类型能干什么？" />

`Symbol`是一种基本数据类型，用于创建唯一且不可变的值。每个通过`Symbol()`函数创建的 Symbol 值都是唯一的，即使它们的描述相同也不相等。`Symbol`主要用于创建唯一的属性键，确保属性不会被意外覆盖。

```js
// 创建两个唯一的Symbol
const sym1 = Symbol("description");
const sym2 = Symbol("description");

// 使用Symbol作为对象的属性键，确保属性的唯一性
const obj = {
	[sym1]: "value1",
	[sym2]: "value2",
};

// 访问Symbol属性
console.log(obj[sym1]); // 输出: value1
console.log(obj[sym2]); // 输出: value2
```
