let fullinfo=false;
let division=""
let comand= "";
let user="";
function fill(myJson)
{
    
    document.getElementById("content").innerHTML=""; 
    let jsn=JSON.parse(JSON.stringify(myJson));
    for(i=0;i<jsn.length;i++){
    let contentbox=document.createElement("div")
    contentbox.setAttribute("class","profileBox");
    let fotobox=document.createElement("div");
    fotobox.setAttribute("width","100");
    fotobox.setAttribute("height","100");
    fotobox.setAttribute("display","inline-block");
    fotobox.innerHTML="<img src=\""+jsn[i].foto+"\" alt=\"no img\" style=\"width: 100px; height: 100px ;\">";
    
    let namebox=document.createElement("div");
    namebox.setAttribute("display","inline-block");
    namebox.innerHTML="Name: "+jsn[i].name;
    
    let surnamebox=document.createElement("div");
    surnamebox.setAttribute("display","inline-block");
    surnamebox.innerHTML="Creation date: "+jsn[i].creationdate;

    



      
    contentbox.appendChild(fotobox);
    contentbox.appendChild(namebox);
    contentbox.appendChild(surnamebox);
    if(fullinfo)
    {
        
         for(j=0;j<jsn[i]["comandidlist"].length;j++){
                let contentboxx=document.createElement("div")
                contentboxx.setAttribute("class","profileBox");
                let fotoboxx=document.createElement("div");
                fotoboxx.setAttribute("width","100");
                fotoboxx.setAttribute("height","100");
                fotoboxx.setAttribute("display","inline-block");
                fotoboxx.innerHTML="<img src=\""+jsn[i].foto+"\" alt=\"no img\" style=\"width: 100px; height: 100px ;\">";

                let nameboxx=document.createElement("div");
                nameboxx.setAttribute("display","inline-block");
                nameboxx.innerHTML="ID: "+jsn[i].comandidlist[j];

             
                contentboxx.setAttribute("id",jsn[i].comandidlist[j]);
                contentboxx.setAttribute("onclick","getcomandbyid("+jsn[i].comandidlist[j]+");");
             
             contentboxx.appendChild(fotoboxx);
             contentboxx.appendChild(nameboxx);
             contentbox.appendChild(contentboxx);
         }
    }  
    if(!fullinfo){
    contentbox.setAttribute("id",jsn[i].id);
    contentbox.setAttribute("onclick","getbyid("+jsn[i].id+");");
    }
    document.getElementById("content").appendChild(contentbox);  
    } 
    fullinfo=false;
}

function getcomandbyid(id)
{    
   fetch('/team/info/'+id)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
        document.getElementById("content").innerHTML=""; 
       fullinfo=true;
       fillcomand(myJson);
       comand=id;
  });  
    
}

function fillcomand(myJson)
{
    
    document.getElementById("content").innerHTML=""; 
    let jsn=JSON.parse(JSON.stringify(myJson));
    for(i=0;i<jsn.length;i++){
    let contentbox=document.createElement("div")
    contentbox.setAttribute("class","profileBox");
    let fotobox=document.createElement("div");
    fotobox.setAttribute("width","100");
    fotobox.setAttribute("height","100");
    fotobox.setAttribute("display","inline-block");
    fotobox.innerHTML="<img src=\""+jsn[i].foto+"\" alt=\"no img\" style=\"width: 100px; height: 100px ;\">";
    
    let namebox=document.createElement("div");
    namebox.setAttribute("display","inline-block");
    namebox.innerHTML="Name: "+jsn[i].name;
    
    let surnamebox=document.createElement("div");
    surnamebox.setAttribute("display","inline-block");
    surnamebox.innerHTML="Creation date: "+jsn[i].creationdate;

    



      
    contentbox.appendChild(fotobox);
    contentbox.appendChild(namebox);
    contentbox.appendChild(surnamebox);
    if(fullinfo)
    {
        
         for(j=0;j<jsn[i]["userlist"].length;j++){
                let contentboxx=document.createElement("div")
                contentboxx.setAttribute("class","profileBox");
                let fotoboxx=document.createElement("div");
                fotoboxx.setAttribute("width","100");
                fotoboxx.setAttribute("height","100");
                fotoboxx.setAttribute("display","inline-block");
                fotoboxx.innerHTML="<img src=\""+jsn[i].foto+"\" alt=\"no img\" style=\"width: 100px; height: 100px ;\">";

                let nameboxx=document.createElement("div");
                nameboxx.setAttribute("display","inline-block");
                nameboxx.innerHTML="ID: "+jsn[i].userlist[j][0];

                let surnameboxx=document.createElement("div");
                surnameboxx.setAttribute("display","inline-block");
                surnameboxx.innerHTML="Role: "+jsn[i].userlist[j][1];
             
                contentboxx.setAttribute("id",jsn[i].userlist[j][0]);
                contentboxx.setAttribute("onclick","getuserbyid("+jsn[i].userlist[j][0]+");");
             
             contentboxx.appendChild(fotoboxx);
             contentboxx.appendChild(nameboxx);
             contentboxx.appendChild(surnameboxx);
             contentbox.appendChild(contentboxx);
         }
    }  
    if(!fullinfo){
    contentbox.setAttribute("id",jsn[i].id);
    contentbox.setAttribute("onclick","getcomandbyid("+jsn[i].id+");");
    }
    document.getElementById("content").appendChild(contentbox);  
    } 
    fullinfo=false;
}

