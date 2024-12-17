import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'

export default [
	{
		input: 'index.js', // 入口文件
		output: [
			{
				file: 'dist/mindmap.cjs.js', // Node 环境的 CommonJS 模块
				format: 'cjs'
			},
			{
				file: 'dist/mindmap.js', // ES 模块，适用于现代浏览器和现代 Node.js 版本
				format: 'es'
			},
			{
				file: 'dist/mindmap.umd.js', // UMD 模块，适用于传统浏览器
				format: 'umd',
				name: 'Mindmap',
				globals: {
					// 如果你的库依赖于外部库，可以在这里指定
				}
			}
		],
		// external: ['window', 'document'], // 将 document 标记为外部依赖
		plugins: [
			resolve(),
			commonjs(),
			babel({
				babelHelpers: 'bundled',
				presets: [
					[
						'@babel/preset-env',
						{
							targets: {
								node: 'current', // Node.js 环境
								browsers: 'last 2 versions' // 浏览器环境
							}
						}
					]
				]
			})
		],
		external: ['fs', 'path'] // 如果你使用了 Node.js 的内置模块，可以将它们列为外部依赖
	}
]
