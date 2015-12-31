var mongoose = require('mongoose'),
    Todo = mongoose.model('todo'),
    controller = {};

controller.index = [
    function(req,res,next){
        res.send("todo index page");
    }
];

module.exports = controller;
