const body = document.querySelector(".mygradient");
body.style.background = "linear-gradient(to right, #BE93C5, #7BC6CC)";
const inputs = document.querySelectorAll("mygradient__input");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const cssText = document.querySelector(".mygradient__css");

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  cssText.innerText = body.style.background;
  console.log(color1, color2);
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
