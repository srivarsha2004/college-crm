const departmentModelCtrl=require('../models/departmentModel')

async function departmentRegistrationController(req,res){
    console.log(req.body)
    let departmentData=departmentModelCtrl.departmentModel
    ({
        departmentName:req.body.departmentName,
        semester1 : req.body.semester1,
        semester2 : req.body.semester2,
        semester3 : req.body.semester3,
        semester4 : req.body.semester4,
        semester5 : req.body.semester5,
        semester6 : req.body.semester6,
        semester7 : req.body.semester7,
        semester8 : req.body.semester8
        
    })
    // console.log(branchCode_data)
            departmentData.save().then(()=>{
                res.send("sent");
            }).catch((err)=>{
                res.send(err);
            })
            
        
    
}

async function departmentDataFetching(req,res){
    departmentModelCtrl.departmentModel.find({}).then((docs)=>{
        if(docs)
        {
            res.send(docs)
        }
    }).catch((err)=>{
        res.send("bad request")
    });
}
        


module.exports={ departmentRegistrationController , departmentDataFetching }