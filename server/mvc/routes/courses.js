const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())
app.use(cors())

const coursesDetail = require('../controllers/coursesController')

routes.post('/reg', coursesDetail.coursesRegistrationController)
routes.get('/reg', coursesDetail.coursesDataFetching)

module.exports = routes