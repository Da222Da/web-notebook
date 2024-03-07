<PageHeader content="Typescript 新增语法" />

## 运算符

### 空值合并 ??

在 TypeScript 中，`??`是空值合并运算符（Nullish Coalescing Operator）。

```ts
// 如果 item.rpts 是 null 或 undefined，则 tableData.value 将被设置为一个空数组[]
// 如果 item.rpts 有值（即非null和undefined），则直接使用item.rpts的值。
tableData.value = item.rpts ?? [];
```
