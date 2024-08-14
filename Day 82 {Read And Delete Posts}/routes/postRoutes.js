const express = require("express");
const router = express.Router();
const Post = require("../models/postSchema");
const User = require("../models/userSchema");

// /post/
router.get("/", (req, res) => {
    res.send("Test Post route");
});

router.get("/create/:userid", (req, res) => {
    res.render("createpost", { userid: req.params.userid });
});

router.post("/create/:userid", async (req, res) => {
    try {
        const newPost = new Post(req.body);
        newPost.user = req.params.userid;
        const post = await newPost.save();
        //
        const user = await User.findById(req.params.userid);
        user.posts.push(post._id);
        await user.save();
        //
        res.redirect("/");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get("/delete/:postid", async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.postid);
        const user = await User.findById(post.user);
        await user.posts.pull(post._id);
        await user.save();
        res.redirect("/");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
