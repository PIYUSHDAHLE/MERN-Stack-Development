// const body = document.querySelector("body");
// const button = document.querySelector("button");

// function randomColor() {
//     return Math.floor(Math.random() * 256);
// }

// button.addEventListener("click", ()=> {
//     body.style.backgroundColor = rgb(${randomColor()}, ${randomColor()}, ${randomColor()});
// });

// -------------------------------------------------------------------------------------------------

const container = document.querySelector(".container");
const h = document.createElement("h1");

h.textContent = "Hello World";
container.appendChild(h);         // last main add hota hai

// ----------------------------------------------------------------------------------------------

// window.addEventListener("load", ()=>{
//     console.log("Hello");
// });