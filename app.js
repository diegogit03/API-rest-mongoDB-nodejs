var express = require('express');
var app = express();
var methodOverride = require('method-override');
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-override'));
app.use(methodOverride('X-HTTP-Override'));
app.use(methodOverride('_method'));

//favicon
app.use((req, res, next) => {
    if(req.url === './favicon.ico'){
        res.writeHead(200, {'content-type': 'image/x-icon'});
        res.end('');
    }else{
        next();
    }
});

app.use('/', require('./routes'));

//cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-type, Accept");
    next();
});

//404
app.use((req, res, next)=>{
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next)=>{
    console.log(err.stack);
    res.status(err.status || 500).json({ err: err.message });
});

module.exports = app;