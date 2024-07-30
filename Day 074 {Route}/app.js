const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const express = require("express");
const app = express();
const logger = require("morgan");

const indexRouter = require("./routes/indexRoutes");

app.use(logger("tiny"));

app.use("/", indexRouter);

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
});
