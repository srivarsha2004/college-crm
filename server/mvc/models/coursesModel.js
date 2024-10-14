const db=require('./conn').db
const mongoose=require('./conn').mongoose

const coursesSchema=mongoose.Schema({
    courseName:
    {
        type:String
    },
    departmentName:
    {
        type:String
    },
   curriculum:[{
    unitName:{
        type:String
    },
    topics:[{
        topicName:{type:String},
        videolink:{type:String},
        description:{type:String},
        notes:{type:String},
        pdf:{type:String}
    }]
   }],
   assignedTeachers:
   {
    type: String
   },
   link:{
    type:Array,
    default:[]
   },
   notes:{
    type:Array,
    default:[]
   }

})

let coursesModel=mongoose.model('course',coursesSchema)
module.exports={coursesModel}