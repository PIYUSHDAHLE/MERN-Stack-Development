const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
            maxLength: [50, "Name cannot exceed 50 characters"],
            minLength: [3, "Name must be at least 3 characters long"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            trim: true,
            lowercase: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Please fill a valid email address",
            ],
        },

        password: {
            type: String,
            required: [true, "Password is required"],
            minLength: [6, "Password must be at least 6 characters long"],
            maxLength: [15, "Password cannot exceed 15 characters"],
            select: false,
        },
        posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
    },
    { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;

// createdAt / updatedAt
