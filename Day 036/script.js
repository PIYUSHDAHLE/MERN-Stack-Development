//output :- space / time taken by the program

//Functions :- function programming paradigm
// 2 types Of function :- 
//1. Non - Parameterized Function
//2. Parameterized Function

// function dec. and init.

function funName(){
    console.log("function called!");
}

// function calling
funName();
funName();

//static function
//1. non - parameterized function
function greed(){
    console.log("hello boss....");
    }
    
    greed();
    
//2. Parameterized function

//parameter(init & Dec.) = variable of function
function wow(message,name){
    console.log(`hello ${name} ${message}....`);
    }
    
    // argument (call) = value of function variable
    wow("welcome","Piyush");


//function must use anything outside it's scope ir leads to impure function which are not efficient and not a good programers practice.
//......................................................
//impure function

// const mess= "Morning"; or
const mess= prompt("Enter the time of the day : ");

function greed(mess){
    console.log(`Good ${mess}`);
    }
    greed();


//pure function

function greed(){
    // const mess2= "Morning"; or
    const mess2= prompt("Enter the time of the day : ");
    console.log(`Good ${mess2}`);
    }
    greed();

    // to Input the value from outside to the function legally we use parameterized function