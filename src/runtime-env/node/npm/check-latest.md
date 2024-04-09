<PageHeader content="如何检查 NPM 包是否为最新版本、并自动更新？" />

这里，我们以检查`wyt-spreadsheet`包是否为最新版本为例：

```js
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const filePath = path.resolve(__dirname, "../node_modules/wyt-spreadsheet/package.json");

// 检查 Package 的版本
const checkPackageVersion = (packageName) => {
  const currentVersion = require(filePath).version;
  const latestVersion = execSync(`npm show ${packageName} version --registry=https://registry.npmjs.org`).toString().trim();

  if (currentVersion !== latestVersion) {
    console.log(`${packageName} 不是最新版本，正在更新...`);
    execSync(`npm install ${packageName}`);
  } else {
    console.log(`${packageName} 已是最新版本。`);
  }
};

fs.access(filePath, fs.constants.F_OK, (err) => {
  if (err) {
    console.error(`${filePath} does not exist`);
    return;
  }
  // 检查 wyt-spreadsheet 的版本
  checkPackageVersion("wyt-spreadsheet");
});
```

- `execSync` 方法用于执行命令。
- `npm show` 命令用于获取指定包的最新版本号。
