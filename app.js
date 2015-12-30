var express = require('express'),
    port = process.env.PORT || 4040,
    mongoose = require('mongoose'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    app = express();

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/sungchiy');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(logger('dev'));
app.set('view engine','ejs');

app.get('/', function(req,res,next){
    res.send("my awesome mongoose app");
});

app.listen(port, function(err){
    console.log("server listening on %s", port);
});


