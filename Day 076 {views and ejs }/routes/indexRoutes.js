const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    // res.status(200).json({ message: "Index Router Homepage" });
    let n = 12;
    let subjects = ["Math", "English", "Science"];
    let profile = { name: "john", age: 12, city: "bhopal" };
    let users = [
        { username: "Admn", password: "admin" },
        { username: "User", password: "user" },
    ];
    res.render("index", {
        title: "Homepage",
        n: n,
        subjects: subjects,
        profile: profile,
        users: users,
    });
});

module.exports = router;
