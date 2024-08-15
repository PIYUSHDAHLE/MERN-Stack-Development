require("dotenv").config({ path : "./.env" })

const express = require('express');
const app = express();

// const logger =  require('morgan');
// app.use(logger('tiny'));
app.use(require("morgan")("common"))

//db
require('./model/db')

const indexRoute =  require("./routes/index.routes")

app.use("/",indexRoute)

//server
app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT}`);
});