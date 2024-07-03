const body = document.querySelector("body");

function randomColor() {
  return Math.floor(Math.random() * 256);
}

setInterval(() => {
  body.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
}, 250);