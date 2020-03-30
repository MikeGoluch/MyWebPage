const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     exclude: /node_modules/,
            //     use: [
            //         {
            //             loader: MiniCssExtractPlugin.loader,
            //         },
            //         { loader: 'css-loader', options: { url: true } }
            //     ]
            // },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    // MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                  ],
            },
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'img/content',
                        name: '[name].[ext]'
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'file-loader',
                  options: {
                    outputPath: 'fonts/',
                    name: '[name].[ext]'
                  },
                },
            },
        ]
    },
    plugins: [
        new CopyPlugin([
            { from: './src/img/content', to: './img/content' },
            { from: './src/fonts', to: './fonts' },
        ]),
        new HtmlWebpackPlugin({
                template: './src/index.html'
            }
        ),
        // new MiniCssExtractPlugin({
        //     filename: './style.css'
        // })
    ]
};