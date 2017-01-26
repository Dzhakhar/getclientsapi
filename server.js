var exp = require("express");
var app = exp();
var getIP = require("ipware")().get_ip;
app.use(function(req, res, next){
    var ipInfo = getIP(req);
    console.log(ipInfo);
    next();
})

app.get("/", function(req, res){
    res.send("Hello, World");
})

app.listen(3000, function(){
    console.log("Run :3000");
})
