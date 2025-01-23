export default function sidebar() {
	return {
		ignoreDeadLinks: true,
		"/": {
			items: [
				{
					text: "JavaScript 语法约定",
					items: [
						{
							text: "ES 语法约定",
							link: "/js/grammar/es/",
						},
					],
				},
				{
					text: "JavaScript 组件化",
					items: [
						{
							text: "VueJS 组件化框架",
							link: "/js/component/vue/",
							items: [
								{ text: "VueRouter 路由管理", link: "/js/component/vue/router" },
								{ text: "Pinia 状态管理", link: "/js/component/vue/pinia" },
								{ text: "构建 Vue3 组件库", link: "/js/component/vue/vue3-component" },
							],
						},
					],
				},
				{
					text: "JavaScript 工程化",
					items: [
						{
							text: "Vite 构建工具",
							link: "/js/engineering/vite/",
						},
					],
				},
				{
					text: "JavaScript 运行环境",
					items: [
						{
							text: "NodeJS 环境",
							link: "/js/env/nodejs/",
							items: [{ text: "NPM 包管理", link: "/js/env/nodejs/npm" }],
						},
					],
				},
			],
		},
		"/apps/": {
			items: [
				{ text: "快速开始", link: "/apps/vitepress-vue3-component/" },
				{
					text: "组件",
					items: [
						{ text: "面包屑导航", link: "/apps/vitepress-vue3-component/components/breadcrumb" },
						{ text: "思维导图", link: "/apps/vitepress-vue3-component/components/mindmap" },
					],
				},
			],
		},
	};
}
