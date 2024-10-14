const noticesModelCtrl=require('../models/announcementModel')

async function RegistrationController(req,res){
    console.log(req.body)
    let noticesData=noticesModelCtrl.announceModel
    ({
        to:req.body.to,
        title:req.body.title,
        message:req.body.message
       
    })
    // console.log(result_data)
   
        
            noticesData.save().then(()=>{
                res.send("sent");
            }).catch((err)=>{
                res.send(err);
            })
            
        
}

async function noticesDataFetching(req,res){

    noticesModelCtrl.announceModel.find({}).then((docs)=>{
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

module.exports={ RegistrationController,noticesDataFetching}