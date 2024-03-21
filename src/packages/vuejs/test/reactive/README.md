# 响应系统的设计与实现

## 概念

- 副作用函数：副作用函数执行会直接或间接影响其他函数的执行。

## 实现

在 JS 中，Proxy 代理对象是用来干嘛的？

在 JavaScript 中，Proxy 代理对象用于定义基本操作的自定义行为。通过创建代理对象，可以拦截和定制对目标对象的操作，例如属性查找、赋值、枚举、函数调用等。Proxy 对象允许你捕获和定义这些操作的行为，以便在访问和操作目标对象时执行自定义逻辑。

代理对象 Proxy 通常用于以下方面：

1. **属性访问控制**：可以拦截和控制对属性的访问，实现属性的保护和安全性。

2. **属性验证**：可以验证属性的值，确保输入的数据符合要求。

3. **属性计算**：可以动态计算属性的值，而不是直接返回存储的值。

4. **函数调用处理**：可以拦截函数的调用，添加额外的逻辑处理。

5. **数据绑定**：可以在属性被访问或设置时触发相关操作，实现数据绑定的功能。

6. **缓存**：可以使用代理对象来缓存某些操作的结果，提高性能。

总的来说，代理对象 Proxy 提供了一种灵活和强大的机制，可以在许多场景下对对象的操作进行控制和定制化处理，从而实现更高级的功能和逻辑。

```js
// 创建一个目标对象
let target = {
  message: "Hello, World!",
};

// 创建一个代理对象
let handler = {
  get: function (target, prop, receiver) {
    console.log(`Getting property "${prop}"`);
    return target[prop];
  },
  set: function (target, prop, value) {
    console.log(`Setting property "${prop}" to ${value}`);
    target[prop] = value;
  },
};

let proxy = new Proxy(target, handler);

// 通过代理对象访问属性
console.log(proxy.message); // 触发get拦截器

// 通过代理对象设置属性
proxy.message = "Hello, Proxy!"; // 触发set拦截器
```
