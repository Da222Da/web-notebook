<PageHeader content="数据类型" />

## String 字符串

`String`是 JavaScript 中的一种数据类型，用于表示和储存文本数据，如字母、数字、符号、空格和特殊字符等。

```js
// 创建字符串变量
const str1 = "Hello, ";
const str2 = "World!";

// 字符串拼接
const greeting = str1 + str2;
console.log(greeting); // 输出: Hello, World!

// 获取字符串长度
const length = greeting.length;
console.log(length); // 输出: 13

// 字符串替换
const newGreeting = greeting.replace("World", "Universe");
console.log(newGreeting); // 输出: Hello, Universe!
```

## Number 数字

`Number`是 JavaScript 中的一种数据类型，用于表示和存储数字`包括整数和浮点数`。

```js
// 创建数值变量
const num1 = 42;
const num2 = 3.14;

// 数值计算
const sum = num1 + num2;
console.log(sum); // 输出: 45.14

// 数值比较
const isGreaterThan = num1 > num2;
console.log(isGreaterThan); // 输出: true

// 数值转换
const strNum = "10";
const parsedNum = parseInt(strNum);
console.log(parsedNum); // 输出: 10
```

## Boolean 逻辑值

Boolean 是 JavaScript 中的一种数据类型，用于表示逻辑值，即 true（真）或 false（假）。

```js
// 创建布尔变量
const isTrue = true;
const isFalse = false;

// 条件判断
if (isTrue) {
  console.log("It is true."); // 输出: It is true.
} else {
  console.log("It is false.");
}

// 逻辑运算
const result = isTrue && isFalse;
console.log(result); // 输出: false
```

## Null 空值

Null 是 JavaScript 中的一种特殊数据类型，表示空值或空对象。

```js
// 创建一个空值变量
let nullValue = null;

// 检查空值
if (nullValue === null) {
  console.log("The value is null."); // 输出: The value is null.
} else {
  console.log("The value is not null.");
}
```

## Undefined 未定义值

Undefined 是 JavaScript 中的一种特殊数据类型，表示未定义的值。

```js
// 创建一个未定义的变量
let undefinedValue; // 当变量声明但未初始化时，其默认值为undefined。

// 检查未定义值
if (undefinedValue === undefined) {
  console.log("The value is undefined."); // 输出: The value is undefined.
} else {
  console.log("The value is defined.");
}
```

## Symbol 唯一值

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

## Object 对象

Object 是 JavaScript 中的一种数据类型，通过`键值对`的形式，将任意类型的数据组织到一起。

```js
// 创建一个对象
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

// 访问对象属性
console.log(person.name); // 输出: Alice
console.log(person.age); // 输出: 30
console.log(person.city); // 输出: New York

// 修改对象属性
person.age = 31;
console.log(person.age); // 输出: 31

// 添加新属性
person.gender = "female";
console.log(person.gender); // 输出: female

// 删除属性
delete person.city;
console.log(person.city); // 输出: undefined

// 使用对象解构
const { name, age, city } = person;
const { name: personName, age: personAge } = person; // 使用别名进行对象解构
```

## Array 数组

Array 是 JavaScript 中的一种数据类型，通过`有序集合`的形式，将任意类型的数据组织到一起。

```js
// 创建一个数组
const numbers = [1, 2, 3, 4, 5];

// 访问数组元素
console.log(numbers[0]); // 输出: 1
console.log(numbers[2]); // 输出: 3

// 修改数组元素
numbers[1] = 10;
console.log(numbers); // 输出: [1, 10, 3, 4, 5]

// 添加新元素
numbers.push(6);
console.log(numbers); // 输出: [1, 10, 3, 4, 5, 6]

// 删除元素
numbers.splice(2, 1);
console.log(numbers); // 输出: [1, 10, 4, 5, 6]
```

## Map 映射

Map 是 JavaScript 中的一种数据类型，通过`键值对`的形式，将任意类型的数据组织到一起。

```js
// 创建一个新的Map对象
let myMap = new Map();
WeakMap;

// 向Map中添加键值对
myMap.set("key1", "value1");
myMap.set("key2", "value2");

// 访问Map中的值
console.log(myMap.get("key1")); // 输出: value1
console.log(myMap.get("key2")); // 输出: value2

// 检查Map中是否存在特定键
console.log(myMap.has("key1")); // 输出: true

// 遍历Map中的所有键值对
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// 删除特定键值对
myMap.delete("key1");

// 清空Map
myMap.clear();
```

## WeakMap 弱映射

在 JavaScript 中，WeakMap 是一种特殊类型的 Map，其中键只能是对象。与普通的 Map 不同，WeakMap 中的键是弱引用，这意味着如果没有其他引用指向键对象，则该键可能会被垃圾回收。WeakMap 通常用于存储私有数据或缓存数据，因为键对象被垃圾回收时，与之关联的数据也会被自动清除。

```js
// 创建一个新的 WeakMap 对象
let myWeakMap = new WeakMap();

// 创建一个对象作为键
let key = {};
let key2 = {};

// 向 WeakMap 中添加键值对
myWeakMap.set(key, "value1");
myWeakMap.set(key2, "value2");

// 访问 WeakMap 中的值
console.log(myWeakMap.get(key)); // 输出: value1
console.log(myWeakMap.get(key2)); // 输出: value2

// 检查 WeakMap 中是否存在特定键
console.log(myWeakMap.has(key)); // 输出: true

// 删除特定键值对
myWeakMap.delete(key);

// 注意：由于键是弱引用，如果没有其他引用指向 key2，key2 和与之关联的值可能会被垃圾回收
```

## Set 集合

在 JavaScript 中，Set 是一种数据结构，它允许您存储唯一值，无论是原始值还是引用值。Set 中的值是唯一的，重复值将被忽略。Set 提供了一种方便的方式来存储一组唯一的值，而不需要自己手动去除重复项。

以下是一个简单的代码示例，演示如何创建一个 Set，向其中添加值，以及如何访问 Set 中的值：

```js
// 创建一个新的Set对象
let mySet = new Set();

// 向Set中添加值
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); // 重复值将被忽略

// 检查Set中是否存在特定值
console.log(mySet.has(1)); // 输出: true

// 获取Set的大小（包含唯一值的数量）
console.log(mySet.size); // 输出: 3

// 删除特定值
mySet.delete(2);

// 遍历Set中的所有值
mySet.forEach((value) => {
  console.log(value);
});

// 清空Set
mySet.clear();
```

## WeakSet 弱集合

在 JavaScript 中，WeakSet 是一种特殊类型的 Set，它只能存储对象，并且这些对象是弱引用的。与普通的 Set 不同，WeakSet 中的对象是弱引用，这意味着如果没有其他引用指向对象，则对象可能会被垃圾回收。WeakSet 通常用于存储一组对象，而不需要担心内存泄漏。

```js
// 创建一个新的WeakSet对象
let myWeakSet = new WeakSet();

// 创建一些对象
let obj1 = {};
let obj2 = {};

// 向WeakSet中添加对象
myWeakSet.add(obj1);
myWeakSet.add(obj2);

// 检查WeakSet中是否存在特定对象
console.log(myWeakSet.has(obj1)); // 输出: true

// 删除特定对象
myWeakSet.delete(obj2);

// 注意：由于对象是弱引用，如果没有其他引用指向obj1，obj1可能会被垃圾回收
```
