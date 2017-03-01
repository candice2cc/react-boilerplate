/**
 * Created by candice on 17/1/23.
 */
import express from 'express'
import path from 'path'
import book from './routes/book'
import course from './routes/course'

let app = express();

// webpack
(function () {
    // Step 1: Create & configure a webpack compiler
    var webpack = require('webpack');
    var webpackConfig = require('../tools/webpack.config.dev');
    var compiler = webpack(webpackConfig);

    // Step 2: Attach the dev middleware to the compiler & the server
    app.use(require("webpack-dev-middleware")(compiler, {
        noInfo: true, publicPath: webpackConfig.output.publicPath
    }));
    // Step 3: Attach the hot middleware to the compiler & the server
    app.use(require("webpack-hot-middleware")(compiler, {
        log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
    }));


})();

//static
app.use(express.static(path.join(__dirname, '../client')));

//routes
app.use('/api/book', book);
app.use('/api/course', course);

// Important part. Send down index.html for all requests
app.use('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../build/client', 'index.html'))
});

const port = process.env.PORT || 3000;


app.listen(port, ()=> {
    console.log(`\n==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.\n`)
});





