<PageHeader content="测试函数" />

例如，我们将编写一个简单的测试来验证将两个数字相加的函数的输出。

```js
// sum.js
export function sum(a, b) {
  return a + b;
}
```

```js
// sum.test.js
import { expect, test } from "vitest";
import { sum } from "./sum";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
```
