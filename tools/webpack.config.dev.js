/**
 * Created by candice on 17/1/26.
 */
const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    context: path.resolve(__dirname, '..'),
    entry: {
        bundle: [
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
            './client/index',
        ],
        vendor: [
            'react',
            'react-dom',
            'redux',
            'react-redux',
            'es6-promise',
            'isomorphic-fetch'
        ]
    },
    output: {
        path: path.resolve(__dirname, '../build/client'),
        filename: '[name].js',
        chunkFilename: 'chunk.[name]-[hash].js',
        publicPath: '/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react', 'stage-0', 'react-hmre'],
            }
        }, {
            test: /\.scss$/,
            loaders: [
                'style',
                'css?modules&camelCase&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:8]',
                'sass'
            ]
        }, {
            test: /\.(jpg|png|gif|webp)$/,
            loader: 'url?limit=8000'
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.html$/,
            loader: 'html?minimize=false'
        }]
    },
    resolve: {extensions: ['', '.js', '.json', '.scss','.html']},
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            filename: '[name].js'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)}),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './client/index.html',
            favicon:'./client/common/assets/favicon.ico',
        }),
        new ProgressBarPlugin({summary: false})
    ],
};