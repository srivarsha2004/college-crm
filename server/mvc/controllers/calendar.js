const calendarModelCtrl=require('../models/calendarModel')

async function calendarRegistrationController(req,res){
    console.log(req.body)
    let calendarData=calendarModelCtrl.calendarModel
    ({
        semester: req.body.semester,
        event: req.body.event,
        date: req.body.date
    })
  
            calendarData.save().then(()=>{
                res.send("sent");
            }).catch((err)=>{
                res.send(err);
            })
            
        
}

async function calendarDataFetching(req,res){
    calendarModelCtrl.calendarModel.find({}).then((docs)=>{
        if(docs)
        {
            res.send(docs)
        }
    }).catch((err)=>{
        res.send("bad request")
    });
}


module.exports={ calendarRegistrationController , calendarDataFetching }