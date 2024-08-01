const dotenv = require('dotenv');
dotenv.config({path: "./.env"});

const express = require('express');
const app = express();
const logger = require('morgan');

app.use(logger('combined'));


const indexRoutes = require('./Routes/indexRoutes');
app.use("/", indexRoutes);


app.get("/middleware", isAuthenticate, (req, res)=>{
    res.json({message: "GO AHEAD"});
})

function isAuthenticate(req, res, next){
    if(res.headers.token === "ALL IS WELL"){
        next();
    }else{
        res.status(401).json({message: "Unauthorized"});
    }
}

app.listen(process.env.PORT, ()=>{
    console.log(`we are currently live on PORT : ${process.env.PORT}`);
})