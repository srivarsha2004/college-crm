const examModelCtrl=require('../models/examModel')

async function examRegistrationController(req,res){
    console.log(req.body)
    let examData=examModelCtrl.examModel
    ({
       
        branch:req.body.branch,
        semester:req.body.semester,
        amount:req.body.amount
    })
    // console.log(result_data)
   
        
            examData.save().then(()=>{
                res.send("sent");
            }).catch((err)=>{
                res.send(err);
            })
            
        
}

async function examDataFetching(req,res){

    examModelCtrl.examModel.find({}).then((docs)=>{
        if(docs)
        {
            res.send(docs)
        }
    }).catch((err)=>{
        res.send("bad request")
    });
}


module.exports={ examRegistrationController , examDataFetching }