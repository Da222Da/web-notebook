<PageHeader content="proces 进程信息对象" />

在 Node.js 中， `process` 是一个全局对象，它提供了有关当前 Node.js 进程的信息和控制。

```js
// 获取用户环境的对象，可以用来访问和设置环境变量。
console.log(process.env);

// 获取当前工作目录的路径
console.log(process.cwd());

// 打印命令行参数
console.log(process.argv);

// 终止 Node.js 进程
process.exit();
```
