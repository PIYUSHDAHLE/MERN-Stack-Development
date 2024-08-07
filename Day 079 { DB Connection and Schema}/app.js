const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const express = require("express");
const app = express();
const logger = require("morgan");
const path = require("path");

const indexRouter = require("./routes/indexRoutes");

require("./models/db");

app.use(logger("tiny"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
});

// console.log(__dirname);
// console.log(__filename);
