const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())
app.use(cors())

const paymentDetail = require('../controllers/payments')

routes.post('/reg', paymentDetail.paymentRegistrationController)
routes.get('/reg', paymentDetail.paymentDataFetching)
routes.post('/update',paymentDetail.paymentDataUpdating)

module.exports = routes