var http=require("http");
var fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
var app=express();

app.get("/profile",function(req,res)
{
    console.log("Route /profile");
    res.send("qqq");
});

app.listen(3000);
console.log("server started on port 3000");
