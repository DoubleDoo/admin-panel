
function fill(myJson)
{
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
    
    contentbox.setAttribute("id",jsn[i].id);
    contentbox.setAttribute("onclick","getbyid("+jsn[i].id+");");
    document.getElementById("content").appendChild(contentbox);  
    } 
}

function getbyid(id)
{
   fetch('/profiles/info/'+id)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
   document.getElementById("srch").style.display="none";
   document.getElementById("content").innerHTML=""; 
       document.getElementById("left").style.display="inline-block";
    fill(myJson);
       
  });  
}

function getinfo()
{
  fetch('/profiles/info')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
   fill(myJson);
  }); 
}


function back()
{
    document.getElementById("srch").style.display="inline-block";
    document.getElementById("left").style.display="none";
    search();
}



function search() {
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
    
   document.getElementById("content").innerHTML=""; 
    fill(myJson);
  }); 
}
