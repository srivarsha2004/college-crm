const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())
app.use(cors())

const announcementDetail = require('../controllers/notices')

routes.post('/reg', announcementDetail.RegistrationController)
routes.get('/reg', announcementDetail.noticesDataFetching)
//routes.get('/reg', coursesDetail.coursesDataFetching)

module.exports = routes