const express = require("express");
const router = express.Router();
const UserModel = require("../models/userModel");

router.post("/create", async (req, res, next) => {
    try {
        const newuser = new UserModel(req.body);
        const user = await newuser.save();
        res.status(201).json({ success: true, user });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

router.get("/read", async (req, res, next) => {
    try {
        const users = await UserModel.find();
        res.status(200).json({ success: true, users });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

router.get("/delete/:id", async (req, res, next) => {
    try {
        await UserModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: "User Deleted Successfully",
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

router.post("/update/:id", async (req, res, next) => {
    try {
        const user = await UserModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            success: true,
            message: "User Updated Successfully",
            user,
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
