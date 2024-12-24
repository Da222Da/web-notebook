// rollup.config.js
import { defineConfig } from "rollup";
import vue from "rollup-plugin-vue"; // 处理 Vue
import css from "rollup-plugin-css-only"; // 处理 CSS
import typescript from "rollup-plugin-typescript2"; // 处理 TypeScript

const override = { compilerOptions: { declaration: true } };

export default defineConfig({
	input: "src/main.ts", // 入口文件
	output: {
		format: "iife", // 输出格式
		name: "MyVueApp", // 全局变量名
		file: "dist/bundle.js", // 输出文件
		globals: {
			vue: "Vue", // 指定全局变量 Vue，相当于 var vue = window.Vue;
		},
	},
	external: ["vue"], // 指定外部依赖项，告诉 rollup不要将外部依赖项打包进输出文件
	plugins: [typescript({ tsconfigOverride: override }), vue(), css({ output: "bundle.css" })],
});
