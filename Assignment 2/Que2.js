var exp = require('express');

var app = new exp();

app.listen(8500,function(){
    
    console.log("Server Running On 8500 Port");

});

app.get('/login/:id/:pass',function(req,res){

     id = req.params.id;
    pass = req.params.pass;

    
    if(id == 'object')
    {
        if(pass == 'knowit')
        {
            res.send("<h2> You Are Succefully Log In <h2>");
        }
        else
        {
            res.send("<h2>!!!  Password Wrong   !!!<h2>");
        }
    }
    else
    {
        res.send("<h2> !!! Incorrect User ID  !!!<h2>");
    }

});