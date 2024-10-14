const db=require('./conn').db
const mongoose=require('./conn').mongoose

const exampaymentSchema=mongoose.Schema({
    studentId:{
        type:String
    },
    studentName:{
        type:String
    },
    branch:{
        type:String
    },
    semester:{
        type:String
    },
    amount:{
        type:Number
    }
})

let exampaymentModel=mongoose.model('exampayments',exampaymentSchema)
module.exports={ exampaymentModel }