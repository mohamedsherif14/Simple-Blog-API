const user = require('../models/user.model');
const jwt = require("jsonwebtoken");
const {validationResult} = require("express-validator");
const signToken = (user)=>{
    return jwt.sign(
        {id:user._id,name:user._name},
        process.env.SECRET_KEY,
        {expiresIn:process.env.JWT_EXPIRS_IN}
    );
};

const login = async (req,res)=>{
    const errs = validationResult(req);
    if(!errs.isEmpty()){
        return res.status(400).json({message:"error",error:errs.array()});
    };
    const {email , password} = req.body;
    const myUser = await user.findOne({email});


    if (myUser && await myUser.correctPassword(password)){
        const token = signToken(myUser);
        res.status(200).json({message:"login successful" , data:token});
    };
    res.status(401).json({message:'error', error:'invalid email or password'});
};

const signUp = async (req,res) => {
    const errs = validationResult(req);
    if(!errs.isEmpty()){
        return res.status(400).json({message:"error",error:errs.array()});
    };
    const { name , email , password } = req.body;
    const myUser = await user.create({name,email,password});
    res.status(201).json({message:"user added" ,data:myUser});
};

module.exports = {
    login,
    signUp
}