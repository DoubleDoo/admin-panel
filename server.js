const profile = require("./profile");
const auntefication = require("./auntefication");
const division = require("./division");
const settings = require("./profiles");
const team = require("./team");
const teamplate = require("./teamplate");
const tournament = require("./tournament");
const http=require("http");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/profile/static'));
app.use(express.static(__dirname + '/auntefication/static'));
app.use(express.static(__dirname + '/division/static'));
app.use(express.static(__dirname + '/profiles/static'));
app.use(express.static(__dirname + '/team/static'));
app.use(express.static(__dirname + '/teamplate/static'));
app.use(express.static(__dirname + '/tournament/static'));
app.use(express.static(__dirname + '/img'));
app.use(express.static(__dirname + '/cap'));


app.get("/profile",
function(req,res)
{
    fs.readFile(__dirname + "/teamplate/teamplate.html", "utf8", 
                function(error, data)
                {
                    data = data.replace("{username}", "Dubinich")
                        .replace("{content}", fs.readFileSync(__dirname + "/profile/profile.html","utf8"))
                        .replace("{first}","profile" )
                        .replace("{second}","tournament")
                        .replace("{third}","division")
                        .replace("{fourth}","team")
                        .replace("{fives}","profiles");
                    res.end(data);
                }
    )
}
);

app.get("/tournament",
function(req,res)
{
    fs.readFile(__dirname + "/teamplate/teamplate.html", "utf8", 
                function(error, data)
                {
                    data = data.replace("{username}", "Dubinich")
                        .replace("{content}", fs.readFileSync(__dirname + "/tournament/tournament.html","utf8"))
                        .replace("{first}","profile" )
                        .replace("{second}","tournament")
                        .replace("{third}","division")
                        .replace("{fourth}","team")
                        .replace("{fives}","profiles");
                    res.end(data);
                }
    )
}
);

app.get("/division",
function(req,res)
{
    fs.readFile(__dirname + "/teamplate/teamplate.html", "utf8", 
                function(error, data)
                {
                    data = data.replace("{username}", "Dubinich")
                        .replace("{content}", fs.readFileSync(__dirname + "/division/division.html","utf8"))
                        .replace("{first}","profile" )
                        .replace("{second}","tournament")
                        .replace("{third}","division")
                        .replace("{fourth}","team")
                        .replace("{fives}","profiles");
                    res.end(data);
                }
    )
}
);

app.get("/team",
function(req,res)
{
    fs.readFile(__dirname + "/teamplate/teamplate.html", "utf8", 
                function(error, data)
                {
                    data = data.replace("{username}", "Dubinich")
                        .replace("{content}", fs.readFileSync(__dirname + "/team/team.html","utf8"))
                        .replace("{first}","profile" )
                        .replace("{second}","tournament")
                        .replace("{third}","division")
                        .replace("{fourth}","team")
                        .replace("{fives}","profiles");
                    res.end(data);
                }
    )
}
);

app.get("/profiles",
function(req,res)
{
    fs.readFile(__dirname + "/teamplate/teamplate.html", "utf8", 
                function(error, data)
                {
                    data = data.replace("{username}", "Dubinich")
                        .replace("{content}", fs.readFileSync(__dirname + "/profiles/profiles.html","utf8"))
                        .replace("{first}","profile" )
                        .replace("{second}","tournament")
                        .replace("{third}","division")
                        .replace("{fourth}","team")
                        .replace("{fives}","profiles");
                    res.end(data);
                }
    )
}
);

app.get("/profile/info",
function(req,res)
{
    fs.readFile(__dirname + "/cap/profile.json", "utf8", 
                function(error, data)
                {
                    res.end(data);
                }
    )
}
);

app.get("/tournament/info",
function(req,res)
{
    fs.readFile(__dirname + "/cap/tournament.json", "utf8", 
                function(error, data)
                {
                    res.end(data);
                }
    )
}
);

app.get("/profiles/info",
function(req,res)
{
    fs.readFile(__dirname + "/cap/profiles.json", "utf8", 
                function(error, data)
                {
                    res.end(data);
                }
    )
}
);

app.get("/profiles/info/:id",
function(req,res)
{
    var id = req.params.id;
    console.log(id);
    fs.readFile(__dirname + "/cap/profiles.json", "utf8", 
                function(error, data)
                {
                    let jsn=JSON.parse(data);
                    let i=0;
                    while(i<jsn.length)
                    {
                        console.log(i);
                         console.log(jsn[i]["id"]);
                      // (jsn[i]["id"].toString()).includes("1");
                        if(! (jsn[i]["id"].toString()).includes(req.params.id))
                           {
                            jsn.splice(i, 1);
                            i--;
                            
                        }
                        i++;
                        
                    }
                    console.log(jsn);
                    res.end(JSON.stringify(jsn));
                }
    )
}
);




