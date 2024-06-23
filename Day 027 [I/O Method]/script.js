//Input output method in js

//paranthesis () this is use in method and function call

//input method 
// prompt
// confirm

// output method
//console.log()
//alert()

let a=parseInt(prompt("Enter number 1"))
let b= prompt("Enter number 2")
let c= Number(prompt("Enter number 3"))

let sum=parseInt(a+b+c);

console.log("sum of the number is "+ sum);

// in place of Number we can use (boolean, parseFloat)

//Impicit / Explicit type conversion
// jo compiler hum ko convert kar k de

var x = confirm("Do you want to show this page ?");
// console.log(x);
alert("The output is "+ x);

//scope

// global scope var
// local scope let const
let g=55;
{
    let g=22;
    console.log(g);
}
console.log(g);