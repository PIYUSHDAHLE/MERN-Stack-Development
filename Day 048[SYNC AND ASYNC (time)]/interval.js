
let a= 1;

let x = setInterval(() => {
    if (a===5) {
        clearInterval(x);
    }
    console.log(a);
    a++;
}, 1000);
