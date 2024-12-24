# Koa:基于 NodeJS 的服务端框架

## 1.Graph 知识图表

<Mind :data="data" height="450" />
<script setup>
import { onMounted, ref } from "vue";
const data = ref({
    data: {
        text: "Koa",
    },
    children: [ 
				{
            data: { text: "开发环境配置" }, 	
            children: [
      				]
        }, 
        {
            data: { text: "登录校验: Session & JWT" }, 
        }, 
    ] 
})
</script>

## 2.Prompt 问答记录

### 2-1.开发环境配置

#### a.安装 NodeJS 和 Koa

::: tip Target：安装 NodeJS 和 Koa

1. 下载并安装 NodeJS。
2. 使用 npm 命令行工具，创建一个项目文件夹，进入该文件夹后运行 `npm init -y` 初始化项目。
3. 安装 Koa 依赖包`npm i koa`。
4. 在项目根目录下创建 server.js 文件，编写服务端代码。

```js
const Koa = require("koa");
const app = new Koa();

// 中间件示例：记录每个请求的 URL
app.use(async (ctx) => {
	console.log(`URL: ${ctx.url}`);
	ctx.body = "Hello Koa";
});

// 启动服务器
app.listen(3000, () => {
	console.log("Server is running on http://localhost:3000");
});
```

5. 启动服务端`node app.js`，在浏览器中访问 `http://localhost:3000/` 验证是否成功运行。

:::

### 2-2.登录校验

#### a.Cookies 和 Session 登录校验

::: danger Cookies 和 Session 登录校验全过程：

1. 客户端输入用户名和密码，发送请求到服务端。
2. 验证通过后，将用户信息写入 Session。同时，生成一个 UserID，写入 Cookie，发送给客户端。
3. 客户端收到服务端返回的 Cookie，将其存储在本地。
4. 客户端在后续的请求中，将 Cookie 发送给服务端。
5. 服务端收到 Cookie 后，解析出 Session ID，根据 Session ID 查找对应的 Session 信息，进行身份验证。如果验证通过，则返回相应的数据。

:::

#### b.JWT 令牌登录校验

::: danger JWT 令牌登录校验全过程：

1. 客户端输入用户名和密码，发送请求到服务端。
2. 验证通过后，服务端返回一段 token 字符串(将用户信息加密所得)。
3. 客户端收到 token 字符串后，将其存储在本地（例如，LocalStorage 或 Cookie）。
4. 客户端在后续的请求中，将 token 字符串添加到请求头中，发送给服务端。
5. 服务端收到请求后，从请求头中解析出 token 字符串。然后，使用密钥对 token 进行解密，获取用户信息。如果验证通过，则返回相应的数据。

:::
