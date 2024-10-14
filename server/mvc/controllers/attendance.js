const attendanceModelCtrl=require('../models/attendanceModel')

async function attendanceRegistrationController(req,res){
    console.log(req.body)
    let attendanceData=attendanceModelCtrl.attendanceModel
    ({
        date:req.body.date,
        rollNumber:req.body.rollNumber,
        sub: req.body.sub     
    })
    // console.log(attendance_data)
    attendanceModelCtrl.attendanceModel.find({ date:req.body.date, rollNumber:req.body.rollNumber }).then((resp) => {
        if (resp.length != 0) {
            res.send("1")
        }
        else {
            attendanceData.save().then(()=>{
                res.send("sent");
            }).catch((err)=>{
                res.send(err);
            })
            
        }
    })
}

async function attendanceDataFetching(req,res){
    attendanceModelCtrl.attendanceModel.find({}).then((docs)=>{
        if(docs)
        {
            res.send(docs)
        }
    }).catch((err)=>{
        res.send("bad request")
    });
}
        


module.exports={ attendanceRegistrationController , attendanceDataFetching }