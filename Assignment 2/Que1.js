var exp = require('express');

var app = new exp();

app.listen(8500,function(){

    console.log(" Server Running On 8500 port");

});

app.get('/Welcome',function(req,res){

    res.send(" Welcome To Web App");

});



