const http=require("http");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app=express();
console.log("profile exported");

app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/teamplate/static'));

var init = function (req,res)
{
    console.log("Route /profile");
    let content=fs.readFileSync(__dirname + "/profile.html","utf8");
    res.sendFile(__dirname + "/teamplate/teamplate.html");
}

module.exports.init=init;