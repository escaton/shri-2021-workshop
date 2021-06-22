const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const resolveApp = (pathToResolve) =>
    path.resolve(__dirname, '..', 'src', pathToResolve);

module.exports = {
    devServer: {
        historyApiFallback: true,
    },
    entry: { index: resolveApp('index.jsx') },
    output: {
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [new HtmlWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
};
