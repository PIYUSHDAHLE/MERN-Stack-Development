//function argument 

function dets({name,age,city}) {
    console.log(`My name is ${name} and my age is ${age} and I'm live at ${city}`);
}

dets({city:"bhopal",name:"Piyush Dahle",age:24})

//Arrow function

// normal way

function sum(a,b) {
   return a+b;
}

//statement: more the 1 line and give single output

let sum2 = (a,b) =>{
    return a+b;
}

let sum3 = (a,b) =>a+b;
// expression: when single line of code provide the single output 