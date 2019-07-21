let fulltournamentinfo=false;
let tournament="";
let division="";
let comand= "";
let user="";

function tournamentblockgenerator(tournamentboxjson)
{
    let tournamentbox=document.createElement("div")
    tournamentbox.setAttribute("class","divisionbox");
    let fotobox=document.createElement("div");
    fotobox.setAttribute("class","fotobox");
    fotobox.innerHTML="<img src=\""+"prize.jpg"+"\" alt=\"no img\" style=\"width: 100px; height: 100px ;\">";

    let namebox=document.createElement("div");
    namebox.setAttribute("class","namebox");
    namebox.innerHTML=tournamentboxjson.name;
    

    tournamentbox.appendChild(fotobox);
    tournamentbox.appendChild(namebox);
   
    tournamentbox.setAttribute("id",tournamentboxjson.id);
    tournamentbox.setAttribute("onclick","tournamentgetbyid("+tournamentboxjson.id+");");
    return tournamentbox;
}


function extendedtournamentblockgenerator(tournamentboxjson)
{
    
    let tournamentbox=document.createElement("div")
    tournamentbox.setAttribute("class","teamboxextended");
    
    let fotobox=document.createElement("div");
    fotobox.setAttribute("class","teamfotoboxextended");
    fotobox.innerHTML="<img src=\""+"prize.jpg"+"\" alt=\"no img\" style=\"width: 100px; height: 100px ;\">";

    let namebox=document.createElement("div");
    namebox.setAttribute("class","teamnameboxextended");
    namebox.innerHTML=tournamentboxjson.name+"<div class='headtxt'>teams</div>";
    namebox.appendChild(addblockgenerator());
    namebox.innerHTML=namebox.innerHTML+"<hr>";
    
    let datebox=document.createElement("div");
    datebox.setAttribute("class","teamdateboxextended");
    datebox.innerHTML="Creation date: "+tournamentboxjson.creationdate;
    
    let fotoandinfobox=document.createElement("div")
    fotoandinfobox.setAttribute("class","imageandinfobox");
    fotoandinfobox.appendChild(fotobox);
    fotoandinfobox.appendChild(datebox);
    
    let usersbox=document.createElement("div")
    usersbox.setAttribute("class","usersbox");
    
    let header=document.createElement("div")
    header.setAttribute("class","headbox");
    header.appendChild(namebox);
    usersbox.appendChild(header); 
    for(i=0;i<tournamentboxjson["divisionlist"].length;i++)
    {
        fetch('/division/info/'+tournamentboxjson["divisionlist"][i])
        .then(function(response) {
        return response.json();
        })
        .then(function(myJson) {
        let blck=divisionblockgenerator(myJson[0]);
        usersbox.appendChild(blck);   
        }); 
    }
    tournamentbox.appendChild(fotoandinfobox);
    tournamentbox.appendChild(usersbox);
    return tournamentbox;
}

function tournamentfill(myJson)
{
    document.getElementById("content").innerHTML=""; 
    let jsn=JSON.parse(JSON.stringify(myJson));
    for(i=0;i<jsn.length;i++){
    
    if(fulltournamentinfo)
    {
        
       document.getElementById("srch").style.display="none";
       document.getElementById("plus").style.display="none"; 
       document.getElementById("left").style.display="inline-block";
       document.getElementById("content").appendChild(extendedtournamentblockgenerator(jsn[i]));  
    } 
    else
    {
        document.getElementById("srch").style.display="inline-block";
        document.getElementById("plus").style.display="inline-block"; 
        document.getElementById("left").style.display="none";
        document.getElementById("content").appendChild(tournamentblockgenerator(jsn[i]));  
    }
    } 
    fulltournamentinfo=false;
}

function divisionblockgenerator(divisionjson)
{
    let divisionbox=document.createElement("div")
    divisionbox.setAttribute("class","divisionbox");
    let fotobox=document.createElement("div");
    fotobox.setAttribute("class","fotobox");
    fotobox.innerHTML="<img src=\""+divisionjson.foto+"\" alt=\"no img\" style=\"width: 100px; height: 100px ;\">";

    let namebox=document.createElement("div");
    namebox.setAttribute("class","namebox");
    namebox.innerHTML=divisionjson.name;
    

    divisionbox.appendChild(fotobox);
    divisionbox.appendChild(namebox);
   
    divisionbox.setAttribute("id",divisionjson.id);
    divisionbox.setAttribute("onclick","divisiongetbyid("+divisionjson.id+");");
    return divisionbox;
}


