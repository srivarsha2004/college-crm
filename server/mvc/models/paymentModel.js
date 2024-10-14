const db=require('./conn').db
const mongoose=require('./conn').mongoose

const paymentSchema=mongoose.Schema({
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
    },
    paid:{
        type:Number
    },
    due:{
        type:Number
    }
})

let paymentModel=mongoose.model('payments',paymentSchema)
module.exports={ paymentModel }