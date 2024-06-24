// slice method 
let arr = [11,45,52,46,74,5,10,44];
// arr.slice(startingIndex,endingIndex +1);
let x =arr.slice(2,-2);
console.log(x);
console.log(arr);

// slice are immutable because it's not change the main data it's  only change the copy DATA

// splice are mutable because it's change the main data

//Difference traverse technique

//way 1
// for (let index = 0; index < array.length; index++) {
//    console.log(index,arr[arr]);
// }

//way 2(forEach)

// arr.forEach((element,index)=>{
//     console.log(index,element);
// });


//map method

let w = arr.map((element,index)=>{
    return (element,index);
});

console.log(" Map ",w);

//filter method

let q = arr.filter((element,index)=>{
    return element%2!==0;
});

console.log(q);
console.log(arr);

//JSON (JAVASCRIPT OF NOTATION)
[{},{},{}]

