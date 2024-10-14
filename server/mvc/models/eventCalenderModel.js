const db=require('./conn').db
const mongoose=require('./conn').mongoose

const eventCalenderSchema=mongoose.Schema({
  
    title:{
        type:String
    },
    date:{
        type:String
    },
    time:{
        type:String
    },
    duration:{
        type:Number
    },
    link:{
        type:String
    }
})

// title: title,
// date:date,
// time:time,
// duration:duration,
// link:link
let eventCalenderModel=mongoose.model('eventCalender',eventCalenderSchema)
module.exports={eventCalenderModel}