const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const resolveApp = (pathToResolve) =>
    path.resolve(__dirname, '..', 'src', pathToResolve);
const devMode = process.env.NODE_ENV !== 'production';

const CSSModuleLoader = {
    loader: 'css-loader',
    options: {
        modules: true,
        localIdentName: '[name]_[local]_[hash:base64:5]',
        importLoaders: 2,
        camelCase: true,
        sourceMap: devMode,
    }
}

const CSSLoader = {
    loader: 'css-loader',
    options: {
        modules: "global",
        importLoaders: 2,
        camelCase: true,
        sourceMap: devMode,
    }
}

const autoprefixer = require('autoprefixer')
const PostCSSLoader = {
    loader: 'postcss-loader',
    options: {
        sourceMap: devMode,
        postcssOptions: {
            plugins: () => [
                autoprefixer({
                    browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
                })
            ]
        }
    }
}

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const styleLoader = devMode ? 'style-loader' : MiniCssExtractPlugin.loader;

module.exports = {
    devServer: {
        historyApiFallback: true,
        writeToDisk: true,
        injectClient: () => false,
    },
    entry: {
        index: resolveApp('index.jsx'),
        server: resolveApp('server/index.js'),
    },
    output: {
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    externalsPresets: { node: true },
    plugins: [new HtmlWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /\.module\.(sa|sc|c)ss$/,
                use: [styleLoader, CSSLoader, PostCSSLoader, "sass-loader"]
            },
            {
                test: /\.module\.(sa|sc|c)ss$/,
                use: [styleLoader, CSSModuleLoader, PostCSSLoader, "sass-loader"]
            }
        ],
    },
};
