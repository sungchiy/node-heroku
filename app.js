var express = require('express'),
    port = process.env.PORT || 4040,
    app = express();

app.get('/', function(req,res){
    res.send("my awesome app");
});

app.listen(port, function(err){
    console.log("server listening on %s", port);
});


