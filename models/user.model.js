const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
    }
    
});


userSchema.pre("save",async function (next) {
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,12);
    };
});

userSchema.methods.correctPassword = async function (inputPassword) {
    return await bcrypt.compare(inputPassword,this.password)
}

module.exports = mongoose.model('user',userSchema);
