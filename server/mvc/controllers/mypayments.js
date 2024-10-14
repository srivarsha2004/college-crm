const mypaymentModelCtrl=require('../models/mypaymentsModel')

async function mypaymentRegistrationController(req,res){
    console.log(req.body.studentName)
    let mypaymentData=mypaymentModelCtrl.mypaymentModel
    ({
        studentId:req.body.studentId,
        studentName:req.body.studentName,
        branch:req.body.branch,
        semester:req.body.semester,
        date:req.body.date,
        paymenttype:req.body.paymenttype,
        amountpaid:req.body.amountpaid
    })
    // console.log(result_data)
   
        
            mypaymentData.save().then(()=>{
                res.send("sent");
            }).catch((err)=>{
                res.send(err);
            })
            
        
}

async function mypaymentDataFetching(req,res){

    mypaymentModelCtrl.mypaymentModel.find({}).then((docs)=>{
        if(docs)
        {
            res.send(docs)
        }
    }).catch((err)=>{
        res.send("bad request")
    });
}


module.exports={ mypaymentRegistrationController , mypaymentDataFetching }