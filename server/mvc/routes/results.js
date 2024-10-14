const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())
app.use(cors())

const resultDetail = require('../controllers/result')

routes.post('/postResults', resultDetail.resultRegistrationController)
routes.get('/getResults/:studentId', resultDetail.resultDataFetching)

module.exports = routes