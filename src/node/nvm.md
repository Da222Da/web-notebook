<PageHeader content="使用 nvm 来管理 nodejs 的版本？" />

## 什么时候需要用到 nvm

在开发过程中，我们可能会遇到需要使用不同版本的 Node.js 的情况。例如，有些老项目就需要使用 Node.js 16，而有些新项目则需要使用 Node.js 20。

## 安装 && 使用

如果你也是 windows 系统的话！可以直接移步 [nvm-windows](https://github.com/coreybutler/nvm-windows/releases) 下载安装包，然后安装即可。

```sh
nvm -v

nvm install 16 # 安装 nodejs 16
nvm use 16 # 使用 nodejs 16

nvm ls # 查看已安装的 nodejs 版本 & 当前使用的 nodejs 版本

nvm uninstall 16 # 卸载 nodejs 16
```
