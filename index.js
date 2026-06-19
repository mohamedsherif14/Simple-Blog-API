const express = require("express");
const dotEnv = require("dotenv");
dotEnv.config();

const connectDB = require("./config/DB.config");
connectDB();


const app = express()
app.use(express.json())


const port = process.env.PORT
app.listen(port,_=>console.log(`server started port:${port}`));
