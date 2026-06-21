const jwt = require("jsonwebtoken");
const user = require("../models/user.model");


const authentication = async (req,res,next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader?.startsWith("Bearer ")){
        return  res.status(401).json({message:"error" , error:"unauthorized , no token provided"});
    };
    const token = authHeader.split(" ")[1];
    try{
        const decode = jwt.verify(token,process.env.SECRET_KEY);
        const myuser = await user.findById(decode.id).select("-password");
        if(!myuser){
            return res.status(401).json({message:"error",error:"unauthorized"});
        };
        req.user = myuser;
        next();
    }catch(e){
        return res.status(401).json({message:"error",error:"unauthorized"});
    }
}

module.exports = authentication