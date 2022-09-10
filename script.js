const body = document.getElementById("mygradient");
const colorInputs = document.querySelectorAll("mygradient__input");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const cssText = document.getElementById("mygradient__css");
const randomButton = document.getElementById("mygradient__random");
const directionButton = document.getElementById("mygradient__direction");


color1.value = localStorage.getItem('backgroundColor')?.split(',')[1].trim() || "#C1929D";
color2.value = localStorage.getItem('backgroundColor')?.split(',')[2].trim() || "#767BA3";

const directions = ["to top", "to right", "to bottom", "to left"];
let direction = 'to right';

setColors();

function copyToClipboard () {
  navigator.clipboard.writeText(cssText.innerHTML);
  alert(`${cssText.innerHTML} copied to clipboard!`);
}

function updateCSSText () {
  cssText.innerText = body.style.background;
}

function setColors() {
  body.style.background = `linear-gradient(${direction}, ${color1.value}, ${color2.value})`;
  updateCSSText();
  localStorage.setItem('backgroundColor', `linear-gradient(${direction}, ${color1.value}, ${color2.value}`)
}

function setRandomGradient() {
  color1.value = `#${Math.random().toString(16).substr(-6)}`;
  color2.value = `#${Math.random().toString(16).substr(-6)}`;
  setColors();
}

function changeDirection() {
  direction = directions[Math.floor(Math.random() * directions.length)];
  setColors();
}

color1.addEventListener("input", setColors);
color2.addEventListener("input", setColors);
randomButton.addEventListener("click", setRandomGradient);
directionButton.addEventListener("click", changeDirection);
cssText.addEventListener("click", copyToClipboard);