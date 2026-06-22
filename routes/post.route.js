const express = require("express");
const router = express.Router();
const postHandler = require("../handlers/post.handler");
const {addPost , getPosts , updatePost , deletePost} = require("../controller/post.controller");
const authentication = require("../middlewares/auth.middlewares");
const authorizePostOwner = require("../middlewares/authorizePostOwner.middlrware");

router.route("/")
    .post(authentication , postHandler.add , addPost )
    .get(getPosts);

router.route("/:id")
    .put(authentication , authorizePostOwner , postHandler.update , updatePost )
    .delete(authentication,authorizePostOwner,deletePost)
    module.exports = router;