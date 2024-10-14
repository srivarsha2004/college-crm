const db=require('./conn').db
const mongoose=require('./conn').mongoose

const examSchema=mongoose.Schema({
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

let examModel=mongoose.model('exams',examSchema)
module.exports={ examModel }