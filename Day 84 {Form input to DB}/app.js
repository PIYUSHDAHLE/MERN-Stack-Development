// .env require  - 1
require("dotenv").config({path: "./.env"});                                                                                   

// server create   - 2
const express = require("express");
const app = express();

// route sequre - route create - see on router folder   - 4
const indexRouter = require("./routes/index.routes.js");
const userRouter = require("./routes/user.routes.js"); 

// db require    - 7
require("./models/db")

// logger - too see on log  - 5   
app.use(require("morgan")("combined"))
// body parser - 13 // agr ye nhi h to req.body post try catch nhi chalegi
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// routers  - 4
app.use("/", indexRouter)
app.use("/user", userRouter)   // 11


// server   - 3
app.listen(process.env.PORT, () => {
    console.log(`Server running on PORT ${process.env.PORT}`);                // server is running  :)
});