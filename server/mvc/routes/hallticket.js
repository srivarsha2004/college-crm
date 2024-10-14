const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())
app.use(cors())
const validateToken = require("../middleWares/validateToken")

const hallticketDetail = require('../controllers/hallticket')

routes.post('/reg', hallticketDetail.RegistrationController)
routes.get('/reg',validateToken, hallticketDetail.hallticketDataFetching)
//routes.get('/reg', coursesDetail.coursesDataFetching)

module.exports = routes