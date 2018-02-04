const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(common, {
    externals: {
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
            umd: 'react'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
            umd: 'react-dom'
        },
        'redux': 'Redux',
        'react-redux': 'ReactRedux',
    },
    output: {
        libraryTarget: 'umd',
        publicPath: '/static/dist/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    {
                        'fallback': 'style-loader',
                        use:[
                            'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
                        ]
                    }
                )
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin({
            filename: 'app.css',
            allChunks: true
        })
    ]
});
