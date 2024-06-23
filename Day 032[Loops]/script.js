// Iterative statements (loops)

// Important Pillers of Loop

// 1. Loop Variable             (let i = 1)
// 2. Condition Expression      (i <= 10)
// 3. Updation Expression       (i++ / --i)
// 4. Body of Loop              (any data)


// Type of loops

// 1. Entry Control loops   - for loops
// 2. Exit Control loops    - do while


// WAP to print n natural numbers (1-n)
// While syntax (use only when we know number of ittrationw)

    // let loop_variable = value 
    // while(condition_expression){
    //     body of loop
    //     updation_expression
    // } 

let n = 10
let i = 1

while (i <= 10) {
    console.log(i);
    i++;
}


// do while syntax

    // let loop_variable = value 
    // do{
    //     body of loop
    //     updation_expression
    // } while(condition_expression);

let n1 = 10;
let i1 = 1;

do {
    console.log(i1);
    i1++;
} while (i1 <= n1);


// for syantax (use only when we don't know itrattion of loop)

    // for (let loop_variable = value; condition_expression; updation_expression){
    //     body of loop
    // }


let n2 = 10;
for (let i2 = 1; i2 <= n2; i2++){
    console.log(i2);
}