const body = document.getElementById('mygradient') as HTMLBodyElement;
const colorInputs = document.querySelectorAll('mygradient__input') as NodeList;
const color1 = document.querySelector('.color1') as HTMLInputElement;
const color2 = document.querySelector('.color2') as HTMLInputElement;
const cssText = document.getElementById('mygradient__css') as HTMLElement;
const randomButton = document.getElementById('mygradient__random') as HTMLButtonElement;
const overlay = document.getElementById('overlay') as HTMLDivElement;
const alertElement = document.getElementById('alert') as HTMLDivElement;
const alertClose = document.getElementById('alert__close') as HTMLSpanElement;
const alertCSS = document.getElementById('alert__css') as HTMLSpanElement;

let showAlert = false;

color1.value = localStorage.getItem('color1') || '#C1929D';
color2.value = localStorage.getItem('color2') || '#767BA3';
setColors();

function setColors(): void {
  localStorage.setItem('color1', color1.value);
  localStorage.setItem('color2', color2.value);
  body.style.background = `linear-gradient(${color1.value}, ${color2.value})`;
  updateCSSText();
}

function setRandomGradient(): void {
  color1.value = `#${Math.floor(Math.random()*16777215).toString(16)}`;
  color2.value = `#${Math.floor(Math.random()*16777215).toString(16)}`;
  setColors();
}

function updateCSSText(): void {
  cssText.innerHTML = `${body.style.background};`;
}

function copyToClipboard(): void {
  navigator.clipboard.writeText(cssText.innerHTML);
  toggleAlert();
}

function toggleAlert(): void {
  showAlert = !showAlert;
  if (showAlert) {
    overlay.style.display = 'block';
    alertElement.style.display = 'block';
    alertCSS.innerHTML = cssText.innerHTML;
  } else {
    (overlay.style.display = 'none'), (alertElement.style.display = 'none');
  }
}

color1.addEventListener('input', setColors);
color2.addEventListener('input', setColors);
randomButton.addEventListener('click', setRandomGradient);
cssText.addEventListener('click', copyToClipboard);
overlay.addEventListener('click', toggleAlert);
alertClose.addEventListener('click', toggleAlert);