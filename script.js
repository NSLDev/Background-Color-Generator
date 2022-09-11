const body = document.getElementById("mygradient");
const colorInputs = document.querySelectorAll("mygradient__input");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");

const cssText = document.getElementById("mygradient__css");
const randomButton = document.getElementById("mygradient__random");
const directionButton = document.getElementById("mygradient__direction");

const overlay = document.getElementById("overlay");
const alertElement = document.getElementById("alert");
const alertCSS = document.getElementById("alert__css");
const alertClose = document.getElementById("alert__close");

let showAlert = false;
color1.value = localStorage.getItem('backgroundColor')?.split(',')[1].trim() || "#C1929D";
color2.value = localStorage.getItem('backgroundColor')?.split(',')[2].trim().slice(0, -1) || "#767BA3";
let direction = 
  `${localStorage.getItem('backgroundColor').split(' ')[0].slice(-2)} ${localStorage.getItem('backgroundColor').split(' ')[1].slice(0, -1)}` || 'to right';

setColors();

function setColors () {
  localStorage.setItem('backgroundColor', `linear-gradient(${direction}, ${color1.value}, ${color2.value})`)
  body.style.background = `linear-gradient(${direction}, ${color1.value}, ${color2.value})`;
  updateCSSText();
}

function setRandomGradient() {
  color1.value = `#${Math.random().toString(16).substr(-6)}`;
  color2.value = `#${Math.random().toString(16).substr(-6)}`;
  setColors();
}

function changeDirection () {
  const directions = ['to top', 'to right', 'to bottom', 'to left'];
  direction = directions[Math.floor(Math.random() * directions.length)];
  setColors();
}

function updateCSSText () {
  cssText.innerHTML = `${body.style.background};`;
}

function copyToClipboard () {
  navigator.clipboard.writeText(cssText.innerHTML);
  toggleAlert();
}

function toggleAlert () {
  showAlert = !showAlert
  if (showAlert) {
    overlay.style.display = 'block'
    alertElement.style.display = 'block';
    alertCSS.innerHTML = cssText.innerHTML;
  } else {
    overlay.style.display = 'none',
    alertElement.style.display = 'none';
  }
}

color1.addEventListener("input", setColors);
color2.addEventListener("input", setColors);
randomButton.addEventListener("click", setRandomGradient);
directionButton.addEventListener("click", changeDirection);
cssText.addEventListener("click", copyToClipboard);
overlay.addEventListener("click", toggleAlert);
alertClose.addEventListener("click", toggleAlert);