const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const isProduction = process.env.NODE_ENV

module.exports = {
    entry: './index.js',

    mode: isProduction ? 'production' : 'development',

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            { test: /\.scss$/, use: ['style-loader', 'scss-loader'] },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    devtool: isProduction ? 'hidden-source-map' : 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        clean: true,
    },

    plugins: [
        new CopyPlugin({
            patterns: [{ from: 'static', to: 'static' }],
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new MiniCssExtractPlugin(),
    ],
    optimization: {
        minimizer: [
          '...',
          new CssMinimizerPlugin(),
        ],
    }
}
