//Destructuring
//Destructuring is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables in a concise and readable mann

let arr = ["Piyush",24,"Balaghat"];

// let name = aar[0];
// let age = aar[1];
// let city = aar[2];

// let [name,age,city] = arr;
//space is use for skip
let [name, ,city] = arr;
console.log(name); //Piyush
// console.log(age); //24
console.log(city); //Balaghat


let obj ={
    name2:"ram",
    age2:"33",
    city2:"delhi"
}

let {age2,name2,city2}=obj;
console.log("object : "+name2,age2,city2); 
