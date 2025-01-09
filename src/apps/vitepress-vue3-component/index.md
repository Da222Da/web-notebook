# vitepress-vue3-components

> 这是一个为 Vitepress 在线文档开发的 Vue3 的组件库。

## 安装依赖

```bash
npm install vitepress-vue3-components # 安装依赖
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
  src="https://da222da.github.io/playground/#eNq1UrFuE0EQ/ZVha58tEqrjYokQF1AAAjqW4nI3tjfs7a5254wly10+AAlEgUQBBaJJCUJEiJ9xZPkvmL3D2AQT0dCcbue9mXlvZmbilnPdSY0iFdm1JIHFt+/LVx+X56eL888XX18uvpwt35y2T0iSvjQZYeV0Tsj/kjLUybHHvCx8XR1DWuaUH0hx+Ct0xIHrUkCqwpGaqBI9w+RrlKKf9X7L/veCe5cLDnMddlfMett6TRYKrxxBQKodR1TlrCeYwUBvWsAcht5WIMVEETqPISQ8ov2ksEw3aChIIU1hTSC4ZBUO4En0MQOX0zjlGmNbsbQOEE4pvlcfXq/efWIH886fRH6MkOe1oV+cvWD66u37nxlPb+7uvPf/Osf9/T2l+fJGdiTGPa01Z7129H3RERTYwVCNuifBGr68mTTAeXG8SqO/70ixQylSaJCI5Vrb53ebWLweLtrGizEWz3bET8I0xqR4wOtDP4mDWGOU+xFSCw8e3WPVW2Bly1oz+wrwIQar66ixpR3WpmTZW7xG7Z3mtpQZPQ6DKaEJa1PN+TMzjiay+bZuX2F9I3e/e6PJk2Yu5j8AlKxZCw==">
</iframe>
