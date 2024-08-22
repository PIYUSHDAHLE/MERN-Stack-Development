// route create

const express = require("express");
const router = express.Router();

// create routers - 5
router.get("/", (req, res, next) => {
    res.status(200).json({message: "Welcome to the API"})    // Sir API create kiya hu 
})

module.exports = router;