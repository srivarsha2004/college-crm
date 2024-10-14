const express = require("express");
const {
  registerFaculty,
  loginFaculty,
  getFaculty,
  totalFaculty
} = require("../controllers/facultyController");
const validateToken = require("../middleWares/validateToken");
console.log(registerFaculty)
const router = express.Router();

router.post("/register", registerFaculty);
router.post("/total", totalFaculty);

router.post("/login", loginFaculty);

router.get("/reg",getFaculty)


module.exports = router;
