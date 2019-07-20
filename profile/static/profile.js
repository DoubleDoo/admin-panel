function getinfo()
{
  fetch('http://localhost:3000/profile/info')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    let jsn=JSON.parse(JSON.stringify(myJson));
    let contentbox=document.createElement("div")
    contentbox.setAttribute("class","profileBox");
    let fotobox=document.createElement("div");
    fotobox.setAttribute("width","100");
    fotobox.setAttribute("height","100");
    fotobox.setAttribute("display","inline-block");
    fotobox.innerHTML="<img src=\""+jsn.foto+"\" alt=\"no img\" style=\"width: 100px; height: 100px ;\">";
    
    let surnamebox=document.createElement("div");
    surnamebox.setAttribute("display","inline-block");
    surnamebox.innerHTML="Surname: "+jsn.surname;

    let positionbox=document.createElement("div");
    positionbox.setAttribute("display","inline-block");
    positionbox.innerHTML="Position: "+jsn.position;

    let numberbox=document.createElement("div");
    numberbox.setAttribute("display","inline-block");
    numberbox.innerHTML="Number: "+jsn.number;

    let namebox=document.createElement("div");
    namebox.setAttribute("display","inline-block");
    namebox.innerHTML="Name: "+jsn.name;


      
    contentbox.appendChild(fotobox);
     contentbox.appendChild(surnamebox);
      contentbox.appendChild(positionbox);
      contentbox.appendChild(numberbox);
      contentbox.appendChild(namebox);
      
    document.getElementById("contentbox").appendChild(contentbox);   
  });
}




