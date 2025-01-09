// rollup.config.js
import { defineConfig } from "rollup";
import path from "path"; // 用于处理文件路径
import commonjs from "@rollup/plugin-commonjs"; // 将 CommonJS 模块转换为 ES6 模块，从而让 Rollup 正确处理并打包这些模块。
import vue from "rollup-plugin-vue"; // 处理 Vue 文件（.vue 文件）
// import css from "rollup-plugin-css-only"; // 处理 CSS
import postcss from "rollup-plugin-postcss"; // 处理 CSS
import resolve from "@rollup/plugin-node-resolve"; // 告诉 Rollup 如何查找第三方的外部模块
// import typescript from "rollup-plugin-typescript2"; // 处理 TypeScript
// const override = { compilerOptions: { declaration: true } };
import json from "@rollup/plugin-json"; // 处理 JSON 文件

const postcssOptions = {
	extract: path.resolve("dist/style.css"), // 提取 CSS 到单独的文件中
	minimize: true, // 压缩 CSS
};

export default defineConfig({
	input: "./src/index.js", // 入口文件
	output: [
		{
			format: "es", // 输出格式
			file: "dist/index.es.js", // 输出文件
		},
		{
			format: "umd", // 输出格式
			name: "Vue3Components", // 全局变量名
			file: "dist/index.umd.js", // 输出文件
			globals: {
				vue: "Vue", // 指定全局变量 Vue，相当于 var vue = window.Vue;
			},
		},
	],
	external: ["vue"], // 指定外部依赖项，告诉 rollup不要将外部依赖项打包进输出文件
	// plugins: [typescript({ tsconfigOverride: override }),  vue(), css({ output: "bundle.css" })],
	plugins: [vue(), resolve(), commonjs(), json(), postcss(postcssOptions)],
});