function extendeddivisionblockgenerator(divisionjson)
{
    
    let divisionbox=document.createElement("div")
    divisionbox.setAttribute("class","teamboxextended");
    
    let fotobox=document.createElement("div");
    fotobox.setAttribute("class","teamfotoboxextended");
    fotobox.innerHTML="<img src=\""+divisionjson.foto+"\" alt=\"no img\" style=\"width: 100px; height: 100px ;\">";

    let namebox=document.createElement("div");
    namebox.setAttribute("class","teamnameboxextended");
    namebox.innerHTML=divisionjson.name+" teams<hr>";
    
    let datebox=document.createElement("div");
    datebox.setAttribute("class","teamdateboxextended");
    datebox.innerHTML="Creation date: "+divisionjson.creationdate;
    
    let fotoandinfobox=document.createElement("div")
    fotoandinfobox.setAttribute("class","imageandinfobox");
    fotoandinfobox.appendChild(fotobox);
    fotoandinfobox.appendChild(datebox);
    
    let usersbox=document.createElement("div")
    usersbox.setAttribute("class","usersbox");
    
    let header=document.createElement("div")
    header.setAttribute("class","headbox");
    header.appendChild(namebox);
    usersbox.appendChild(header); 
    for(i=0;i<divisionjson["comandidlist"].length;i++)
    {
        fetch('/team/info/'+divisionjson["comandidlist"][i])
        .then(function(response) {
        return response.json();
        })
        .then(function(myJson) {
        let blck=teamblockgenerator(myJson[0]);
        usersbox.appendChild(blck);   
        }); 
    }
    divisionbox.appendChild(fotoandinfobox);
    divisionbox.appendChild(usersbox);
    return divisionbox;
}

function divisionfill(myJson)
{
    document.getElementById("content").innerHTML=""; 
    let jsn=JSON.parse(JSON.stringify(myJson));
    for(i=0;i<jsn.length;i++){
    
    if(fulldivisioninfo)
    {
        
       document.getElementById("srch").style.display="none";
       document.getElementById("plus").style.display="none"; 
       document.getElementById("left").style.display="inline-block";
       document.getElementById("content").appendChild(extendeddivisionblockgenerator(jsn[i]));  
    } 
    else
    {
        document.getElementById("srch").style.display="inline-block";
        document.getElementById("plus").style.display="inline-block"; 
        document.getElementById("left").style.display="none";
        document.getElementById("content").appendChild(divisionblockgenerator(jsn[i]));  
    }
    } 
    fulldivisioninfo=false;
}

function extendeduserblockgenerator(userjson)
{
    let userbox=document.createElement("div")
    userbox.setAttribute("class","userboxextended");    
    let imagebox=document.createElement("div")
    imagebox.setAttribute("class","imagebox");
    let fotobox=document.createElement("div");
    fotobox.setAttribute("class","fotoboxextended");
    fotobox.innerHTML="<img src=\""+userjson.foto+"\" alt=\"no img\" style=\"width: 100px; height: 100px ;\">";
    imagebox.appendChild(fotobox);
    
    let infobox=document.createElement("div")
    infobox.setAttribute("class","infobox");
    let namebox=document.createElement("div");
    namebox.setAttribute("class","nameboxextended");
    namebox.innerHTML="Name: "+userjson.name;
    
    let surnamebox=document.createElement("div");
    surnamebox.setAttribute("class","surnameboxextended");
    surnamebox.innerHTML="Surname: "+userjson.surname;

    let positionbox=document.createElement("div");
    positionbox.setAttribute("class","positionboxextended");
    positionbox.innerHTML="Position: "+userjson.position;

    let numberbox=document.createElement("div");
    numberbox.setAttribute("class","numberboxextended");
    numberbox.innerHTML="Number: "+userjson.number;

    imagebox.appendChild(fotobox);
    infobox.appendChild(namebox);
    infobox.appendChild(surnamebox);
    infobox.appendChild(positionbox);
    infobox.appendChild(numberbox);
    userbox.appendChild(imagebox);
    userbox.appendChild(infobox);
    return userbox;
}

function teamblockgenerator(teamjson)
{
    let teambox=document.createElement("div")
    teambox.setAttribute("class","teambox");
    
    let fotobox=document.createElement("div");
    fotobox.setAttribute("class","fotobox");
    fotobox.innerHTML="<img src=\""+teamjson.foto+"\" alt=\"no img\" style=\"width: 100px; height: 100px ;\">";

    let namebox=document.createElement("div");
    namebox.setAttribute("class","namebox");
    namebox.innerHTML=teamjson.name;
    
    teambox.appendChild(fotobox);
    teambox.appendChild(namebox);
    
    teambox.setAttribute("id",teamjson.id);
    teambox.setAttribute("onclick","teamgetbyid("+teamjson.id+");");
    return teambox;
}

