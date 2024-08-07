const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/create", (req, res) => {
    res.render("create");
});

router.get("/save", (req, res) => {
    res.json({ data: req.query });
});

router.post("/save", (req, res) => {
    res.json({ data: req.body });
});

module.exports = router;
