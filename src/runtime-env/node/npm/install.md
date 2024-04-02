<PageHeader content="如何使用 NPM 来管理依赖包？" />

## npm 是什么？

NPM 是 Node.js 官方提供的包管理工具（Package Manager），用于管理 Node.js 模块。

## 如何安装 && 检查?

在安装 Node.js 时，会一起安装 NPM。所以，不需要你单独安装。

如果你已经安装好了 Node.js 的话，可以输入以下命令，验证 npm 是否正确安装：

```sh
npm -v

```

## 如何管理依赖包？

在使用 npm 管理依赖包之前，我们往往会提前初始化一份配置文件 package.json`npm init -y`, 用于记录当前项目相关信息（包含依赖包）。

然后，使用以下命令来安装、删除依赖包：

```sh
npm install jquery -S
npm install vitest -D
npm uninstall jquery
```

::: danger 提示

- `-S` 表示安装到生产环境，对应 `package.json > dependencies` 字段
- `-D` 表示安装到开发环境，对应 `package.json > devDependencies` 字段

:::
