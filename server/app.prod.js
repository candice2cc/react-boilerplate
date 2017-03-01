/**
 * Created by candice on 17/1/23.
 */
import express from 'express'
import path from 'path'
import book from './routes/book'
import course from './routes/course'

let app = express();

//static
app.use(express.static(path.join(__dirname, '../client')));

//routes
app.use('/api/book', book);
app.use('/api/course', course);

// Important part. Send down index.html for all requests
app.use('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../client', 'index.html'))
});

const port = process.env.PORT || 3000;


app.listen(port, ()=> {
    console.log(`\n==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.\n`)
});





