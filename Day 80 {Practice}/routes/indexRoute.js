const express = require("express");
const router = express.Router();
const User = require('../model/userSchema')

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/create", (req, res) => {
    res.render("create");
});

// router.get("/save", (req, res) => {
//     res.json({ data: req.query });
// });

// router.post("/save", (req, res) => {
//     res.json({ data: req.body });
// });

router.post("/save",async (req,res)=>{

  // res.json({data:req.body});
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.redirect('/');
  } catch (error) {
    res.status(500).send(error.message);
  }
})



module.exports = router;
