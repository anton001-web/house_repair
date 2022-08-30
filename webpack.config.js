const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin')
const copyPlugin = require('copy-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `./js/${filename('js')}`,
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                exclude: /node_module/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[hash][ext]'
                }
            },
            {
                test: /\.(png|jpg|jpeg|svg)$/,
                exclude: /node_module/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[hash][ext]'
                }
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    MiniCssExtract.loader,
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use : [
                    MiniCssExtract.loader,
                    { loader: "css-loader" }
                ]
            }
        ]
    },
    devServer: {
        port: 3001,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlPlugin({
            template: "./index.html"
        }),
        new MiniCssExtract({
            filename: `./styles/${filename('css')}`
        }),
        new copyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './src/assets/images'),
                    to: path.resolve(__dirname, './dist/assets/images')
                }
            ]
        })
    ]
}