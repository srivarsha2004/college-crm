const db=require('./conn').db
const mongoose=require('./conn').mongoose

const DepartmentSchema=mongoose.Schema({
    departmentName:
    {
        type:String
    },
    semester1:
    {
        type: [String]
    },
    semester2:
    {
        type: [String]
    },
    semester3:
    {
        type: [String]
    },
    semester4:
    {
        type: [String]
    },
    semester5:
    {
        type: [String]
    },
    semester6:
    {
        type: [String]
    },
    semester7:
    {
        type: [String]
    },
    semester8:
    {
        type: [String]
    }
   
})

let departmentModel=mongoose.model('Department',DepartmentSchema)
module.exports={ departmentModel }