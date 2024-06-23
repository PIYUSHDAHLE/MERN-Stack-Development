let i=0;
let n =10;

while(i<=n){
    if(i===5)
        {
            console.log("Break")
            break;
            //stop loop and brings control outside the loop.
        }
        i++;
        if (i ===3) {
            console.log("skip")
            continue;
            // do not go beyond continue keyword start from the loop/skip/continue the chance
            }
            
    console.log(i);
}