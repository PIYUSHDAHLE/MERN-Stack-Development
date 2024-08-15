///crete routes

const express = require("express");
const router = express.Router();

router.get("/",(req,res,next)=>{
    res.status(200).json({ message :"welcome to API"});
})

module.exports = router;