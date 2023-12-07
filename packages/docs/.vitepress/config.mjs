import { defineConfig } from "vitepress";
import sidebar from "./sidebar/index.mjs";

export default defineConfig({
  title: "基于 JS 的 Web 应用开发",
  description: "基于 JavaScript 的 Web 应用开发。",
  base: "/web/",
  srcDir: "src",
  head: [["link", { rel: "stylesheet", href: "" }]],
  themeConfig: {
    sidebar,
    socialLinks: [{ icon: "github", link: "https://github.com/Da222Da/web" }],
  },
});
