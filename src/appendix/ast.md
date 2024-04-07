# AST 抽象语法树

::: tip 基本概念

- `AST 抽象语法树（Abstract Syntax Tree，）`用于将源代码的语法结构描述成一个可用的对象。
- `Compiler 编译器` 能够让我们从一种语言转换到另一种语言，例如`es6 -> es5`。
  1. 第一步：解析（parser）`es6 -> es6_ast`
  2. 第二步：转换（transform）`es6_ast -> es5_ast`
  3. 第三步：生成（generator）`es5_ast -> es5`

:::
