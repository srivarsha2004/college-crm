const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");


const registerUser = asyncHandler(async (req, res) => {
    const { studentId, email, password, userName } = req.body;
    console.log(req.body)
    if (!userName || !email || !password || !studentId) {
      res.status(400);
      throw new Error("All fields are mandatory!");
    }
    const userAvailable = await User.findOne({ studentId });
    if (userAvailable) {
      res.status(400);
      throw new Error("User already registered!");
    }
  
    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password: ", hashedPassword);
    const user = await User.create({
      studentId,
      email,
      password: hashedPassword,
      userName,
    });
  
    console.log(`User created ${user}`);
    if (user) {
      res.status(201).json({ _id: user.id, email: user.email });
    } else {
      res.status(400);
      throw new Error("User data us not valid");
    }
    res.json({ message: "Register the user" });
  });


  const loginUser = asyncHandler(async (req, res) => {
    const { studentId, password } = req.body;
    if (!studentId || !password) {
      res.status(400);
      throw new Error("All fields are mandatory!");
    }
    const user = await User.findOne({ studentId });
    console.log(user)
    //compare password with hashedpassword
    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jwt.sign(
        {
          user: {
            username: user.username,
            email: user.email,
            studentId: user.studentId,
          },
        },
        process.env.ACCESS_TOKEN_SECERT,
        { expiresIn: "15m" }
      );
      res.send({"Message":"Login Successfull",user:user,token:accessToken});
    } else {
      res.status(401);
      throw new Error("email or password is not valid");
    }
  });


  module.exports = { registerUser };