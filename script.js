const body = document.querySelector(".mygradient");
const colorInputs = document.querySelectorAll("mygradient__input");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const cssText = document.querySelector(".mygradient__css");
const randomButton = document.querySelector(".mygradient__random");
const directionButton = document.querySelector(".mygradient__direction");

color1.value = "#C1929D";
color2.value = "#767BA3";
let direction = "to right";
setColors(color1.value, color2.value);

function setColors(color1, color2) {
  body.style.background = `linear-gradient(${direction}, ${color1}, ${color2})`;
}

function setGradient() {
  setColors(color1.value, color2.value);
  cssText.innerText = body.style.background;
}

function setRandomGradient() {
  color1.value = "#" + Math.random().toString(16).substr(-6);
  color2.value = "#" + Math.random().toString(16).substr(-6);
  setGradient();
}

function changeDirection() {
  const directions = ["to top", "to right", "to bottom", "to left"];
  direction = directions[Math.floor(Math.random() * directions.length)];
  setColors(color1.value, color2.value);
  cssText.innerText = body.style.background;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", setRandomGradient);
directionButton.addEventListener("click", changeDirection);
