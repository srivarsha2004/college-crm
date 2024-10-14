const db=require('./conn').db
const mongoose=require('./conn').mongoose

const bookSchema = mongoose.Schema({
    book_name: { type: String, required: true },
    cover_image: { type: String, required: true },
    author_name: { type: String, required: true },
    isbn: { type: String, required: true },
    genres: { type: String, required: true },
    publisher: { type: String, required: true },
    quantity: { type: Number, default: 100 },
    price: { type: Number, default: 200 }
}, { timestamps: true });

const borrowSchema=mongoose.Schema({
    user_id:{
        type:String
    },
    book_name:{
        type:String
    },
    borrowedDate:{
        type:Date
    }

})
const returnSchema=mongoose.Schema({
    user_id:{
        type:String
    },
    book_name:{
        type:String
    },
    returnedDate:{
        type:Date
    }
})
const purchaseSchema=mongoose.Schema({
    user_id:{
        type:String
    },
    book_name:{
        type:String
    },
    price:{
        type:String
    },
    purchasedDate:{
        type:Date
    }

})

const fineSchema=mongoose.Schema({
    user_id:{
        type:String
    },
    amount:{
        type:Number
    },
    paidAt:{
        type:Date,
        default:1678387709373
    }
})
let borrowModel=mongoose.model("borrowbooks",borrowSchema)
let bookModel=mongoose.model('books',bookSchema)
let purchaseModel=mongoose.model('purchasedbooks',purchaseSchema)
let fineModel=mongoose.model('fines',fineSchema)
let returnModel=mongoose.model('returnbooks',returnSchema)
module.exports={bookModel,borrowModel,purchaseModel,fineModel,returnModel}