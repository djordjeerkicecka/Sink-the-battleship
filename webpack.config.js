const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        filename: 'js/index.js',
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [new HTMLWebpackPlugin()]
}