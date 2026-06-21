const express = require("express");
const router = express.Router();
const userHandler = require("../handlers/user.handler")
const {login,signUp} = require("../controller/auth.controller")

router.post("/login",userHandler.login, login)
router.post("/signup",userHandler.signup, signUp)

module.exports = router