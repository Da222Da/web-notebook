# Question：如何初始化 Vue3 的项目模板？

> 这是一套基于 Vite 来构建 Vue3 项目模板的解决方案。

<ClientOnly> 
	<ElMindmap :data="data" /> 
</ClientOnly>

<script setup>
import {  ref } from "vue";
const data = ref({
    data: {
      text: "问题 & 解决方案",
    },
    children: [],
  })
</script>
