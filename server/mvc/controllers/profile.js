const profileModelCtrl=require('../models/profileModel')
const path = require('path')
const express = require("express");
const app=express()
const bodyParser=require("body-parser");
const { S3Client } = require('@aws-sdk/client-s3');

const multer = require('multer')
const multerS3 = require('multer-s3')
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

let s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
    },
    sslEnabled: false,
    s3ForcePathStyle: true,
    signatureVersion: 'v4',
});

const uploadimg= multer({
    storage: multerS3({
      s3: s3,
      bucket: 'collegecrm',
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString()+path.parse(file.originalname).name+ path.extname(file.originalname))
      }
    })
  }).single("file1")


  function uploadimgHandler(req, res) {
    uploadimg(req, res, (err) => {
      if (err) {
        console.log(err);
  
        res.send("Something went wrong");
      }
      // console.log(req.file.location);
      else{
  
      res.send(req.file.location);
      }
      
    });
  }

async function profileRegistrationController(req,res){
    console.log(req.body)
    let profileData=profileModelCtrl.profileModel
    ({
        name:req.body.name,
        rollnumber:req.body.rollnumber,
        department: req.body.department,
        email: req.body.email,
        img:req.body.img,
        contact: req.body.contact,
        dob: req.body.dob,
        gender: req.body.gender,
        address: req.body.address,
        guardian_name: req.body.guardian_name,
        guardian_contact: req.body.guardian_contact,
        exam_name: req.body.exam_name,
        rank: req.body.rank      
    })
    // console.log(profile_data)
    profileModelCtrl.profileModel.find({ name:req.body.name,rollnumber:req.body.rollnumber, department: req.body.department, email: req.body.email, contact: req.body.contact,dob: req.body.dob,gender: req.body.gender, address: req.body.address,guardian_name: req.body.guardian_name,guardian_contact: req.body.guardian_contact,exam_name: req.body.exam_name,rank: req.body.rank }).then((resp) => {
        if (resp.length != 0) {
            res.send("1")
        }
        else {
            profileData.save().then(()=>{
                res.send("sent");
            }).catch((err)=>{
                res.send(err);
            })
            
        }
    })
}

async function profileDataFetching(req,res){
    profileModelCtrl.profileModel.find({}).then((docs)=>{
        if(docs)
        {
            res.send(docs)
        }
    }).catch((err)=>{
        res.send("bad request")
    });
}

async function profileFindDataFetching(req,res){
    profileModelCtrl.profileModel.find({email:req.body.email}).then((docs)=>{
        console.log(docs.length)
        if(docs.length>0)
        {
            res.send(docs)
        }
        else{
            res.send("0")
        }
    }).catch((err)=>{
        res.send("bad request")
    });
}
        


module.exports={ uploadimg,uploadimgHandler,profileFindDataFetching,profileRegistrationController , profileDataFetching }