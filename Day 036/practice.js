//13. WAP to find the factorial of the given integer.
// let num=5,ans=1;

for (let i = 1; i <=5; i++) {
    ans=ans*i;
    }
    console.log(`The factorial of ${num}! is ${ans}`);
    
//14. WAP to find all the factors of the given integer. 

let a= 55;
for (let i = 1; i <= a/2; i++) {
    if (a%i==0) {
        console.log(i);
    }
}
console.log(a);