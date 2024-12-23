<PageHeader content="如何使用 pnpm 来构建 MonoRepo 项目？" />

::: danger 基本概念

- `工作区 workspaces`：一个工作区可以包含多个包，每个包都是一个独立的项目。
- `Monorepo 项目`: 简单来说，就是将多个包放在一个项目中，这样就可以避免多次重复下载安装依赖，降低项目管理难度。

:::

## 如何创建 Monorepo 项目?

1. 新建一个 `my-workspace` 文件夹；
2. 运行指令`npm i -g pnpm && pnpm init`，初始化 `package.json`文件；
3. 新建工作区配置文件 `pnpm-workspace.yaml`，以及子包目录内容如下：

   ```yaml
   packages:
     - "packages/**"
   ```

   ```md
   - my-workspace
     - packages
       - package01
         - sum.test.js
         - sum.js
       - package02
         - sum.test.js
         - sum.js
   ```

4. 运行指令`pnpm add vitest -w`，在工作区的根目录下安装 vitest 依赖包
5. 运行测试指令`npx vitest` 之后，就能执行 package01 和 package02 里面的 `sum.test.js` 文件中的测试用例了。
