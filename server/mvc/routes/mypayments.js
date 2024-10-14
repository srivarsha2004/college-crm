const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())
app.use(cors())

const mypaymentDetail = require('../controllers/mypayments')

routes.post('/reg', mypaymentDetail.mypaymentRegistrationController)
routes.get('/reg', mypaymentDetail.mypaymentDataFetching)

module.exports = routes