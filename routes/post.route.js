const express = require("express");
const router = express.Router();
const postHandler = require("../handlers/post.handler");
const {addPost , getPosts} = require("../controller/post.controller");
const authentication = require("../middlewares/auth.middlewares");

router.route("/")
    .post(authentication , postHandler.add , addPost )
    .get(getPosts)
    
    module.exports = router;