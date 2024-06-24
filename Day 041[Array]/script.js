// Array

//In JavaScript, an array is a special type of object used to store multiple values in a single variable. Arrays are dynamic and can hold values of different types, including numbers, strings, objects, and even other arrays.

let fruits = ["Apple", "Banana", "Mango"];

 console.log(fruits[0]); // "Apple"
 console.log(fruits[1]); // "Apple"

// let ar = {};
// let ar = ();
//1. CREAT 
let ar = [];
console.log(ar);
console.log(typeof ar);
console.log(Array.isArray(ar)); //types of checking array

//it is coleection of Hetrogenious element in squre brakets and seprated by comma  
let arr = ["wow",232,null,undefined,"osm",[12,33,45,"hmm"],()=>{}]
console.log(arr);
console.log(arr.length);

//2. READ
console.log(arr[0]);
// to access the element from last 
console.log(arr[arr.length-1]); 
console.log(arr.at(-1));

//3. UPDATE
arr[2]="Piyush"
console.log(arr);
console.log(arr[2]);

//4.DELETE
delete arr[3];
console.log(arr); //IT IS NOT USE BECAUSE IT'S PRINT THE EMPTY AT THAT PLACE

//Traverse
for(let i=0;i<arr.length;i++){
    console.log(i,arr[i]);
}

//methods of Array

//Push method
console.log(arr.push("pushed element"));//add at the end od array and give the length of array
console.log(arr);

// Unshift method
console.log(arr.unshift("unshifted element"));//add at the start of array and give the 
console.log(arr);

//POP method
console.log(arr.pop());//remove the last element and give the removed element
console.log(arr);

//shift method
console.log(arr.shift());//remove the first element and give the removed element
console.log(arr);

//splice method
console.log(arr);
console.log(arr.splice(2,4));//remove the element from 2nd and return removed array element
console.log(arr);