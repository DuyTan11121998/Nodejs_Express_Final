var _ = require("express");
var cookieParser=require("cookie-parser");
var app =_();

var apiControler = require("./control/apiControler")
var homeControler = require("./control/homeControler")


var port =3000;

//de truy cap den style.css
app.use("/assets",_.static(__dirname+"/publish"));
app.use (cookieParser());
//set up package EJS
app.set("view engine","ejs");

//custom middware
// return một cái url 
app.use("/",function(req,res,next){
    console.log("Request URL: ",req.url);
    req.requesTime = new Date();
    next(); //để các request phía sau tiếp tục được
})

apiControler(app);
homeControler(app);

app.listen(port,function(){
    console.log("Server is listening",port);
})