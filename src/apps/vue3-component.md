# Vue 组件库设计与实现

## 1.Graph 知识图表

<Mind :data="data" height="450" />
<script setup>
import { onMounted, ref } from "vue";
const data = ref({
    data: {
        text: "Vue3 组件库",
    },
    children: [ 
        {
            data: { text: "导入方式" }, 
            children: [
                { data: { text: "按需加载单个组件" }, },
                { data: { text: "一次性加载全部组件" }}
            ]
        }, 
    ] 
})
</script>

## 2.Prompt 问答记录
