const db=require('./conn').db
const mongoose=require('./conn').mongoose

const studentSchema=mongoose.Schema({
    name:{
        type:String
    },
    branch:{
        type:String
    },
    semester:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    studentId:{
        type:String
    }
})

let studentModel=mongoose.model('students',studentSchema)
module.exports={studentModel}