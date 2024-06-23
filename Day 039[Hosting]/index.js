// IMP : Hosting
// In JavaScript, "hoisting" refers to the behavior of moving declarations to the top of their containing scope (the global scope or function scope) during the compile phase. This means that variable and function declarations are processed before any code is executed, allowing you to use variables and functions before they are declared in the code.

// undifine :- compiler
// null :- programmer

console.log(a);
var a=5;
//undefined (value)
//In var dec. is happen and init. is not so the compiler return "undefined"

// In JavaScript, variable declarations using var are hoisted to the top of their scope. However, the initialization (assignment) is not hoisted. This can lead to unexpected behavior if you're not aware of how hoisting works.

console.log(b);
let b=5;
//Cannot access 'b' before initialization
//In let dec. is happen but Cannot access 'b' before init. so the compiler return "ReferenceError"
//TDZ:TEMPOROER DEAD ZONE (this type of error called TDZ)

console.log(c);
const c=5;
// Cannot access 'c' before initialization
//In const dec. is happen but Cannot access 'c' before init. so the compiler return "ReferenceError"
//TDZ:TEMPOROER DEAD ZONE (this type of error called TDZ)

// Differences with let and const
// Variables declared with let and const are also hoisted, but they are not initialized. This means they cannot be accessed before the declaration in the code, which results in a ReferenceError.



sum(a,b);

function sum(a,b) {
    console.log(a+b);
}
// This code works because the function declaration is hoisted to the top
// Function declarations are also hoisted to the top of their scope.
//  This allows you to call a function before you define it in the code.


console.log(x);
var x=(a,b)=>{
    console.log(a+b);
}
// fat arrow function
// when the function has no name then there will be no work of the function 
// In arrow function the function will provide the result accoring to there (var, let & const) variables