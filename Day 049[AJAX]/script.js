// API is given by the backend to implement the API in the frontend we use the concept of AJAX Which is theoretical concept and implement it we use "fetch api"/"axios" in frontend

let userApi = `https://jsonplaceholder.typicode.com/users`;

fetch(userApi)
.then((response) => response.json())
.then((res)=>console.log(res))
.catch((err)=>console.log(err));