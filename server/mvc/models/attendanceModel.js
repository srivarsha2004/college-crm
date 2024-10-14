const db=require('./conn').db
const mongoose=require('./conn').mongoose

const attendanceSchema=mongoose.Schema({
    date:{
        type:String
    },
    rollNumber:
    {
        type:String
    },
    sub:{
        type:[Boolean]
    }

})

let attendanceModel=mongoose.model('attendance',attendanceSchema)
module.exports={ attendanceModel }