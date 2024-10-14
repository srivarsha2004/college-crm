const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())
app.use(cors())

const teachtimetableDetail = require('../controllers/teachtimetable')
routes.post('/reg', teachtimetableDetail.teachtimetableRegistrationController)
routes.get('/reg', teachtimetableDetail.teachtimetableDataFetching)


module.exports = routes