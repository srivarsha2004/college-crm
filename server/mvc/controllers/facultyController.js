const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const coursesModelCtrl=require('../models/coursesModel')
const Faculty = require("../models/facultyModel");

let branchcodes={
  "cse":505,
  "ece":506,
  "eee":507,
  "mech":508,
  "civil":509,
  "it":510
}

const registerFaculty = asyncHandler(async (req, res) => {
    const { name,email, branch,courses } = req.body;
    console.log(req.body)
    if (!branch || !email || !courses || !name) {
      res.status(400);
      throw new Error("All fields are mandatory!");
    }

    console.log(name)
    const facultyAvailable = await Faculty.findOne({ email });
    if (facultyAvailable) {
      res.status(400);
      throw new Error("User already registered!");
    }
    var branc=branchcodes[branch]
    monday=[0,0,0,0,0,0]
    tuesday=[0,0,0,0,0,0]
    wednesday=[0,0,0,0,0,0]
    thursday=[0,0,0,0,0,0]
    friday=[0,0,0,0,0,0]
    const facultyId=branc.toString()+(branc+Math.floor(100+Math.random()*900)).toString()
    console.log(facultyId)
    const hashedPassword = await bcrypt.hash(facultyId, 10);
    console.log("Hashed Password: ", hashedPassword);
    const faculty = await Faculty.create({
      facultyId:facultyId,
      facultyName:name,
      email,
      password: hashedPassword,
      branch,
      courses,
      monday:monday,
      tuesday:tuesday,
      wednesday:wednesday,
      thursday:thursday,
      friday:friday
    });

    for(let j=0;j<courses.length;j++)
    {
         course_name=courses[j]
         console.log(course_name,name)
         let data = await coursesModelCtrl.coursesModel.updateOne({courseName:course_name},{$set:{assignedTeachers:name}});
         console.log(data);
          

    }
  
    console.log(`User created ${faculty}`);
    const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
//OAuth2 configuration
const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"   
);

console.log(oauth2Client)
oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
});
const accessToken = oauth2Client.getAccessToken((err,token) => {
    if(err) {
       return
    } else {
       return token;
    }
});
const authObject = {
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.MAIL_ID,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken
    },
    tls: {
        rejectUnauthorized: false
    }
}
 
//Handles the User SignUp part
const nodemailer=require("nodemailer")

                const smtpTransport = nodemailer.createTransport(authObject);
                console.log(smtpTransport)
                const mailOptions = {
                    from: process.env.MAIL_ID,
                    to: email,
                    subject: "Eventz: Confirm Account",
                    text: "Hi "+name+" here is your credentials."+"\n"+"Username: "+facultyId+" \n"+"password: "+facultyId,
                };
                console.log(mailOptions)
 
                smtpTransport.sendMail(mailOptions,function(err,data){
                  if (err) {
                    console.log("Error " + err);
                  } else {
                    console.log("Email sent successfully");
                  }

                });
                res.send("Ok")

  });


  const loginFaculty = asyncHandler(async (req, res) => {
    console.log(req.body)
    const { facultyId, password } = req.body;
    if (!facultyId || !password) {
      res.status(400);
      throw new Error("All fields are mandatory!");
    }
    const faculty = await Faculty.findOne({ facultyId });
   // console.log(user)
    //compare password with hashedpassword
    if (faculty && (await bcrypt.compare(password, faculty.password))) {
      const accessToken = jwt.sign(
        {
          faculty: {
            username: faculty.username,
            email: faculty.email,
            facultyId: faculty.facultyId,
          },
        },
        process.env.ACCESS_TOKEN_SECERT,
        { expiresIn: "15m" }
      );
      res.send({ faculty:faculty, accessToken:accessToken });
    } else {
      res.status(401);
      throw new Error("email or password is not valid");
    }
  });

  async function getFaculty(req,res){
    const faculty = await Faculty.find({ });
    res.send(faculty)

}


async function totalFaculty(req,res){
  //branch = req.body.branch
  //console.log(branch)
    Faculty.aggregate([{$count:"total"}],(err,docs)=>{
      if(err){
          res.send("Something went wrong!");
      }
      else{
        console.log(docs[0].total)
          res.send(docs)
      }
  })

}

  module.exports = { registerFaculty, loginFaculty ,getFaculty,totalFaculty};