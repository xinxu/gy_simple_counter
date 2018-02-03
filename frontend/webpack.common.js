const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    resolve: {
        alias: {
            Assets: path.resolve(__dirname, 'src/assets'),
            Styles: path.resolve(__dirname, 'src/styles'),
            Components: path.resolve(__dirname, 'src/components'),
        }
    },
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'static/dist'),
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['static/dist']),
        new BundleTracker({filename: 'static/webpack-stats.json'}),
        new HtmlWebpackPlugin({
            template: "./src/assets/index.ejs",
            inject: 'body',
        })
    ]
};
