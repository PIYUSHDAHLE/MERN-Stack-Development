const mongoose = require("mongoose");

const blogModel = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        },
        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true,
            minLength: [3, "Title should be atleast 3 characters"],
            maxLength: [50, "Title should be atmost 50 characters"],
        },
        description: {
            type: String,
            required: [true, "Description is required"],
            trim: true,
            minLength: [10, "Description should be atleast 10 characters"],
            maxLength: [500, "Description should be atmost 500 characters"],
        },
        image: {
            type: String,
            default:
                "https://media.wired.com/photos/5b17381815b2c744cb650b5f/master/w_2560%2Cc_limit/GettyImages-134367495.jpg",
        },
    },
    { timestamps: true }
);

const BlogModel = mongoose.model("blog", blogModel);

module.exports = BlogModel;
