<PageHeader content="npm install 的工作流程" />

![npm install 的工作流程](./imgs/npm-install-workflow.png)

::: danger package-lock.json 是干什么的？

在 Node.js 中，package-lock.json 是一个自动生成的文件，用于跟踪项目中安装的每个 npm 软件包的确切版本。它确保在不同的开发环境中安装相同的软件包版本，以避免出现不一致性和潜在的问题。

这个文件会记录每个包的版本号、依赖关系和下载地址等信息。通常来说，你不需要手动编辑这个文件，而是让 npm 自动管理它。

:::

::: danger .npmrc 配置文件

.npmrc 是一个配置文件，用于存储 npm 的配置信息。它通常位于项目的根目录下，并以 .npmrc 作为文件名。

```sh
registry=https://registry.npm.taobao.org # 定义npm的注册表地址
```

:::
