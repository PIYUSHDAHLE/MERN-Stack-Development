//try catch : It is used to handle sync code error

//Promise : It is used to handle async code error

//CREATING PROMISES

function myPromise(data) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(data){
                resolve("Promise is resolved")
                }else{
                    reject("Promise is rejected")
                }
        })
    },1000);
}

//Using Promise
myPromise(1002)
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
    });


//Ex of fetch API (Predefined promise in js to call the data from API(AJAX))

let userApi = `https://jsonplaceholder.typicode.com/users`;

fetch(userApi)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    })
    .catch((error)=>{
        console.log(error);
        });
        
//In place of fetch we use async and await
// async and await is used to convert async to sync code

async function getuser(){
    try {
        let userApi = `https://jsonplaceholder.typicode.com/users`;
        const response = await fetch(userApi);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getuser();