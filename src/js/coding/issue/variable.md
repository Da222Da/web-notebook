<PageHeader content=" var、let、const 三者之间的区别？" />

在 JavaScript 中，您可以使用关键字 var 、 let 或 const 来声明变量。像这样：

```js
var name = "John";
let age = 30;
const isStudent = true;
```

::: danger var、let、const 三者之间的区别？

- var 关键字是用来声明变量的最常见的方式。使用 var 关键字声明的变量具有全局作用域或函数作用域，并且可以被重新赋值。
- let 关键字是用来声明变量的另一种方式。使用 let 关键字声明的变量具有块级作用域，并且只能被重新赋值，不能被重新声明。
- const 关键字是用来声明常量的。使用 const 关键字声明的变量具有块级作用域，并且不能被重新赋值，也不能被重新声明。

:::
