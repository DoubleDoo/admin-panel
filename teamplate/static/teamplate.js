function logout()
{
    fetch("/autorization/logout");
	document.location.href = "/autorization";
}