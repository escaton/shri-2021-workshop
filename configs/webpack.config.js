const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const resolveApp = (pathToResolve) => path.resolve(__dirname, '..', 'src', pathToResolve);

module.exports = {
    entry: { index: resolveApp('index.js') },
    plugins: [new HtmlWebpackPlugin()],
};
