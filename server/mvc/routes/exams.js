const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())
app.use(cors())

const examDetail = require('../controllers/exams')

routes.post('/reg', examDetail.examRegistrationController)
routes.get('/reg', examDetail.examDataFetching)

module.exports = routes