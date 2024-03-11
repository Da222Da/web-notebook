<PageHeader content="Vite: 构建工具" />

## #自动化测试

::: danger 为什么要进行自动化测试呢？
自动化测试就是为了把我们平时对程序进行测试的操作，管理起来，不用每次都重复相同的测试操作。
:::

### 单元测试

单元测试，就是针对于代码测试进行记录、管理。可以借助 [Vitest 框架](https://vitest.dev/) 来快速实现。

```sum.test.js
import { expect, test } from 'vitest'

const sum = (a, b) => a + b

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
```
