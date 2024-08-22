// secma  create - 8

const mongoose = require("mongoose");                    // requiree kiya hoon

const userModel = new mongoose.Schema({                  // jhr bar new scema object ki form mai create kre
    firstname : {
        type: String,
        required: [true, "Firstname is required"],
        trim : true,
        minLength : [3, "Firstname should be atleast 3 characters"],
        maxLength :  [25, "Lastname should be atmost 25 characters"],
    },
    
    lastname : {
        type: String,
        required: [true, "Lastname is required"],
        trim : true,
        minLength : [3, "Lastname should be atleast 3 characters"],
        maxLength :  [25, "Lastname should be atmost 25 characters"],
    },

    password : {
        type: String,
        required: [true, "Password is required"],
        trim : true,
        minLength : [8, "Password should be atleast 8 characters"],
        maxLength :  [16, "Password should be atmost 16 characters"],
        select : false,
    },

    email : {
        type: String,
        required: [true, "Email is required"],
        trim : true,
        unique : true,
        lowercase : true,
        match : [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please fill a valid email address"],
    },

    contact : {
        type: Number,
        required: [true, "Contact is required"],
        trim : true,
        minLength: [10, "Contact shpuld be atleast 10 characters"],
        maxLength: [10, "Contact should be atmost 10 characters"],
    },

    gender : {
        type : String,
        enum : ["Male", "Female", "Other"],
        required : [true, "Gender is required"],
    },

}, {timestamps: true});  

const UserModel = mongoose.model("user", userModel);     // database mau user name k database milega waha pr usermodel mai jo v melgea use add kro

module.exports = UserModel;
