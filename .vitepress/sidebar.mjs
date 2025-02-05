export default function sidebar() {
	return {
		ignoreDeadLinks: true,
		"/": {
			items: [
				{
					text: "JavaScript 编程语言",
					items: [
						{
							text: "JavaScript 语法约定",
							items: [{ text: "ES 语法约定", link: "/js/es/" }],
						},
						{
							text: "JavaScript 组件化",
							items: [{ text: "Vue3", link: "/js/vue/" }],
						},
						{
							text: "JavaScript 工程化",
							items: [
								{ text: "Vite 构建工具", link: "/js/vite/" },
								{ text: "NPM 包管理器", link: "/js/nodejs/npm.md" },
							],
						},
					],
				},
				{
					text: "开源项目",
				},
			],
		},
	};
}
