# Question：如何构建 Vue3 组件库？

> 这是一套基于 Rollup 构建 Vue3 组件库的解决方案。

<ClientOnly> 
	<ElMindmap :data="data" /> 
</ClientOnly>

<script setup>
import {  ref } from "vue";
const data = ref({
    data: {
      text: "问题 & 解决方案",
    },
    children: [
      { data: { text: "Vue3 组件库的原理是什么？" } },
      { data: { text: "组件库中的按需加载是如何实现的？" } },
      { data: { text: "如何使用 Rollup 构建组件库？" } },
      { data: { text: "如何给组件库配置说明文档？" } },
    ],
  })
</script>