function userblockgenerator(userjson)
{
    let userbox=document.createElement("div")
    userbox.setAttribute("class","userbox");
    let fotobox=document.createElement("div");
    fotobox.setAttribute("class","fotobox");
    fotobox.innerHTML="<img src=\""+userjson.foto+"\" alt=\"no img\" style=\"width: 100px; height: 100px ;\">";

    let namebox=document.createElement("div");
    namebox.setAttribute("class","namebox");
    namebox.innerHTML=userjson.name;
    
    let surnamebox=document.createElement("div");
    surnamebox.setAttribute("class","surnamebox");
    surnamebox.innerHTML=userjson.surname;

    let positionbox=document.createElement("div");
    positionbox.setAttribute("class","positionbox");
    positionbox.innerHTML=userjson.position;

    userbox.appendChild(fotobox);
    userbox.appendChild(namebox);
    userbox.appendChild(surnamebox);
    userbox.appendChild(positionbox);
    
    userbox.setAttribute("id",userjson.id);
    userbox.setAttribute("onclick","usergetbyid("+userjson.id+");");
    return userbox;
}

function extendedteamblockgenerator(teamjson)
{
    let teambox=document.createElement("div")
    teambox.setAttribute("class","teamboxextended");
    
    let fotobox=document.createElement("div");
    fotobox.setAttribute("class","teamfotoboxextended");
    fotobox.innerHTML="<img src=\""+teamjson.foto+"\" alt=\"no img\" style=\"width: 100px; height: 100px ;\">";

    
    let datebox=document.createElement("div");
    datebox.setAttribute("class","teamdateboxextended");
    datebox.innerHTML="Creation date: "+teamjson.creationdate;
	
    let namebox=document.createElement("div");
    namebox.setAttribute("class","teamnameboxextended");
    namebox.innerHTML=teamjson.name+" team members <hr>";
	 let header=document.createElement("div")
    header.setAttribute("class","headbox");
    header.appendChild(namebox);
	
	
	let coachbox=document.createElement("div");
    coachbox.setAttribute("class","teamnameboxextended");
    coachbox.innerHTML="coachers <hr>";
	let header1=document.createElement("div")
    header1.setAttribute("class","headbox");
    header1.appendChild(coachbox);
	let coachmembers=document.createElement("div");
    coachmembers.setAttribute("class","smallusersbox");
	
	let playerbox=document.createElement("div");
    playerbox.setAttribute("class","teamnameboxextended");
    playerbox.innerHTML="players <hr>";
	let header2=document.createElement("div")
    header2.setAttribute("class","headbox");
    header2.appendChild(playerbox);
	let playerbmembers=document.createElement("div");
    playerbmembers.setAttribute("class","smallusersbox");
	
	let captainbox=document.createElement("div");
    captainbox.setAttribute("class","teamnameboxextended");
    captainbox.innerHTML="captains <hr>";
	let header3=document.createElement("div")
    header3.setAttribute("class","headbox");
    header3.appendChild(captainbox);
	let captainmembers=document.createElement("div");
    captainmembers.setAttribute("class","smallusersbox");
    
    let administratorbox=document.createElement("div");
    administratorbox.setAttribute("class","teamnameboxextended");
    administratorbox.innerHTML="administrators <hr>";
	let header4=document.createElement("div")
    header4.setAttribute("class","headbox");
    header4.appendChild(administratorbox);
	let administratormembers=document.createElement("div");
    administratormembers.setAttribute("class","smallusersbox");
    
    let fotoandinfobox=document.createElement("div")
    fotoandinfobox.setAttribute("class","imageandinfobox");
    fotoandinfobox.appendChild(fotobox);
    fotoandinfobox.appendChild(datebox);
    
    let usersbox=document.createElement("div")
    usersbox.setAttribute("class","usersbox");
    
   
   
    for(i=0;i<teamjson["userlist"].length;i++)
    {
		let role=teamjson["userlist"][i][1];
        fetch('/profiles/info/'+teamjson["userlist"][i][0])
        .then(function(response) {
        return response.json();
        })
        .then(function(myJson) {
        let blck=userblockgenerator(myJson[0]);
        //blck.appendChild(positionboxteam);
		if(role=="administrator")
		{
		   administratorbox.appendChild(blck); 
		}
		else if(role=="player")
		{
			playerbox.appendChild(blck); 
		}
		else if(role=="coach")
		{
			coachbox.appendChild(blck); 
		}
     	else if(role=="captain")
		{
			captainbox.appendChild(blck); 
		}
           
        }); 
    }
	usersbox.appendChild(header); 
	usersbox.appendChild(header4); 
	usersbox.appendChild(administratormembers); 
	usersbox.appendChild(header1); 
	usersbox.appendChild(coachmembers); 
	usersbox.appendChild(header3);
	usersbox.appendChild(captainbox); 
	usersbox.appendChild(header2); 
	usersbox.appendChild(playerbox); 
    teambox.appendChild(fotoandinfobox);
    teambox.appendChild(usersbox);
    return teambox;
}

