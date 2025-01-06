<PageHeader content="fs 文件处理" />

> fs 模块，提供了一系列的方法和属性，用于操作项目中的文件。

## 1. fs.access() 判断某个文件是否存在?

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

## 2. fs.lstatSync() 用于获取有关文件或目录的信息

```js
const fs = require("fs");

// 遍历文件系统，查找所有目录
function findDirectories(directory) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    files.forEach((filename) => {
      if (fs.lstatSync(`${directory}/${filename}`).isDirectory() && filename !== "." && filename !== "..") {
        console.log(`${directory}/${filename}`);
        findDirectories(`${directory}/${filename}`);
      }
    });
  });
}

findDirectories(".");
```

- 参数：文件路径
- 返回值：fs.Stats 对象`一个包含文件类型、大小、权限和时间戳等信息`

## 3. fs.isDirectory() 检查指定路径是否是一个目录（文件夹）

```js
const fs = require("fs");

// 遍历文件系统，查找所有目录
function findDirectories(directory) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    files.forEach((filename) => {
      if (fs.lstatSync(`${directory}/${filename}`).isDirectory() && filename !== "." && filename !== "..") {
        console.log(`${directory}/${filename}`);
        findDirectories(`${directory}/${filename}`);
      }
    });
  });
}

findDirectories(".");
```

- 返回值：Boolean
