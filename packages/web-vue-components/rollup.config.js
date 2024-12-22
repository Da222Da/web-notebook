// rollup.config.js
import { defineConfig } from 'rollup';
import vue from 'rollup-plugin-vue';
import css from "rollup-plugin-css-only"

export default defineConfig({
    input: 'src/main.js', // 入口文件
    output: {
        format: 'iife', // 输出格式
        name: 'MyVueApp', // 全局变量名
        file: 'dist/bundle.js', // 输出文件
    },
    plugins: [
        vue(),
        css()
    ],
});