const studentModelCtrl=require('../models/studentModel')
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
async function studentRegistrationController(req,res){
    let branchcodes={
        "cse":505,
        "ece":506,
        "eee":507,
        "mech":508,
        "civil":509,
        "it":510
      }

    var studentId="19"+(branchcodes[req.body.branch]).toString()+(Math.floor(100+Math.random()*900)).toString()
    const hashedPassword = await bcrypt.hash(studentId, 10);
    console.log(hashedPassword)
    let studentData=studentModelCtrl.studentModel({
        name:req.body.name,
        branch:req.body.branch,
        semester:req.body.semester,
        email:req.body.email,
        studentId:studentId,
        password:hashedPassword

    });      
            studentData.save((err, result) => {
                if (err) {
                    console.log("something went wrong")
                }
                else {
                    console.log("student added succesfully")
                }
            })
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
                    to: req.body.email,
                    subject: "Eventz: Confirm Account",
                    text: "Hi "+ req.body.name+" here is your credentials."+"\n"+"Username: "+studentId+" \n"+"password: "+studentId,
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
        
}

async function studentDataFetching(req,res){
    studentModelCtrl.studentModel.find({},(err,docs)=>{
        if(err){
            res.send("Something went wrong!");
        }
        else{
            res.send(docs)
        }
    })

}


const loginUser = asyncHandler(async (req, res) => {
    const { studentId, password } = req.body;
    if (!studentId || !password) {
      res.status(400);
      throw new Error("All fields are mandatory!");
    }
    const user = await studentModelCtrl.studentModel.findOne({ studentId });
    console.log(user)
    //compare password with hashedpassword
    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jwt.sign(
        {
          user: {
            username: user.username,
            email: user.email,
            studentId: user.studentId,
            semester: user.semester,
            branch: user.branch
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


  const changePassword = asyncHandler(async (req, res) => {
    console.log(req.body)
    const { studentId, old, new_pass } = req.body;
    console.log(new_pass)
    if (!old || !new_pass) {
      res.status(400);
      throw new Error("All fields are mandatory!");
    }
    const user = await studentModelCtrl.studentModel.findOne({ studentId });
    console.log(user)
    //compare password with hashedpassword
    if (user && (await bcrypt.compare(old, user.password))) {
      console.log(user.password)
      const hashedPassword = await bcrypt.hash(new_pass, 10);
      console.log(hashedPassword)
      studentModelCtrl.studentModel.updateOne({ "studentId":studentId},{$set:{"password": hashedPassword }}).then(()=>{
        console.log("hello")
      })
      console.log("fgsah")
      res.send({"Message":"changed Successfully"});
    } else {
      res.status(401);
      throw new Error("email or password is not valid");
    }
  });

  async function countStudents(req,res){
    //branch = req.body.branch
    //console.log(branch)
    studentModelCtrl.studentModel.aggregate([{$group:{_id:"$branch",count:{$sum:1}}}],(err,docs)=>{
        if(err){
            res.send("Something went wrong!");
        }
        else{
          console.log(docs[0].count)
            res.send(docs)
        }
    })

}

async function countTotalStudents(req,res){
  //branch = req.body.branch
  //console.log(branch)
  studentModelCtrl.studentModel.aggregate([{$count:"total"}],(err,docs)=>{
      if(err){
          res.send("Something went wrong!");
      }
      else{
        console.log(docs[0].total)
          res.send(docs)
      }
  })

}


module.exports={ studentRegistrationController , loginUser, changePassword,studentDataFetching,countStudents,countTotalStudents}