<PageHeader content="如何判断项目中是否存在某个文件？" />

在 Node.js 中，如果你想判断文件是否存在的话，可以使用 `fs.access` 方法。

```js
const fs = require("fs");
const path = require("path");
const filePath = path.resolve(__dirname, "../node_modules/wyt-spreadsheet/package.json");

fs.access(filePath, fs.constants.F_OK, (err) => {
  if (err) {
    console.error(`${filePath} does not exist`);
    return;
  }
  // 文件存在后的操作
  console.log("该文件存在");
});
```

该方法接收两个参数：

1. 第一个参数是文件路径
2. 第二个参数是文件访问权限`默认为fs.constants.F_OK，表示检查文件是否存在。`
