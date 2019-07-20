let fullinfo=false;

function userfill(myJson)
{
    document.getElementById("content").innerHTML=""; 
    let jsn=JSON.parse(JSON.stringify(myJson));
    for(i=0;i<jsn.length;i++) 
    {   
        if(fullinfo)
        {
            document.getElementById("left").style.display="inline-block";
            document.getElementById("plus").style.display="none";
            document.getElementById("srch").style.display="none";
            document.getElementById("content").appendChild(extendeduserblockgenerator(jsn[i]));     
        }
        else
        {
            document.getElementById("plus").style.display="inline-block";
            document.getElementById("left").style.display="none";
            document.getElementById("srch").style.display="inline-block";
            document.getElementById("content").appendChild(userblockgenerator(jsn[i]));   
        }
    }
    fullinfo=false;
}

function usergetbyid(id)
{
   fetch('/profiles/info/'+id)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
   fullinfo=true;
   userfill(myJson);
       
  });  
}

function usergetinfo()
{
  fetch('/profiles/info')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
   fullinfo=false;
   userfill(myJson);
  }); 
}


function userback()
{
    usersearch();
}



function usersearch() {
    let serchbox=document.getElementById("srchb");
    let str=serchbox.value;
    fetch('/profiles/search',
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
    fullinfo=false;
    userfill(myJson);
  }); 
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

function useradd()
{
    alert("add model");
}

