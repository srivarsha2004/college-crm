const timetableModelCtrl=require('../models/timetableModel')

async function timetableRegistrationController(req,res){
    console.log(req.body)
    let timetableData=timetableModelCtrl.timetableModel({
        department:req.body.department,
        course_name:req.body.course_name,
        faculty_name:req.body.faculty_name,
        semester:req.body.semester
    });      
            timetableData.save((err, result) => {
                if (err) {
                    res.send("something went wrong")
                }
                else {
                    res.send("stuimetable added succesfully")
                }
            })
        
}

async function timetableDataFetching(req,res){
    timetableModelCtrl.timetableModel.find({},(err,docs)=>{
        if(err){
            res.send("Something went wrong!");
        }
        else{
            res.send(docs)
        }
    })

}

module.exports={ timetableRegistrationController , timetableDataFetching}