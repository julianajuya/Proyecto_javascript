console.log("Script loaded!")
var form1 = document.getElementById("form-1");
var info = document.getElementById("content-form");

form1.addEventListener("submit", function(event) {
	event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target).entries());
	console.log(event);
	console.log("submit");
    console.log(data);
    info.innerHTML = "<h5>Nombres: </h5>";
    info.innerHTML += "<p>" + data.name + "</p>" + "<br>"
    info.innerHTML += "<h5>Apellidos: </h5>";
    info.innerHTML += "<p>" + data.lastname + "</p> <br>"
    info.innerHTML += "<h5>Correo electrónico: </h5>";
    info.innerHTML += "<p>" + data.email + "</p> <br>"
    info.innerHTML += "<h5>Teléfono: </h5>";
    info.innerHTML += "<p>" + data.phone + "</p> <br>"
    info.innerHTML += "<h5>Dirección: </h5>";
    info.innerHTML += "<p>" + data.direction + "</p> <br>"
    info.innerHTML += "<h5>Fecha nacimiento: </h5>";
    info.innerHTML += "<p>" + data.birthday + "</p> <br>"
    info.innerHTML += "<h5>Estatura: </h5>";
    info.innerHTML += "<p>" + data.height + "</p> <br>"
    info.innerHTML += "<h5>Biografía: </h5>";
    info.innerHTML += "<p>" + data.biograpgh + "</p> <br>"
    info.innerHTML += "<h5>Contraseña: </h5>";
    info.innerHTML += "<p>" + data.password + "</p> <br>"
});

var got_to = document.querySelector(".got_to_be_there")
        got_to.addEventListener("click", () => {
          got_to.classList.toggle("changer");
  });


var ben = document.querySelector(".ben")
        ben.addEventListener("click", () => {
          ben.classList.toggle("changer");
  });

var music_and_me = document.querySelector(".music_and_me")
        music_and_me.addEventListener("click", () => {
          music_and_me.classList.toggle("changer");
  });


var forever_michael = document.querySelector(".forever_michael")
        forever_michael.addEventListener("click", () => {
          forever_michael.classList.toggle("changer");
  });

var thriller = document.querySelector(".thriller")
        thriller.addEventListener("click", () => {
          thriller.classList.toggle("changer");
  });


var bad = document.querySelector(".bad")
        bad.addEventListener("click", () => {
          bad.classList.toggle("changer");
  });

var of_the_wall = document.querySelector(".of_the_wall")
        of_the_wall.addEventListener("click", () => {
          of_the_wall.classList.toggle("changer");
  });


var dangerous = document.querySelector(".dangerous")
        dangerous.addEventListener("click", () => {
          dangerous.classList.toggle("changer");
  });

var history_album = document.querySelector(".history_album")
        history_album.addEventListener("click", () => {
          history_album.classList.toggle("changer");
  });


var invincible = document.querySelector(".invincible")
        invincible.addEventListener("click", () => {
          invincible.classList.toggle("changer");
  }); 

var inmortal = document.querySelector(".inmortal")
        inmortal.addEventListener("click", () => {
          inmortal.classList.toggle("changer");
  });


var blood = document.querySelector(".blood")
        blood.addEventListener("click", () => {
          blood.classList.toggle("changer");
  });

var then_now_forever = document.querySelector(".then_now_forever")
        then_now_forever.addEventListener("click", () => {
          then_now_forever.classList.toggle("changer");
  });
