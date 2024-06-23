// index start from 0
let s= 'Hello world!'
s ="hell world" ; //
console.log(s)
console.log(s[0])
console.log(s[1])
console.log(s.at[-1])
s = null;

//string template
console.log("This is a given string"+s); //normal way
console.log(`This is a given string ${s}`); //template way

//Escape sequence char in string
// \n \t \b \r, /(Escape)


console.log("Hi\tDahle")
console.log("Hi\nDahle")

console.log("http:\\localhost:3000\new\tab");
console.log(`http:\\localhost:3000\new\tab`);

//Escape sequence char extra \

console.log(`http:\\\localhost:3000\\new\\tab`);

//string.raw

console.log(String.raw`http:\\localhost:3000\new\tab`);

//string methods

let str = "Piyush Dahle";
console.log(str.length);//property
console.log(str.toLocaleLowerCase());//method
console.log(str.toLocaleUpperCase());
console.log(str.replace("Dahle","Naam toh suna hoga"));
console.log(str.indexOf("Piyush"));
console.log(str.concat(" good morning! ","have a nice day"));

