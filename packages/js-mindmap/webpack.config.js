const path = require('path')

module.exports = {
	mode: 'production', // 生产模式
	entry: './index.js', // 入口文件
	output: {
		filename: 'mindmap.js', // 输出文件名
		path: path.resolve(__dirname, 'dist'), // 输出目录
		libraryTarget: 'commonjs2' // 使用 CommonJS2 规范，以便在 Node.js 中使用
	},
	target: 'node', // 指定打包目标为 Node.js 环境
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader', // 使用 Babel 转换 ES6+ 语法
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	},
	externals: {
		// 排除 Node.js 内置模块，避免将它们打包进输出文件
		fs: 'commonjs fs',
		path: 'commonjs path'
		// ... 其他需要排除的模块
	},
	resolve: {
		extensions: ['.js', '.json'] // 自动解析确定的扩展名
	}
}
