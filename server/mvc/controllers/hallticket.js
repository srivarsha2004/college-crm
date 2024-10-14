const hallticketModelCtrl=require('../models/hallticketModel')

async function RegistrationController(req,res){
    console.log(req.body)
    let hallticketData=hallticketModelCtrl.hallticketModel
    ({
        semester:req.body.semester,
        branch:req.body.branch,
        subjects:req.body.subjects
     
       
    })
    // console.log(result_data)
   
        
            hallticketData.save().then(()=>{
                res.send("sent");
            }).catch((err)=>{
                res.send(err);
            })
            
        
}

async function hallticketDataFetching(req,res){

    hallticketModelCtrl.hallticketModel.find({}).then((docs)=>{
        if(docs)
        {
            res.send(docs)
        }
    }).catch((err)=>{
        res.send("bad request")
    });
}

// async function paymentDataUpdating(req,res){
//     console.log(req.body)
//     paymentModelCtrl.paymentModel.updateOne({studentId:req.body.studentId},{$set:{paid:req.body.amountpaid,due:0,amount:req.body.amt}},(err,docs)=>{
//         if(err){
//             res.send("something went wrong")
//         }
//         else{
//             res.send("Rejected")
//         }
//     })
// }

module.exports={ RegistrationController,hallticketDataFetching}