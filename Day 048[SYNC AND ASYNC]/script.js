// IMP : SYNC AND ASYNC

// SYNC : 1st line execute then 2nd line execute AND JS IS SYNC PROGRAMMING LANG

console.log(1);

setTimeout(()=>{
    console.log(2);
    }, 1000)

console.log(3);