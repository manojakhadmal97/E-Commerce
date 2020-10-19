var exp = require('express');
var app = new exp();

var fs = require('fs');

app.listen(8500,function(){

console.log("Server Running On 8500 Port")

});

app.get('/readfile/:filename',function(req , res){

    var fname = req.params.filename;

    //res.send(fname+".txt");

    fs.readFile(fname+".txt",function(err,data){

        if(!err)
        {
            console.log(data.toString());
            res.send(data.toString());
        }
        else
        {
            console.log(" !!! Error !!!")
            res.send(" !!!   Error   !!!");
        }
    
    });
    

});




