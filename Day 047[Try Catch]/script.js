//Exception Handling(error handling)

//Exception Handling is a mechanism to handle the runtime errors in a program

// JavaScript, try and catch are keywords used for error handling, allowing developers to manage exceptions that may occur during the execution of code.

// let b = 12;
// let sum = a+b;
// console.log(sum);
// console.log("hello boss");

// try {
    
// } catch (error) {
    
// }

try {

    let b = 12;
let sum = a+b;
console.log(sum);

} catch (error) {
    // console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log("SOMETHING WENT WRONG");
}

console.log("hello boss");