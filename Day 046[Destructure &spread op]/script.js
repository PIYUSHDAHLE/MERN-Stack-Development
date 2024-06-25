//Spread operator 
//The spread operator is a syntax that allows an iterable (like an array or string) or an object to be expanded in places where multiple elements or key-value pairs are expected.

let arr=[21,334,645,88,22]

let arr2=arr;
// console.log(arr);
// console.log(arr2);


// arr2 = Object.assign([],arr);
arr2=[...arr,2432,"hello"]
console.log(arr);
console.log(arr2);

const obj = {
    name:"john",
    age:32,
    country:"USA"
}
// const obj2 = Object.assign({h:2},obj)
const obj2 = {...obj,city:"New York"}
console.log(obj);
console.log(obj2);