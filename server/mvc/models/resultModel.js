const db=require('./conn').db
const mongoose=require('./conn').mongoose

const resultSchema=mongoose.Schema({
    studentId:{
        type:String
    },
    semester:
    {
        type:String
    },
    subjectName:
    {
        type:String
    },
    grade:
    {
        type:String
    },
    marks:
    {
        type:Number
    },
    percentage:
    {
        type:Number
    },
    status:
    {
        type:String,
        default: "pass"
    }
    
})

let resultModel=mongoose.model('results',resultSchema)
module.exports={ resultModel }