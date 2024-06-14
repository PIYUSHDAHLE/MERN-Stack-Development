// Variable length parameters/arguments 
// ... rest operator -> stores the value in the form of array
// rest operator should be the last parameter in the function 
// there must not be nor then one rest operator in the function

function hobbie(name,age,...h) {
    console.log(name,age);
    return h;
}

let res = hobbie("PIYUSH DAHLE",24,"Dance","coding","Indoor games");
console.log(res);