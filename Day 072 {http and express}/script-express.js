const express = require("express");
const app = express();
const PORT = 8080;

// app.get("route", callback);
// routes/controllers
app.get("/", (req, res) => {
    res.send("This is the homepage of the website");
});

app.get("/about", (req, res) => {
    res.send("This is the about of the website");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// http://localhost:8080/
// req -> frontend to backend(data transfer)
// res -> backend to frontend(data transfer)