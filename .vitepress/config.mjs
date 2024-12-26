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
					text: "客户端 Client",
					collapsed: false,
					items: [
						{
							text: "JavaScript 语法约定",
							items: [
								{
									text: "ES 语法约定",
									link: "/client/grammar/es.md",
								},
								{
									text: "TS 语法约定",
									link: "/client/grammar/ts.md",
								},
							],
						},
						{
							text: "组件化方案",
							items: [
								{
									text: "VueJS",
									link: "/client/component/vue.md",
								},
							],
						},
						{ text: "可视化方案", items: [{ text: "D3", link: "/client/visual/d3.md" }] },
						{
							text: "工程化方案",
							collapsed: true,
							items: [
								{ text: "Webpack", link: "/client/engineering/webpack.md" },
								{ text: "Rollup", link: "/client/engineering/rollup.md" },
							],
						},
						{
							text: "微前端方案",
							collapsed: true,
							items: [
								{ text: "无界", link: "/client/micro/wujie.md" },
								{ text: "乾坤", link: "/client/micro/qiankun.md" },
							],
						},
					],
				},
				{
					text: "服务端 Server",
					collapsed: false,
					items: [
						{
							text: "服务器",
							items: [
								{
									text: "Koa 服务器框架",
									link: "/server/nodejs/koa.md",
								},
							],
						},
					],
				},
				{
					text: "应用 & 实践",
					collapsed: false,
					items: [
						{
							text: "Vue3 组件库设计与实现",
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
