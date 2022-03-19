const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:"development",
    entry: './src/index.js',
    output: {
        filename: '[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer:{
        static: path.resolve(__dirname,"dist"),
        open:true,
        historyApiFallback:true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:"[hash].css"
         }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
            }
        ],
    },
};