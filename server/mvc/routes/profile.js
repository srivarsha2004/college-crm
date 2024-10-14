const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())
app.use(cors())

const profileDetail = require('../controllers/profile')
routes.post('/upload',profileDetail.uploadimgHandler)
routes.post('/reg',profileDetail.profileRegistrationController)
routes.get('/reg', profileDetail.profileDataFetching)
routes.post('/find',profileDetail.profileFindDataFetching)

module.exports = routes