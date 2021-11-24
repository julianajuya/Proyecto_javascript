console.log("script loaded")
var form1 = document.getElementById("form-1");

form1.addEventListener("submit", function(event) {
	event.preventDefault();
	console.log(event);
	console.log("submit");
});