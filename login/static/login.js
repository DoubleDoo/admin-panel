function loggin()
{
	sendjs();
}

class user
{
	constructor(_login,_password)
	{
		this.login=_login;
		this.password=_password;
	}
}


function sendjs() {
    let login=document.getElementById("login").value;
	let password=document.getElementById("password").value;
	let usr=new user(login,password);
    fetch('/autorization/login',
  {
    method: 'POST',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }),
    mode: 'same-origin',
    body: JSON.stringify(usr)
  }
)
.then(function(response) { return response.json();})
.then(function(myJson) {   
document.cookie = "token="+myJson;
console.log(document.cookie);
document.location.href = "/profile";				 
})
.catch(function() { 
let box=document.getElementById("auth");
box.style.backgroundColor="#ffebeb";
	
}); 
}


