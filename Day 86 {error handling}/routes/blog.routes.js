const express = require("express");
const router = express.Router();

const BlogModel = require("../models/blogModel");

const upload = require("../utils/multimedia");

router.get("/", (req, res, next) => {
    try {
        res.status(200).json({ message: "Welcome to Blog API" });
    } catch (error) {
        next({ status: 501, message: error.message });
    }
});

router.post("/create", upload.single("image"), async (req, res, next) => {
    try {
        const newblog = new BlogModel({
            ...req.body,
            image: req.file.filename,
        });
        res.status(200).json(newblog);
    } catch (error) {
        next({ status: 501, message: error.message });
    }
});

module.exports = router;
