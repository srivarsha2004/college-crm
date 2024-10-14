const db=require('./conn').db
const mongoose=require('./conn').mongoose

const stutimetableSchema=mongoose.Schema({
    branch:{
        type:String
    },
    semester:{
        type:String
    },
    monday:{
        type:Array,
        default:[]
    },
    tuesday:{
        type:Array,
        default:[]
    },
    wednesday:{
        type:Array,
        default:[]
    },
    thursday:{
        type:Array,
        default:[]
    },
    friday:{
        type:Array,
        default:[]
    }
})

let stutimetableModel=mongoose.model('stutimetables',stutimetableSchema)
module.exports={stutimetableModel}