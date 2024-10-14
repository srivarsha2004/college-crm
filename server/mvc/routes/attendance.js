const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())
app.use(cors())

const attendanceDetail = require('../controllers/attendance')

routes.post('/reg', attendanceDetail.attendanceRegistrationController)
routes.get('/reg', attendanceDetail.attendanceDataFetching)

module.exports = routes