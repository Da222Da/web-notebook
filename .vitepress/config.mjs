import { defineConfig } from "vitepress";

export default defineConfig({
	title: "Web 互联网",
	description: "探索 Web 万物互联技术",
	base: "/web/",
	srcDir: "src",
	head: [["link", { rel: "stylesheet", href: "" }]],
	themeConfig: {
		sidebar: sidebar(),
		nav: nav(),
		socialLinks: [{ icon: "github", link: "https://github.com/Da222Da/web" }],
		search: {
			provider: "local",
		},
		outline: {
			level: "deep",
		},
	},
});
function sidebar() {
	return {
		ignoreDeadLinks: true,
		"/": {
			items: [
				{
					text: "JavaScript 客户端",
					collapsed: false,
					items: [
						{
							text: "语法约定",
							items: [
								{
									text: "ES 语法约定",
									link: "/js/grammar/es.md",
								},
								{
									text: "TS 语法约定",
									link: "/js/grammar/ts.md",
								},
							],
						},
						{
							text: "组件化方案",
							items: [
								{
									text: "VueJS",
									link: "/js/component/vue.md",
								},
							],
						},
						{ text: "可视化方案" },
						{
							text: "工程化方案",
							items: [
								{ text: "Webpack", link: "/js/engineering/webpack.md" },
								{ text: "Rollup", link: "/js/engineering/rollup.md" },
							],
						},
						{
							text: "运行时环境",
							collapsed: false,
							// items: [
							// 	{
							// 		text: "浏览器",
							// 		link: "/runtime-env/browser/index.md",
							// 	},
							// 	{
							// 		text: "NodeJS",
							// 		link: "/runtime-env/node/index.md",
							// 	},
							// ],
						},
					],
				},
				{
					text: "应用 & 实践",
					collapsed: false,
					items: [
						{
							text: "Vue 组件库设计与实现",
							link: "/apps/vue3-component.md",
						},
						// {
						// 	text: "CLI 脚手架开发",
						// 	link: "/apps/cli.md",
						// },
					],
				},
			],
		},
	};
}

function nav() {
	return [
		{ text: "首页", link: "/" },
		{
			text: "文档支持",
			items: [
				{ text: "Vitepress", link: "https://vitepress.dev/" },
				{ text: "Vuejs", link: "https://vuejs.org/" },
				{ text: "Element-plus", link: "https://element-plus.gitee.io/zh-CN/" },
			],
		},
	];
}
