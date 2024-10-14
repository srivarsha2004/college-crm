const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())
app.use(cors())

const departmentDetail = require('../controllers/departmentController')

routes.post('/reg', departmentDetail.departmentRegistrationController)
routes.get('/reg', departmentDetail.departmentDataFetching)

module.exports = routes