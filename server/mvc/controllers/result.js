const resultModelCtrl=require('../models/resultModel')

async function resultRegistrationController(req,res){
    console.log(req.body)
    let resultData=resultModelCtrl.resultModel
    ({
        studentId:req.body.studentId,
        semester:req.body.semester,
        subjectName:req.body.subjectName,
        grade:req.body.grade,
        marks:req.body.marks,
        percentage: req.body.percentage
    })
    console.log(resultData)
   
        
            resultData.save().then(()=>{
                console.log("saved")
                res.send("sent");
            }).catch((err)=>{
                console.log(err)
                res.send(err);
            })
            
        
}

async function resultDataFetching(req,res){
    console.log(req.params)
    studentId = req.params.studentId;
  
 
    resultModelCtrl.resultModel.find({studentId:studentId}).then((docs)=>{
        if(docs)
        {
            res.send(docs)
        }
    }).catch((err)=>{
        res.send("bad request")
    });
}


module.exports={ resultRegistrationController , resultDataFetching }