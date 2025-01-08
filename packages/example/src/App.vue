<template>
	<wvc-breadcrumb :data="BreadcrumbData" :isDivider="false" separator="/" defaultPath="unreal"></wvc-breadcrumb>
</template>

<script setup>
const BreadcrumbData = [
	{ path: "graph", text: "Unreal 知识体系" },
	{ path: "graph anim", text: "动画" },
];
</script>
