
let adminlogin="abc";
let adminpassword="123";
let signature="testsign2019";
let enabledtoken="none";

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
const jsonwebtoken = require("jsonwebtoken");
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
app.use(express.static(__dirname + '/login/static'));
app.use(express.static(__dirname + '/img'));
app.use(express.static(__dirname + '/cap'));

function generateToken(user) {

    const data =  {
      login:user.login,
	  password:user.password
    };
    const expiration = '6h';
    return jsonwebtoken.sign({ data, }, signature, { expiresIn: expiration });
}

function checktocken(req)
{
	var list = {},
        rc = req.headers.cookie;

    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });
	if (JSON.parse(JSON.stringify(list)).token==enabledtoken) return true;
	else return false;
}

app.get("/profile",
function(req,res)
{ 
    
	if(checktocken(req)){
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
	else {
		res.status(404).send('You have not permision!');
	}
}
);

app.get("/tournament",
function(req,res)
{
	if(checktocken(req)){
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
	else {
		res.status(404).send('You have not permision!');
	}
}
);

app.get("/division",
function(req,res)
{
	if(checktocken(req)){
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
	else {
		res.status(404).send('You have not permision!');
	}
}
);

app.get("/team",
function(req,res)
{
	if(checktocken(req)){
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
	else {
		res.status(404).send('You have not permision!');
	}
}
);

app.get("/profiles",
function(req,res)
{
	if(checktocken(req)){
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
	else {
		res.status(404).send('You have not permision!');
	}
}
);

app.get("/autorization",
function(req,res)
{
	
    fs.readFile(__dirname + "/login/login.html", "utf8", 
                function(error, data)
                {
                    res.end(data);
                }
    )
	
}
);

app.get("/profile/info",
function(req,res)
{
	if(checktocken(req)){
    fs.readFile(__dirname + "/cap/profile.json", "utf8", 
                function(error, data)
                {
                    res.end(data);
                }
    )
		}
	else {
		res.status(404).send('You have not permision!');
	}
}
);

app.get("/tournament/info",
function(req,res)
{
	if(checktocken(req)){
    fs.readFile(__dirname + "/cap/tournament.json", "utf8", 
                function(error, data)
                {
                    res.end(data);
                }
    )
		}
	else {
		res.status(404).send('You have not permision!');
	}
}
);

app.get("/profiles/info",
function(req,res)
{
	if(checktocken(req)){
    fs.readFile(__dirname + "/cap/profiles.json", "utf8", 
                function(error, data)
                {
                    res.end(data);
                }
    )
		}
	else {
		res.status(404).send('You have not permision!');
	}
}
);

app.get("/profiles/info/:id",
function(req,res)
{
	if(checktocken(req)){
    var id = req.params.id;
    fs.readFile(__dirname + "/cap/profiles.json", "utf8", 
                function(error, data)
                {
                    let jsn=JSON.parse(data);
                    let i=0;
                    while(i<jsn.length)
                    {
                        
                        if(! (jsn[i]["id"].toString()).includes(req.params.id))
                           {
                            jsn.splice(i, 1);
                            i--;
                            
                        }
                        i++;
                        
                    }
                    res.end(JSON.stringify(jsn));
                }
    )
		}
	else {
		res.status(404).send('You have not permision!');
	}
}
);




app.post("/profiles/search",
function(req,res)
{

	if(checktocken(req)){
     fs.readFile(__dirname + "/cap/profiles.json", "utf8", 
                function(error, data)
                {
                    let jsn=JSON.parse(data);
                    let i=0;
                    while(i<jsn.length)
                    {
                        if(!((jsn[i]["name"]).includes(req.body.search)||(jsn[i]["surname"]).includes(req.body.search)||(jsn[i]["position"]).includes(req.body.search)||(jsn[i]["number"]).includes(req.body.search)))
                        {
                           
                            jsn.splice(i, 1);
                            i--;
                            
                        }
                        i++;
                        
                    }
    
                    res.end(JSON.stringify(jsn));
                }
    )
		}
	else {
		res.status(404).send('You have not permision!');
	}
}
);

app.get("/team/info",
function(req,res)
{
	if(checktocken(req)){
    fs.readFile(__dirname + "/cap/team.json", "utf8", 
                function(error, data)
                {
                    res.end(data);
                }
    )
		}
	else {
		res.status(404).send('You have not permision!');
	}
}
);

app.post("/team/search",
function(req,res)
{
    
	if(checktocken(req)){
     fs.readFile(__dirname + "/cap/team.json", "utf8", 
                function(error, data)
                {
                    let jsn=JSON.parse(data);
                    let i=0;
                    while(i<jsn.length)
                    {
                        if(!((jsn[i]["name"]).includes(req.body.search)))
                        {
                            jsn.splice(i, 1);
                            i--;
                            
                        }
                        i++;
                        
                    }
                    res.end(JSON.stringify(jsn));
                }
    )
		}
	else {
		res.status(404).send('You have not permision!');
	}
}
);

app.get("/team/info/:id",
function(req,res)
{
	if(checktocken(req)){
    var id = req.params.id;
    fs.readFile(__dirname + "/cap/team.json", "utf8", 
                function(error, data)
                {
                    let jsn=JSON.parse(data);
                    let i=0;
                    while(i<jsn.length)
                    {
                        if(! (jsn[i]["id"].toString()).includes(req.params.id))
                           {
                            jsn.splice(i, 1);
                            i--;
                            
                        }
                        i++;
                        
                    }
                    res.end(JSON.stringify(jsn));
                }
    )
		}
	else {
		res.status(404).send('You have not permision!');
	}
}
);

app.get("/division/info",
function(req,res)
{
	if(checktocken(req)){
    fs.readFile(__dirname + "/cap/division.json", "utf8", 
                function(error, data)
                {
                    res.end(data);
                }
    )
		}
	else {
		res.status(404).send('You have not permision!');
	}
}
);

app.post("/division/search",
function(req,res)
{
	if(checktocken(req)){
     fs.readFile(__dirname + "/cap/division.json", "utf8", 
                function(error, data)
                {
                    let jsn=JSON.parse(data);
                    let i=0;
                    while(i<jsn.length)
                    {
                        if(!((jsn[i]["name"]).includes(req.body.search)))
                        {
                            jsn.splice(i, 1);
                            i--;
                            
                        }
                        i++;
                        
                    }
                    res.end(JSON.stringify(jsn));
                }
    )
		}
	else {
		res.status(404).send('You have not permision!');
	}
}
);

app.get("/division/info/:id",
function(req,res)
{
	if(checktocken(req)){
    var id = req.params.id;

    fs.readFile(__dirname + "/cap/division.json", "utf8", 
                function(error, data)
                {
                    let jsn=JSON.parse(data);
                    let i=0;
                    while(i<jsn.length)
                    {
                        if(! (jsn[i]["id"].toString()).includes(req.params.id))
                           {
                            jsn.splice(i, 1);
                            i--;
                            
                        }
                        i++;
                        
                    }
 
                    res.end(JSON.stringify(jsn));
                }
    )
		}
	else {
		res.status(404).send('You have not permision!');
	}
}
);



app.post("/tournament/search",
function(req,res)
{
;
	if(checktocken(req)){
     fs.readFile(__dirname + "/cap/tournament.json", "utf8", 
                function(error, data)
                {
                    let jsn=JSON.parse(data);
                    let i=0;
                    while(i<jsn.length)
                    {
                        if(!((jsn[i]["name"]).includes(req.body.search)))
                        {
           
                            jsn.splice(i, 1);
                            i--;
                            
                        }
                        i++;
                        
                    }
                    res.end(JSON.stringify(jsn));
                }
    )
		}
	else {
		res.status(404).send('You have not permision!');
	}
}
);

app.get("/tournament/info/:id",
function(req,res)
{
	if(checktocken(req)){
    var id = req.params.id;
    fs.readFile(__dirname + "/cap/tournament.json", "utf8", 
                function(error, data)
                {
                    let jsn=JSON.parse(data);
                    let i=0;
                    while(i<jsn.length)
                    {
                        if(! (jsn[i]["id"].toString()).includes(req.params.id))
                           {
                            jsn.splice(i, 1);
                            i--;
                            
                        }
                        i++;
                        
					}
                    res.end(JSON.stringify(jsn));
                }
    )
		}
	else {
		res.status(404).send('You have not permision!');
	}
}
);

app.post("/autorization/login",
function(req,res)
{
	if(req.body.login==adminlogin && req.body.password==adminpassword)
	{
		let token=generateToken(req.body);
		enabledtoken=token;
		res.end(JSON.stringify(token));
	}
	else
	{
		res.status(403).send('Wrong login or password!');
	}
	}
);

app.get("/autorization/logout",
function(req,res)
{
	enabledtoken="none";
}
);

app.listen(3000);
console.log("server started on port 3000");