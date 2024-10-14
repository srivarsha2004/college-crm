const db=require('./conn').db
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {

    studentId: {
      type: Number,
      required: [true, "Please add the RollNo"],
      unique: [true, "rollno already exist"]
    },
    email: {
      type: String,
      required: [true, "Please add the user email address"],
      unique: [true, "Email address already taken"],
    },
    password: {
      type: String,
      required: [true, "Please add the user password"],
    },
    userName: {
      type: String,
      required: [true, "Please add the user email address"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
