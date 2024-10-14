const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())
app.use(cors())

const stutimetableDetail = require('../controllers/stutimetable')
routes.post('/reg', stutimetableDetail.stutimetableRegistrationController)
routes.get('/reg', stutimetableDetail.stutimetableDataFetching)


module.exports = routes