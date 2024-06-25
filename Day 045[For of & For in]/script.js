//for of :- array
//for in :- object


let arr = [21,43,44,57,42,88,32,24,11,22,33]

//for of : return arr value
for(let i of arr){
    console.log(i)
}

//for in : return index value
for(let i in arr){
    console.log(i)
}


const obj = {
    name: "Rahul",
    age: 25,
    city: "Pune",
    country: "India"
}

//for in : return key value  but for of not work in object it will throw the error
for(let i in obj){
    console.log(i + " : " + obj[i])
}
