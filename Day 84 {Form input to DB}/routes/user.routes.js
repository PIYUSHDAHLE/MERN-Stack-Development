// router Created 9

const express = require("express");
const router = express.Router();
const UserModel = require("../models/userModel");

router.post("/create", async ( req, res, next ) => {                        // 12
    try {
        const newuser = new UserModel(req.body);
        const user = await newuser.save();
        res.status(201).json({success: true, user});
    } catch (error) {
        res.status(500).json({success: false, error: error.message})
    }
})

module.exports = router;