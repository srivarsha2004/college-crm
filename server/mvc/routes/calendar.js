const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())
app.use(cors())

const calendarDetail = require('../controllers/calendar')

routes.post('/reg', calendarDetail.calendarRegistrationController)
routes.get('/reg', calendarDetail.calendarDataFetching)

module.exports = routes