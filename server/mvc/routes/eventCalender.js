const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())
app.use(cors())

const eventDetail = require('../controllers/eventCalender')

routes.post('/reg', eventDetail.RegistrationController)
routes.get('/reg', eventDetail.eventDataFetching)
//routes.get('/reg', coursesDetail.coursesDataFetching)

module.exports = routes