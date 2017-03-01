/**
 * Created by candice on 17/1/26.
 */
const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    autoprefixer = require('autoprefixer'),
    ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, '..'),
    entry: {
        bundle: [
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
                presets: ['es2015', 'react', 'stage-0'],
            }
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css?modules&camelCase&importLoaders=1&localIdentName=[hash:base64:8]!postcss!sass')

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
    postcss: [autoprefixer({browsers: ['> 5%']})],
    resolve: {extensions: ['', '.js', '.json', '.scss', '.html']},
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            filename: '[name].js'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true
            },
            comments: false
        }),
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)}),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './client/index.html',
            chunksSortMode: 'none',
            favicon:'./client/common/assets/favicon.ico',
            hash: true, //为静态资源生成hash值

        }),
        new ProgressBarPlugin({summary: false}),
        new ExtractTextPlugin('[name].css', {allChunks: true})
    ],
};