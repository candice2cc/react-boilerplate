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
            'react-router',
            'redux',
            'react-redux',
            'react-router-redux',
            'redux-thunk',
            'es6-promise',
            'isomorphic-fetch',
        ]
    },
    output: {
        path: path.resolve(__dirname, '../build/client'),
        filename: 'js/[name].js',
        chunkFilename: 'js/chunk.[name].js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-0', 'react-hmre'],
                }
            },
            {
                test: /\.scss$/,
                exclude: /global/,
                loaders: [
                    'style',
                    'css?modules&camelCase&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:8]',
                    'sass'
                ]
            },
            {
                test: /\.scss/,
                include: /global/,
                loaders: [
                    'style',
                    'css',
                    'sass'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url?limit=8000&name=img/[name].[ext]'
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)/,
                loader: 'url?limit=8000&name=img/[name].[ext]'
            },
            {
                test: /\.json$/,
                loader: 'json'
            }, {
                test: /\.html$/,
                loader: 'html?minimize=false'
            }]
    },
    resolve: {extensions: ['', '.js', '.json', '.scss', '.html']},
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(), // 根据模块调用次数，给模块分配ids，常被调用的ids分配更短的id，使得ids可预测，降低文件大小，该模块推荐使用
        new webpack.optimize.DedupePlugin(), //打包的时候删除重复或者相似的文件
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            filename: 'js/[name].js'
        }),
        new webpack.HotModuleReplacementPlugin(),  //热替换
        new webpack.NoErrorsPlugin(),  //报错但不退出webpack进程
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)}), //定义变量
        new HtmlWebpackPlugin({                       //生成html
            filename: './index.html',
            template: './client/index.html',
            favicon: './client/common/assets/favicon.ico',
        }),
        new ProgressBarPlugin({summary: false})
    ],
};