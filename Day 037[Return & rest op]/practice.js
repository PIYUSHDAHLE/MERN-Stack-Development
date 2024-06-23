// 15. WAP TO FIND THE WEATHER THE GIVEN INTEGER IS PRIME OR NOT-PRIME

function checkPrime(num) {
    let i, flag = true;
    for (i = 2; i <= num - 1; i++) {
        if (num % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag == true)
        console.log(num + " is prime");
    else
        console.log(num + " is not prime");
}
checkPrime(4);
checkPrime(5);


//16. WAP TO PRINT THE FABONACCI SERIES OF THE GIVEN LENGTH

function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    if (num === 1) {
        return num1;
    } else if (num === 2) {
        return num2;
    } else {
        for (let i = 3; i <= num; i++) {
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }
        return num2;
    }
}

console.log("Fibonacci(5): " + fibonacci(5));
console.log("Fibonacci(8): " + fibonacci(8));
