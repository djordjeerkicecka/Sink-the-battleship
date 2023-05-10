const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        filename: 'js/index.js',
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [

        new CopyPlugin({
			patterns: [
				{ from: './src/index.html', to: './' }
			]
		}),
	]
}