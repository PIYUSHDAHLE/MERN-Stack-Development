//Object 
// An object is a collection of key-value pairs, where each key (a string) maps to a value of any type, used to store data and methods.

//create
let detail ={
    name:"John",
    age:30,
    occupation:"Software Engineer",
    gender:"male"
}

//read
console.log(detail);
console.log(detail.name);
console.log(detail["age"]);
console.log(typeof detail); //object


//update
detail.name ="Piyush";

//add
detail["email"]="piyushdahle@gmail.com";
console.log(detail);

//delete
delete detail.age;
console.log(detail);
