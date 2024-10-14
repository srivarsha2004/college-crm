const db=require('./conn').db
const mongoose=require('./conn').mongoose

const hallticketSchema = mongoose.Schema({
  semester: { type: String, required: true },
  branch: { type: String, required: true },
  //examDate: { type: Date, required: true },
  subjects: [
    {
      name: { type: String, required: true },
      date: { type: String, required: true },
    }
  ]
});



let hallticketModel=mongoose.model('hallticket',hallticketSchema)
module.exports={hallticketModel}
