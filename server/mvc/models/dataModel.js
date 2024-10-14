const db=require('./conn').db
const mongoose=require('./conn').mongoose

const dataSchema=mongoose.Schema({
    branch:{
        type:String
    },
    semester:{
        type:String
    },
    numberOfPeriods:{
        type:Number
    },
    start:{
        type:[String]
    }

})

let dataModel=mongoose.model('data',dataSchema)
module.exports={ dataModel }