export default function nav() {
	return [
		{ text: "首页", link: "/" },
		// { text: "JavaScript 编程语言", link: "/js/grammar/es/" },
		{
			text: "自研产品",
			items: [{ text: "Vitepress 组件库", link: "/apps/vitepress-vue3-component/" }],
		},
		{
			text: "文档支持",
			items: [
				{ text: "Vitepress", link: "https://vitepress.dev/" },
				{ text: "Vuejs", link: "https://vuejs.org/" },
				{ text: "Element-plus", link: "https://element-plus.gitee.io/zh-CN/" },
				{ text: "mind-map-docs", link: "https://wanglin2.github.io/mind-map-docs/" },
			],
		},
	];
}
