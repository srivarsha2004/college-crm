const coursesModelCtrl=require('../models/coursesModel')

async function coursesRegistrationController(req,res){
    // console.log(req.body)
    await coursesModelCtrl.coursesModel.find({courseName:req.body.courseName}).then((docs)=>{
        if(docs.length>0)
        {
            const unitName=req.body.curriculum[0].unitName;
            const topics=req.body.curriculum[0].topics;
            console.log(topics)
        
            console.log(unitName)
            console.log(topics)
            
            coursesModelCtrl.coursesModel.updateOne({courseName:req.body.courseName},{$push:{curriculum:{unitName:unitName,topics:topics}}}).then(()=>{
                res.send("sent");
            }).catch((err)=>{
                res.send(err);
            })  
        }
        else{
            let coursesData=coursesModelCtrl.coursesModel
    ({
       
        courseName:req.body.courseName,
        departmentName:req.body.departmentName,
        curriculum : [],
        assignedTeachers : req.body.assignedTeachers,
        link:req.body.link,
        notes:req.body.notes
    })
    console.log(coursesData)
  
          coursesData.save().then(()=>{
                console.log("sent");
                const unitName=req.body.curriculum[0].unitName;
                const topics=req.body.curriculum[0].topics;
            
                console.log(unitName)
                console.log(topics)
                
            coursesModelCtrl.coursesModel.updateOne({courseName:req.body.courseName},{$push:{curriculum:{unitName:unitName,topics:topics}}}).then(()=>{
                    res.send("sent");
                }).catch((err)=>{
                    res.send(err);
                })  
            }).catch((err)=>{
                console.log(err);
            })


        }
    }).catch((err)=>{
        res.send("bad request")
    });
    
    
  
}

async function coursesDataFetching(req,res){
    coursesModelCtrl.coursesModel.find({},(err,docs)=>{
        if(err){
            res.send("Something went wrong!");
        }
        else{
            res.send(docs)
        }
    })

}


module.exports={ coursesRegistrationController , coursesDataFetching }