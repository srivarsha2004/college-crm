const db=require('./conn').db
const mongoose=require('./conn').mongoose

const mypaymentSchema=mongoose.Schema({
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
    date:{
        type:Date
    },
    paymenttype:{
        type:String
    },
    amountpaid:{
        type:Number
    }
})

let mypaymentModel=mongoose.model('mypayments',mypaymentSchema)
module.exports={ mypaymentModel }