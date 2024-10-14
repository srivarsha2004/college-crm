const db=require('./conn').db
const mongoose = require("mongoose");

const facultySchema = mongoose.Schema(
  {

    facultyId: {
      type: String,
      required: [true, "Please add the RollNo"],
      unique: [true, "rollno already exist"],
    },
    facultyName:{
      type:String,
      required: [true, "Please add the faculty name"],
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
    branch:{
      type:String,
      required: [true, "Please add branch"],
    },
    courses: {
      type: Array,
      default:[],
      required: [true, "Please add the user email address"],
    },
    monday:{
      type:Array,
      default:[0,0,0,0,0,0]
    },
    tuesday:{
      type:Array,
      default:[0,0,0,0,0,0]
    },
    wednesday:{
      type:Array,
      default:[0,0,0,0,0,0]
    },
    thursday:{
      type:Array,
      default:[0,0,0,0,0,0]
    },
    friday:{
      type:Array,
      default:[0,0,0,0,0,0]
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Faculties", facultySchema);
