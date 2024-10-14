const mongoose=require('mongoose')
const url="mongodb+srv://crm:crm123@crm.aspb4yt.mongodb.net/crmdbs"

mongoose.connect(url)
mongoose.Promise=global.Promise;

const db=mongoose.connection;
db.on('error',console.error.bind(console,'DB Error: '))

module.exports={db,mongoose}