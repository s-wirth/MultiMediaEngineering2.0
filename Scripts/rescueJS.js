// jshint ignore: start

window.addEventListener("load",init, false);

function init() {
	var submit = document.getElementById("reset");
	submit.addEventListener("click", submitMail, false);
	setTimeout(timeout, 100);

}

function submitMail() {
	var mail = document.getElementById("mail");
	if(mail.value == ""){
		alert("Please enter an E-Mail adress.");
	}else if(mail.value.indexOf('@') < 0 ){
		alert("No valid E-Mail adress.");	
	}else if(mail.value.indexOf('@beuth-hochschule.de') < 0 ){
		alert("E-Mail must be registered at @beuth-hochschule.de");
	}else {
		alert("An E-Mail has been sent to you.");
		window.location.href = 'index.html';
	}
}

function timeout() { 
	alert("Your session has expired.")
	window.location.href = 'index.html';
}