const express = require("express");
const app = express();
const PORT = 8080;

const logger = require("morgan");

app.use(logger("tiny"));

app.get("/", (req, res) => {
    // res.send("Hello From Homepage");
    res.json({ message: "Hello From Homepage" });
    // res.status(200).json({ message: "Hello From Homepage" });
    // res.status(201).json({ message: "Hello From Homepage" });
    // res.status(301).json({ message: "Hello From Homepage" });
    // res.status(302).json({ message: "Hello From Homepage" });
    // res.status(400).json({ message: "Hello From Homepage" });
    // res.status(401).json({ message: "Hello From Homepage" });
    // res.status(403).json({ message: "Hello From Homepage" });
    // res.status(404).json({ message: "Hello From Homepage" });
    // res.status(500).json({ message: "Hello From Homepage" });
    // res.status(502).json({ message: "Hello From Homepage" });
    // res.status(503).json({ message: "Hello From Homepage" });
});

app.get("/middleware", isAutheticate, (req, res, next) => {
    res.json({ message: "route hit" });
});

function isAutheticate(req, res, next) {
    if (req.headers.token === "aage bdha do") {
        next();
    } else {
        res.status(401).json({ message: "user not present" });
    }
}

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});