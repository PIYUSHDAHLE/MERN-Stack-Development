// converting nested if-else to ladder if-else
let n1 = 5;
if (n1 > 0 && n1 % 2 == 0) {
    console.log("Positive");
    console.log("even");
} else if (n1 > 0 && n1 % 2 != 0) {
    console.log("Positive");
    console.log("Odd");
} else if (n1 < 0) {
    console.log("Negative");
} else if (n1 == 0) {
    console.log("Zero");
} else {
    console.log("Kuch Nahi...");
}

// nested if-else

// if(condition){
// if (condition) {
// statement
// } else {
// statement
// }
// statement
// } else if(condition) {
// staement
// } else if()
// } else {
// statement
// }

let n = -6;
if (n > 0) {
    console.log("Positive");
    if (n % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
} else if (n < 0) {
    console.log("Negative");
} else if (n == 0) {
    console.log("Zero");
} else {
    console.log("Kuch Nahi...");
}

// ladder/multiple if-else

// if(condition){
// statement
// } else if(condition) {
// staement
// } else if...
// } else {
// statement
// }

let n3 = 1;
if (n3 > 0) {
    console.log("Positive");
} else if (n3 < 0) {
    console.log("Negative");
} else if (n3 == 0) {
    console.log("Zero");
} else {
    console.log("Kuch Nahi...");
}

// simple if-else

// if(condition){
// statement
// } else {
// staement
// }
let n2 = 0;
if (n2 > 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}

// simple if

// if(condition){
// statement
// }
let age = 10;
if (age >= 18) {
    console.log("eligible for vote...");
}