function teamgetbyid(id)
{
   fetch('/team/info/'+id)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    fullteaminfo=true;
    teamfill(myJson);
    comand=id;
  });  
}



function usergetbyid(id)
{
   fetch('/profiles/info/'+id)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
   userfill(myJson);
     user=id;  
  });  
}


function teamfill(myJson)
{
    document.getElementById("content").innerHTML=""; 
    let jsn=JSON.parse(JSON.stringify(myJson));
    for(i=0;i<jsn.length;i++){
    
    if(fullteaminfo)
    {
        
       document.getElementById("srch").style.display="none";
       document.getElementById("plus").style.display="none"; 
       document.getElementById("left").style.display="inline-block";
       document.getElementById("content").appendChild(extendedteamblockgenerator(jsn[i]));  
    } 
    else
    {
        document.getElementById("srch").style.display="inline-block";
        document.getElementById("plus").style.display="inline-block"; 
        document.getElementById("left").style.display="none";
        document.getElementById("content").appendChild(teamblockgenerator(jsn[i]));  
    }
    } 
    fullteaminfo=false;
}



function userfill(myJson)
{
    document.getElementById("content").innerHTML=""; 
    let jsn=JSON.parse(JSON.stringify(myJson));
    for(i=0;i<jsn.length;i++) 
    {   
            document.getElementById("left").style.display="inline-block";
            document.getElementById("plus").style.display="none";
            document.getElementById("srch").style.display="none";
            document.getElementById("content").appendChild(extendeduserblockgenerator(jsn[i]));     
    }
    fullinfo=false;
}

function divisiongetbyid(id)
{
   fetch('/division/info/'+id)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
   document.getElementById("srch").style.display="none";
   document.getElementById("content").innerHTML=""; 
       document.getElementById("left").style.display="inline-block";
    fulldivisioninfo=true;
    divisionfill(myJson);
    division=id;
  });  
}

function tournamentgetbyid(id)
{
    document.getElementById("left").style.display="inline-block";
    document.getElementById("plus").style.display="none";
    
   fetch('/tournament/info/'+id)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
   document.getElementById("srch").style.display="none";
   document.getElementById("content").innerHTML=""; 
       document.getElementById("left").style.display="inline-block";
    fulltournamentinfo=true;
    tournamentfill(myJson);
    tournament=id;
  });  
}

function tournamentgetinfo()
{
    document.getElementById("plus").style.display="inline-block";
    document.getElementById("left").style.display="none";
     document.getElementById("content").innerHTML=""; 
  fetch('/tournament/info')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
   tournamentfill(myJson);
  }); 
}


function tournamentback()
{
    if(user.length<1)
    {
        if(comand.length<1)
        {
            if(division.length<1)
            {
                document.getElementById("srch").style.display="inline-block";
                document.getElementById("left").style.display="none";
                document.getElementById("plus").style.display="inline-block";
                tournamentsearch();
                toyrnament="";   
            }
            else
            {
                division="";
                tournamentgetbyid(tournament);
            }  
        }
        else
        {
        comand="";
        divisiongetbyid(division);
        }
        
    }
    else 
    {
        user="";
        teamgetbyid(comand);
    }

    
}



function tournamentsearch() {
    let serchbox=document.getElementById("srchb");
    let str=serchbox.value;
    fetch('/tournament/search',
  {
    method: 'POST',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }),
    mode: 'same-origin',
    body: JSON.stringify({ search: str })
  }
).then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    
   document.getElementById("content").innerHTML=""; 
    tournamentfill(myJson);
  }); 
}

function tournamentadd()
{
    alert("add model");
}
