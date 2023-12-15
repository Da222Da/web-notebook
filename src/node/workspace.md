# 工作区 workspaces

如果你想构建 `Monorepo 项目`的话，建议你使用 npm 提供的多包管理功能`工作区 workspaces`。

## 什么是 Monorepo 项目?

简单来说，就是将多个包放在一个项目中，这样就可以避免多次重复下载安装依赖，提升项目构建速度。

## 如何创建 Monorepo 项目?

1. 新建一个 `my-workspace` 文件夹；
2. 运行指令`npm init -y`，初始化 `package.json`文件；
3. 在 `package.json`文件中，添加一个 "workspaces" 字段，并指定一个工作区目录的数组。例如：
   ```json
   {
     "name": "my-workspace",
     "private": true,
     "workspaces": ["packages/*"]
   }
   ```

好了，通过上述的操作，我们已经将 packages 目录定义为工作区了。

接下来，我们就可以在 packages 目录下创建多个包了，且每个包都是一个独立的项目。

## Monorepo 项目中，如何安装依赖？

在工作区根目录的终端中，运行 `npm install jquery` 指令，这将给工作区中所有子包都安装`jquery`依赖项。

如果你只想给某个子包安装依赖的话，那么你可以使用 `npm install jquery --workspace=child-package-name` 指令。
