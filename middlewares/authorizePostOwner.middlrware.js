const post = require("../models/post.model");

const authorizePostOwner = async (req,res,next)=>{
    const mypost =await post.findById(req.params.id);
    if(!mypost){
        return res.status(404).json({message:"error",error:"post not found"});
    };
    if(mypost.AuthorID.toString() !== req.user._id.toString()){
        return res.status(403).json({message:"error",error:"access denied"});
    };
    req.post = mypost;
    next();
}



module.exports = authorizePostOwner