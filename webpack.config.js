const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './src/index.html', to: './' },
        { from: './src/css/styles.css', to: './css' },
      ],
    }),
  ],
};
