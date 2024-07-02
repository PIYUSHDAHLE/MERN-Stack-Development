document.getElementsByTagName("h1")
document.getElementsByClassName("class")
document.getElementById("id")

// its all rounder method
const heading = document.querySelector("h1");  // single starting element/tag
const heading1 = document.querySelectorAll("h1");  // for multiple tag

console.log(heading);
console.log(heading1);

///////////////////////////////////////////////////////////////////////////////////////////////


// const heading = document.querySelector("h1");
console.log(heading.innerHTML);


console.log(heading.textContent);
console.log(heading.innerText);

// manuplation part
heading.innerText = "change content";  // manipluting the element
heading.textContent = "Change Content";  // manipluting the element

heading.innerHTML = "change content";  // manipluting the element
console.log(heading.innerHTML);

heading.style.color = "red";
heading.style.fontSize = "40px";