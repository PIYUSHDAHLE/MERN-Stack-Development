// @ WAP to accept single number input form the user and print it.

var Inputnum = Number(prompt("Enter Number : "))
console.log(Inputnum)

// @ WAP to accept Name of user and print "Given Name is John".

var name = prompt("Enter Name : ")
console.log("User's name is "+ name)
// console.log("User's name is ", name)

// Template String
console.log(`User's name is ${name}`);

// @ WAP to accept two integers and print their sum 
// output -"The sum of 2 & 4 is 6" using template String

let num1 = Number(prompt("Enter 1st Number : "))
let num2 = Number(prompt("Enter 2sd Number : "))

let sum = num1 + num2

// console.log("The sum of ", num1 , " & ", num2, " is ", sum  );
console.log(`The sum of ${num1}  &  ${num2} is  ${sum} ` );

// @ WAP to accept name and 3 different subject marks from the user and calculate the total and percentage of it.
// output - Hello, John your total score is 355 with 78.99% in the Exam.
// use .toFixed(2) for 2 decimal places.

let userName = prompt("Enter Your name : ")

let math = Number(prompt("Enter Math Number : "))
let eng = Number(prompt("Enter English Number : "))
let scin = Number(prompt("Enter Science Number : "))

let total_num = math + eng + scin;

let per = total_num / 300 * 100;

console.log(`Hello, ${userName} your total score is ${total_num} with ${per.toFixed(2)} in the Exam`);

// @ WAP to accept temperature in F and convert it in to C.
// output - The temperature is 66 in C.

// @ WAP to accept required input to calculate SI.
// output - The Simple intrest of 334 in 4 year with the rate of 3 is 667.

// @ WAP to accept Name, Gender and Age of the person and check weather he/she is able to vote.
// success output - Congratulations Mr. ABC you can vote.
// faliure output - Oh Sorry Ms. ABC you can vote for 4 more years.