export default {
	home: {
		items: [
			{
				text: "JavaScript 基础知识",
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
						text: "前端组件化",
						link: "/componentization/index.md",
						items: [
							{
								text: "VueJS",
								link: "/componentization/vue/index.md",
							},
						],
					},
					{ text: "前端工程化", link: "/engineering/index.md" },
					{
						text: "运行时环境",
						collapsed: false,
						items: [
							{
								text: "浏览器",
								link: "/runtime-env/browser/index.md",
							},
							{
								text: "NodeJS",
								link: "/runtime-env/node/index.md",
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
						text: "CLI 脚手架开发",
						link: "/apps/cli.md",
					},
				],
			},
		],
	},
};
