const bookModelCtrl=require('../models/bookModel')
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
        console.log(path.parse(file.originalname))
        cb(null, Date.now().toString()+path.parse(file.originalname).name+ path.extname(file.originalname))
      }
    })
  }).single("files")


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

async function bookRegistrationController(req,res){
    console.log(req.body)
    let bookData=bookModelCtrl.bookModel
    ({
        book_name: req.body.book_name,
        cover_image: req.body.cover_image,
        author_name: req.body.author_name,
        isbn: "available",
        genres: req.body.genres,
        publisher: req.body.publisher,
        quantity: req.body.quantity,
        price: req.body.price  
    })
    // console.log(profile_data)
    bookModelCtrl.bookModel.find({}).then((resp) => {
        if (resp.length != 0) {
            res.send("1")
        }
        else {
            bookData.save().then(()=>{
                res.send("sent");
            }).catch((err)=>{
                res.send(err);
            })
            
        }
    })
}

async function bookDataFetching(req,res){
    bookModelCtrl.bookModel.find({}).then((docs)=>{
        if(docs)
        {
            res.send(docs)
        }
    }).catch((err)=>{
        res.send("bad request")
    });
}

async function bookFindDataFetching(req,res){
    bookModelCtrl.bookModel.find({book_name:req.body.book_name}).then((docs)=>{
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
        

async function bookBorrowData(req,res){
    bookModelCtrl.bookModel.find({book_name:req.body.book_name}).then((docs)=>{
        console.log(docs.length)
        if(docs.length>0)
        {
            if(docs[0].quantity>0){
                let borrowData=bookModelCtrl.borrowModel
                ({
                    user_id:req.body.user_id,
                    book_name:req.body.book_name,
                    borrowedDate:req.body.borrowedDate
                })
                borrowData.save().then(()=>{
                    console.log("sent");
                }).catch((err)=>{
                    console.log("error");
                })
                bookModelCtrl.bookModel.updateOne({book_name:req.body.book_name},{quantity:quantity-1}).then(()=>{
                    console.log("sent");
                }).catch((err)=>{
                    console.log(err);
                })
            }
            else{
                res.send("Book is not available to borrow")
            }
        }
    }).catch((err)=>{
        res.send("bad request")
    });
} 

async function getBookBorrowData(req,res){
    bookModelCtrl.borrowModel.find({}).then((docs)=>{
        if(docs)
        {
            res.send(docs)
        }
    }).catch((err)=>{
        res.send("bad request")
    });
}

async function bookReturnData(req,res){
 
    let returnData=bookModelCtrl.returnModel
                ({
                    user_id:req.body.user_id,
                    book_name:req.body.book_name,
                    returnedDate:req.body.returnedDate
                })
                returnData.save().then(()=>{
                    res.send("sent");
                }).catch((err)=>{
                    res.send(err);
                })
                bookModelCtrl.bookModel.updateOne({book_name:req.body.book_name},{book_name:req.body.book_name}).then(()=>{
                    res.send("sent");
                }).catch((err)=>{
                    res.send(err);
                })
                bookModelCtrl.borrowModel.find({book_name:req.body.book_name}).then((docs)=>{
                    const date1=docs[0].borrowedDate
                    const date2=req.body.returnedDate
                    const diffTime = Math.abs(date2 - date1);
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    const fine=(diffDays / 7) * 10;
                    if(diffDays>7){
                        let fineData=bookModelCtrl.fineModel({
                            user_id:req.body.user_id,
                            amount:fine
                        })
                        fineData.save().then(()=>{
                            res.send("sent");
                        }).catch((err)=>{
                            res.send(err);
                        })
                    }
                }).catch((err)=>{
                    res.send(err);
                })
           
    
} 

async function getBookReturnData(req,res){
    bookModelCtrl.returnModel.find({}).then((docs)=>{
        if(docs)
        {
            res.send(docs)
        }
    }).catch((err)=>{
        res.send("bad request")
    });
}

async function bookPurchaseData(req,res){
    bookModelCtrl.bookModel.find({book_name:req.body.book_name}).then((docs)=>{
        console.log(docs.length)
        if(docs.length>0){

    let purchaseData=bookModelCtrl.purchaseModel
                ({
                    user_id:req.body.user_id,
                    book_name:req.body.book_name,
                    price:req.body.price,
                    purchasedDate:req.body.purchasedDate

                })
                purchaseData.save().then(()=>{
                    res.send("sent");
                }).catch((err)=>{
                    res.send(err);
                })
                bookModelCtrl.bookModel.updateOne({book_name:req.body.book_name},{$set:{isbn:"purchased"}}).then(()=>{
                    res.send("sent");
                }).catch((err)=>{
                    res.send(err);
                })    
            }
            else{
                req.send("Sorry Book is not available")
            }
        })
} 


async function getBookPurchaseData(req,res){
    bookModelCtrl.purchaseModel.find({}).then((docs)=>{
        if(docs)
        {
            res.send(docs)
        }
    }).catch((err)=>{
        res.send("bad request")
    });
}

async function bookPayFine(req,res){
    bookModelCtrl.bookModel.updateOne({user_id:req.body.user_id},{$set:{paidAt:Date.now()}}).then(()=>{
        res.send("sent");
    }).catch((err)=>{
        res.send(err);
    })    
}
async function bookFineData(req,res){
    bookModelCtrl.fineModel.find({}).then((docs)=>{
        res.send(docs);
    }).catch((err)=>{
        res.send(err);
    })    
}
module.exports={ uploadimgHandler,bookFindDataFetching,bookPurchaseData,getBookPurchaseData ,bookFineData,bookBorrowData,getBookBorrowData,bookReturnData,getBookReturnData,bookPayFine,bookRegistrationController , bookDataFetching }