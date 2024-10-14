const dataModelCtrl=require('../models/dataModel')

async function dataRegistrationController(req,res){
    console.log(req.body)
    let dataData=dataModelCtrl.dataModel
    ({
        branch:req.body.branch,
        semester:req.body.semester,
        numberOfPeriods:req.body.numberOfPeriods,
        start:req.body.start
    })
    // console.log(result_data)
   
        
            dataData.save().then(()=>{
                res.send("sent");
            }).catch((err)=>{
                res.send(err);
            })
            
        
}

async function dataDataFetching(req,res){

    dataModelCtrl.dataModel.find({}).then((docs)=>{
        if(docs)
        {
            res.send(docs)
        }
    }).catch((err)=>{
        res.send("bad request")
    });
}


module.exports={ dataRegistrationController , dataDataFetching }