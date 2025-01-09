import { defineConfig } from "vitepress";
import sidebar from "./sidebar.mjs";
import nav from "./nav.mjs";

export default defineConfig({
	title: "Web 互联网",
	description: "Web 互联网 & Javascript 编程语言",
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
