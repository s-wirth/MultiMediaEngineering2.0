// jshint ignore: start

window.addEventListener("load",init, false);

function init() {
	var loginBtn = document.getElementById("loginBtn");
	var signupBtn = document.getElementById("signupBtn");
	loginBtn.addEventListener("click", checkLogin, false);
	signupBtn.addEventListener("click", checkSignup, false);
}

function checkLogin(e) {
	var username = document.getElementById("login-name");
	var pw = document.getElementById("login-pw");

	if(username.value.indexOf('andy') >= 0){
		window.location.href = "profile.html";
	}else window.location.href = "errorPage.html";
}

function checkSignup(e) {
	window.location.href = "signUp.html";
}
