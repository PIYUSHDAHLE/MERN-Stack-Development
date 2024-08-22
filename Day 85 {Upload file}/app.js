require("dotenv").config({ path: "./.env" });
const path = require("path");
const express = require("express");
const app = express();

const indexRouter = require("./routes/index.routes");
const userRouter = require("./routes/user.routes.js");
const blogRouter = require("./routes/blog.routes.js");

// db connection
require("./models/db");

// logger
app.use(require("morgan")("tiny"));
// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// static-folder
app.use(express.static(path.join(__dirname, "public")));

// routers
app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/blog", blogRouter);

// server
app.listen(process.env.PORT, () => {
    console.log(`Server running on Port ${process.env.PORT}`);
});