function getuserbyid(id)
{    
     document.getElementById("left").style.display="inline-block";
    document.getElementById("plus").style.display="none";
   fetch('/profiles/info/'+id)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
        document.getElementById("content").innerHTML=""; 
       filluser(myJson);
       user=id;
  });  
    
}

 function filluser(myJson)
{
    document.getElementById("content").innerHTML=""; 
    document.getElementById("plus").style.display="none";
    let jsn=JSON.parse(JSON.stringify(myJson));
    for(i=0;i<jsn.length;i++){
    let contentbox=document.createElement("div")
    contentbox.setAttribute("class","profileBox");
    let fotobox=document.createElement("div");
    fotobox.setAttribute("width","100");
    fotobox.setAttribute("height","100");
    fotobox.setAttribute("display","inline-block");
    fotobox.innerHTML="<img src=\""+jsn[i].foto+"\" alt=\"no img\" style=\"width: 100px; height: 100px ;\">";
    
    let surnamebox=document.createElement("div");
    surnamebox.setAttribute("display","inline-block");
    surnamebox.innerHTML="Surname: "+jsn[i].surname;

    let positionbox=document.createElement("div");
    positionbox.setAttribute("display","inline-block");
    positionbox.innerHTML="Position: "+jsn[i].position;

    let numberbox=document.createElement("div");
    numberbox.setAttribute("display","inline-block");
    numberbox.innerHTML="Number: "+jsn[i].number;

    let namebox=document.createElement("div");
    namebox.setAttribute("display","inline-block");
    namebox.innerHTML="Name: "+jsn[i].name;


      
    contentbox.appendChild(fotobox);
    contentbox.appendChild(namebox);
    contentbox.appendChild(surnamebox);
    contentbox.appendChild(positionbox);
    contentbox.appendChild(numberbox);
    
    document.getElementById("content").appendChild(contentbox);  
    } 
}

 



function getbyid(id)
{
    document.getElementById("left").style.display="inline-block";
    document.getElementById("plus").style.display="none";
    
   fetch('/division/info/'+id)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
   document.getElementById("srch").style.display="none";
   document.getElementById("content").innerHTML=""; 
       document.getElementById("left").style.display="inline-block";
    fullinfo=true;
    fill(myJson);
    division=id;
  });  
}

function getinfo()
{
    document.getElementById("plus").style.display="inline-block";
    document.getElementById("left").style.display="none";
     document.getElementById("content").innerHTML=""; 
  fetch('/division/info')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
   fill(myJson);
  }); 
}


function back()
{
    if(user.length<1)
    {
        if(comand.length<1)
        {
        document.getElementById("srch").style.display="inline-block";
        document.getElementById("left").style.display="none";
        document.getElementById("plus").style.display="inline-block";
        search();
        division="";   
        }
        else
        {
        comand="";
        getbyid(division);
        }
        
    }
    else 
    {
        user="";
        getcomandbyid(comand);
    }

    
}



function search() {
    let serchbox=document.getElementById("srchb");
    let str=serchbox.value;
    fetch('/division/search',
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
    fill(myJson);
  }); 
}
