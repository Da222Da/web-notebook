<PageHeader content="child_process 子进程" />

> `child_process` 模块，在代码中创建子进程，用于执行外部命令或其他 Node.js 脚本。

## exec 执行简单的 shell 命令

```js
const { exec } = require("child_process");

// 执行一个 shell 命令并输出结果
exec("ls -l", (error, stdout, stderr) => {
  if (error) {
    console.error(`执行命令出错: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
```

::: danger exec 和 execSync 有什么区别？

exec 和 execSync 都是 child_process 模块中提供的方法，用于在 Node.js 中执行 shell 命令。它们之间的主要区别在于执行命令的方式和对程序的阻塞。

1.  exec 方法是异步的，它会在子进程执行完毕后才会调用回调函数，不会阻塞主进程的执行。
2.  execSync 方法是同步的，它会在子进程执行完毕前阻塞主进程的执行，直到命令执行完成后才会继续执行主进程。

:::

## spawn 执行复杂的 shell 命令

> 相比于 exec 方法， spawn 方法更适合于处理大量数据或需要实时处理输出的情况。

```js
const { spawn } = require("child_process");

// 执行一个复杂的 shell 命令
const ls = spawn("ls", ["-l"]);

ls.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on("data", (data) => {
  console.error(`stderr: ${data}`);
});

ls.on("close", (code) => {
  console.log(`子进程退出，退出码 ${code}`);
});
```

## execFile 调用可执行文件

> execFile 方法不会调用 shell 来执行命令，而是直接执行指定的可执行文件。

```js
const { execFile } = require("child_process");

// 使用 execFile 方法执行外部可执行文件
execFile("node", ["--version"], (error, stdout, stderr) => {
  if (error) {
    console.error(`执行命令出错: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
```

## fork 执行 Node.js 脚本

```js
const { fork } = require("child_process");

// 执行一个 Node.js 脚本
const child = fork("child.js");

child.on("message", (message) => {
  console.log(`收到子进程的消息: ${message}`);
});

child.send("Hello from parent");
```
