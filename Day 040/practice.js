// 15. WAP TO FIND THE WEATHER THE GIVEN INTEGER IS PRIME OR NOT-PRIME

let flag ="Prime";
let n1 = 88;
for (let i = 0; i <= (n1/2).toFixed(0); i++) {
    if (n1%i===0) {
        flag = "Not Prime";
        break;
    }
}

console.log(flag);

//16. WAP TO PRINT THE FABONACCI SERIES OF THE GIVEN LENGTH

let f=0;
let s=1, n = 10, i=1;
let next=0;
let output = f+" "+s;
while (i<=n-2) {
    next = f+s;
    f=s;
    s=next;
    output += " "+next;
    i++;
}
console.log(output);