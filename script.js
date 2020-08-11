var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("btn-randomColor");
var btnChangeGradient = document.getElementById("btn-randomGradient");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

function getRandomColors() {
  color1.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
  color2.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
  setGradient();
}

window.addEventListener("load", setGradient);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", getRandomColors);
btnChangeGradient.addEventListener("click", getRandomGradient);
