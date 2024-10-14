const stutimetableModelCtrl=require('../models/stutimetableModel')

async function stutimetableRegistrationController(req,res){
    console.log(req.body)
    let stutimetableData=stutimetableModelCtrl.stutimetableModel({
        branch:req.body.branch,
        semester:req.body.semester,
        monday:req.body.monday,
        tuesday:req.body.tuesday,
        wednesday:req.body.wednesday,
        thursday:req.body.thursday,
        friday:req.body.friday
    });      
            stutimetableData.save((err, result) => {
                if (err) {
                    res.send("something went wrong")
                }
                else {
                    res.send("stutimetable added succesfully")
                }
            })
        
}

async function stutimetableDataFetching(req,res){
    stutimetableModelCtrl.stutimetableModel.find({},(err,docs)=>{
        if(err){
            res.send("Something went wrong!");
        }
        else{
            res.send(docs)
        }
    })

}

module.exports={ stutimetableRegistrationController , stutimetableDataFetching}