//comparision operators -> boolean (TRUE AND FALSE)

// > < <= >= == === != !==

//in string comparision js always compares the 1st not equal char only

console.log("john" > "doe");

//Logical operators

// || && !

a = 13;
x = a > 10;
y = a % 2 == 0 ;

console.log(x || y);
console.log(x && y);

//                    &&         ||
//  true  true ->   true       true
//  true  false ->  false      true
//  false true ->   false      true
//  false false ->  false      false

// falsy value
//0, null, undefined, "", false


// and (false value per rukh jaye ga)
// or (true value per rukh jaye ga)

console.log("hello " && null && "hii");
console.log("hello " || null || "hey");