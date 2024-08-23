const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
    {
        blogs: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "blog",
            },
        ],
        firstname: {
            type: String,
            required: [true, "Firstname is required"],
            trim: true,
            minLength: [3, "Firstname should be atleast 3 characters"],
            maxLength: [25, "Firstname should be atmost 25 characters"],
        },
        lastname: {
            type: String,
            required: [true, "Lastname is required"],
            trim: true,
            minLength: [3, "Lastname should be atleast 3 characters"],
            maxLength: [25, "Lastname should be atmost 25 characters"],
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            trim: true,
            minLength: [6, "Password should be atleast 6 characters"],
            maxLength: [15, "Password should be atmost 25 characters"],
            select: false,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            trim: true,
            unique: true,
            lowercase: true,
            match: [
                /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
                "Please fill a valid email address",
            ],
        },
        contact: {
            type: String,
            required: [true, "Contact is required"],
            trim: true,
            minLength: [10, "Contact should be atleast 10 characters"],
            maxLength: [10, "Contact should be atmost 10 characters"],
        },
        gender: {
            type: String,
            enum: ["Male", "Female", "Others"],
            required: [true, "Gender is required"],
        },
    },
    { timestamps: true }
);

const UserModel = mongoose.model("user", userModel);

module.exports = UserModel;
