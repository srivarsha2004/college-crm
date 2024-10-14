const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())
app.use(cors())

const exampaymentDetail = require('../controllers/exampayments')

routes.post('/reg', exampaymentDetail.exampaymentRegistrationController)
routes.get('/reg', exampaymentDetail.exampaymentDataFetching)

module.exports = routes