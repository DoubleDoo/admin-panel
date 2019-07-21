function logout()
{
    fetch("/autorization/logout");
	document.location.href = "/autorization";
}

function addblockgenerator()
{
    let addbox=document.createElement("div");
    addbox.innerHTML="<img src=\""+"pluswhite.png"+"\" alt=\"no img\" style=\"width: 20px; height: 20px ; border-radius: 50%;\">";
    addbox.setAttribute("class","addbox");
    addbox.setAttribute("onclick","createmember();");
    return addbox;
}

function createmember()
{
	alert("Member create form");
}