const db=require('./conn').db
const mongoose=require('./conn').mongoose

const teachtimetableSchema=mongoose.Schema({
    name:{
        type:String
    },
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

let teachtimetableModel=mongoose.model('teachtimetables',teachtimetableSchema)
module.exports={teachtimetableModel}