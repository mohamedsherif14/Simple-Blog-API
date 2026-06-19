const mongoose = require('mongoose');
const dbUri = process.env.DB_URI;


const connectDB = async ()=>{
    try{
        await mongoose.connect(dbUri);
        console.log("DB connected");
        
    }catch(e){
        console.log(e.meesage);
        process.exit(1)
        
    }
}

module.exports = connectDB