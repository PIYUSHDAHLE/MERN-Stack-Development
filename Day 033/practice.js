// // 1. WAP to accept single number input form the user and print it.

// var Inputnum = Number(prompt("Enter Number : "))
// console.log(Inputnum)

// // 2. WAP to accept Name of user and print "Given Name is John".

// var name = prompt("Enter Name : ")
// console.log("User's name is "+ name)
// // console.log("User's name is ", name)

// // Template String
// console.log(`User's name is ${name}`);

// // 3. WAP to accept two integers and print their sum 
// // output -"The sum of 2 & 4 is 6" using template String

// let num1 = Number(prompt("Enter 1st Number : "))
// let num2 = Number(prompt("Enter 2sd Number : "))

// let sum = num1 + num2

// console.log("The sum of ", num1 , " & ", num2, " is ", sum  );
// console.log(`The sum of ${num1}  &  ${num2} is  ${sum} ` ); //templates 

// 4. WAP to accept name and 3 different subject marks from the user and calculate the total and percentage of it.
// output - Hello, John your total score is 355 with 78.99% in the Exam.
// use .toFixed(2) for 2 decimal places.

// let userName = prompt("Enter Your name : ")

// let math = Number(prompt("Enter Math Number : "))
// let eng = Number(prompt("Enter English Number : "))
// let scin = Number(prompt("Enter Science Number : "))

// let total_num = math + eng + scin;

// let per = total_num / 300 * 100;

// console.log(`Hello, ${userName} your total score is ${total_num} with ${per.toFixed(2)} in the Exam`);

// 5. WAP to accept temperature in F and convert it in to C.
// output - The temperature is 66 in C.

// let f= 80;
// let c =(f-32)/(9/5);
// console.log(`The temperature is ${c.toFixed(1)} in C`)

// 6. WAP to accept required input to calculate SI.
// output - The Simple intrest of 334 in 4 year with the rate of 3 is 667.

// let principal=10000 ,rate=5 ,time=4 ;
// let SI = principal*rate*time/100;
// console.log(`The Simple intrest of ${principal} in ${time} year with the rate of ${rate} is ${SI}. `);

// 7. WAP to accept Name, Gender and Age of the person and check weather he/she is able to vote.
// success output - Congratulations Mr. ABC you can vote.
// faliure output - Oh Sorry Ms. ABC you can vote for 4 more years.
//ternery if-else { gender === "M" ? Mr. : Mrs.}

// let name = "Piyush Dahle";
// let gender = "M";
// let age = 25;

// if(age>=18){
//     console.log(`Congratulations ${gender=== "M" ? "Mr. ":"Mrs. "} ${name} you can vote.`);
// }
// else{
//     console.log(`Oh Sorry ${gender=== "M" ? "Mr. ":"Mrs. "} ${name} you can vote for ${18-age} more years.`);
// }