"use strict";
const body = document.getElementById('mygradient');
const colorInputs = document.querySelectorAll('mygradient__input');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const cssText = document.getElementById('mygradient__css');
const randomButton = document.getElementById('mygradient__random');
const overlay = document.getElementById('overlay');
const alertElement = document.getElementById('alert');
const alertClose = document.getElementById('alert__close');
const alertCSS = document.getElementById('alert__css');
let showAlert = false;
color1.value = localStorage.getItem('color1') || '#C1929D';
color2.value = localStorage.getItem('color2') || '#767BA3';
setColors();
function setColors() {
    localStorage.setItem('color1', color1.value);
    localStorage.setItem('color2', color2.value);
    body.style.background = `linear-gradient(${color1.value}, ${color2.value})`;
    updateCSSText();
}
function setRandomGradient() {
    color1.value = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    color2.value = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColors();
}
function updateCSSText() {
    cssText.innerHTML = `${body.style.background};`;
}
function copyToClipboard() {
    navigator.clipboard.writeText(cssText.innerHTML);
    toggleAlert();
}
function toggleAlert() {
    showAlert = !showAlert;
    if (showAlert) {
        overlay.style.display = 'block';
        alertElement.style.display = 'block';
        alertCSS.innerHTML = cssText.innerHTML;
    }
    else {
        (overlay.style.display = 'none'), (alertElement.style.display = 'none');
    }
}
color1.addEventListener('input', setColors);
color2.addEventListener('input', setColors);
randomButton.addEventListener('click', setRandomGradient);
cssText.addEventListener('click', copyToClipboard);
overlay.addEventListener('click', toggleAlert);
alertClose.addEventListener('click', toggleAlert);