app.post("/profiles/search",
function(req,res)
{
     console.log(req.body);
     fs.readFile(__dirname + "/cap/profiles.json", "utf8", 
                function(error, data)
                {
                    let jsn=JSON.parse(data);
                    let i=0;
                    while(i<jsn.length)
                    {
                        if(!((jsn[i]["name"]).includes(req.body.search)||(jsn[i]["surname"]).includes(req.body.search)||(jsn[i]["position"]).includes(req.body.search)||(jsn[i]["number"]).includes(req.body.search)))
                        {
                            //delete jsn[i];
                            jsn.splice(i, 1);
                            i--;
                            
                        }
                        i++;
                        
                    }
                    console.log(jsn);
                    res.end(JSON.stringify(jsn));
                }
    )
}
);

app.get("/team/info",
function(req,res)
{
    fs.readFile(__dirname + "/cap/team.json", "utf8", 
                function(error, data)
                {
                    res.end(data);
                }
    )
}
);

app.post("/team/search",
function(req,res)
{
     console.log(req.body);
     fs.readFile(__dirname + "/cap/team.json", "utf8", 
                function(error, data)
                {
                    let jsn=JSON.parse(data);
                    let i=0;
                    while(i<jsn.length)
                    {
                        if(!((jsn[i]["name"]).includes(req.body.search)))
                        {
                            //delete jsn[i];
                            jsn.splice(i, 1);
                            i--;
                            
                        }
                        i++;
                        
                    }
                    console.log(jsn);
                    res.end(JSON.stringify(jsn));
                }
    )
}
);

app.get("/team/info/:id",
function(req,res)
{
    var id = req.params.id;
    console.log(id);
    fs.readFile(__dirname + "/cap/team.json", "utf8", 
                function(error, data)
                {
                    let jsn=JSON.parse(data);
                    let i=0;
                    while(i<jsn.length)
                    {
                        console.log(i);
                         console.log(jsn[i]["id"]);
                      // (jsn[i]["id"].toString()).includes("1");
                        if(! (jsn[i]["id"].toString()).includes(req.params.id))
                           {
                            jsn.splice(i, 1);
                            i--;
                            
                        }
                        i++;
                        
                    }
                    console.log(jsn);
                    res.end(JSON.stringify(jsn));
                }
    )
}
);

app.get("/division/info",
function(req,res)
{
    fs.readFile(__dirname + "/cap/division.json", "utf8", 
                function(error, data)
                {
                    res.end(data);
                }
    )
}
);

app.post("/division/search",
function(req,res)
{
     console.log(req.body);
     fs.readFile(__dirname + "/cap/division.json", "utf8", 
                function(error, data)
                {
                    let jsn=JSON.parse(data);
                    let i=0;
                    while(i<jsn.length)
                    {
                        if(!((jsn[i]["name"]).includes(req.body.search)))
                        {
                            //delete jsn[i];
                            jsn.splice(i, 1);
                            i--;
                            
                        }
                        i++;
                        
                    }
                    console.log(jsn);
                    res.end(JSON.stringify(jsn));
                }
    )
}
);

app.get("/division/info/:id",
function(req,res)
{
    var id = req.params.id;
    console.log(id);
    fs.readFile(__dirname + "/cap/division.json", "utf8", 
                function(error, data)
                {
                    let jsn=JSON.parse(data);
                    let i=0;
                    while(i<jsn.length)
                    {
                        console.log(i);
                         console.log(jsn[i]["id"]);
                      // (jsn[i]["id"].toString()).includes("1");
                        if(! (jsn[i]["id"].toString()).includes(req.params.id))
                           {
                            jsn.splice(i, 1);
                            i--;
                            
                        }
                        i++;
                        
                    }
                    console.log(jsn);
                    res.end(JSON.stringify(jsn));
                }
    )
}
);



app.post("/tournament/search",
function(req,res)
{
     console.log(req.body);
     fs.readFile(__dirname + "/cap/tournament.json", "utf8", 
                function(error, data)
                {
                    let jsn=JSON.parse(data);
                    let i=0;
                    while(i<jsn.length)
                    {
                        if(!((jsn[i]["name"]).includes(req.body.search)))
                        {
                            //delete jsn[i];
                            jsn.splice(i, 1);
                            i--;
                            
                        }
                        i++;
                        
                    }
                    console.log(jsn);
                    res.end(JSON.stringify(jsn));
                }
    )
}
);

app.get("/tournament/info/:id",
function(req,res)
{
    var id = req.params.id;
    console.log(id);
    fs.readFile(__dirname + "/cap/tournament.json", "utf8", 
                function(error, data)
                {
                    let jsn=JSON.parse(data);
                    let i=0;
                    while(i<jsn.length)
                    {
                        console.log(i);
                         console.log(jsn[i]["id"]);
                      // (jsn[i]["id"].toString()).includes("1");
                        if(! (jsn[i]["id"].toString()).includes(req.params.id))
                           {
                            jsn.splice(i, 1);
                            i--;
                            
                        }
                        i++;
                        
                    }
                    console.log(jsn);
                    res.end(JSON.stringify(jsn));
                }
    )
}
);


app.listen(3000);
console.log("server started on port 3000");