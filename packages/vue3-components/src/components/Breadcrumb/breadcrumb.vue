<template>
	<el-breadcrumb :separator="separator">
		<el-breadcrumb-item v-for="(item, index) of data" :key="index">
			<a :href="generatePath(item.path)"> {{ item.text }} </a>
		</el-breadcrumb-item>
	</el-breadcrumb>
	<el-divider v-if="isDivider" />
</template>

<script>
export default {
	name: "WvcBreadcrumb",
};
</script>

<script setup>
import { ElBreadcrumb, ElBreadcrumbItem, ElDivider } from "element-plus";
import { defineProps, computed } from "vue";
const props = defineProps({
	data: Array,
	defaultPath: {
		type: String,
		default: "",
	},
	separator: {
		type: String,
		default: "/",
	},
	isDivider: {
		type: Boolean,
		default: true,
	},
});

// 计算属性
const defaultPath = computed(() => props.defaultPath);

// 路径生成
function generatePath(text) {
	let path = defaultPath;
	const words = text.split(" ");

	for (let i = 0; i < words.length; i++) {
		path += "/" + words[i].toLowerCase();
	}
	return path;
}
</script>
