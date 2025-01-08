# vue3-component

> 这是一个为 Vitepress 在线文档开发的 Vue3 的组件库。

## 安装依赖

```bash
npm install vue3-component # 安装依赖
```

## 引入组件库

```js
import { createApp } from "vue";
import App from "./App.vue";
import Vue3Component from "vue3-component";
import "vue3-component/dist/style.css";

const app = createApp(App);
app.use(Vue3Component); // 注册组件库
app.mount("#app");
```

## 使用组件库中的组件

```vue
<!-- 使用组件库中的组件 -->
<template>
	<wvc-breadcrumb :data="BreadcrumbData1" :isDivider="true"></wvc-breadcrumb>
	<wvc-breadcrumb :data="BreadcrumbData2" :isDivider="false"></wvc-breadcrumb>
</template>

<script setup>
const BreadcrumbData1 = [
	{ path: "home", text: "首页" },
	{ path: "home page1", text: "子页面" },
];
const BreadcrumbData2 = [
	{ path: "home", text: "首页" },
	{ path: "home page1", text: "子页面1" },
	{ path: "home page1 page2", text: "子页面2" },
];
</script>
```

## 效果展示

<iframe
  style="width: 100%; height: 455px; border: 1px solid #e2e2e2;"
  src="https://da222da.github.io/playground/#eNq1Us1O20AQfpXtnuNEhZ5cE6kUDu2hrdreuj1s7Ymzqb1r7Y7TqFFuPEClVj0gcYAD4sIRhECIlwmK8hbM2kSxICAuXCzv930z883PmL8pivawBB7y6EUQsOnl1ezf0exiZ3pxen3+d3p2PNvdqZ8sCLpCRwh5kUkE+hcYbVqQSWzL/AcLE4lyQ/AltEXAS8FZqNyWGqoELNFoSxC8G3WWuiemWrubqicztyJX1Gl61JGLrSqQOcCyIETlhbHIxqxRcMJ61uRM8N99qdORknpQQkBzWQ9iQ3oNGp3gQsdGO2xEVi2yDfbNtzBmhcR+SGn6JidjLYYwQv+eH/6f75+Q/0nrvpAeKdCclvLr4z8kn+8d3EZ8f7268trzVfZ7ezik+tI+VgT6LS08R5169l3e4uiog55K2wNnNJ3bWGhGcX68KgP7sUBFHQoesorxnMwy8+t9hfmroaQ1Hvch/rkCH7iRxwT/ZMGBHfpBLDiUNgWs6e0vH8h1g8xNUmakfoT8DM5kpfdYyzZLnZDthq5y+646LqXTr257hKDdoqnq7EnpR+PVdFtvH2l9aXe9/aqKE3rCJzdZilUJ">
</iframe>
