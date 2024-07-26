const http =require('http');
const server = http.createServer();

const PORT =8080;

server.listen(PORT,()=>{
    console.log("Server is running on PORT : " + PORT);
})


// Link : https/google.com
//https : protocal
//google : website 
//com : domain 
// other or https://www.google.com/search?q=instagram : route

//http://localhost:5000/
// http : protocal
// localhost : host 
// prot : unique/ domain