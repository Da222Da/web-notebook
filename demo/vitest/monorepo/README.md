# 配置 MonoRepo 项目的 Vitest 测试环境

1. 环境配置 `npm i -g pnpm`

2. 工作区配置文件 `pnpm-workspace.yaml`

```yaml
packages:
  - "packages/*/"\*\*"
```

3. 在工作区的根目录下安装 vitest 依赖包`pnpm add vitest -w`

4. 运行测试指令 `npx vitest`
