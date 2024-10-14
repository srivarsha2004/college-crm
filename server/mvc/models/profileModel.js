const db=require('./conn').db
const mongoose=require('./conn').mongoose

const profileSchema=mongoose.Schema({
    name:
    {
        type:String
    },
    rollnumber:
    {
        type:String
    },
    department:
    {
        type:String
    },
    email:
    {
        type:String
    },
    img:{
      type:String
    },
    contact:{
        type:String
    },
    dob:
    {
        type:String
    },
    gender:{
        type:String
    },
    address:
    {
        type:String
    },
    guardian_name:
    {
        type:String
    },
    guardian_contact:
    {
        type:String
    },
    exam_name:
    {
        type:String
    },
    rank:
    {
        type:Number
    }    
})

let profileModel=mongoose.model('profile',profileSchema)
module.exports={ profileModel }