export default {
	home: {
		items: [
			{
				text: "JavaScript 编程基础",
				collapsed: false,
				items: [
					{
						text: "ECMAScript 语法标准",
						items: [
							{
								text: "ES 语法约定",
								link: "/js/grammar/es.md",
							},
							{
								text: "TS 语法约定",
								link: "/js/grammar/ts/index.md",
							},
						],
					},
					{
						text: "组件化",
						link: "/js/componentization/index.md",
						items: [
							{
								text: "VueJS",
								link: "/js/componentization/vue/index.md",
							},
						],
					},
					{ text: "工程化", link: "/js/engineering.md" },
				],
			},
			{
				text: "JavaScript 编程理论",
				collapsed: false,
				items: [
					{
						text: "设计模式",
						link: "/theory/design-mode/index.md",
					},
				],
			},
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
			// {
			// 	text: "应用场景",
			// 	collapsed: false,
			// 	items: [
			// 		{
			// 			text: "网页开发",
			// 			link: "/apps/webpage/index.md",
			// 		},
			// 		{
			// 			text: "CLI 脚手架开发",
			// 			link: "/apps/cli.md",
			// 		},
			// 	],
			// },
			// {
			//   "text": "附录",
			//   "collapsed": false,
			//   "items": [{ "text": "AST 抽象语法树", "link": "/appendix/ast.md" }]
			// }
		],
	},
};
