const paymentModelCtrl=require('../models/paymentModel')

async function paymentRegistrationController(req,res){
    console.log(req.body)
    let paymentData=paymentModelCtrl.paymentModel
    ({
        studentId:req.body.studentId,
        studentName:req.body.studentName,
        branch:req.body.branch,
        semester:req.body.semester,
        amount:req.body.amount,
        paid:req.body.paid,
        due: req.body.due
    })
    // console.log(result_data)
   
        
            paymentData.save().then(()=>{
                res.send("sent");
            }).catch((err)=>{
                res.send(err);
            })
            
        
}

async function paymentDataFetching(req,res){

    paymentModelCtrl.paymentModel.find({}).then((docs)=>{
        if(docs)
        {
            res.send(docs)
        }
    }).catch((err)=>{
        res.send("bad request")
    });
}

async function paymentDataUpdating(req,res){
    console.log(req.body)
    paymentModelCtrl.paymentModel.updateOne({studentId:req.body.studentId},{$set:{paid:req.body.amountpaid,due:0,amount:req.body.amt}},(err,docs)=>{
        if(err){
            res.send("something went wrong")
        }
        else{
            res.send("Rejected")
        }
    })
}

module.exports={ paymentRegistrationController , paymentDataFetching,paymentDataUpdating }