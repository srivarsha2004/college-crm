const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())
app.use(cors())

const dataDetail = require('../controllers/data')
console.log(dataDetail)
routes.post('/reg', dataDetail.dataRegistrationController)
routes.get('/reg', dataDetail.dataDataFetching)

module.exports = routes