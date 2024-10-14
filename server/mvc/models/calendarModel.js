const db=require('./conn').db
const mongoose=require('./conn').mongoose

const calendarSchema=mongoose.Schema({
    semester:{
        type:Number
    },
    event:
    {
        type:Array,
        default:[]
    },
    date:
    {
        type:Array,
        default:[]
    }
})

let calendarModel=mongoose.model('calendar',calendarSchema)
module.exports={ calendarModel }