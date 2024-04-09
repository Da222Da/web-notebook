<PageHeader content="npx 是什么？" />

在 Node.js 中， `npx` 是一个 npm 包执行工具，它允许你在不安装全局包的情况下直接运行项目中的可执行文件。像这样

```sh
# npm i -g vitest
npm i -D vitest
npx vitest # 即使你没有全局安装 vitest 也可以运行
```

这对于执行临时任务或者尝试新的包非常方便。
