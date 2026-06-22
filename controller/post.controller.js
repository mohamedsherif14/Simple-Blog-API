const post = require('../models/post.model');
const user = require("../models/user.model");
const {validationResult} = require("express-validator")

const addPost = async (req,res)=>{
    const errs = validationResult(req);
    if(!errs.isEmpty()){
        return res.status(400).json({message:"error" , error:errs.array()});
    }
    const {title , contant} = req.body;
    const userId = req.user._id;
    const myPost = await post.create({title,contant,AuthorID:userId});
    return res.status(201).json({message:"post added",data:myPost});
};

const getPosts = async (req,res)=>{
    const myPosts = await post.find();
    return res.status(200).json({message:"post list" , data:myPosts});
}

const updatePost = async(req,res)=>{
    const {contant , title} = req.body;
    const myPost = req.post;
    myPost.title = title || myPost.title ;
    myPost.contant = contant || myPost.contant ;
    await myPost.save();
    res.status(200).json({message:"post updated" , data: myPost});
}

const deletePost = async (req,res)=>{
    await req.post.deleteOne();
    res.status(204).send();
}


module.exports = {
    addPost,
    getPosts,
    updatePost,
    deletePost
}