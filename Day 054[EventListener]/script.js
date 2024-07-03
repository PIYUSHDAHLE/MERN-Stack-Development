const body=document.querySelector("body");
const button=document.querySelector("button");

function randomColor() {
    return Math.floor(Math.random() * 256);
  }

button.addEventListener("click",()=>{
    body.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
});