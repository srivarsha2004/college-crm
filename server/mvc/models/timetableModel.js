const db=require('./conn').db
const mongoose=require('./conn').mongoose

const timetableSchema=mongoose.Schema({

    department:{
        type:String
    },
    course_name:{
        type:String
    },
    faculty_name:{
        type:String
    },
    semester:{
        type:String
    }
})

let timetableModel=mongoose.model('tables',timetableSchema)
module.exports={timetableModel}