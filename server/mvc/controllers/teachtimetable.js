const teachtimetableModelCtrl=require('../models/teachtimetableModel')

async function teachtimetableRegistrationController(req,res){
    console.log(req.body)
    let teachtimetableData=teachtimetableModelCtrl.teachtimetableModel({
        name:req.body.name,
        branch:req.body.branch,
        semester:req.body.semester,
        monday:req.body.monday,
        tuesday:req.body.tuesday,
        wednesday:req.body.wednesday,
        thursday:req.body.thursday,
        friday:req.body.friday
    });      
            teachtimetableData.save((err, result) => {
                if (err) {
                    res.send("something went wrong")
                }
                else {
                    res.send("teachtimetable added succesfully")
                }
            })
        
}

async function teachtimetableDataFetching(req,res){
    teachtimetableModelCtrl.teachtimetableModel.find({},(err,docs)=>{
        if(err){
            res.send("Something went wrong!");
        }
        else{
            res.send(docs)
        }
    })

}

module.exports={ teachtimetableRegistrationController , teachtimetableDataFetching}