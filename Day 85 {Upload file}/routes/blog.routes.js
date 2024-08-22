const express = require("express");
const router = express.Router();

const upload = require("../utils/multimedia");

router.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to Blog API" });
});

router.get("/upload", upload.single("avatar"), (req, res) => {
    res.status(200).json({
        message: "File uploaded successfully",
        file: req.file,
    });
});

module.exports = router;
