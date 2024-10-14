const exampaymentModelCtrl=require('../models/exampaymentModel')

async function exampaymentRegistrationController(req,res){
    console.log(req.body)
    let exampaymentData=exampaymentModelCtrl.exampaymentModel
    ({
        studentId:req.body.studentId,
        studentName:req.body.studentName,
        branch:req.body.branch,
        semester:req.body.semester,
        amount:req.body.amount
    })
    // console.log(result_data)
   
        
            exampaymentData.save().then(()=>{
                res.send("sent");
            }).catch((err)=>{
                res.send(err);
            })
            
        
}

async function exampaymentDataFetching(req,res){

    exampaymentModelCtrl.exampaymentModel.find({}).then((docs)=>{
        if(docs)
        {
            res.send(docs)
        }
    }).catch((err)=>{
        res.send("bad request")
    });
}


module.exports={ exampaymentRegistrationController , exampaymentDataFetching }