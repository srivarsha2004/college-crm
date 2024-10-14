const eventModelCtrl=require('../models/eventCalenderModel')

async function RegistrationController(req,res){
    console.log(req.body)
    let eventData=eventModelCtrl.eventCalenderModel
    ({
        title:req.body.title,
        date:req.body.date,
        time:req.body.time,
        duration : req.body.duration,
        link: req.body.link
       
    })
    // console.log(result_data)
   
        
            eventData.save().then(()=>{
                res.send("sent");
            }).catch((err)=>{
                res.send(err);
            })
            
        
}

async function eventDataFetching(req,res){

    eventModelCtrl.eventCalenderModel.find({}).then((docs)=>{
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

module.exports={ RegistrationController,eventDataFetching}