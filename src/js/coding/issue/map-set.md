<PageHeader content="Map、WeakMap、Set、WeakSet 四者之间的区别？" />

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
